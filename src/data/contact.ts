import type { ContactInfo } from '@/types'

export const contactInfo: ContactInfo = {
  store_name: 'Malva',
  tagline:
    'Pastelería artesanal donde cada creación es una expresión de amor por los sabores auténticos.',
  phone: '+34 912 345 678',
  email: 'hola@malva.es',
  address: {
    line1: 'Calle del Almendro 12',
    line2: null,
    city: 'Madrid',
    postal_code: '28012',
    country: 'España',
  },
  social_networks: [
    {
      platform: 'instagram',
      url: 'https://instagram.com/malva',
      handle: '@malva',
    },
    {
      platform: 'whatsapp',
      url: 'https://wa.me/34912345678',
      handle: '+34 912 345 678',
    },
    {
      platform: 'facebook',
      url: 'https://facebook.com/malvapasteleria',
      handle: 'Malva Pastelería',
    },
  ],
}
