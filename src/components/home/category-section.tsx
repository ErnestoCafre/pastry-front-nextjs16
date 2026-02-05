import Link from 'next/link'
import { ProductCard } from '@/components/catalog/product-card'
import type { Product, Section } from '@/types'

interface CategorySectionProps {
  section: Section
  products: Product[]
  className?: string
}

export function CategorySection({
  section,
  products,
  className = '',
}: CategorySectionProps) {
  return (
    <section id={section.slug} className={`px-8 md:px-16 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 md:mb-16">
          <h3 className="text-base md:text-lg lg:text-xl tracking-[0.3em] uppercase text-primary font-light">
            {section.name}
          </h3>
          <div className="mt-4 h-0.5 w-20 bg-primary" />
        </div>

        {/* Products */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-sm text-muted-foreground italic">
              No hay productos en esta sección
            </p>
          </div>
        )}

        <Link
          href={`/catalogo/${section.slug}`}
          className="group mt-px w-full border border-border bg-background py-5 md:py-6 text-xs md:text-sm tracking-[0.3em] uppercase text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 rounded-none flex items-center justify-center"
        >
          <span className="inline-flex items-center gap-2">
            Ver Todo
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </span>
        </Link>
      </div>
    </section>
  )
}
