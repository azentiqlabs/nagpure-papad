# Nagpure Papad & Kurdya — Next.js Website

Authentic Maharashtrian Papad & Kurdya business website with WhatsApp integration.

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript** — fully typed
- **Tailwind CSS** — utility-first styling
- **next/font** — optimized Google Fonts (Playfair Display, Lora, Noto Serif Devanagari)
- **next/image** — optimized images
- SEO: Metadata API, sitemap.xml, robots.txt, OpenGraph

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with SEO metadata & fonts
│   ├── page.tsx          # Home page (assembles all sections)
│   ├── globals.css       # Global styles + traditional design tokens
│   ├── sitemap.ts        # Auto-generated sitemap
│   └── robots.ts         # robots.txt
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Sticky nav with bilingual labels + mobile menu
│   │   └── Footer.tsx    # Footer with quality badges, links, WhatsApp CTA
│   ├── home/
│   │   ├── HeroSection.tsx       # Full-screen hero with animated logo circle
│   │   ├── BannerSection.tsx     # Banner with quality feature badges
│   │   ├── QualitySection.tsx    # Quality promises + production process
│   │   ├── AboutSection.tsx      # Family story section
│   │   └── TestimonialsSection.tsx
│   ├── products/
│   │   ├── ProductCard.tsx       # Product card with variant selector + WA button
│   │   └── ProductsSection.tsx   # Papad / Kurdya / Combo sections
│   ├── contact/
│   │   └── ContactSection.tsx    # Contact with how-to-order steps
│   └── ui/
│       └── FloatingWhatsApp.tsx  # Sticky floating WA button
├── lib/
│   ├── constants.ts      # All data: products, nav, quality features, testimonials
│   └── whatsapp.ts       # WhatsApp URL builder utility
└── types/
    └── index.ts          # TypeScript interfaces
```

## Setup

```bash
npm install
npm run dev
```

## ⚙️ Configuration (Required before launch)

### 1. WhatsApp Number
Open `src/lib/constants.ts` and update:
```ts
export const WHATSAPP_NUMBER = '8329305232'; // Replace with your actual number
// Format: country code + number, no spaces or +
// Example India: '919823456789'
```

### 2. Product Images
Replace the Unsplash placeholder URLs in `src/lib/constants.ts` with your own product photos.
Upload photos to `public/images/products/` and update paths:
```ts
image: '/images/products/udid-papad.jpg',
```

### 3. Domain for SEO
Update `src/app/sitemap.ts` and `src/app/robots.ts` with your actual domain.

Update `src/app/layout.tsx` OpenGraph `url`:
```ts
openGraph: {
  url: 'https://yourdomain.com',
  ...
}
```

### 4. Business Details
In `src/lib/constants.ts`:
- Update `WHATSAPP_NUMBER`
- Update product prices and descriptions
- Update testimonials with real customer reviews

## Production Build

```bash
npm run build
npm run start
```

## Deployment

### Vercel (Recommended — free tier works great)
```bash
npm install -g vercel
vercel
```

### Custom VPS / cPanel
```bash
npm run build
# Upload .next/, public/, package.json, next.config.js
npm run start
```

## SEO Features
- ✅ Title & description metadata per page
- ✅ OpenGraph & Twitter card tags
- ✅ Bilingual content (English + Marathi)
- ✅ Semantic HTML (article, section, header, main, footer)
- ✅ Next.js Image optimization (WebP, lazy loading)
- ✅ Google Fonts via next/font (no layout shift)
- ✅ Sitemap.xml auto-generated
- ✅ Robots.txt
- ✅ Viewport & theme-color meta
- ✅ Structured data ready (add JSON-LD in layout.tsx)
