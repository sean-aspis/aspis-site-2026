import { bandWash } from '@/lib/theme';
import SiqConsole from './SiqConsole';
import type { ProductRecord } from './derive';

/**
 * The extra console chapter, rendered only on /products/sentineliq. Because it
 * is conditional, the surrounding surfaces must come from the nth-of-type
 * rules in globals.css — never from a source-order index.
 *
 * Server component; only the view switcher inside is a client leaf.
 */
export default function SentinelIQSection({ product }: { product: ProductRecord }) {
  return (
    <section style={{ backgroundImage: bandWash(product.accent) }}>
      <div className="container pad-standard">
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '.2em',
            color: 'var(--accent)',
            marginBottom: 20,
          }}
        >
          THE SENTINELIQ CONSOLE
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(25px,2.7vw,40px)',
            lineHeight: 1.1,
            letterSpacing: '-.03em',
            fontWeight: 700,
            margin: '0 0 16px',
            maxWidth: 720,
            textWrap: 'balance',
          }}
        >
          Supervision, investigation, and evidence in one record.
        </h2>
        <p
          style={{
            fontSize: 16.5,
            lineHeight: 1.62,
            color: 'var(--text-body)',
            margin: '0 0 clamp(28px,3vw,40px)',
            maxWidth: 680,
          }}
        >
          Compliance teams review flagged communications, trace every platform action, and see where
          sensitive files went — without leaving the case they are working.
        </p>

        <SiqConsole />

        <p
          style={{
            fontSize: 13,
            lineHeight: 1.6,
            color: 'var(--text-faint)',
            margin: '16px 0 0',
            maxWidth: 720,
          }}
        >
          Console views are representative. Available capability varies by edition, deployment, and
          configuration.
        </p>
      </div>
    </section>
  );
}
