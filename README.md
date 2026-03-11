# Malva — Pastelería Artesanal

> **Demo en vivo:** [pastry-front-nextjs16.vercel.app](https://pastry-front-nextjs16.vercel.app/)

Sitio web catálogo estático para **Malva**, una pastelería artesanal. Construido con **Next.js 16**, **React 19**, **TypeScript** y **Tailwind CSS v4**.

## Funcionalidades

- Hero narrativo con animación escalonada palabra por palabra
- Catálogo por sección con filtros (búsqueda, precio, ordenamiento) sincronizados con URL
- Páginas de producto con galería y productos relacionados
- Búsqueda global en overlay a pantalla completa (debounced)
- Header inteligente (oculta/muestra según dirección de scroll)
- Diseño responsive completo con navegación mobile

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Inicio — hero + secciones de categoría |
| `/catalogo/[slug]` | Catálogo filtrable (`pasteles`, `tartas`, `otros`) |
| `/producto/[id]` | Detalle de producto con galería |

Todas las rutas usan `generateStaticParams` + `generateMetadata` para SSG y SEO.

## Estructura

```
src/
├── app/                    # Páginas (layout, home, catálogo, producto)
├── components/
│   ├── home/               # Hero, secciones de categoría
│   ├── layout/             # Header, Footer
│   ├── catalog/            # Tarjetas, filtros, contenido de sección
│   ├── product/            # Detalle de producto
│   ├── search/             # Overlay de búsqueda
│   └── ui/                 # Dropdown, íconos sociales
├── data/                   # Datos estáticos (22 productos, 3 secciones, contacto, hero)
├── hooks/                  # useDebounce, useProductFilters, useScrollDirection
├── lib/                    # Filtros, formateo de precios (es-AR), cn()
└── types/                  # Tipos del dominio (Product, Section, ContactInfo, etc.)
```

## Modelo de Datos

Los datos se consumen desde `src/data/` como constantes estáticas tipadas en `src/types/`.

```typescript
interface Product {
  id: number
  name: string
  description: string
  base_price: number              // Precio en centavos (ARS), formateado con locale es-AR
  image: string                   // Ruta a imagen principal (.webp)
  gallery: ProductImage[]         // { src, alt }
  section_slug: string            // Relación con Section.slug
  section_name: string
  is_highlighted: boolean
}

interface Section {
  id: number
  name: string
  slug: string                    // "pasteles" | "tartas" | "otros"
  description: string
  image: string
}

interface HeroConfig {
  tagline: string
  subtitle: string
  cta_text: string
  cta_url: string
  image: string
}

interface ContactInfo {
  store_name: string
  tagline: string
  phone: string
  email: string
  address: Address                // { line1, line2, city, postal_code, country }
  social_networks: SocialNetwork[] // { platform, url, handle }
}

interface FilterValues {
  min_price?: number
  max_price?: number
  sort?: SortOption               // "price_asc" | "price_desc" | "name_asc" | "name_desc" | "newest"
  search?: string
}
```

## Diseño

- **Tipografía:** Cormorant Garamond (serif, pesos 300–700) via `next/font/google`
- **Paleta:** Tonos mauve en OKLCH (hue ~300) con soporte dark mode
- **Estilo:** Editorial de lujo — tracking expandido, bordes angulares (`radius: 0`), hover reveals con overlay malva

## Inicio Rápido

```bash
npm install
npm run dev        # Desarrollo → http://localhost:3000
npm run build      # Build estático → ./out/
npm run lint       # ESLint (core-web-vitals + TypeScript)
```
