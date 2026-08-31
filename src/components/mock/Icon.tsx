/**
 * The icon set for the product mock-ups.
 *
 * These replace a set of Unicode geometric-shape characters (▦ ◉ ▤ ⛨ ⧉ ◷ ◍ ⚿
 * ⌸ ⋏ ▯ ⌕ ⌖ ✦ ▨ …) that the v1.4 design file used as icon placeholders. Those
 * characters are a real defect in a browser, not a stylistic choice: most fonts
 * do not carry them, so they fell back to whatever glyph was available and
 * rendered as empty tofu boxes, or — for EDR, whose placeholder was the letter
 * "C" — as a stray letter. The mocks are the site's only depiction of the
 * product, so a rail of broken glyphs reads as a broken product.
 *
 * All icons share one geometry: a 24x24 box, stroke-only, 1.7 units wide, round
 * caps and joins, drawn in `currentColor`. That keeps them consistent at the
 * 11-16px sizes the mocks use, and lets a caller colour one by setting `color`.
 */

export type IconName =
  // console rail
  | 'grid'
  | 'users'
  | 'report'
  | 'alert'
  | 'shield'
  | 'integrations'
  | 'history'
  | 'support'
  | 'settings'
  // integration pills
  | 'key'
  | 'endpoint'
  | 'mobile'
  | 'radar'
  | 'ticket'
  | 'database'
  // map stats
  | 'bolt'
  | 'target'
  | 'crosshair'
  // sentineliq rail
  | 'search'
  | 'message'
  | 'meeting'
  | 'file'
  | 'folder'
  | 'sparkle'
  | 'audit'
  // app tab bars and chrome
  | 'bell'
  | 'calendar'
  | 'expand'
  | 'download'
  | 'layers'
  | 'contacts'
  | 'chat'
  | 'phone'
  // read off the real ManageiT dashboard screenshot
  | 'gauge'
  | 'check'
  | 'timer'
  | 'filter'
  | 'book'
  | 'burst'
  | 'arrow-up'
  | 'arrow-right'
  | 'arrow-down'
  | 'collapse';

/**
 * Path data only — every icon inherits the stroke treatment from the <svg>, so
 * a new icon is one line here and cannot drift from the rest.
 */
