'use client'

import { useState, useMemo, useCallback } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import type { Product, FilterValues, SortOption } from '@/types'
import { filterAndSortProducts } from '@/lib/filters'

export function useProductFilters(allProducts: Product[]) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const filters: FilterValues = useMemo(() => ({
    search: searchParams.get('search') || undefined,
    min_price: searchParams.get('min_price')
      ? parseFloat(searchParams.get('min_price')!)
      : undefined,
    max_price: searchParams.get('max_price')
      ? parseFloat(searchParams.get('max_price')!)
      : undefined,
    sort: (searchParams.get('sort') as SortOption) || undefined,
  }), [searchParams])

  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  const updateURL = useCallback(
    (newFilters: FilterValues) => {
      const params = new URLSearchParams()
      if (newFilters.search) params.set('search', newFilters.search)
      if (newFilters.min_price !== undefined)
        params.set('min_price', newFilters.min_price.toString())
      if (newFilters.max_price !== undefined)
        params.set('max_price', newFilters.max_price.toString())
      if (newFilters.sort) params.set('sort', newFilters.sort)
      const qs = params.toString()
      router.replace(`${pathname}${qs ? `?${qs}` : ''}`, { scroll: false })
    },
    [router, pathname]
  )

  const setFilters = useCallback(
    (newFilters: FilterValues) => {
      updateURL(newFilters)
    },
    [updateURL]
  )

  const clearFilters = useCallback(() => {
    router.replace(pathname, { scroll: false })
  }, [router, pathname])

  const activeFiltersCount = useMemo(() => {
    let count = 0
    if (filters.search) count++
    if (filters.min_price !== undefined) count++
    if (filters.max_price !== undefined) count++
    if (filters.sort) count++
    return count
  }, [filters])

  const filteredProducts = useMemo(
    () => filterAndSortProducts(allProducts, filters),
    [allProducts, filters]
  )

  return {
    filters,
    setFilters,
    clearFilters,
    activeFiltersCount,
    filteredProducts,
    isFiltersOpen,
    setIsFiltersOpen,
  }
}
