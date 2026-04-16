# Grupo Chemie — Web corporativa

Sitio B2B de Grupo Chemie (distribución de productos químicos y suministros industriales en Almería), construido con Astro + Tailwind y desplegable en Cloudflare Pages.

## Stack

- [Astro](https://astro.build) 5 (output estático)
- [Tailwind CSS](https://tailwindcss.com) 3 (`@astrojs/tailwind`)
- [@astrojs/sitemap](https://www.npmjs.com/package/@astrojs/sitemap) — sitemap automático
- [lucide-astro](https://lucide.dev) — iconos
- `astro:assets` — imágenes optimizadas
- `astro:content` + zod — colecciones tipadas para productos y sectores

## Estructura

```
src/
├── components/        Header, Footer, SEO, WhatsAppFloat, ContactForm, ProductCard
├── content/
│   ├── config.ts      Schemas zod para products y sectors
│   ├── products/      Markdown con fichas de producto
│   └── sectors/       Markdown con descripciones de sectores
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro             → /
│   ├── nosotros.astro          → /nosotros
│   ├── productos/index.astro   → /productos
│   ├── productos/[slug].astro  → /productos/:slug (dinámica)
│   ├── cooperativas.astro      → /cooperativas
│   ├── sectores.astro          → /sectores
│   └── contacto.astro          → /contacto
└── styles/global.css
```

## Empezar

Requisitos: Node 20+ y npm.

```bash
cp .env.example .env         # rellena Formspree y WhatsApp
npm install
npm run dev                  # http://localhost:4321
```

Comandos:

| Comando           | Descripción                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Dev server con HMR                 |
| `npm run build`   | Build de producción en `dist/`     |
| `npm run preview` | Sirve `dist/` localmente           |
| `npm run check`   | Type-check (astro check)           |

## Variables de entorno

Se definen en `.env` (no se commitea) y están prefijadas con `PUBLIC_` para poder usarse en el cliente.

```env
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/XXXXXXXX
PUBLIC_WHATSAPP_NUMBER=34609662482
PUBLIC_SITE_URL=https://grupochemie.com
```

## Contenido

### Añadir un producto

Crea `src/content/products/mi-producto.md`:

```md
---
nombre: "Nombre comercial"
ref: "REF-001"
familia: "Higiene y desinfección"
descripcion: "Descripción corta para catálogo."
usos:
  - "Uso 1"
  - "Uso 2"
presentaciones:
  - "Garrafa 5 L"
registroBiocida: "12-20/40-06373-HA"   # opcional
imagen: "./imagen-producto.jpg"         # opcional, coloca el archivo junto al .md
fichaPDF: "/pdfs/ref-001.pdf"           # opcional, coloca el PDF en public/pdfs/
destacado: true                          # aparece en home
orden: 1
---

Contenido Markdown largo de la ficha.
```

El `slug` se deriva del nombre del archivo (`mi-producto.md` → `/productos/mi-producto`).

### Añadir un sector

Crea `src/content/sectors/mi-sector.md`:

```md
---
nombre: "Industria X"
descripcion: "Descripción corta."
icono: "sprout"            # sprout | utensils | wrench | chef-hat
productosRecomendados:
  - "slug-producto-1"
orden: 3
---
```

## Personalización

- **Color corporativo**: edita `tailwind.config.mjs` → `theme.extend.colors.brand`. Es una escala 50–900. Usa un generador como [uicolors.app](https://uicolors.app) con el hex del logo.
- **Tipografía**: se carga Inter desde Google Fonts en `BaseLayout.astro`. Cámbiala ahí y en `tailwind.config.mjs`.
- **Logo**: actualmente hay un placeholder `C` en `Header.astro`, `Footer.astro` y `public/favicon.svg`. Sustitúyelo cuando llegue el logo real (idealmente SVG).
- **Teléfono/email/dirección**: están marcados con `[placeholder]` en `Footer.astro` y `contacto.astro`.

## Deploy en Cloudflare Pages

### Opción A — Desde el dashboard (recomendada para esta demo)

1. Push del repo a GitHub/GitLab.
2. Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Selecciona el repositorio y la rama.
4. Configuración del build:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: `20` (variable de entorno `NODE_VERSION=20`)
5. Variables de entorno (Production):
   - `PUBLIC_FORMSPREE_ENDPOINT`
   - `PUBLIC_WHATSAPP_NUMBER`
   - `PUBLIC_SITE_URL` (ej. `https://grupochemie.com`)
6. Deploy. Cloudflare te da una URL `*.pages.dev`.
7. Dominio personalizado: **Custom domains** → añadir `grupochemie.com` y `www`, ajustando DNS (si el DNS está en Cloudflare, se configura solo).

### Opción B — Wrangler (CI/CLI)

```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist --project-name=grupo-chemie
```

### Notas

- El sitio es estático (`output: 'static'`), así que no hace falta adaptador de Cloudflare.
- El `site` en `astro.config.mjs` se usa para el sitemap y URLs canónicas. Cámbialo al dominio final antes de publicar.
- Tras el primer deploy, envía `sitemap-index.xml` a Google Search Console.

## SEO

- Meta tags y OG únicos por página vía `<SEO />`.
- Sitemap automático en `/sitemap-index.xml`.
- `robots.txt` en `public/`.
- Schema.org `LocalBusiness` en home y contacto.

## Pendiente de contenido real

Revisa la lista en `TODO-CONTENT.md` para saber qué textos, imágenes y datos hay que sustituir.