const D: Record<IconName, string> = {
  grid: 'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z',
  users:
    'M8.5 11a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zM2.8 19.6v-1a4.2 4.2 0 014.2-4.2h3a4.2 4.2 0 014.2 4.2v1M16.5 5.2a3 3 0 010 5.8M18.4 14.6a4 4 0 012.8 3.8v1.2',
  report: 'M5 3.5h14v17H5zM8.5 15.5v-4M12 15.5v-7M15.5 15.5v-2.5',
  alert: 'M12 3.7 21.2 19.6H2.8zM12 9.6v4.2M12 16.9h.01',
  shield:
    'M12 2.9 20 5.7v5.5c0 4.6-3.2 8.1-8 9.9-4.8-1.8-8-5.3-8-9.9V5.7zM8.6 11.8l2.4 2.4 4.4-4.6',
  integrations:
    'M9.5 3.5h5v3.2h3.2v5h-3.2v3.2h-5v-3.2H6.3v-5h3.2zM14.5 14.9v5.6H20M9.5 6.7V3.5H4v5.6',
  history: 'M12 6.4v5.9l3.9 2.3M20.6 12a8.6 8.6 0 11-2.9-6.4M20.8 2.9v3.6h-3.6',
  support:
    'M12 20.7a8.7 8.7 0 100-17.4 8.7 8.7 0 000 17.4zM12 15.6a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM6.1 6.1l3.4 3.4M14.5 14.5l3.4 3.4M17.9 6.1l-3.4 3.4M9.5 14.5l-3.4 3.4',
  settings:
    'M12 15.1a3.1 3.1 0 100-6.2 3.1 3.1 0 000 6.2zM19.2 14.6l1.9 1.1-2 3.5-2-1.2a7.6 7.6 0 01-1.9 1.1l-.3 2.2h-4l-.3-2.2a7.6 7.6 0 01-1.9-1.1l-2 1.2-2-3.5 1.9-1.1a7.7 7.7 0 010-2.2L2.7 10.7l2-3.5 2 1.2A7.6 7.6 0 018.6 7.3l.3-2.2h4l.3 2.2a7.6 7.6 0 011.9 1.1l2-1.2 2 3.5-1.9 1.1a7.7 7.7 0 010 2.2z',
  key: 'M15.4 9.1a3.4 3.4 0 100-6.8 3.4 3.4 0 000 6.8zM13 8.5 3.6 17.9v3.2h3.2v-2.4h2.4v-2.4h2.4v-2.6',
  endpoint: 'M3.4 5.1h17.2v10.3H3.4zM8.2 19.6h7.6M12 15.4v4.2',
  mobile: 'M7.3 2.9h9.4v18.2H7.3zM10.6 5.9h2.8M12 18.2h.01',
  radar:
    'M12 12 18.6 5.4M12 20.4a8.4 8.4 0 116.4-13.8M12 16.2a4.2 4.2 0 113.4-6.7M20.9 8.9l-2.3 1 1-2.3z',
  ticket:
    'M3.2 8.4V6.1h17.6v2.3a3.6 3.6 0 000 7.2v2.3H3.2v-2.3a3.6 3.6 0 000-7.2zM9.4 9.6v4.8',
  database:
    'M12 7.4c4.6 0 8.3-1 8.3-2.3S16.6 2.8 12 2.8 3.7 3.8 3.7 5.1 7.4 7.4 12 7.4zM20.3 5.1v13.8c0 1.3-3.7 2.3-8.3 2.3s-8.3-1-8.3-2.3V5.1M20.3 12c0 1.3-3.7 2.3-8.3 2.3S3.7 13.3 3.7 12',
  bolt: 'M13.4 2.8 4.9 13.6h5.1l-1.4 7.6 8.5-10.8h-5.1z',
  target:
    'M12 20.6a8.6 8.6 0 100-17.2 8.6 8.6 0 000 17.2zM12 16.3a4.3 4.3 0 100-8.6 4.3 4.3 0 000 8.6zM12 13.4a1.4 1.4 0 100-2.8 1.4 1.4 0 000 2.8z',
  crosshair:
    'M12 20.6a8.6 8.6 0 100-17.2 8.6 8.6 0 000 17.2zM12 3.4v3.4M12 17.2v3.4M3.4 12h3.4M17.2 12h3.4',
  search: 'M10.8 17.6a6.8 6.8 0 100-13.6 6.8 6.8 0 000 13.6zM15.7 15.7 20.6 20.6',
  message: 'M20.6 15.1a2.3 2.3 0 01-2.3 2.3H7.9L3.4 21.1V5.7a2.3 2.3 0 012.3-2.3h12.6a2.3 2.3 0 012.3 2.3zM7.9 8.6h8.2M7.9 12.3h5.4',
  meeting: 'M3.4 6.9h11.2v10.2H3.4zM14.6 12.6l6 3.4V8l-6 3.4z',
  file: 'M13.7 3.2H6.9v17.6h10.2V6.6zM13.7 3.2v3.4h3.4M9.3 12.6h5.4M9.3 16h5.4',
  folder:
    'M3.4 19.4V5.5a1.4 1.4 0 011.4-1.4h4.1l2.1 2.6h7.6a1.4 1.4 0 011.4 1.4v11.3a1.4 1.4 0 01-1.4 1.4H4.8a1.4 1.4 0 01-1.4-1.4z',
  sparkle:
    'M12 2.9l1.9 5.2 5.2 1.9-5.2 1.9-1.9 5.2-1.9-5.2L4.9 10l5.2-1.9zM18.4 16.6l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z',
  audit:
    'M8.6 4.6H6.9a1.4 1.4 0 00-1.4 1.4v13.1a1.4 1.4 0 001.4 1.4h10.2a1.4 1.4 0 001.4-1.4V6a1.4 1.4 0 00-1.4-1.4h-1.7M8.6 4.6a1.4 1.4 0 011.4-1.4h4a1.4 1.4 0 011.4 1.4v1.4H8.6zM8.9 13.1l2 2 4.2-4.3',
  bell: 'M18.3 15.4V10a6.3 6.3 0 10-12.6 0v5.4L3.9 17.7h16.2zM9.7 17.7a2.3 2.3 0 004.6 0',
  calendar:
    'M4.3 6.3h15.4v14.4H4.3zM4.3 10.6h15.4M8.3 3.4v4M15.7 3.4v4',
  expand: 'M14.6 3.7h5.7v5.7M9.4 20.3H3.7v-5.7M20.3 3.7 13.4 10.6M3.7 20.3l6.9-6.9',
  download: 'M12 3.7v11.4M7.4 10.6 12 15.1l4.6-4.5M4 19.1h16',
  layers:
    'M12 2.9 21 7.4l-9 4.6L3 7.4zM3 12l9 4.6 9-4.6M3 16.6l9 4.5 9-4.5',
  contacts:
    'M12 11.4a3.6 3.6 0 100-7.2 3.6 3.6 0 000 7.2zM5 20.3v-.9a4.6 4.6 0 014.6-4.6h4.8a4.6 4.6 0 014.6 4.6v.9',
  chat: 'M20.6 14.3a2.3 2.3 0 01-2.3 2.3H8.6L4 20.6V5.7a2.3 2.3 0 012.3-2.3h12a2.3 2.3 0 012.3 2.3z',
  phone:
    'M20.4 16.9v2.6a1.4 1.4 0 01-1.6 1.4 17 17 0 01-7.4-2.6 16.7 16.7 0 01-5.1-5.1A17 17 0 013.7 5.7a1.4 1.4 0 011.4-1.6h2.6a1.4 1.4 0 011.4 1.2c.1 1 .4 1.9.7 2.8a1.4 1.4 0 01-.3 1.5L8.4 10.7a13.7 13.7 0 005.1 5.1l1.1-1.1a1.4 1.4 0 011.5-.3c.9.3 1.8.6 2.8.7a1.4 1.4 0 011.5 1.4z',
  gauge:
    'M20.6 14.9a9 9 0 10-17.2 0M12 12l4.3-4.3M12 12.2a1.1 1.1 0 100 .01z',
  check: 'M20.7 12a8.7 8.7 0 11-3.4-6.9M8.6 11.6l3 3 7-7.3',
  timer: 'M12 21a7.9 7.9 0 100-15.8A7.9 7.9 0 0012 21zM12 9.4v3.7l2.6 1.5M9.3 2.6h5.4',
  filter: 'M3.6 5.6h16.8M6.6 12h10.8M9.9 18.4h4.2',
  book: 'M3.6 4.4h6a2.4 2.4 0 012.4 2.4v12.8a1.8 1.8 0 00-1.8-1.8h-6.6zM20.4 4.4h-6A2.4 2.4 0 0012 6.8v12.8a1.8 1.8 0 011.8-1.8h6.6z',
  burst:
    'M12 2.9v3.4M12 17.7v3.4M4.6 12H2M22 12h-2.6M6.8 6.8 4.9 4.9M19.1 19.1l-1.9-1.9M17.2 6.8l1.9-1.9M4.9 19.1l1.9-1.9M12 15.4a3.4 3.4 0 100-6.8 3.4 3.4 0 000 6.8z',
  'arrow-up': 'M12 19V5M6.4 10.6 12 5l5.6 5.6',
  'arrow-right': 'M5 12h14M13.4 6.4 19 12l-5.6 5.6',
  'arrow-down': 'M12 5v14M6.4 13.4 12 19l5.6-5.6',
  collapse: 'M4.4 4.4h15.2v15.2H4.4zM9.6 4.4v15.2M16.4 9.6 13.6 12l2.8 2.4',
};

export default function Icon({
  name,
  size = 14,
  strokeWidth = 1.7,
  style,
}: {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      style={{ display: 'block', flex: '0 0 auto', ...style }}
    >
      <path d={D[name]} />
    </svg>
  );
}
