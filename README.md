# Finance UI Portfolio

A Vite multi-page portfolio with four standalone visual directions for the same small-business finance concept.

## Local development

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The production site is generated in `dist/`. Vercel is configured to install with `npm ci`, run the Vite build, and publish `dist/`.

## Routes

- `/` — style gallery
- `/demos/funding-01/` — Soft momentum
- `/demos/funding-02/` — Quiet authority
- `/demos/funding-03/` — Sunny guidance
- `/demos/funding-04/` — Blue horizon

Demo forms are presentation prototypes and do not transmit or store submitted details. The Style 04 artwork is served from `public/style-04-payment-waves.png`.
