import { ProductCard } from '@/components/catalog/product-card'
import type { Product } from '@/types'

interface RelatedProductsProps {
  products: Product[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null

  return (
    <section className="py-16 md:py-24 border-t border-border">
      <div className="mb-8 md:mb-12">
        <h2 className="text-base md:text-lg tracking-[0.3em] uppercase text-foreground font-light">
          Productos Relacionados
        </h2>
        <div className="mt-4 h-0.5 w-16 bg-primary" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
