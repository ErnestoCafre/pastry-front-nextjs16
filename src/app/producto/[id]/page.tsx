import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { products, getProductById, getRelatedProducts } from '@/data'
import { CatalogClient } from '@/components/catalog/catalog-client'
import { ProductDetail } from '@/components/product/product-detail'
import { ProductCard } from '@/components/catalog/product-card'
import { Footer } from '@/components/layout/footer'

interface PageProps {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(Number(id))
  if (!product) return { title: 'No encontrado' }
  return {
    title: `${product.name} — Malva`,
    description: product.description,
  }
}

export default async function ProductoPage({ params }: PageProps) {
  const { id } = await params
  const product = getProductById(Number(id))

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product, 3)

  return (
    <CatalogClient>
      <div className="pt-24 md:pt-32 px-8 md:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Inicio
            </Link>
            <ChevronRight
              className="size-3 text-muted-foreground/50"
              strokeWidth={1.5}
            />
            <Link
              href={`/catalogo/${product.section_slug}`}
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {product.section_name}
            </Link>
            <ChevronRight
              className="size-3 text-muted-foreground/50"
              strokeWidth={1.5}
            />
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="h-px bg-border mb-12" />

          <ProductDetail product={product} />

          {/* Related products */}
          {relatedProducts.length > 0 && (
            <section className="mt-24 md:mt-32">
              <h3 className="text-base md:text-lg tracking-[0.3em] uppercase text-primary font-light">
                También te puede interesar
              </h3>
              <div className="mt-4 h-0.5 w-20 bg-primary mb-12" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
      <Footer />
    </CatalogClient>
  )
}
