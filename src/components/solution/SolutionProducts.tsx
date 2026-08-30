import Link from 'next/link';
import { BAND_WASH_IMAGE, type Solution } from './derive';
import { FOOTNOTE, GRID_CELL, SECTION_H2 } from './styles';

/**
 * Product alignment — design file lines 1731–1745. "Product alignment" is the
 * design file's own literal heading, not data. A product entry keyed
 * `shieldme` routes to /shieldme; every other one to /products/<key>.
 */
export default function SolutionProducts({ sol }: { sol: Solution }) {
  return (
    <section style={{ backgroundImage: BAND_WASH_IMAGE }}>
      <div className="container pad-standard">
        <h2 style={{ ...SECTION_H2, margin: '0 0 clamp(26px,3vw,40px)', maxWidth: 600 }}>
          Product alignment
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(260px,100%),1fr))',
            gap: 0,
          }}
        >
          {sol.productList.map((p) => (
            <Link
              key={p.key}
              href={p.href}
              className="card-hover"
              style={{
                ...GRID_CELL,
                padding: 'clamp(24px,2.4vw,32px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 11,
                minHeight: 170,
                color: 'var(--text-primary)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  fontWeight: 600,
                  letterSpacing: '-.015em',
                }}
              >
                {p.n}
              </span>
              <span style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--text-body)', flex: 1 }}>
                {p.d}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '.08em',
                  color: 'var(--accent-text, var(--accent))',
                }}
              >
                EXPLORE →
              </span>
            </Link>
          ))}
        </div>
        {sol.hasProductsNote && <p style={FOOTNOTE}>{sol.productsNote}</p>}
      </div>
    </section>
  );
}
