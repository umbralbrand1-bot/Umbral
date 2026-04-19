# Umbral — AI Automation Studio

Sitio web de producción para Umbral, estudio de ingeniería de IA para pymes de habla hispana.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** TailwindCSS + shadcn/ui
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Fuentes:** Geist Sans + Geist Mono
- **Deploy:** Vercel

---

## Desarrollo local

```bash
npm install
cp .env.example .env.local   # completar valores
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

---

## Deploy en Vercel

1. Subir el repo a GitHub
2. Importar en [vercel.com/new](https://vercel.com/new)
3. Agregar las variables de `.env.example` en el panel de Vercel
4. Deploy automático en cada push a `main`

```bash
# O via CLI
npm i -g vercel && vercel --prod
```

---

## Estructura

```
src/
├── app/                    # Páginas (App Router)
│   ├── page.tsx            # Home (/)
│   ├── servicios/          # /servicios
│   ├── casos/              # /casos
│   ├── lab/                # /lab
│   ├── diagnostico/        # /diagnostico
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── ui/                 # Primitives shadcn/ui
│   ├── common/             # Navbar, Footer, WhatsApp, Cookie
│   └── sections/           # Secciones por página
└── lib/
    ├── constants.ts        # Copy y datos globales
    ├── utils.ts
    └── data/               # FAQs, testimonios, casos
```

---

## Checklist de lanzamiento

### Contenido — placeholders a reemplazar
- [ ] Logos de clientes → `LogoCloud` → `/public/logos/`
- [ ] Foto fundador → `/public/founder.jpg` (reemplazar `V` en `FounderBio`)
- [ ] Apellido y años de experiencia del fundador en `/lab/page.tsx`
- [ ] Links LinkedIn / Twitter reales del fundador
- [ ] Avatares y datos reales en `src/lib/data/testimonials.ts`
- [ ] OG image → `/public/og-image.png` (1200×630 px)
- [ ] Logo SVG/PNG → `/public/logo.svg`
- [ ] Favicon → `/public/favicon.ico`

### Integraciones
- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` con número real
- [ ] `NEXT_PUBLIC_CAL_LINK` con link real de Cal.com
- [ ] Conectar formulario `/diagnostico` a Resend o Formspree
- [ ] Newsletter del Footer conectado a ConvertKit / Resend
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` con ID de GA4
- [ ] Instalar `@vercel/analytics` para métricas de Vercel

### Técnico
- [ ] `metadataBase` en `layout.tsx` con URL final de producción
- [ ] Crear páginas `/privacidad` y `/terminos` (links en Footer)
- [ ] Submit sitemap en Google Search Console
- [ ] Testear Open Graph con opengraph.xyz
- [ ] Lighthouse 95+ en producción

---

## Variables de entorno requeridas

| Variable | Descripción |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | URL del sitio sin trailing slash |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número sin + ni espacios |
| `NEXT_PUBLIC_CAL_LINK` | Link de Cal.com para agendar |
| `RESEND_API_KEY` | Email transaccional del formulario |
| `RESEND_TO_EMAIL` | Email receptor de formularios |

Ver `.env.example` para la lista completa con opciones alternativas.
