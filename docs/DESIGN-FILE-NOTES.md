# Notes on the v1.4 design file

Things found while porting `ASPIS Website v2.dc.html` that need a decision from
someone, or that the port deliberately changed. Nothing here is a blocker.

## Deliberately fixed in the port

| # | In the design file | What the port does | Why |
|---|---|---|---|
| 1 | Most `<section>` elements carry an inline `border-bottom: 1px solid rgba(140,176,255,.13)` **on top of** the `nth-of-type(n+2)` `border-top` rule in the helmet | Inline border dropped; the CSS rule alone draws the hairline | The two together render a doubled 2px line at every section boundary. The handoff README says the rule owns the boundary. |
| 2 | The platform products band uses the `background` shorthand on a `<section>` (design line 1202) | Dropped | The shorthand resets `background-color` and defeats the alternation rules — the exact failure the README warns about. It also placed a surface-1 tone directly under a surface-1 section. |
| 3 | On-accent ink is hardcoded `#04060E` in three places on product pages (shot-number chip, console avatar, SentinelIQ mark) and `#ffffff` on the chat composer button | All read `var(--accent-ink)` | The hardcoded values are wrong for Enterprise and Defense (white ink) and for FSX / Executive / SentinelIQ (dark ink) respectively. |
| 4 | `required="{{ fld.required }}"` on the deal-registration form | React booleans | The design renders `required="false"`, which HTML treats as truthy — seven optional fields would have been wrongly required. |
| 5 | The homepage CTA's primary button is `href="#demo"` inside `<section id="demo">` with no handler (line 1155) | Points at `/contact` | It was a dead link. |
| 6 | The `blip` keyframe is referenced by the chat typing indicator but never defined | Defined in `globals.css` | The indicator was static. |
| 7 | A hidden `display:none` duplicate of the console severity legend (lines 847–853) | Omitted | Invisible DOM only. |
| 8 | The ManageiT console is a fixed-width desktop mock that overflowed the page below ~720px | Wrapped in a keyboard-focusable `overflow-x: auto` container | The page body no longer scrolls horizontally at any viewport. |
| 9 | The header measured `window.innerWidth` in JS to choose desktop vs mobile nav | CSS media queries | The server has no viewport, so the measured version shipped the desktop nav in the HTML and swapped it after hydration — a visible flash on mobile plus horizontal overflow before JS ran. |
| 10 | `repeat(auto-fit, minmax(400px, 1fr))` and similar | `minmax(min(400px,100%), 1fr)` | Identical above the breakpoint; below it the column shrinks instead of overflowing. |

## Needs a decision — content

- **Chapter captions don't track chapter numbers.** Chapter 05 is captioned
  `CHAPTER 03` (design line 947) and chapter 08 is captioned
  `CHAPTER 04 — PROOF`; chapters 03, 04, 06, 07, 09 and 10 have no caption at
  all. **Reproduced verbatim** — the port does not renumber copy. Decide
  whether the captions should be corrected or dropped entirely.
- **No responsible-disclosure copy exists.** The nav promises "Security &
  Responsible Disclosure — Report a security issue to the ASPIS security team"
  and the footer links to `/security-and-trust#responsible-disclosure`. The
  anchor resolves, but no "how to report a vulnerability" text exists anywhere
  in the design. This needs writing.
- **No legal documents.** The footer's Legal column had `href="#l"` on every
  link. The port adds `/legal/[slug]` pages that state plainly the document is
  not yet published and link to Contact — they are `noindex`. Replace the
  entries in `src/app/legal/[slug]/page.tsx` when the reviewed documents land.
- **Deal-registration selects have no empty first option**, so an untouched
  form silently submits the first entry (`partner_type` → "MSP / MSSP",
  `customer_industry` → "Enterprise / Corporate"). Reproduced as-is, but it
  will produce misleading registrations. Adding a disabled placeholder option
  is a one-line change per select.
- `products_of_interest` is a `multiple` select with no visible cue that
  multiple selection is possible.

## Needs a decision — colour and contrast

- **Financial Services solution accent.** `#4776B9` with the design's
  hardcoded dark ink `#04060E` measures **4.39:1** — just under WCAG AA for
  normal text. White ink measures 4.61:1. Every other industry is better off
  with the design's dark ink (Defense & Intelligence `#7EA184` is 7.05:1 dark
  vs 2.87:1 white), so the port keeps dark ink throughout for consistency.
  This one accent is worth revisiting.
- **The homepage platform-tab CTA hardcodes dark ink on ShieldiT's `#4C7DFF`**
  (design line 719), whose luminance would select white under the README's own
  rule. At bold 14.5px it passes (~5.4:1), but it is the one place the design
  departs from the stated luminance rule.
- **Chapter 10's graph panel has a cyan border inside a violet chapter**, and
  **chapter 08's industry cards hover to cyan inside a periwinkle chapter**.
  Both reproduced verbatim; both read like copy-paste from the cyan chapter 04.
- Chapters 07 and 10 have no tapered rule or caption in their openers, unlike
  06, 08 and 09. Possibly intentional (both are two-column), but it breaks the
  opener rhythm.

## Padding tiers

The README specifies three vertical tiers. Four sections in the design use a
hybrid that is not one of them (a standard top with a chapter bottom), and the
homepage CTA uses `clamp(80px,10vw,160px)` — a genuine fourth tier. The port
snaps all of these to the nearest of the three rather than inventing a fourth;
the largest discrepancy is about 20px of bottom padding at the widest
viewport.

## Dead data in the design file

- `whyNav`, `resourceNav`, `companyNav`, `missionNav` are built in
  `renderVals()` but referenced by no template — leftovers from an earlier
  mobile-drawer or footer draft. Their targets are also stale (several point
  at `why` rather than the capability routes that now exist).
- `defense-intelligence` carries `horizontal: true` and `enterprise` carries a
  `shots` array in the solutions map; both are product-template fields that
  leaked in and are used by nothing.
- `badge-soc2.png`, `badge-iso27001.png`, `sentineliq-logo.png` and
  `aspis-logo-horizontal-command.png` ship as assets but no template renders
  them. They are kept in `public/assets/`.
- `manageit-dashboard.png` (837×780) was an unused duplicate of
  `shot-manageit-dashboard.png` and the three `ref-sentineliq-*.png`
  "reference only" uploads were not used by any template; all four were
  removed from `public/` to keep the deployed asset set to what the site
  actually serves. They remain in the design handoff folder.
- Markup nesting bug at design lines 1346–1383: the `</sc-if>` for
  `product.isChat` closes before the `</div>` it opened.
- `hint-placeholder-count` on the resources listing says 5; the data has 6.
  Authoring hint only.
- The `signal` keyframe runs `stroke-dashoffset 0 → -320` while the dash
  period is `16 300` = 316, so each loop jumps 4px. `-316` would be seamless.
  Left as specified in README §5.

## Asset note

`aspis-logo-horizontal-electric.png` is 8972×3402 and is displayed at 26–32px
tall. `next/image` resizes it on demand so visitors never download the full
file, but a smaller master (say 1200px wide) would make the repo and the image
optimizer cheaper. Worth re-exporting.

`headshot-candice-c1.png` is 368×460 while the other nine portraits are
900×1125 — same 4:5 ratio, so it upscales slightly in the leadership grid.
Worth re-exporting at 900px for parity.
