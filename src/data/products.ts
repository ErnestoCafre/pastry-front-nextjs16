import type { Product } from '@/types'

export const products: Product[] = [
  // ===== PASTELES =====
  {
    id: 1,
    name: 'Vainilla Bourbon',
    description:
      'Bizcocho esponjoso de vainilla de Madagascar con buttercream de vainilla bourbon y decoración floral comestible.',
    base_price: 46200,
    image: '/images/products/floral-decorated-cake-pastry.webp',
    gallery: [
      { src: '/images/products/floral-decorated-cake-pastry.webp', alt: 'Pastel Vainilla Bourbon' },
      { src: '/images/products/floral-decorated-cake-pastry.webp', alt: 'Pastel Vainilla Bourbon detalle' },
    ],
    section_slug: 'pasteles',
    section_name: 'Pasteles',
    is_highlighted: true,
  },
  {
    id: 2,
    name: 'Zanahoria Especiada',
    description:
      'Pastel de zanahoria con nueces pecanas, canela de Ceilán y frosting de queso crema artesanal.',
    base_price: 42350,
    image: '/images/products/lemon-tart-pastry-minimalist.webp',
    gallery: [
      { src: '/images/products/lemon-tart-pastry-minimalist.webp', alt: 'Pastel Zanahoria Especiada' },
    ],
    section_slug: 'pasteles',
    section_name: 'Pasteles',
    is_highlighted: false,
  },

  // ===== TARTAS =====
  {
    id: 6,
    name: 'Almendra',
    description:
      'Tarta de almendra 70% cacao con base crujiente de galleta y ganache sedosa. Intensidad pura.',
    base_price: 60500,
    image: '/images/products/almond-tart-elegant-pastry.webp',
    gallery: [
      { src: '/images/products/almond-tart-elegant-pastry.webp', alt: 'Tarta Almendra' },
    ],
    section_slug: 'tartas',
    section_name: 'Tartas',
    is_highlighted: true,
  },
  {
    id: 7,
    name: 'Pasta Frola',
    description:
      'Tarta de manzana sobre crema diplomática de vainilla y masa quebrada mantequilla.',
    base_price: 57200,
    image: '/images/products/apple-tart-artisan-pastry.webp',
    gallery: [
      { src: '/images/products/apple-tart-artisan-pastry.webp', alt: 'Tarta Pasta Frola' },
    ],
    section_slug: 'tartas',
    section_name: 'Tartas',
    is_highlighted: false,
  },
  {
    id: 8,
    name: 'Chocolate Belga',
    description:
      'Tarta de chocolate belga con merengue italiano tostado y base de masa sablée. Equilibrio perfecto entre dulce y ácido.',
    base_price: 52800,
    image: '/images/products/chocolate-tart-elegant-pastry.webp',
    gallery: [
      { src: '/images/products/chocolate-tart-elegant-pastry.webp', alt: 'Tarta Chocolate Belga' },
    ],
    section_slug: 'tartas',
    section_name: 'Tartas',
    is_highlighted: false,
  },
  {
    id: 9,
    name: 'Fresas del Bosque',
    description:
      'Tarta de fresas del bosque con frosting de queso crema Philadelphia y decoración de pétalos de rosa.',
    base_price: 71500,
    image: '/images/products/elegant-strawberry-tart-pastry.webp',
    gallery: [
      { src: '/images/products/elegant-strawberry-tart-pastry.webp', alt: 'Tarta Fresas del Bosque' },
    ],
    section_slug: 'tartas',
    section_name: 'Tartas',
    is_highlighted: true,
  },

  // ===== OTROS =====
  {
    id: 14,
    name: 'Religieuse',
    description:
      'Religieuse de pistacho siciliano con ganache de pistacho y un toque de agua de rosas.',
    base_price: 3850,
    image: '/images/products/religieuse-french-pastry.webp',
    gallery: [
      { src: '/images/products/religieuse-french-pastry.webp', alt: 'Religieuse' },
    ],
    section_slug: 'otros',
    section_name: 'Otros',
    is_highlighted: true,
  },
  {
    id: 15,
    name: 'Vanilla Eclair',
    description:
      'Eclair clásico de masa choux relleno de crema de vainilla de Madagascar y glaseado fondant.',
    base_price: 3850,
    image: '/images/products/vanilla-eclair-french-pastry.webp',
    gallery: [
      { src: '/images/products/vanilla-eclair-french-pastry.webp', alt: 'Vanilla Eclair' },
    ],
    section_slug: 'otros',
    section_name: 'Otros',
    is_highlighted: false,
  },
  {
    id: 16,
    name: 'Pink Rose Macaron',
    description:
      'Macaron artesanal de merengue francés con ganache de frambuesa y un delicado toque de agua de rosas búlgaras.',
    base_price: 3850,
    image: '/images/products/pink-rose-macaron-pastry.webp',
    gallery: [
      { src: '/images/products/pink-rose-macaron-pastry.webp', alt: 'Pink Rose Macaron' },
    ],
    section_slug: 'otros',
    section_name: 'Otros',
    is_highlighted: false,
  },
  {
    id: 17,
    name: 'Paris Brest',
    description:
      'Corona de masa choux crujiente rellena de crema mousseline de praliné de avellanas tostadas.',
    base_price: 3850,
    image: '/images/products/paris-brest-pastry-elegant.webp',
    gallery: [
      { src: '/images/products/paris-brest-pastry-elegant.webp', alt: 'Paris Brest' },
    ],
    section_slug: 'otros',
    section_name: 'Otros',
    is_highlighted: false,
  },
  {
    id: 18,
    name: 'Chocolate Sphere',
    description:
      'Esfera de chocolate belga con interior de mousse de frutos rojos y base crujiente de feuilletine.',
    base_price: 4400,
    image: '/images/products/chocolate-sphere-dessert-pastry.webp',
    gallery: [
      { src: '/images/products/chocolate-sphere-dessert-pastry.webp', alt: 'Chocolate Sphere' },
    ],
    section_slug: 'otros',
    section_name: 'Otros',
    is_highlighted: false,
  },
  {
    id: 19,
    name: 'Crema y Cerezas',
    description:
      'Pastel de vainilla con crema batida, decorado con cerezas frescas y un toque de elegancia clásica.',
    base_price: 48500,
    image: '/images/products/vanilla-cream-cherry-cake-pastry.webp',
    gallery: [
      { src: '/images/products/vanilla-cream-cherry-cake-pastry.webp', alt: 'Pastel Crema y Cerezas' },
    ],
    section_slug: 'pasteles',
    section_name: 'Pasteles',
    is_highlighted: true,
  },
  {
    id: 20,
    name: 'Celebración Rosa',
    description:
      'Pastel festivo decorado con lazos rosas de fondant y detalles dorados. Perfecto para celebraciones especiales.',
    base_price: 52000,
    image: '/images/products/pink-ribbon-celebration-pastry.webp',
    gallery: [
      { src: '/images/products/pink-ribbon-celebration-pastry.webp', alt: 'Pastel Celebración Rosa' },
    ],
    section_slug: 'pasteles',
    section_name: 'Pasteles',
    is_highlighted: false,
  },
  {
    id: 21,
    name: 'Rosa Imperial',
    description:
      'Pastel de capas rosa y blanco coronado con una rosa de azúcar artesanal. Una obra maestra visual.',
    base_price: 68000,
    image: '/images/products/pink-rose-layered-cake-pastry.webp',
    gallery: [
      { src: '/images/products/pink-rose-layered-cake-pastry.webp', alt: 'Pastel Rosa Imperial' },
    ],
    section_slug: 'pasteles',
    section_name: 'Pasteles',
    is_highlighted: true,
  },
  {
    id: 22,
    name: 'Chocolate y Frutos Rojos',
    description:
      'Tarta de chocolate con frosting cremoso, decorada con arándanos y frambuesas frescas.',
    base_price: 58500,
    image: '/images/products/chocolate-berry-cake-pastry.webp',
    gallery: [
      { src: '/images/products/chocolate-berry-cake-pastry.webp', alt: 'Pastel Chocolate y Frutos Rojos' },
    ],
    section_slug: 'pasteles',
    section_name: 'Pasteles',
    is_highlighted: true,
  },
  {
    id: 23,
    name: 'Perlas Doradas',
    description:
      'Pastel elegante con decoración de perlas comestibles y detalles en oro. Ideal para eventos sofisticados.',
    base_price: 62000,
    image: '/images/products/pearl-decorated-cake-pastry.webp',
    gallery: [
      { src: '/images/products/pearl-decorated-cake-pastry.webp', alt: 'Pastel Perlas Doradas' },
    ],
    section_slug: 'pasteles',
    section_name: 'Pasteles',
    is_highlighted: false,
  },
  {
    id: 24,
    name: 'Estrella Patriótica',
    description:
      'Pastel temático con fondant en colores rojo, azul y blanco, coronado con estrella de chocolate blanco.',
    base_price: 45000,
    image: '/images/products/patriotic-star-cake-pastry.webp',
    gallery: [
      { src: '/images/products/patriotic-star-cake-pastry.webp', alt: 'Pastel Estrella Patriótica' },
    ],
    section_slug: 'pasteles',
    section_name: 'Pasteles',
    is_highlighted: false,
  },
  {
    id: 25,
    name: 'Jardín de Flores',
    description:
      'Pastel decorado con flores comestibles multicolores y perlas de azúcar. Un jardín en cada bocado.',
    base_price: 55000,
    image: '/images/products/colorful-flower-cake-pastry.webp',
    gallery: [
      { src: '/images/products/colorful-flower-cake-pastry.webp', alt: 'Pastel Jardín de Flores' },
    ],
    section_slug: 'pasteles',
    section_name: 'Pasteles',
    is_highlighted: true,
  },
  {
    id: 26,
    name: 'Flores Secas Rosadas',
    description:
      'Tarta elegante decorada con flores secas naturales y detalles en rosa pastel. Estilo rústico chic.',
    base_price: 64000,
    image: '/images/products/pink-dried-flower-cake-pastry.webp',
    gallery: [
      { src: '/images/products/pink-dried-flower-cake-pastry.webp', alt: 'Pastel Flores Secas Rosadas' },
    ],
    section_slug: 'pasteles',
    section_name: 'Pasteles',
    is_highlighted: true,
  },
  {
    id: 27,
    name: 'Elegancia Rosa',
    description:
      'Tarta sofisticada con cinta de satén rosa y decoración minimalista. Perfecta para ocasiones especiales.',
    base_price: 59000,
    image: '/images/products/elegant-pink-ribbon-cake-pastry.webp',
    gallery: [
      { src: '/images/products/elegant-pink-ribbon-cake-pastry.webp', alt: 'Pastel Elegancia Rosa' },
    ],
    section_slug: 'pasteles',
    section_name: 'Pasteles',
    is_highlighted: false,
  },
  {
    id: 28,
    name: 'Rosetas Románticas',
    description:
      'Pastel cubierto con rosetas de buttercream en tonos rosa. Romántico y delicioso.',
    base_price: 51000,
    image: '/images/products/pink-rosette-cake-pastry.webp',
    gallery: [
      { src: '/images/products/pink-rosette-cake-pastry.webp', alt: 'Pastel Rosetas Románticas' },
    ],
    section_slug: 'pasteles',
    section_name: 'Pasteles',
    is_highlighted: false,
  },
]
