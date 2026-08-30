# Porting contract — DC design file → Next.js App Router

Source of truth: `ASPIS Website v2.dc.html` (v1.4 handoff, 4,052 lines).
Design spec: the handoff `README.md`. Read §2 (tokens) and §5 (interaction)
before touching anything.

Everything below is fixed. Do not re-derive it, do not invent alternatives.

## 1. Where things live

| What | Path |
|---|---|
| Route pages | `src/app/<route>/page.tsx` |
| Section + page components | `src/components/<area>/*.tsx` |
| Shared primitives | `src/components/ui/Primitives.tsx` |
| Shell (header/footer/utility bar) | `src/components/shell/*` |
| Content data (auto-generated, verbatim) | `src/data/*.ts` |
| Accent maths, asset helpers | `src/lib/theme.ts` |
| Metadata helper | `src/lib/seo.ts` |
| Tokens, primitives, keyframes | `src/app/globals.css` |

## 2. Content rules — non-negotiable

- **All copy comes from `src/data/*.ts` or verbatim from the design file.**
  Never paraphrase, summarise, improve, or invent marketing copy. If a string
  is not in the data modules, copy it character-for-character out of the
  design file.
- **No "trust" terminology anywhere in copy or metadata.** Not "Enterprise
  Trust", "Trusted Communications", "Trust Layer", "Trust Boundary", "Device
  Trust". Use: Secure Communications, Device Security, Device Posture, Mobile
  Threat Defense, Security Architecture, Policy Control, Data Control,
  Governance, Communications Intelligence. (The `/security-and-trust` route
  path is the one exception — it is the page's own name in the design.)
- **Keep the qualifiers.** "varies by edition, deployment, configuration" and
  similar hedges are deliberate. FedRAMP appears only in qualified deployment
  language, never as a claim of authorization.
- Leadership bios are client-supplied verbatim. Do not rewrite.
- No customer logos, no analyst placements. Both were deliberately omitted.

## 3. Styling conventions

- **Tokens over literals.** Use `var(--surface-1)`, `var(--text-body)`,
  `var(--cyan)` etc. from `globals.css`. Only use a raw hex when the design
  file uses a one-off value that has no token (e.g. the light in-phone UI).
- **Inline style objects** are the porting idiom — the design file is 100%
  inline styles and reproducing them directly is what keeps fidelity. Tailwind
  is available but do not translate existing inline styles into utility
  classes.
- **Layout classes**: `.container` (1440px + `clamp(20px,4vw,56px)` gutter).
  Vertical rhythm is three tiers only — `.pad-chapter`, `.pad-standard`,
  `.pad-continuation`. Never invent a fourth.
- **Hover/focus**: the design's `style-hover` / `style-focus` attributes have
  no React equivalent. Use the existing classes — `.lnk-soft`, `.lnk-bright`,
  `.btn-primary`, `.btn-accent`, `.btn-ghost`, `.card-hover`, `.mega-item` —
  or add a new rule to `globals.css`. Never use JS mouse handlers for hover.

### Section alternation — read this twice

Surfaces and hairlines come from **three CSS rules in `globals.css` only**:

```css
main > section { background-color: var(--surface-0); }
main > section:nth-of-type(even) { background-color: var(--surface-1); }
main > section:nth-of-type(n+2) { border-top: 1px solid var(--hairline); }
```

Therefore:

- Every page section is a **direct** `<section>` child of `<main>`. Do not wrap
  sections in a `<div>` — that breaks `nth-of-type` and the rhythm inverts.
- **Never** set `background-color` or `background` (shorthand) on a `<section>`.
  The shorthand resets `background-color` and defeats the rules.
- A hero bloom is declared as `background-image` only:
  ```tsx
  <section style={{ backgroundImage: bandWash(accent) }}>
  ```
- **Do not add `border-bottom` / `border-top` to sections.** The design file
  carries a legacy inline `border-bottom` on most sections; combined with the
  `nth-of-type(n+2)` rule that doubles the hairline to 2px. Drop the inline
  border — the CSS rule alone is correct, and this is a deliberate fix.
- Never assign surfaces by source-order index. Conditional sections
  (`hasGov`, `hasConnectivity`, `isSentinelIQ`) make index-based phase wrong.

## 4. Accents

`src/lib/theme.ts` has the maths. On an accented route set the CSS vars once on
the page's `<main>`:

```tsx
import { accentVars } from '@/lib/theme';
<main id="main" style={accentVars(product.accent, { ink: product.ctaText, soft: product.accentSoft })}>
```

Then `var(--accent)`, `var(--accent-soft)`, `var(--accent-ink)`,
`var(--accent-line)`, `var(--accent-wash)` are available to every child, and
`.eyebrow` / `.btn-accent` pick them up automatically.

- **On-accent ink is by luminance, not hue family.** The value lives in the
  data as `ctaText` — pass it through. Never hardcode white.
- **ShieldiT Defense is military green (`#4E7A57`) on purpose.** Never
  normalise it to blue.

## 5. Images

- Assets are in `public/assets/…`. Design-file paths are relative
  (`assets/x.png`) — prefix with `/`.
- Use `next/image` with explicit `width`/`height` (intrinsic ratios are in
  `SHOT_RATIOS` in `theme.ts`). Add `priority` only to above-the-fold images.
- **The ShieldiT phone screens are light (mean luminance ~209).** Never place
  them raw on the dark page. Wrap in `<DeviceBezel accent={...}>`.
- ManageiT and SentinelIQ shots are already dark — use `<Stage>`.

## 6. Interactivity

- Default to **server components**. Add `'use client'` only to the leaf that
  actually needs state, and keep it small.
- Tabbed strips, console view switchers and carousels are client leaves; the
  surrounding section stays a server component.
- Interactive tab styling is derived in the component from the active index,
  not stored in data.
- Respect `prefers-reduced-motion` — `globals.css` already neutralises
  animations globally, so no per-component handling is needed.

## 7. Routes

| Design `page` | URL |
|---|---|
| `home` | `/` |
| `platform` | `/platform` |
| `product` + key | `/products/[key]` (6) |
| `solutions` | `/solutions` |
| `solution` + key | `/solutions/[key]` (10) |
| `capability` + key | `/capabilities/[key]` (8) |
| `why` | `/why-aspis` |
| `resources` | `/resources` |
| `about` | `/about` |
| `leadership` | `/leadership` |
| `contact` | `/contact` |
| `trust` | `/security-and-trust` |
| `partners` | `/partners` |
| `shieldme` | `/shieldme` |
| `dealreg` | `/partners/deal-registration` |

Dynamic routes must export `generateStaticParams` so every page prerenders,
and `generateMetadata` using `pageMeta()` from `@/lib/seo`.

Every page's root element is `<main id="main">` (the skip link targets it).

## 8. Forms

Both forms POST to Formspree (`EXTERNAL.formspree`) with `fetch`, an AJAX
pattern with no library. Each carries a `_gotcha` honeypot and a `_subject`
line. Use the shared `<Form>` component in `src/components/forms/`.

## 9. Definition of done for a route

- `npx next build` is clean — no type errors, no ESLint errors.
- The route prerenders as static (`○` in the build output).
- Copy matches the design file exactly.
- Sections are direct children of `<main>`, with no inline section background
  or border.
- Metadata is set via `pageMeta()`.
- Interactive bits are client leaves; everything else is a server component.
