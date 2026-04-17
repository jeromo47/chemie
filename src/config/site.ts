/**
 * Configuración central del sitio. Todo dato público reutilizable vive aquí.
 * Cualquier cambio de teléfono, email o dirección se hace SOLO en este archivo.
 */
export const site = {
  name: 'Grupo Chemie',
  shortName: 'Chemie',
  url: 'https://grupochemie.com',
  tagline:
    'Soluciones químicas profesionales para higiene, industria alimentaria, hostelería y mantenimiento',
  description:
    'Catálogo técnico de detergentes, desengrasantes, higienizantes, biocidas, aditivos y productos específicos para uso profesional.',
  locale: 'es_ES',
  lang: 'es',
  locality: 'Almería',
  country: 'ES',

  // Contacto
  phone: {
    display: '609 662 482',
    tel: '+34609662482',
  },
  whatsapp: {
    number: '34609662482',
    defaultMessage: 'Hola, me gustaría información sobre sus productos.',
  },
  email: 'info@grupochemie.com',

  // Horario (para schema.org y top-bar)
  horario: {
    display: 'L–V · 09:00–18:00',
    schema: 'Mo-Fr 09:00-18:00',
  },

  // Regulatorio
  registroBiocidas: '12-20/40-06373-HA',

  // Navegación principal
  nav: [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/productos', label: 'Productos' },
    { href: '/cooperativas', label: 'Cooperativas' },
    { href: '/sectores', label: 'Sectores' },
  ] as const,
} as const;

/**
 * Categorías padre del catálogo (enum cerrado).
 * El orden se respeta en filtros y navegación.
 */
export const categoriasPadre = [
  'Industria en general',
  'Industria alimentaria',
  'Línea ecológica',
  'Suministro industrial',
] as const;

export type CategoriaPadre = (typeof categoriasPadre)[number];

export const site_url = site.url;
