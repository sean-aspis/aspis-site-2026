/**
 * Accent derivation, ported from renderVals() in "ASPIS Website v2.dc.html".
 *
 * The accent drives: section eyebrow, lede line, primary CTA background,
 * device glow, avatar chip, product badge, outgoing message bubbles, diagram
 * nodes and pulses.
 *
 * On-accent ink is chosen by LUMINANCE, not by hue family. The design file
 * carries the decision per product as `ctaText`; `onAccentInk` reproduces the
 * same rule for anything the data does not cover. ShieldiT Defense is
 * deliberately military green — never normalise it to blue.
 */

export function rgba(hex: string, alpha: number | string): string {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(full.substr(i, 2), 16));
  return `rgba(${r},${g},${b},${alpha})`;
}

/** Relative luminance (WCAG). */
export function luminance(hex: string): number {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const [r, g, b] = [0, 2, 4]
    .map((i) => parseInt(full.substr(i, 2), 16) / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Dark ink on light accents, white on dark ones.
 *
 * The threshold is a luminance test rather than a contrast measurement, which
 * is how the design file made the call. It is right for nine of the ten
 * industry accents; use `bestInk` where the result has to be guaranteed.
 */
export function onAccentInk(hex: string): string {
  return luminance(hex) > 0.35 ? '#04060E' : '#ffffff';
}

/**
 * The better of dark and white ink on a given accent, measured rather than
 * assumed.
 *
 * The design file paints #04060E on every industry accent. That is the right
 * call on nine of them — Defense & Intelligence #7EA184 is 7.05:1 dark against
 * 2.87:1 white — but Financial Services #4776B9 gives 4.39:1 dark, just under
 * AA, where white gives 4.61:1. Rather than special-casing one industry in the
 * page, the choice is measured for each.
 */
export function bestInk(accent: string): string {
  return contrastRatio('#04060E', accent) >= contrastRatio('#ffffff', accent)
    ? '#04060E'
    : '#ffffff';
}

/** WCAG contrast ratio between two hex colours. */
export function contrastRatio(a: string, b: string): number {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

/**
 * A readable version of an accent, for TEXT on the dark page.
 *
 * Several industry accents are mid-tone — Financial Services #4776B9 lands at
 * 4.39:1 on the raised band, Government #5C87AE at 5.5:1 on one surface and
 * under on the other — so small mono text painted in the raw accent fails
 * WCAG AA. Rather than restyling every eyebrow and numeral by hand, or
 * flattening ten distinct palettes into one safe blue, the accent is lifted
 * toward white in small steps until it clears the threshold against the
 * DARKER of the two section surfaces (both alternating grounds must pass).
 *
 * Hue is preserved: this is a lightness lift in linear-ish RGB space, so
 * Defense stays green and Financial Services stays blue. An accent that
 * already passes is returned untouched, which is most of them.
 */
export function readableAccent(accent: string, against = '#0e1524'): string {
  if (contrastRatio(accent, against) >= 4.5) return accent;

  const h = accent.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const rgb = [0, 2, 4].map((i) => parseInt(full.substr(i, 2), 16));

  for (let t = 0.05; t <= 1; t += 0.05) {
    const lifted = rgb.map((c) => Math.round(c + (255 - c) * t));
    const hex = '#' + lifted.map((c) => c.toString(16).padStart(2, '0')).join('');
    if (contrastRatio(hex, against) >= 4.5) return hex;
  }
  return '#ffffff';
}

/** CSS custom properties an accented route sets on its root element. */
export function accentVars(
  accent: string,
  opts: { ink?: string; soft?: string } = {}
): React.CSSProperties {
  return {
    ['--accent' as string]: accent,
    // Text-safe variant. `--accent` stays the design's colour and is what
    // borders, fills, glows and large display type use; `--accent-text` is for
    // small type, where AA has to hold. On most accents they are identical.
    ['--accent-text' as string]: readableAccent(accent),
    ['--accent-soft' as string]: opts.soft ?? rgba(accent, 0.16),
    ['--accent-ink' as string]: opts.ink ?? onAccentInk(accent),
    ['--accent-line' as string]: rgba(accent, 0.3),
    ['--accent-wash' as string]: rgba(accent, 0.1),
    ['--band-wash' as string]: rgba(accent, 0.05),
  } as React.CSSProperties;
}

/**
 * A hero band declares its bloom as background-image, NEVER the `background`
 * shorthand — the shorthand resets background-color and defeats the
 * nth-of-type alternation rules in globals.css.
 */
export function bandWash(accent: string, alpha = 0.05): string {
  return `linear-gradient(180deg,${rgba(accent, alpha)},rgba(5,7,14,0) 38%)`;
}

/** Intrinsic aspect ratios of the shipped screenshots. */
export const SHOT_RATIOS: Record<string, string> = {
  '/assets/shot-shieldit-security-blue.png': '414/845',
  '/assets/shot-defense-security-green.png': '841/1052',
  '/assets/shot-defense-chat.png': '746/864',
  '/assets/shot-shieldit-desktop-chats.png': '486/810',
  '/assets/shot-manageit-dashboard.png': '1694/847',
  '/assets/shot-sentineliq-compliance.png': '2902/1510',
  '/assets/shot-sentineliq-audit.png': '2410/1304',
  '/assets/shot-sentineliq-files.png': '2920/1556',
  '/assets/shot-shieldme-chats.png': '623/638',
};

/** Design-file asset paths are relative; public/ serves them from the root. */
export const asset = (p: string) => (p.startsWith('/') ? p : `/${p}`);
