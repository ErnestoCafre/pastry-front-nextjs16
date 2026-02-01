// ============================================
// Image Types (simplified from API ImageVariants)
// ============================================

export interface ProductImage {
  src: string
  alt: string
}

// ============================================
// Hero Section
// ============================================

export interface HeroConfig {
  tagline: string
  subtitle: string
  cta_text: string
  cta_url: string
  image: string
}

// ============================================
// Contact Info
// ============================================

export interface Address {
  line1: string
  line2: string | null
  city: string
  postal_code: string
  country: string
}

export type SocialPlatform =
  | 'whatsapp'
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'twitter'
  | 'youtube'
  | 'linkedin'
  | 'pinterest'
  | 'telegram'
  | 'other'

export interface SocialNetwork {
  platform: SocialPlatform
  url: string
  handle: string | null
}

export interface ContactInfo {
  store_name: string
  tagline: string
  phone: string
  email: string
  address: Address
  social_networks: SocialNetwork[]
}

// ============================================
// Sections (Categories)
// ============================================

export interface Section {
  id: number
  name: string
  slug: string
  description: string
  image: string
  products_count: number
}

// ============================================
// Products
// ============================================

export interface Product {
  id: number
  name: string
  description: string
  base_price: number
  image: string
  gallery: ProductImage[]
  section_slug: string
  section_name: string
  is_highlighted: boolean
  preparation_days: number
}

// ============================================
// Filter Types
// ============================================

export type SortOption =
  | 'price_asc'
  | 'price_desc'
  | 'name_asc'
  | 'name_desc'
  | 'newest'

export interface FilterValues {
  min_price?: number
  max_price?: number
  sort?: SortOption
  search?: string
}
