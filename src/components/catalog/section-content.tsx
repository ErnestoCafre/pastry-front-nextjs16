'use client'

import { Suspense } from 'react'
import { useProductFilters } from '@/hooks/use-product-filters'
import { ProductCard } from './product-card'
import { ProductFilters } from './product-filters'
import { MobileFiltersButton } from './mobile-filters'
import type { Product } from '@/types'

interface SectionContentProps {
  products: Product[]
}

function SectionContentInner({ products }: SectionContentProps) {
  const {
    filters,
    setFilters,
    clearFilters,
    activeFiltersCount,
    filteredProducts,
    isFiltersOpen,
    setIsFiltersOpen,
  } = useProductFilters(products)

  return (
    <div className="mt-8 md:mt-12 pb-16 md:pb-24">
      {/* Mobile filters button */}
      <div className="mb-6 md:hidden">
        <MobileFiltersButton
          isOpen={isFiltersOpen}
          onOpenChange={setIsFiltersOpen}
          activeFiltersCount={activeFiltersCount}
          filters={filters}
          onFiltersChange={setFilters}
          onClear={clearFilters}
        />
      </div>

      {/* Layout: Filters sidebar + Products grid */}
      <div className="flex gap-12 lg:gap-16">
        {/* Desktop sidebar filters */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-32">
            <ProductFilters
              filters={filters}
              onFiltersChange={setFilters}
              onClear={clearFilters}
            />
          </div>
        </aside>

        {/* Products section */}
        <div className="flex-1 min-w-0">
          {/* Products grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="text-center py-16 md:py-24">
              <p className="text-lg md:text-xl font-light text-foreground/60 mb-4">
                Sin resultados
              </p>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8">
                No se encontraron productos con los filtros seleccionados.
                Intenta ajustar los criterios de búsqueda.
              </p>
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 border border-primary text-primary text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Limpiar filtros
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function SectionContent({ products }: SectionContentProps) {
  return (
    <Suspense
      fallback={
        <div className="mt-8 md:mt-12 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-muted animate-pulse" />
            ))}
          </div>
        </div>
      }
    >
      <SectionContentInner products={products} />
    </Suspense>
  )
}
