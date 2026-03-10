import type { Section } from '@/types'

export const sections: Section[] = [
  {
    id: 1,
    name: 'Pasteles',
    slug: 'pasteles',
    description:
      'Pasteles artesanales elaborados con los mejores ingredientes. Cada creación es una obra de arte diseñada para momentos especiales.',
    image: '/images/sections/pasteles.webp',
  },
  {
    id: 2,
    name: 'Tartas',
    slug: 'tartas',
    description:
      'Tartas clásicas y contemporáneas que combinan tradición y creatividad. Perfectas para celebraciones y sobremesas inolvidables.',
    image: '/images/sections/tartas.webp',
  },
  {
    id: 3,
    name: 'Otros',
    slug: 'otros',
    description:
      'Otros productos de pastelería.',
    image: '/images/sections/otros.webp',
  },
]
