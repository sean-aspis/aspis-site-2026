import { bandWash } from '@/lib/theme';
import type { ProductRecord } from './derive';

/**
 * Capability blocks — a collapsed-border grid (each cell pulls one pixel of
 * margin so adjacent 1px borders overlap instead of doubling) followed by the
 * product's qualifying note. The note's rule is cyan: it is a platform-level
 * caveat, not accent-carried product color.
 */
export default function ProductBlocks({ product }: { product: ProductRecord }) {
  return (
    <section style={{ backgroundImage: bandWash(product.accent) }}>
      <div className="container pad-standard">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))',
            gap: 0,
          }}
        >
          {product.blocks.map((b) => (
            <div
              key={b.title}
              style={{
                border: '1px solid rgba(122,160,255,.16)',
                margin: '0 -1px -1px 0',
                padding: 'clamp(26px,2.6vw,36px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
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
                {b.title}
              </span>
              <div style={{ display: 'grid', gap: 0 }}>
                {b.items.map((it) => (
                  <span
                    key={it}
                    style={{
                      fontSize: 15,
                      lineHeight: 1.5,
                      color: '#C0CBE4',
                      padding: '9px 0',
                      borderBottom: '1px solid var(--line-soft)',
                    }}
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 'clamp(32px,4vw,48px)',
            borderLeft: '2px solid var(--cyan)',
            padding: '18px 0 18px 22px',
            maxWidth: 820,
          }}
        >
          <p style={{ fontSize: 16, lineHeight: 1.6, color: '#C0CBE4', margin: 0 }}>{product.note}</p>
        </div>
      </div>
    </section>
  );
}
