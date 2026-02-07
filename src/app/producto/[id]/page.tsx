import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { products, getProductById, getRelatedProducts } from '@/data'
import { ProductClient } from '@/components/product/product-client'
import { ProductDetail } from '@/components/product/product-detail'
import { Footer } from '@/components/layout/footer'
import { formatPrice } from '@/lib/format'

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
  const product = getProductById(parseInt(id, 10))
  if (!product) return { title: 'No encontrado' }
  return {
    title: `${product.name} — Malva`,
    description: `${product.description} ${formatPrice(product.base_price)}`,
  }
}

export default async function ProductoPage({ params }: PageProps) {
  const { id } = await params
  const product = getProductById(parseInt(id, 10))

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product)

  return (
    <ProductClient>
      <ProductDetail product={product} relatedProducts={relatedProducts} />
      <Footer />
    </ProductClient>
  )
}
