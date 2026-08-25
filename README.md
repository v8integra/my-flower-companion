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
- `public/sitemap.xml` — all page URLs

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
- `public/robots.txt` disallows `/garden/*` — those pages are per-user data stored in
  the visitor's own browser and are meaningless to a crawler.
- This is a client-rendered SPA with no server-side rendering, which is a real
  ceiling on SEO: search engines must execute JavaScript to see page content, and
  content shown only inside a modal (e.g. individual plant care guides) isn't
  reachable by a crawler at all, since crawlers don't click buttons. The biggest
  further win here would be giving each plant its own crawlable URL (e.g.
  `/care/tomato`) instead of gating that content behind a click-to-open modal.
