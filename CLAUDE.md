# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Static marketing/content site for Daniela Jaramillo Herrera, a criminal-defense lawyer in Medellín, Colombia. Built with Astro + Tailwind CSS v4, output is 100% static HTML deployed to Hostinger shared hosting, with a PHP endpoint for the contact form. All content and copy is in Spanish (Colombia).

## Commands

```bash
npm run dev        # astro dev server at http://localhost:4321
npm run build      # builds static site to ./dist
npm run preview    # serves ./dist locally to verify the final build
```

There is no test suite and no lint script configured. `tsconfig.json` extends `astro/tsconfigs/strict` — rely on `npm run build` (which type-checks `.astro` files) to catch type errors.

### Deploy

```bash
./deploy.sh              # npm ci + build, leaves dist/ ready
./deploy.sh --ftp         # also uploads dist/ via FTP (requires lftp + env vars)
```

FTP upload needs `HOSTINGER_FTP_HOST`, `HOSTINGER_FTP_USER`, `HOSTINGER_FTP_PASS`, optional `HOSTINGER_FTP_REMOTE_DIR` (default `/public_html`). Treat running `./deploy.sh --ftp` as a real deployment to production — confirm with the user before running it.

## Architecture

- `src/pages/` — file-based routes. Astro build config emits clean-url `.html` files (`format: 'file'` in `astro.config.mjs`), paired with Apache rewrite rules in `public/.htaccess` for Hostinger.
- `src/content/articulos/` + `src/content.config.ts` — the legal-blog content collection (Markdown). Schema requires `title`, `description`, `date`, `area` (one of the four practice areas), `readingMinutes`, `draft`.
- `src/lib/site.ts` — single source of truth for all site facts: contact info, practice areas (`AREAS`), career timeline (`TIMELINE`), credentials (`CREDENTIALS`), criminal-process stages (`PROCESS_STAGES`), nav items. Any page or component displaying these facts should read from here, not hardcode them.
- `src/components/` — reusable pieces (Header, AreaCard, Timeline, ContactForm, SealBadge, ProcessDiagram, FAQ, etc.) consumed by pages and layouts.
- `src/layouts/Layout.astro` (root) and `ArticleLayout.astro` (blog posts).
- `src/styles/global.css` — design tokens under Tailwind v4's CSS-first `@theme` block. All colors must be defined as tokens here; no loose hex values elsewhere.
- `public/contacto.php` — contact form endpoint using a vendored PHPMailer (`public/php/PHPMailer/`, no Composer) over SMTP. Requires `public/config.php` (copy from `public/config.example.php`, gitignored, never committed) with real SMTP credentials. `public/.htaccess` blocks direct access to `config.php`.
- Astro integrations: `@astrojs/sitemap` (sitemap generation), `@tailwindcss/vite`, sharp for image processing (explicitly configured as the image service).

## Content rules (do not break when editing)

These are hard constraints from `PRODUCT.md`, not stylistic suggestions:

- Never invent data, figures, or testimonials — no fabricated "cases won," reviews, or success statistics. The site currently has none of these and is designed to absorb them later without redesign, not to simulate them now.
- Never reference specific cases from Daniela's time at the Fiscalía General de la Nación (reserva sumarial / investigation secrecy applies).
- Never publish sensitive personal data: cédula number, birth date, residential address, or images of the professional card or cédula. The T.P. (tarjeta profesional) number `429113` is public/verifiable and fine to show.
- The site's core positioning thesis is the asymmetry of having built prosecutions (8 years at Fiscalía/DECOC) and now defending against them — not years litigating or case wins, which don't exist yet. Copy should lean on this, not on generic authority claims.

## Design system — "El expediente"

Full detail in `DESIGN.md`. Key points that affect how you write markup/CSS:

- Deliberately rejects standard law-firm visual language (navy/gold, scales, columns). Palette is three named token groups in `src/styles/global.css`: `ink` (dark background), `manila` (paper-like card/panel surface), `sello` (single semantic accent — verification/action only, never decorative), plus a minimal `brass` hardware accent.
- Typography: Newsreader Variable for display/headings, IBM Plex Sans Variable for body/UI, IBM Plex Mono for folio-style data (dates, T.P. number, stage numbering) — all self-hosted via `@fontsource(-variable)`, no runtime Google Fonts.
- `.folio-kicker` (mono, small-caps) is reserved for real data (dates, T.P. number, sequential numbering) — never used as a decorative eyebrow above a heading; that pattern was explicitly removed sitewide. Use `.block-label` (sans, not mono) for standalone block titles that have no heading beneath them.
- `.prose-expediente.on-dark` exists specifically for long-form content sitting inside a dark (`ink`) section, so it doesn't inherit manila-surface text colors by mistake — a real bug found during the build.
- Margin notes (`.prose-expediente blockquote`) use a bordered box with a mono "NOTA" label on all four sides — explicitly not a side accent bar.
- New pages should get a correlative "EXPEDIENTE N.° 0X" folio number, not a generic breadcrumb.
- `SealBadge.astro` only shows real, verifiable credentials (T.P., seccional) — never turn it into a fabricated reviews/wins badge.
