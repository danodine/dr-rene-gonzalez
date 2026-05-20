# DR. Rene Gonzalez Website

Sitio web premium desarrollado con Next.js para DR. Rene Gonzalez, Cirujano Estetico. El proyecto combina una estética negra y dorada con animaciones scroll-driven en GSAP, secciones visuales inmersivas, blog editorial y módulos reutilizables para testimonios, servicios y contacto.

## Stack

- Next.js 16.2.4
- React 19.2.4
- TypeScript
- Tailwind CSS v4
- GSAP + ScrollTrigger

## Funcionalidades principales

- Header cinematográfico con secuencia de frames y reveal final del doctor.
- Sección hero con transiciones scroll-driven, visión, misión y narrativa "about me".
- Sección de servicios con animación por frames, categorías interactivas y panel de subservicios.
- Sección de testimonios con videos de YouTube seleccionados al azar y modal fullscreen en mobile.
- Blog con listado de artículos y páginas dinámicas por slug.
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
- `/blog` Listado de artículos
- `/blog/[slug]` Detalle de cada artículo

## Assets esperados en `public/images`

Algunas secciones dependen de secuencias de imágenes y assets específicos. Verifica que estos directorios y archivos estén presentes antes de desplegar:

- `HeaderAnimation/` secuencia del header
- `servicesAnimationImages/` secuencia de servicios
- `blog/` imágenes de artículos
- `Dr-Rene-Gonzales.png`
- `Dr-Rene-Gonzales-blanco.png`
- `mouse-cursor.png`

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

### Blog

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
- metadata por artículo del blog

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
- Si aparecen errores 404 en Vercel, revisa primero nombres de carpetas y archivos dentro de `public/images`.
