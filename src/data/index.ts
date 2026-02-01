export { sections } from './sections'
export { products } from './products'
export { contactInfo } from './contact'
export { heroConfig } from './hero'

import { sections } from './sections'
import { products } from './products'
import type { Product, Section } from '@/types'

export function getSectionBySlug(slug: string): Section | undefined {
  return sections.find((s) => s.slug === slug)
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsBySection(sectionSlug: string): Product[] {
  return products.filter((p) => p.section_slug === sectionSlug)
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return products
    .filter((p) => p.section_slug === product.section_slug && p.id !== product.id)
    .slice(0, limit)
}

export function searchProducts(query: string, limit: number = 6): Product[] {
  if (query.length < 2) return []
  const q = query.toLowerCase()
  return products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    )
    .slice(0, limit)
}
