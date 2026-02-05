import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/types'
import { formatPrice } from '@/lib/format'

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  return (
    <Link
      href={`/producto/${product.id}`}
      className={`group relative aspect-square bg-card overflow-hidden cursor-pointer block ${className}`}
    >
      {/* Product Image */}
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      {/* Malva overlay with mix-blend-mode: multiply */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 mix-blend-multiply transition-colors duration-500" />

      {/* Always visible product name at bottom */}
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
        <div className="bg-background/90 backdrop-blur-sm py-3 md:py-4 px-4 md:px-6 transition-all duration-500 group-hover:bg-background/95">
          <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-foreground text-center font-medium">
            {product.name}
          </p>

          {/* Description and price revealed on hover */}
          <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 ease-out">
            <div className="h-px bg-border/50 my-3" />
            {product.description && (
              <p className="text-[10px] md:text-xs tracking-wider text-muted-foreground text-center leading-relaxed mb-2">
                {product.description}
              </p>
            )}
            <p className="text-sm md:text-base font-medium text-primary text-center">
              {formatPrice(product.base_price)}
            </p>
          </div>
        </div>
      </div>

      {/* Editorial border frame on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 bottom-0 left-0 w-px bg-border opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-0 bottom-0 right-0 w-px bg-border opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Link>
  )
}
