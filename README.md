# Revolve Therapy Health Services — website

A Next.js 16 rebuild of [revolvetherapy.ca](https://revolvetherapy.ca), replacing the WordPress/Elementor site.

- **Stack:** Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 · Zod · lucide-react
- **Rendering:** every page is statically prerendered, with no database or CMS required
- **Lighthouse (production build):** Accessibility 100 · Best Practices 100 · SEO 100 · Performance 94–97 mobile / 100 desktop

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve the production build
npm run check        # typecheck + lint + formatting
npm run format       # auto-format (Prettier + Tailwind class sorting)
```

Copy `.env.example` to `.env.local` to enable contact-form email delivery (see below).

## Editing content

All copy lives in typed files under `src/content/`, so you don't need to touch components to change text:

| File              | What it controls                                                                 |
| ----------------- | -------------------------------------------------------------------------------- |
| `site.ts`         | Clinic name, phone, email, address, hours, booking links, socials, Google rating |
| `team.ts`         | Practitioner bios, photos, credentials, focus areas                              |
| `services.ts`     | The four service pages (copy, techniques, benefits, linked practitioners)        |
| `conditions.ts`   | Condition pages (Bell's Palsy, eczema, psoriasis, chronic pain, skin)            |
| `testimonials.ts` | Google reviews and Michael L.'s Bell's Palsy story                               |
| `faqs.ts`         | FAQ answers (also emitted as FAQPage structured data)                            |
| `insurers.ts`     | Direct-billing logos                                                             |
| `posts.ts`        | Journal (blog) articles                                                          |

Navigation, the sitemap, footer links and static params are all derived from these files. For example, adding a service to `services.ts` creates its page, menu entry and sitemap URL automatically.

Images live in `public/images/` and are served through `next/image` (AVIF/WebP, responsive sizes).

**Opening hours** in `site.ts` drive the live "Open now · until 8pm" indicator, which is computed in the `America/Vancouver` time zone.

**The Google rating** (`site.rating`) is a static snapshot (5.0 from 18 reviews). Update it when the count changes.

## Contact form

`src/app/contact/actions.ts` is a Server Action with Zod validation, a spam honeypot and accessible error messages. Delivery uses [Resend](https://resend.com):

| Variable             | Purpose                                                       |
| -------------------- | ------------------------------------------------------------- |
| `RESEND_API_KEY`     | Resend API key                                                |
| `CONTACT_FROM_EMAIL` | Sender on a verified domain, e.g. `website@revolvetherapy.ca` |
| `CONTACT_TO_EMAIL`   | Optional; defaults to the clinic email                        |

Without these, development logs the message to the server console. Production shows a friendly "please call or email us" fallback instead of silently dropping the message.

Booking itself stays on **Jane App**, and all "Book" buttons link there.

## SEO & migration

- **301/308 redirects** from every old WordPress URL (`/rmt-vancouver/`, `/bells-palsy/`, `/eczema-treatment/`, `/elementor-page-3497/`, etc.) to the new routes, configured in `next.config.ts`. This keeps existing Google rankings and bookmarks working.
- Per-page titles, descriptions, canonical URLs and Open Graph/Twitter cards (`src/lib/metadata.ts`)
- Generated social share image (`src/app/opengraph-image.tsx`)
- Structured data: `MedicalClinic` (address, hours, services), `FAQPage`, `BreadcrumbList`, `Service`, `BlogPosting`, and a `Person` list of practitioners
- `sitemap.xml`, `robots.txt` and a web manifest are generated from the content files

## Project structure

```
src/
  app/                 Routes (App Router), metadata routes, global styles
    contact/           Contact page, form (client) and server action
    services/[slug]    Service detail pages (statically generated)
    conditions/[slug]  Condition detail pages (statically generated)
    blog/[slug]        Journal articles
  components/
    layout/            Header, mega-menu, mobile menu (<dialog>), footer, mobile CTA bar
    sections/          Page sections (hero, services grid, reviews, FAQ, map, CTAs, …)
    ui/                Buttons and design-system primitives
  content/             All editable copy and data (see above)
  lib/                 Helpers (metadata, class names, dates)
```

## Design system

Tokens are defined in `src/app/globals.css` (`@theme`):

- **Colours** come from the logo: brand teal `#85C0C9` and lime `#C8DC74`, with deeper shades (`brand-700` `#1D5C66`, `ink` `#0F2E33`) for text and buttons. Every text/background pairing in use meets WCAG AA.
- **Type:** Fraunces (display serif) + DM Sans (UI/body), self-hosted via `next/font`
- **Motif:** soft orbits and arch-shaped imagery echo the circular "revolve" mark
- **Motion:** zero-JS scroll reveals using CSS scroll-driven animations, fully disabled under `prefers-reduced-motion`

## Accessibility

Skip link, semantic landmarks, visible focus rings, keyboard-operable mega-menu (Escape closes and returns focus), native `<dialog>` mobile menu with focus trapping, zero-JS `<details>` FAQ, labelled form fields with `aria-invalid`/`aria-describedby`, and screen-reader notices on links that open new tabs.

## Deployment

Any Node host works. [Vercel](https://vercel.com) needs no configuration: import the repo, add the environment variables above, and point `revolvetherapy.ca` at it. Security headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, HSTS) are set in `next.config.ts`.
