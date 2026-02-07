import Link from 'next/link'
import { ChevronRight, Sparkles } from 'lucide-react'
import { ProductGallery } from './product-gallery'
import { RelatedProducts } from './related-products'
import { formatPrice } from '@/lib/format'
import type { Product } from '@/types'

interface ProductDetailProps {
  product: Product
  relatedProducts: Product[]
}

export function ProductDetail({
  product,
  relatedProducts,
}: ProductDetailProps) {
  return (
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

        {/* Product Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pb-16 md:pb-24">
          {/* Gallery */}
          <ProductGallery
            images={product.gallery}
            productName={product.name}
          />

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] uppercase text-foreground font-light">
                {product.name}
              </h1>
              <div className="mt-4 h-0.5 w-16 bg-primary" />
            </div>

            {/* Price */}
            <p className="text-2xl md:text-3xl font-light text-primary">
              {formatPrice(product.base_price)}
            </p>

            {/* Description */}
            {product.description && (
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-light">
                {product.description}
              </p>
            )}

            {/* Product details */}
            <div className="space-y-3 pt-4 border-t border-border">
              {product.is_highlighted && (
                <div className="flex items-center gap-3 text-sm text-primary">
                  <Sparkles className="size-4" strokeWidth={1.5} />
                  <span>Producto destacado</span>
                </div>
              )}
            </div>

            {/* Section link */}
            <div className="pt-4">
              <Link
                href={`/catalogo/${product.section_slug}`}
                className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Ver más en {product.section_name}
                <ChevronRight className="size-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  )
}
