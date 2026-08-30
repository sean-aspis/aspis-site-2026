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

/** Dark ink on light accents, white on dark ones. */
export function onAccentInk(hex: string): string {
  return luminance(hex) > 0.35 ? '#04060E' : '#ffffff';
}

/** CSS custom properties an accented route sets on its root element. */
export function accentVars(
  accent: string,
  opts: { ink?: string; soft?: string } = {}
): React.CSSProperties {
  return {
    ['--accent' as string]: accent,
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
