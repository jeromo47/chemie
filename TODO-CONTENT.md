# Contenido pendiente

Todo lo que hay que sustituir antes de publicar. Está todo marcado en el código con la palabra `placeholder` o `[placeholder]` para que sea fácil encontrarlo con un grep.

## 1. Identidad visual

- [ ] **Logo oficial** (SVG preferido). Sustituir en:
  - `src/components/Header.astro` (bloque con la "C" verde)
  - `src/components/Footer.astro` (mismo bloque)
  - `public/favicon.svg`
- [ ] **Hex del verde corporativo**. Cambiar la escala `brand` en `tailwind.config.mjs`. Puedes generar los 10 tonos con uicolors.app usando el hex principal.
- [ ] **Imagen Open Graph** por defecto (`/og-default.jpg`, 1200×630). Dejarla en `public/`.

## 2. Datos de la empresa

- [ ] Dirección completa (calle, CP, localidad). Aparece como placeholder en:
  - `src/components/Footer.astro`
  - `src/pages/contacto.astro`
- [ ] Email corporativo real (ahora: `info@grupochemie.com`). Si cambia, actualizar también los schemas JSON-LD en `index.astro` y `contacto.astro`.
- [ ] Confirmar teléfono fijo además del WhatsApp si existe.
- [ ] Horario comercial real (ahora: L-V 09:00-18:00 genérico).
- [ ] CIF y datos fiscales si los quieres en el footer o página de aviso legal.

## 3. Textos

- [ ] `/nosotros`: historia, equipo, compromiso. Hay dos bloques con placeholder.
- [ ] `/` hero: puedes ajustar el titular y subtítulo.
- [ ] Descripciones meta de cada página si quieres afinar SEO.

## 4. Catálogo de productos

Hay 3 productos de ejemplo en `src/content/products/`. Hay que:

- [ ] Decidir la lista real de familias (ahora: _Higiene y desinfección_, _Detergencia industrial_, _EPI y suministros_).
- [ ] Crear un `.md` por cada producto real (ver plantilla en README).
- [ ] Imágenes de producto (JPG/PNG/WebP). Colocar junto al `.md` y referenciar con ruta relativa `./archivo.jpg`.
- [ ] PDFs de ficha técnica (opcional). Colocar en `public/pdfs/` y referenciar con ruta absoluta `/pdfs/xxx.pdf`.
- [ ] Borrar los 3 ejemplos (`ejemplo-*.md`) cuando ya no hagan falta.

## 5. Sectores

Hay 4 sectores en `src/content/sectors/`. Revisar textos y, si procede, añadir más.

## 6. Credenciales / servicios externos

- [ ] **Formspree**: crear el formulario en formspree.io y pegar el endpoint en `.env` como `PUBLIC_FORMSPREE_ENDPOINT`.
- [ ] **Cloudflare Pages**: ver `README.md` → sección Deploy.
- [ ] **Dominio**: confirmar si se usará `grupochemie.com`. Ajustar `site` en `astro.config.mjs` y `PUBLIC_SITE_URL` en `.env` al dominio final.
- [ ] **Google Search Console**: dar de alta el dominio y enviar `sitemap-index.xml` tras el deploy.
- [ ] (Opcional) Analítica: Plausible / Umami / GA4. No está incluido todavía.

## 7. Legal

- [ ] Política de privacidad (hay un link en el formulario de contacto a `/privacidad` pero la página aún no existe).
- [ ] Aviso legal.
- [ ] Política de cookies (si se añade analítica).
