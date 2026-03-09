'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X, SlidersHorizontal } from 'lucide-react'
import { useDebounce } from '@/hooks/use-debounce'
import type { SortOption, FilterValues } from '@/types'

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Más recientes' },
  { value: 'price_asc', label: 'Precio: menor a mayor' },
  { value: 'price_desc', label: 'Precio: mayor a menor' },
  { value: 'name_asc', label: 'Nombre: A-Z' },
  { value: 'name_desc', label: 'Nombre: Z-A' },
]

interface ProductFiltersProps {
  filters: FilterValues
  onFiltersChange: (filters: FilterValues) => void
  onClear: () => void
  className?: string
}

export function ProductFilters({
  filters,
  onFiltersChange,
  onClear,
  className = '',
}: ProductFiltersProps) {
  const [localMinPrice, setLocalMinPrice] = useState(
    filters.min_price?.toString() || ''
  )
  const [localMaxPrice, setLocalMaxPrice] = useState(
    filters.max_price?.toString() || ''
  )
  const [localSearch, setLocalSearch] = useState(filters.search || '')

  const debouncedSearch = useDebounce(localSearch, 400)

  const filtersRef = useRef(filters)
  filtersRef.current = filters

  useEffect(() => {
    const currentFilters = filtersRef.current
    if (debouncedSearch !== (currentFilters.search ?? '')) {
      onFiltersChange({ ...currentFilters, search: debouncedSearch || undefined })
    }
  }, [debouncedSearch, onFiltersChange])

  useEffect(() => {
    setLocalMinPrice(filters.min_price?.toString() || '')
    setLocalMaxPrice(filters.max_price?.toString() || '')
    setLocalSearch(filters.search || '')
  }, [filters.min_price, filters.max_price, filters.search])

  const handlePriceBlur = () => {
    const minPrice = localMinPrice ? parseFloat(localMinPrice) : undefined
    const maxPrice = localMaxPrice ? parseFloat(localMaxPrice) : undefined

    if (minPrice !== filters.min_price || maxPrice !== filters.max_price) {
      onFiltersChange({
        ...filters,
        min_price: minPrice,
        max_price: maxPrice,
      })
    }
  }

  const handleSortChange = (sort: SortOption) => {
    onFiltersChange({ ...filters, sort })
  }

  const handleClear = () => {
    setLocalMinPrice('')
    setLocalMaxPrice('')
    setLocalSearch('')
    onClear()
  }

  const hasActiveFilters =
    filters.min_price || filters.max_price || filters.sort || filters.search

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <SlidersHorizontal
            className="size-4 text-primary"
            strokeWidth={1.5}
          />
          <h3 className="text-xs tracking-[0.3em] uppercase text-foreground font-medium">
            Filtros
          </h3>
        </div>
        {hasActiveFilters && (
          <button
            onClick={handleClear}
            aria-label="Limpiar todos los filtros"
            className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Limpiar
          </button>
        )}
      </div>

      <div className="h-px bg-border" />

      {/* Search */}
      <div className="space-y-3">
        <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block">
          Buscar
        </label>
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"
            strokeWidth={1.5}
          />
          <input
            type="text"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            placeholder="Nombre del producto..."
            className="w-full pl-10 pr-10 py-3 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none transition-colors duration-300"
          />
          {localSearch && (
            <button
              onClick={() => setLocalSearch('')}
              aria-label="Limpiar búsqueda"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="size-4" strokeWidth={1.5} />
            </button>
          )}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block">
          Precio
        </label>
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              &euro;
            </span>
            <input
              type="number"
              value={localMinPrice}
              onChange={(e) => setLocalMinPrice(e.target.value)}
              onBlur={handlePriceBlur}
              placeholder="Mín"
              min="0"
              step="0.01"
              className="w-full pl-8 pr-3 py-3 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none transition-colors duration-300"
            />
          </div>
          <span className="text-muted-foreground">&mdash;</span>
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
              &euro;
            </span>
            <input
              type="number"
              value={localMaxPrice}
              onChange={(e) => setLocalMaxPrice(e.target.value)}
              onBlur={handlePriceBlur}
              placeholder="Máx"
              min="0"
              step="0.01"
              className="w-full pl-8 pr-3 py-3 bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none transition-colors duration-300"
            />
          </div>
        </div>
      </div>

      {/* Sort */}
      <div className="space-y-3">
        <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground block">
          Ordenar por
        </label>
        <div className="space-y-1">
          {SORT_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSortChange(option.value)}
              className={`w-full text-left py-2.5 px-3 text-sm transition-all duration-300 ${
                filters.sort === option.value
                  ? 'bg-primary/10 text-primary border-l-2 border-primary'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
