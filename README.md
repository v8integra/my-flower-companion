# My Flower Companion

A companion-planting web app. Add the plants already in your garden, set your USDA
growing zone, and see which flowers, herbs, and vegetables help them thrive — and why.

Originally built as an Expo/React Native mobile app; rebuilt here as a plain React +
Vite single-page app.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy

Hosted on Vercel. Connect the GitHub repo in the Vercel dashboard — it auto-detects
the Vite build (`npm run build`, output directory `dist`) and redeploys on every
push to `main`. `vercel.json` rewrites all routes to `index.html` so client-side
routing (React Router) works on refresh and deep links.

**After the first deploy**, update the production URL in these files if it differs
from the placeholder (`https://my-flower-companion.vercel.app`) — e.g. once a custom
domain is attached:

- `index.html` — canonical link, Open Graph/Twitter tags, JSON-LD
- `public/robots.txt` — sitemap reference
- `scripts/generate-sitemap.mjs` — the `SITE_URL` constant (regenerates `sitemap.xml`)

## Stack

- React 19 + TypeScript
- Vite
- React Router (browser routing — Vercel handles SPA rewrites via `vercel.json`)
- No backend — all data (163 plants, companion relationships, 9-language translations)
  ships in the bundle; user gardens are saved to `localStorage`.

## SEO notes

- Meta tags, Open Graph/Twitter cards, canonical URL, and JSON-LD (`WebApplication`
  schema) live in `index.html`. Per-page `<title>` and meta description are set at
  runtime via `useDocumentMeta` in each page component.
- Every plant has its own real, linkable page at `/care/:plantId` (163 of them) —
  sun/water/spacing/tips plus that plant's companion and "avoid" pairings, each
  rendered as a real `<a>` (not a click handler), so crawlers can both reach and
  discover these pages by following links, not just via the sitemap.
- `scripts/generate-sitemap.mjs` regenerates `public/sitemap.xml` from the plant
  catalog automatically before every build (`npm run prebuild` / wired into
  `npm run build`), so new plants always get a sitemap entry with no manual step.
  Run `npm run sitemap` to regenerate it on its own.
- `public/robots.txt` disallows `/garden/*` — those pages are per-user data stored in
  the visitor's own browser and are meaningless to a crawler.
- This is still a client-rendered SPA with no server-side rendering, which remains a
  real ceiling on SEO: search engines must execute JavaScript to see any page's
  content, including these new plant pages. Googlebot generally handles that, just
  slower and less reliably than static HTML, and other engines are weaker at it. A
  further step here would be prerendering (snapshotting each route to static HTML at
  build time) — very feasible since all plant data is static and known at build time,
  but a bigger addition than the routing work itself.
