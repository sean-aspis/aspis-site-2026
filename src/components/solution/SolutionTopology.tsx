/**
 * Radial topology diagram — ported from solutionDiagram(sol) in
 * "ASPIS Website v2.dc.html" (design file lines 2661–2697), which built the
 * same SVG through React.createElement. Geometry, radii, label placement and
 * animation timings are the design file's; only the colour source changed —
 * the diagram reads the accent from the CSS custom properties the page sets
 * on <main>, so it stays palette-agnostic.
 *
 * Pulse and halo timings are staggered per node index (README §5) so the
 * signals never fire in unison. globals.css neutralises all of it under
 * prefers-reduced-motion.
 */

const C = 320;
const R = 152;

export default function SolutionTopology({
  nodes,
  hub,
}: {
  nodes: readonly string[];
  hub: readonly string[];
}) {
  const n = nodes.length;
  const placed = nodes.map((label, i) => {
    const a = ((-90 + (360 / n) * i) * Math.PI) / 180;
    return { label, i, x: C + R * Math.cos(a), y: C + R * Math.sin(a) };
  });

  return (
    <svg viewBox="0 0 640 640" width="100%" style={{ maxWidth: 560, display: 'block' }} aria-hidden>
      {/* Inner ring, then the slow dashed outer ring. */}
      <circle cx={C} cy={C} r={R} fill="none" strokeWidth={1} style={{ stroke: 'var(--accent-line)' }} />
      <circle
        cx={C}
        cy={C}
        r={R + 26}
        fill="none"
        strokeWidth={1}
        strokeDasharray="2 12"
        style={{
          stroke: 'var(--accent-line)',
          animation: 'spin 70s linear infinite',
          transformOrigin: '320px 320px',
        }}
      />

      {/* Spokes from the core to every node. */}
      {placed.map((nd) => (
        <line
          key={`l${nd.i}`}
          x1={C}
          y1={C}
          x2={nd.x}
          y2={nd.y}
          strokeWidth={1}
          style={{ stroke: 'var(--accent-line)' }}
        />
      ))}

      {/* Travelling pulse along each spoke, staggered per index. */}
      {placed.map((nd) => (
        <line
          key={`p${nd.i}`}
          x1={C}
          y1={C}
          x2={nd.x}
          y2={nd.y}
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeDasharray="16 300"
          style={{
            stroke: 'var(--accent)',
            animation: `signal ${5 + nd.i * 0.6}s linear ${nd.i * 0.45}s infinite`,
          }}
        />
      ))}

      {/* Core. */}
      <circle
        cx={C}
        cy={C}
        r={74}
        strokeWidth={1}
        style={{ fill: 'var(--accent-wash)', stroke: 'var(--accent)' }}
      />
      <circle cx={C} cy={C} r={57} fill="none" strokeWidth={1} style={{ stroke: 'var(--accent-line)' }} />
      <text
        x={C}
        y={C - 5}
        textAnchor="middle"
        fontSize={16}
        fontWeight={600}
        letterSpacing=".1em"
        style={{ fontFamily: 'var(--font-mono)', fill: '#ffffff' }}
      >
        {hub[0]}
      </text>
      <text
        x={C}
        y={C + 18}
        textAnchor="middle"
        fontSize={16}
        fontWeight={600}
        letterSpacing=".1em"
        style={{ fontFamily: 'var(--font-mono)', fill: 'var(--accent)' }}
      >
        {hub[1]}
      </text>

      {/* Node marks: dot, breathing halo, and a label that wraps after the
          first word once it is long enough to collide with its neighbours. */}
      {placed.map((nd) => {
        const anchor = Math.abs(nd.x - C) < 8 ? 'middle' : nd.x > C ? 'start' : 'end';
        const dx = anchor === 'middle' ? 0 : nd.x > C ? 16 : -16;
        const words = nd.label.split(' ');
        const rows =
          words.length > 1 && nd.label.length > 9 ? [words[0], words.slice(1).join(' ')] : [nd.label];
        const baseDy =
          Math.abs(nd.y - C) < 8 ? 5 : nd.y > C ? 30 : -24 - (rows.length - 1) * 17;

        return (
          <g key={`n${nd.i}`}>
            <circle
              cx={nd.x}
              cy={nd.y}
              r={7}
              fill="#04060E"
              strokeWidth={1.5}
              style={{ stroke: 'var(--accent)' }}
            />
            <circle
              cx={nd.x}
              cy={nd.y}
              r={15}
              fill="none"
              strokeWidth={1}
              style={{
                stroke: 'var(--accent)',
                animation: `breathe ${3 + nd.i * 0.4}s ease-in-out ${nd.i * 0.3}s infinite`,
                transformOrigin: 'center',
              }}
            />
            <text
              x={nd.x + dx}
              y={nd.y + baseDy}
              textAnchor={anchor}
              fontSize={15}
              letterSpacing=".09em"
              style={{ fontFamily: 'var(--font-mono)', fill: '#C0CBE4' }}
            >
              {rows.map((r, ri) => (
                <tspan key={ri} x={nd.x + dx} dy={ri === 0 ? 0 : 17}>
                  {r}
                </tspan>
              ))}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
