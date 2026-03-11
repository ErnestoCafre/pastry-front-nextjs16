import type { ContactInfo } from '@/types'

export const contactInfo: ContactInfo = {
  store_name: 'Malva',
  tagline:
    'Pastelería artesanal donde cada creación es una expresión de amor por los sabores auténticos.',
  phone: '+22123456789',
  email: 'malva$pastelería@malva.es',
  address: {
    line1: 'Diagonal 80',
    line2: null,
    city: 'La Plata',
    postal_code: 'B1900',
    country: 'Argentina',
  },
  social_networks: [
    {
      platform: 'instagram',
      url: 'https://instagram.com\malva',
      handle: '@malva',
    },
    {
      platform: 'whatsapp',
      url: 'https://wa.me/22123456789',
      handle: '+22 123 456 789',
    },
    {
      platform: 'facebook',
      url: 'https://facebook.com\malvapasteleria',
      handle: 'Malva Pastelería',
    },
  ],
}
