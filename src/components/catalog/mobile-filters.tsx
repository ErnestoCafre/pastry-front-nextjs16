'use client'

import { SlidersHorizontal, X } from 'lucide-react'
import { ProductFilters } from './product-filters'
import type { FilterValues } from '@/types'

interface MobileFiltersProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  activeFiltersCount: number
  filters: FilterValues
  onFiltersChange: (filters: FilterValues) => void
  onClear: () => void
}

export function MobileFiltersButton({
  isOpen,
  onOpenChange,
  activeFiltersCount,
  filters,
  onFiltersChange,
  onClear,
}: MobileFiltersProps) {
  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => onOpenChange(true)}
        aria-label={`Abrir filtros${activeFiltersCount > 0 ? ` (${activeFiltersCount} activos)` : ''}`}
        className="flex items-center gap-2 px-4 py-2.5 border border-border bg-background text-sm tracking-[0.15em] uppercase text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
      >
        <SlidersHorizontal className="size-4" strokeWidth={1.5} />
        <span>Filtros</span>
        {activeFiltersCount > 0 && (
          <span
            className="ml-1 flex items-center justify-center w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full"
            aria-hidden="true"
          >
            {activeFiltersCount}
          </span>
        )}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          onClick={() => onOpenChange(false)}
        >
          {/* Panel */}
          <div
            className="absolute right-0 top-0 h-full w-full max-w-sm bg-background border-l border-border shadow-xl p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => onOpenChange(false)}
              aria-label="Cerrar panel de filtros"
              className="absolute right-4 top-4 p-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>

            {/* Filters content */}
            <div className="pt-8">
              <ProductFilters
                filters={filters}
                onFiltersChange={onFiltersChange}
                onClear={onClear}
              />
            </div>

            {/* Apply button */}
            <div className="mt-8 pt-6 border-t border-border">
              <button
                onClick={() => onOpenChange(false)}
                className="w-full py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors duration-300"
              >
                Aplicar Filtros
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
