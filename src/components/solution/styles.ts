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
 * one pixel back so neighbors overlap into a single-pixel rule.
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

/**
 * Column count for a shared-hairline card grid.
 *
 * `auto-fit` with a min track fills the row and then leaves whatever is left
 * over stranded — six cards at 1440px come out 4 + 2, which reads as an
 * unfinished row rather than a grid. Choosing the column count from the item
 * count keeps every row full: six go 3 + 3, five go 3 + 2, four sit in one row.
 *
 * Returned as a custom property; the `.auto-grid` rule in globals.css collapses
 * to two columns and then one below the desktop breakpoints, so this only
 * decides the widest layout.
 */
export function gridCols(n: number): CSSProperties {
  const cols = n <= 4 ? n : n === 5 || n === 6 ? 3 : 4;
  return { ['--cols' as string]: String(cols) } as CSSProperties;
}
