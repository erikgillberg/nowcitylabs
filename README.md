# nowcitylabs.com

The Now City Labs website. Built with [Astro](https://astro.build/), styled
with [Tailwind CSS](https://tailwindcss.com/), interactive pieces written in
[Preact](https://preactjs.com/). Deployed as static HTML.

## Local development

Requires Node.js 18.17+ (tested on Node 22).

```bash
npm install
npm run dev        # starts local dev server at http://localhost:4321
npm run build      # builds production static output to ./dist
npm run preview    # serves the built output locally
```

## Project structure

```
src/
├── components/        # Astro + Preact UI pieces
│   ├── Header.astro
│   ├── Footer.astro
│   └── OutcomesComparison.tsx   # interactive island
├── layouts/
│   └── Layout.astro   # site-wide shell
├── pages/             # each file = one route
│   ├── index.astro    # /
│   ├── stack.astro    # /stack/
│   ├── services.astro # /services/
│   ├── outcomes.astro # /outcomes/
│   └── partners.astro # /partners/
└── styles/
    └── global.css     # Tailwind base + brand tokens + components
```

## Editing copy

Page copy lives directly in each `.astro` file inside `src/pages/`. Open
the file, change the strings, save, push — Cloudflare rebuilds on push.

Brand tokens (colors, type) are defined in `tailwind.config.mjs`.

## Deploying

Cloudflare Pages watches the `main` branch. On push it runs
`npm run build` and publishes `./dist`.

## Brand source

See `../NOW CITY LABS Brand Bible_April 2026.md` in the parent directory
for voice, visual, and positioning guidance.
