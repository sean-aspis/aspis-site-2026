import type { CSSProperties } from 'react';

/** Shared inline style fragments for the solution template sections. */

/** The section heading used by every solution body section. */
export const SECTION_H2: CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(25px,2.7vw,40px)',
  lineHeight: 1.1,
  letterSpacing: '-.03em',
  fontWeight: 700,
  textWrap: 'balance',
};

/**
 * The shared-hairline card grid: each cell pulls its right and bottom edges
 * one pixel back so neighbours overlap into a single-pixel rule.
 */
export const GRID_CELL: CSSProperties = {
  border: '1px solid rgba(122,160,255,.14)',
  margin: '0 -1px -1px 0',
};

/** Small print under a card grid. */
export const FOOTNOTE: CSSProperties = {
  fontSize: 13.5,
  lineHeight: 1.6,
  color: 'var(--text-dim)',
  margin: '22px 0 0',
  maxWidth: 680,
};
