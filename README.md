# ASPIS Cyber — website

Next.js 15 (App Router) port of the v1.4 design handoff
(`ASPIS Website v2.dc.html`), built to deploy on Vercel.

19 screens, all statically prerendered. Dark institutional aesthetic with a
semantic colour system where colour carries meaning, not decoration.

---

## Quick start

```bash
npm ci
npm run dev          # http://localhost:3000
```

| Script | What it does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build — must be clean before you deploy |
| `npm start` | Serve the production build locally |
| `npm run lint` | ESLint (next/core-web-vitals + typescript) |
| `npm run typecheck` | `tsc --noEmit` |

Node 20 or newer.

---

## Deploying to Vercel

### First deploy

1. Push this directory to its GitHub repo.
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework preset is detected as **Next.js**. Leave the build and output
   settings alone — `vercel.json` already pins them.
4. Add the one environment variable below, then **Deploy**.

### Environment variables

| Name | Scope | Value | Why |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production | `https://www.aspiscyber.com` | Canonical URLs, `sitemap.xml`, and OG tags. Set it to the real production domain. |

Set it for **Production only**. Preview and development deployments fall back
to the Vercel-assigned URL automatically (`src/lib/seo.ts`), so canonical tags
on a preview never point at production.

### What is already configured

- **`vercel.json`** — Next.js framework preset, `npm ci` install, `iad1`
  region, `cleanUrls`, no trailing slash.
- **`next.config.ts`** — security headers (HSTS, `nosniff`, `SAMEORIGIN`,
  Referrer-Policy, Permissions-Policy), a one-year immutable cache on
  `/assets/*`, and AVIF/WebP image formats.
- **`robots.ts`** — allows crawling on production, blocks it on every preview
  deployment, and points at the sitemap.
- **`sitemap.ts`** — all 39 URLs, generated from the data modules.
- Every route prerenders as static HTML, so pages are served straight from
  Vercel's edge cache. There are no serverless functions and no runtime
  environment dependencies.

### Custom domain

Add the domain in **Project → Settings → Domains**, then update
`NEXT_PUBLIC_SITE_URL` to match and redeploy so canonicals and the sitemap
pick it up.

---

## Project layout

```
src/
  app/                     route segments — one folder per URL
    globals.css            design tokens, layout primitives, hover states, keyframes
    layout.tsx             shell: fonts, metadata, utility bar, header, footer
    sitemap.ts robots.ts   SEO plumbing
  components/
    shell/                 utility bar, header + mega menu + mobile drawer, footer
    ui/Primitives.tsx      ChapterHeader, Panel, Chip, DeviceBezel, Stage, Telemetry…
    home/ product/ solution/ pages/ forms/
  data/                    AUTO-GENERATED content, verbatim from the design file
  fonts/                   self-hosted Archivo / Space Grotesk / IBM Plex Mono
  lib/theme.ts             accent maths, on-accent ink, asset ratios
  lib/seo.ts               metadata helper
public/assets/             images, world maps
design/map-source/         inputs for regenerating the dotted world map
docs/PORTING.md            the porting contract — read before changing anything
```

### `src/data/` is generated

Those files are transcribed verbatim from the design file's `productData()`,
`solutionData()`, `capabilityData()`, `siqData()` and `renderVals()`. Editing
copy there is fine; just keep it in sync with the design file, and never
paraphrase — the qualifiers ("varies by edition, deployment, configuration")
are deliberate.

---

## Rules that are easy to break

Read `docs/PORTING.md` before editing components. The two that bite hardest:

**1. Section surfaces come from three CSS rules, never from an index.**

```css
main > section { background-color: var(--surface-0); }
main > section:nth-of-type(even) { background-color: var(--surface-1); }
main > section:nth-of-type(n+2) { border-top: 1px solid var(--hairline); }
```

So every `<section>` must be a **direct child of `<main>`** — no wrapper divs —
and no section may set `background-color` or the `background` shorthand (the
shorthand resets `background-color` and defeats the rules). Hero blooms use
`background-image` only. Several sections are conditionally rendered, which is
exactly why `nth-of-type` is used: it resolves against actually-rendered
siblings, so the rhythm self-corrects.

**2. On-accent ink is chosen by luminance, not hue family.**

Dark ink `#04060E` on FSX, Executive, ManageiT and SentinelIQ; white on
Enterprise and Defense. The value travels in the data as `ctaText` — pass it
through `accentVars()` and read `var(--accent-ink)`. Never hardcode white.

And: **ShieldiT Defense is military green (`#4E7A57`) on purpose.** Never
normalise it to blue.

---

## Content rules enforced site-wide

- **No "trust" terminology** in copy — not "Enterprise Trust", "Trusted
  Communications", "Trust Layer", "Trust Boundary", "Device Trust". Use Secure
  Communications, Device Security, Device Posture, Mobile Threat Defense,
  Security Architecture, Policy Control, Data Control, Governance,
  Communications Intelligence. (The `/security-and-trust` route path is the
  page's own name in the design and is the sole exception.)
- FedRAMP appears only in qualified deployment language, never as a claim of
  authorization.
- Leadership bios are client-supplied verbatim. Do not rewrite.
- No customer logos and no analyst placements — deliberately omitted rather
  than invented. Add when rights are confirmed.

---

## Forms

`/contact` and `/partners/deal-registration` POST to Formspree
(`https://formspree.io/f/xbgrqybq`) via `fetch` — an AJAX pattern with no
library. Both carry a `_gotcha` honeypot and a `_subject` line.

To repoint at a CRM, change `EXTERNAL.formspree` in `src/data/nav.ts`. If the
new endpoint needs a secret, move the POST into a route handler under
`src/app/api/` so the key stays server-side — that is the only thing here that
would introduce a serverless function.

---

## Known gaps carried over from the design

- **No CMS.** Resources, newsroom and threat research are static.
- **No responsible-disclosure copy.** The nav and footer link to
  `/security-and-trust#responsible-disclosure`; the anchor resolves, but the
  "how to report a vulnerability" text has not been written.
- **Legal pages are placeholders.** `/legal/privacy-policy`, `/terms-of-use`,
  `/cookie-policy` and `/accessibility` render an explicit "not yet published"
  notice rather than invented policy text, and are `noindex`. Replace the body
  of each entry in `src/app/legal/[slug]/page.tsx` when the reviewed documents
  land.
- **Not yet audited to WCAG 2.2 AA.**
- `badge-soc2.png`, `badge-iso27001.png`, `sentineliq-logo.png` and
  `aspis-logo-horizontal-command.png` ship in `public/assets/` but no page
  renders them — the design file never placed them either.

## Regenerating the world map

`public/assets/world-map-dotted.svg` is generated, not drawn. Pipeline: decode
`design/map-source/countries-110m.json` arcs → equirectangular project to a
1000×460 viewBox → emit one path → clip a 7px dot pattern to it. Never
hand-draw geography.
