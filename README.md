# DR. René González Website

Sitio web premium desarrollado con Next.js para DR. René González Dávila, cirujano estético. El proyecto combina una estética negra y dorada con animaciones scroll-driven en GSAP, secciones visuales inmersivas, revista digital editorial y módulos reutilizables para testimonios, servicios y contacto.

## Stack

- Next.js 16.2.4
- React 19
- TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger

## Funcionalidades principales

- Header editorial con logo centrado y reveal scroll-driven del doctor.
- Sección hero con transiciones scroll-driven, visión, misión y narrativa biográfica.
- Sección de servicios con animación por frames, categorías interactivas y panel de subservicios.
- Sección de testimonios con videos de YouTube seleccionados al azar y modal fullscreen en mobile.
- Revista digital con listado de artículos y páginas dinámicas por slug.
- Navbar glass-style, footer global y botón flotante de WhatsApp.
- SEO base configurado con metadata, `robots.ts` y `sitemap.ts`.

## Estructura principal

```text
src/
  app/
    blog/
      [slug]/page.jsx
      layout.jsx
      page.jsx
    globals.css
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
    lib/
      blog.js
  components/
    BlogGoldDust.tsx
    CursorSparkle.tsx
    Footer.tsx
    Header.tsx
    HeroSection.tsx
    Navbar.tsx
    ServicesSection.tsx
    TestimoniosSection.tsx
    WhatsAppButton.tsx
  lib/
    testimonialVideos.ts
public/
  images/
```

## Rutas

- `/` Home principal
- `/blog` Revista digital
- `/blog/[slug]` Detalle de cada artículo

## Assets esperados

Verifica que estos archivos y carpetas estén presentes antes de desplegar:

- `public/images/servicesAnimationImages/`
- `public/images/blog/`
- `public/images/Dr-Rene-Gonzales.png`
- `public/images/Dr-Rene-Gonzales-Bl.png`
- `public/images/Logo.png`
- `public/images/mouse-cursor.png`
- `public/images/section_1_image.png`
- `public/images/section_2_image.png`

## Configuración local

Instala dependencias:

```bash
npm install
```

Inicia el entorno de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Contenido editable

### Servicios

La lógica y el contenido de la sección de servicios viven en:

- `src/components/ServicesSection.tsx`

### Testimonios

Los videos de testimonios se administran en:

- `src/lib/testimonialVideos.ts`

El componente selecciona 4 videos al azar cada vez que se carga la página.

### Revista digital

Los artículos actuales se administran en:

- `src/app/lib/blog.js`

Cada entrada define:

- `slug`
- `title`
- `type`
- `date`
- `paragraph1`
- `paragraph2`
- `note`
- `noteTitle`
- `subtitle`
- `subparagraph1`
- `image`
- `subparagraph2`
- `list`

## SEO

La configuración SEO principal está en:

- `src/app/layout.tsx`
- `src/app/robots.ts`
- `src/app/sitemap.ts`
- `src/app/blog/layout.jsx`
- `src/app/blog/[slug]/page.jsx`

Incluye:

- metadata global del sitio
- Open Graph
- Twitter cards
- canonical base
- sitemap dinámico
- metadata por artículo de la revista digital

## Despliegue

El proyecto está preparado para desplegarse en Vercel.

Antes de publicar:

1. Verifica que todas las secuencias de imágenes estén versionadas en Git.
2. Confirma que las rutas en `public/images` coincidan exactamente en mayúsculas y minúsculas.
3. Ejecuta `npm run lint`.
4. Ejecuta `npm run build`.

## Notas

- Este proyecto usa una versión moderna de Next.js con App Router.
- Varias secciones dependen de scroll y canvas, por lo que los assets deben estar correctamente disponibles en producción.
- Si aparecen errores 404 en Vercel, revisa primero los nombres de carpetas y archivos dentro de `public/images`.
