# CLAUDE.md — nowcitylabs.com

Instructions for any Claude agent working on this repo. The parent directory
`../CLAUDE.md` has broader project context (three entities, people, strategic
positioning). This file is repo-specific.

## What this site is

nowcitylabs.com is the B2B development services site for Now City Labs —
the development-services and intelligence arm of Now City Inc. Audience:
landowners, regional operators, municipalities, and mission-aligned capital.

Sibling sites (linked from home strip and footer):
- nowcity.co — consumer-facing neighborhood vision
- urbanreboot.org — non-profit, mission-aligned feasibility

Never conflate these three entities in copy. If unsure, ask.

## Tech stack

- Astro 4 (static site generator) — `output: 'static'`
- Tailwind CSS 3 — brand tokens in `tailwind.config.mjs`
- Preact — used only for interactive islands (OutcomesComparison)
- Deployed: Cloudflare Pages, auto-deploys on push to `main`
- Repo: github.com/erikgillberg/nowcitylabs

## File map

```
src/
├── pages/                    one file per route
│   ├── index.astro           /             (Home)
│   ├── stack.astro           /stack/       (The Stack)
│   ├── services.astro        /services/    (Services + engagement framework)
│   ├── outcomes.astro        /outcomes/    (Mounts OutcomesComparison)
│   └── partners.astro        /partners/    (Ecosystem + positioning)
├── components/
│   ├── Header.astro          top nav (all pages)
│   ├── Footer.astro          footer (all pages)
│   └── OutcomesComparison.tsx  interactive island, metrics defined inline
├── layouts/
│   └── Layout.astro          site shell, SEO meta tags
└── styles/
    └── global.css            Tailwind directives + component classes

tailwind.config.mjs           brand palette, fonts, container widths
astro.config.mjs              integrations (Tailwind + Preact)
```

## Update workflow

Edit locally → preview → commit → push. Cloudflare rebuilds on push.

```bash
npm run dev          # localhost:4321, hot-reloads on save
# edit .astro files in any editor
# check browser, iterate
npm run build        # optional: verify clean build before push
git add -A
git commit -m "descriptive message"
git push
```

Deploy typically live within ~60 seconds of push. Watch:
Cloudflare dashboard → Workers & Pages → nowcitylabs → Deployments.

## Voice & brand rules (hard rules)

1. **Never name specific vendors.** The X tool suite (Anori, Tapestry, Taara,
   Materra) is internal reference only. Describe by capability: "AI-powered
   pre-development intelligence," "grid/energy analysis," "wireless
   connectivity infrastructure," "circular materials tracking."

2. **Substantive content must live in visible HTML.** No accordion-hidden
   or JS-gated copy for primary value propositions — SEO discounts it.
   Expandable UI is only OK for supplementary detail (e.g., "Method"
   footnotes on the outcomes tool, where the summary is already visible).

3. **Three entities are distinct.** Now City Inc. ≠ Now City Labs ≠
   Urban Reboot. Check before writing copy that blurs them.

4. **Honesty > puff.** Outcomes numbers are directional ranges based on
   comparable-project benchmarks. The /outcomes page says this out loud.
   Never change a metric without updating its method note.

## Voice (from Brand Bible)

- Rigorous, calm, confident — not hype-y or performative
- Declarative sentences. Short paragraphs. `text-wrap: balance` in headings
- Avoid: "revolutionary," "disruptive," "unlock value," "bleeding edge"
- Prefer: "durable," "defensible," "integrated," "patient," "measurable"
- Audience can read — no need to over-explain

## Design tokens (quick reference)

Brand palette (in tailwind.config.mjs; use Tailwind classes, not hex):

| Token     | Hex     | Tailwind        | Use                           |
|-----------|---------|-----------------|-------------------------------|
| Forest    | #1F3A34 | forest-700      | Primary, headings, nav        |
| Stone     | #6E736E | stone-700       | Body text, secondary          |
| Cream     | #F6F4EE | cream           | Background (default)          |
| Cream 50  | —       | cream-50        | Alternate section bg          |
| Copper    | #B87333 | copper-400      | Accent, underlines, eyebrow   |
| Sage      | #A6B8A4 | sage            | Tertiary accent               |

Typography:
- `font-display` → Playfair Display (Canela fallback) — for h1–h4
- `font-sans` → Inter — for body

Utility classes (defined in `global.css`):
- `container-wide` / `container-narrow` / `container-prose` — page width
- `btn-primary` / `btn-outline` — buttons
- `eyebrow` — small caps label above a heading
- `lede` — oversized intro paragraph
- `prose-body` — body copy with correct line-height + size
- `rule-thin` — 12×1px forest-tinted divider

## Common change recipes

**Change a headline or copy block**
Find the string in the relevant `src/pages/*.astro` file. Edit in place.

**Change a nav item or footer link**
`src/components/Header.astro` (nav) or `src/components/Footer.astro`.

**Add a new page**
1. Create `src/pages/newpage.astro`, mirror the structure of an existing page
   (start with `import Layout from '../layouts/Layout.astro';`)
2. Add to nav in `src/components/Header.astro` and footer in `Footer.astro`
3. Ensure the Layout call has a `title` and `description` prop for SEO

**Update an Outcomes metric**
Edit `src/components/OutcomesComparison.tsx`. Each metric is an object
in the `METRICS` array with: `label`, `audience`, `summary`, `direction`,
`ncn`, `traditional`, `delta`, `method`. Always update `method` if changing
numbers. NCN benchmark constants are at the top of the file.

**Add a new Outcomes metric (promote from v1.1 roadmap)**
Add a new object to `METRICS`. Remove it from the v1.1 roadmap list in
`outcomes.astro`. Confirm the metric has primary-source data before
promoting — if not, it stays in v1.1.

**Change a brand color**
Edit the relevant scale in `tailwind.config.mjs` → `theme.extend.colors`.
Affects entire site. Run `npm run dev` to verify nothing looks broken.

**Change fonts**
Edit `src/styles/global.css` (the `@import url(...)` line for Google Fonts)
AND `tailwind.config.mjs` (the `fontFamily` keys). Both must agree.

## Things to check before pushing

- [ ] `npm run build` passes with no errors (warnings are usually fine)
- [ ] No vendor names (Anori, Tapestry, Taara, Materra) in client-facing copy
- [ ] External links have `rel="noopener"`
- [ ] New pages have `title` and `description` props on the Layout
- [ ] Copy renders in visible HTML (not hidden in an accordion/JS tab)

## Things NOT to touch without asking

- `astro.config.mjs` — breaking the build is easy, and Cloudflare's preset
  relies on the current config
- `tailwind.config.mjs` brand tokens (forest/copper/sage/cream) — changing
  these restyles the entire site
- `tsconfig.json` — Preact JSX config is load-bearing
- The `.sandbox-git-*` pattern in `.gitignore` — leftover from initial
  scaffolding; harmless but don't rename

## Troubleshooting

- **Build fails on Cloudflare with rollup/native error**: Usually a
  platform-specific binary mismatch. Push again — most transient. If
  persistent, delete `package-lock.json` locally, `npm install`, push.
- **Site loads but styling looks wrong**: Hard refresh (Cmd+Shift+R).
  If still broken, check the build log in Cloudflare — Tailwind may have
  dropped a class it couldn't find.
- **Local dev server won't start, port 4321 in use**: `npm run dev -- --port 3000`.

## Adjacent reference

- Brand Bible: `../NOW CITY LABS Brand Bible_April 2026.md` (parent dir)
- Parent project instructions: `../CLAUDE.md`
- Scraped source content: `../nowcity-*.md`, `../urbanreboot.md`
