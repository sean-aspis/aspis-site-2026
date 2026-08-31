import { PRODUCTS, type ProductKey } from '@/data/products';
import { SHOT_RATIOS, asset } from '@/lib/theme';

/**
 * Field derivation ported from renderVals() in "ASPIS Website v2.dc.html"
 * (the `product = Object.assign({}, rawProduct, {...})` block).
 *
 * The data modules carry the raw product record verbatim; everything the
 * template needs on top of it — shot layout, phone-mock message styling,
 * avatar initials — is computed here so the page and its sections stay
 * declarative.
 */

/* ------------------------------------------------------------------ types */

export type Msg = { who: string; text: string; mine: boolean };

export type Shot = {
  img: string;
  kind: string;
  n: string;
  label: string;
  title: string;
  body: string;
  tel: readonly (readonly string[])[];
};

export type ProductRecord = {
  shots: readonly Shot[];
  accent: string;
  accentSoft: string;
  ctaText: string;
  app: { title: string; sub: string; badge: string; msgs: readonly Msg[] };
  name: string;
  kicker: string;
  lede: string;
  intro: string;
  cta: string;
  blocks: readonly { title: string; items: readonly string[] }[];
  note: string;
};

/**
 * The data module is `as const`, so `PRODUCTS[key]` is a union of six literal
 * shapes. One cast here keeps every consumer working against a single type.
 */
export function getProduct(key: ProductKey): ProductRecord {
  return PRODUCTS[key] as unknown as ProductRecord;
}

/* --------------------------------------------------------------- gates */

/** Only ManageiT renders the dark console handset; everything else chats. */
export const isConsole = (key: ProductKey) => key === 'manageit';
/** SentinelIQ alone gets the extra three-view console section. */
export const isSentinelIQ = (key: ProductKey) => key === 'sentineliq';

/** Product name with the family prefix stripped, first two chars, uppercased. */
export const initials = (name: string) =>
  name.replace('ShieldiT ', '').slice(0, 2).toUpperCase();

/** No product record overrides it, so this is the title on all six routes. */
export const EXPERIENCE_TITLE = 'What the platform actually looks like.';

/* ------------------------------------------------------------- shot vals */

/**
 * Mean luminance of the opaque pixels in each shipped screenshot (0–255):
 *
 *   shot-shieldit-desktop-chats   243   light  → dark bezel
 *   shot-defense-security-green   218   light  → dark bezel
 *   shot-shieldit-security-blue   213   light  → dark bezel
 *   shot-defense-chat              40   dark   → sits raw (transparent cutout)
 *   shot-sentineliq-*           27–31   dark   → bordered stage
 *   shot-manageit-dashboard        24   dark   → bordered stage
 *
 * The light ones read as a white blob on the dark page, so they get the
 * `DeviceBezel` treatment from README §6 regardless of their `kind`.
 */
const LIGHT_SHOTS = new Set([
  '/assets/shot-shieldit-security-blue.png',
  '/assets/shot-shieldit-desktop-chats.png',
  '/assets/shot-defense-security-green.png',
  '/assets/shot-shieldme-chats.png',
]);

export type ShotVals = {
  src: string;
  width: number;
  height: number;
  ratio: string;
  n: string;
  label: string;
  title: string;
  body: string;
  tel: { k: string; v: string }[];
  cols: string;
  mediaOrder: number;
  textOrder: number;
  maxW: string;
  radius: string;
  border: string;
  wide: boolean;
  light: boolean;
};

/**
 * `i` is the index within the product's own shot list — the alternation of
 * media/text order is positional, exactly as in the design file.
 */
export function shotVals(s: Shot, i: number): ShotVals {
  const src = asset(s.img);
  const ratio = SHOT_RATIOS[src] ?? '16/10';
  const [width, height] = ratio.split('/').map(Number);
  const wide = s.kind === 'wide';
  const even = i % 2 === 0;
  return {
    src,
    width,
    height,
    ratio,
    n: s.n,
    label: s.label,
    title: s.title,
    body: s.body,
    tel: s.tel.map((t) => ({ k: String(t[0]).toUpperCase(), v: t[1] })),
    cols: wide ? '1fr' : 'repeat(auto-fit,minmax(min(300px,100%),1fr))',
    mediaOrder: wide ? 1 : even ? 1 : 2,
    textOrder: wide ? 2 : even ? 2 : 1,
    maxW: s.kind === 'phone' ? '320px' : s.kind === 'panel' ? '430px' : '1180px',
    radius: s.kind === 'phone' ? '0px' : '10px',
    border: s.kind === 'phone' ? 'none' : '1px solid rgba(122,160,255,.18)',
    wide,
    light: LIGHT_SHOTS.has(src),
  };
}

/* -------------------------------------------------------------- messages */

export type MsgVals = {
  who: string;
  text: string;
  align: 'flex-end' | 'flex-start';
  bg: string;
  fg: string;
  whoColor: string;
};

/**
 * Outgoing bubbles take the product accent as background and the product's
 * on-accent ink (`ctaText`) as the foreground — never a hardcoded white.
 */
export function msgVals(msgs: readonly Msg[], ctaText: string): MsgVals[] {
  const ink = ctaText || '#ffffff';
  return msgs.map((m) => ({
    who: m.mine ? 'You' : m.who,
    text: m.text,
    align: m.mine ? 'flex-end' : 'flex-start',
    bg: m.mine ? 'var(--accent-fill)' : '#F1F2F6',
    fg: m.mine ? 'var(--accent-ink)' : '#0B0D12',
    // The sender name is 9.5px, so it gets no contrast headroom to give away.
    // The previous values — white at 85% over the accent (3.69:1) and #7A8296
    // over #F1F2F6 (3.43:1) — both failed AA at that size. Full-strength ink
    // and a darker grey (4.63:1) fix it without changing the bubble colours.
    whoColor: m.mine ? ink : '#666D7E',
  }));
}
