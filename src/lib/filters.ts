import type { Product, FilterValues } from '@/types'

export function filterAndSortProducts(
  products: Product[],
  filters: FilterValues
): Product[] {
  let result = [...products]

  // Text search
  if (filters.search) {
    const query = filters.search.toLowerCase()
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    )
  }

  // Price range
  if (filters.min_price !== undefined) {
    result = result.filter((p) => p.base_price >= filters.min_price!)
  }
  if (filters.max_price !== undefined) {
    result = result.filter((p) => p.base_price <= filters.max_price!)
  }

  // Sort
  if (filters.sort) {
    switch (filters.sort) {
      case 'price_asc':
        result.sort((a, b) => a.base_price - b.base_price)
        break
      case 'price_desc':
        result.sort((a, b) => b.base_price - a.base_price)
        break
      case 'name_asc':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'name_desc':
        result.sort((a, b) => b.name.localeCompare(a.name))
        break
      case 'newest':
        // Keep original order (newest first by default in data)
        break
    }
  }

  return result
}
