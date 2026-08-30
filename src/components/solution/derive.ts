import { rgba } from '@/lib/theme';
import { ROUTES } from '@/data/nav';
import { SOLUTIONS, type SolutionKey } from '@/data/solutions';

/**
 * Solution template derivation — ported from renderVals() in
 * "ASPIS Website v2.dc.html" (the `rawSolution` → `solution` Object.assign,
 * design file lines 3326–3363).
 *
 * The design file computes these per render; here they are computed once per
 * route at build time. Every value below is the design file's own formula —
 * do not re-derive or "improve" the alphas, the labels, or the fallbacks.
 */

/**
 * Shape of one raw entry in SOLUTIONS.
 *
 * The data module is `as const` and the ten industries are heterogeneous:
 * `connectivity`, `boundary`, `ecosystem`, `protectNote`, `pipelineNote` and
 * `productsNote` each appear on only one or two of them. `SOLUTIONS[key]` for
 * a union key therefore yields a union whose optional members cannot be read
 * field-by-field. This type states the full shape once, with the sparse fields
 * marked optional, and `deriveSolution` reads the entry through it.
 */
export type RawSolution = {
  name: string;
  accent: string;
  accent2: string;
  glow: string;
  product: string;
  eyebrow: string;
  headline: string;
  lede: string;
  intro: string;
  intro2: string;
  cta1: string;
  cta2: string;
  hub: readonly string[];
  nodes: readonly string[];
  status: readonly (readonly string[])[];
  shiftTitle: string;
  shiftNote: string;
  before: readonly string[];
  after: readonly string[];
  beforeLabel?: string;
  afterLabel?: string;
  protectTitle: string;
  protectNote?: string;
  protect: readonly { t: string; d: string }[];
  pipelineTitle: string;
  pipelineNote?: string;
  pipeline: readonly (readonly string[])[];
  boundary?: string;
  connectivityTitle?: string;
  connectivityNote?: string;
  connectivity?: readonly (readonly string[])[];
  govTitle: string;
  govNote: string;
  gov: readonly string[];
  ecosystemTitle?: string;
  ecosystem?: readonly string[];
  products: readonly { n: string; d: string; key: string }[];
  productsNote?: string;
  ctaTitle: string;
};

export type StatusChip = { k: string; v: string; color: string };
export type ProtectCard = { n: string; t: string; d: string };
export type PipelineStep = {
  t: string;
  d: string;
  arrow: string;
  color: string;
  border: string;
  bg: string;
};
export type ConnectivityRow = { k: string; v: string };
export type ProductLink = { n: string; d: string; key: string; href: string };

export type Solution = ReturnType<typeof deriveSolution>;

/**
 * The band bloom every solution section carries. Declared as background-image
 * against the `--band-wash` the page sets on <main>, never as the `background`
 * shorthand — the shorthand resets background-color and defeats the
 * nth-of-type alternation rules in globals.css.
 */
export const BAND_WASH_IMAGE = 'linear-gradient(180deg,var(--band-wash),rgba(5,7,14,0) 38%)';

export function deriveSolution(key: SolutionKey) {
  const raw = SOLUTIONS[key] as unknown as RawSolution;

  return {
    ...raw,
    key,

    // Accent maths — the design file's exact alphas.
    accentLine: rgba(raw.accent, 0.3),
    accentWash: rgba(raw.accent, 0.1),
    bandWash: rgba(raw.accent, 0.045),
    heroGlow: `radial-gradient(ellipse 55% 70% at 78% 8%,${raw.glow},rgba(5,7,14,0) 65%)`,

    // Before / after column labels fall back to the generic pair.
    beforeLabel: raw.beforeLabel || 'TRADITIONAL',
    afterLabel: raw.afterLabel || 'MODERN',

    // Optional prose, and the flags that gate the sections carrying it.
    protectNote: raw.protectNote || '',
    pipelineNote: raw.pipelineNote || '',
    productsNote: raw.productsNote || '',
    hasProtectNote: !!raw.protectNote,
    hasPipelineNote: !!raw.pipelineNote,
    hasProductsNote: !!raw.productsNote,

    hasGov: (raw.gov || []).length > 0,
    hasEcosystem: !!raw.ecosystem,
    ecosystemTitle: raw.ecosystemTitle || '',
    ecosystem: raw.ecosystem || [],
    hasBoundary: !!raw.boundary,
    boundary: raw.boundary || '',
    hasConnectivity: !!raw.connectivity,
    connectivityTitle: raw.connectivityTitle || '',
    connectivityNote: raw.connectivityNote || '',
    connectivityRows: (raw.connectivity || []).map(
      (c): ConnectivityRow => ({ k: c[0], v: c[1] })
    ),

    // First status chip carries the accent; the rest are bright neutral.
    status: raw.status.map(
      (s, i): StatusChip => ({ k: s[0], v: s[1], color: i === 0 ? raw.accent : '#C0CBE4' })
    ),

    protect: raw.protect.map((p, i): ProtectCard => ({ n: '0' + (i + 1), t: p.t, d: p.d })),

    // First step is the neutral input to the pipeline; the rest are accented.
    // The last step drops the arrow.
    pipelineSteps: raw.pipeline.map(
      (p, i): PipelineStep => ({
        t: p[0],
        d: p[1],
        arrow: i === raw.pipeline.length - 1 ? '' : '→',
        color: i === 0 ? '#8B98B8' : raw.accent,
        border: i === 0 ? 'rgba(122,160,255,.16)' : rgba(raw.accent, 0.3),
        bg: i === 0 ? 'transparent' : rgba(raw.accent, 0.07),
      })
    ),

    // ShieldMe is a consumer route of its own; every other product entry is a
    // product-detail route.
    productList: raw.products.map(
      (p): ProductLink => ({
        ...p,
        href: p.key === 'shieldme' ? ROUTES.shieldme : `/products/${p.key}`,
      })
    ),

    // The hero / CTA secondary button points at the industry's lead product.
    productHref: `/products/${raw.product}`,
  };
}
