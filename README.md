# My Flower Companion

A companion-planting web app. Add the plants already in your garden, set your USDA
growing zone, and see which flowers, herbs, and vegetables help them thrive — and why.

Originally built as an Expo/React Native mobile app; rebuilt here as a plain React +
Vite single-page app for hosting on GitHub Pages.

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

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the app and
publishes `dist/` to GitHub Pages automatically. In the repo's Settings → Pages,
set the source to **GitHub Actions** (one-time setup).

The site is served at `https://v8integra.github.io/myFlowerCompanion/`. If the repo
is ever renamed, update the `base` path in `vite.config.ts` to match.

## Stack

- React 19 + TypeScript
- Vite
- React Router (hash-based routing, so it works on GitHub Pages without server rewrites)
- No backend — all data (100+ plants, companion relationships, 9-language translations)
  ships in the bundle; user gardens are saved to `localStorage`.
