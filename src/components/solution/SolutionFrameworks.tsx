import Link from 'next/link';
import type { SolutionContent } from '@/data/solutionContent';
import { ROUTES } from '@/data/nav';
import { BAND_WASH_IMAGE } from './derive';
import { SECTION_H2 } from './styles';

/**
 * Regulatory context.
 *
 * These are the CUSTOMER'S obligations, listed so a reader can see which
 * regime the page speaks to. `frameworkNote` carries the qualification — that
 * ASPIS supports customer programs aligned with these frameworks and does not
 * itself make anyone compliant — and is rendered unconditionally. Do not add a
 * framework here without a source document that names it, and do not drop the
 * note.
 */
export default function SolutionFrameworks({ content }: { content: SolutionContent }) {
  if (!content.frameworks?.length) return null;

  return (
    <section style={{ backgroundImage: BAND_WASH_IMAGE }}>
      <div className="container pad-standard">
        <div className="eyebrow" style={{ color: 'var(--accent-text, var(--accent))', marginBottom: 20 }}>
          REGULATORY CONTEXT
        </div>
        <h2 style={{ ...SECTION_H2, margin: '0 0 22px', maxWidth: 700 }}>
          The frameworks this page speaks to.
        </h2>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            margin: '0 0 24px',
          }}
        >
          {content.frameworks.map((f) => (
            <span
              key={f}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11.5,
                letterSpacing: '.06em',
                color: 'var(--accent-text, var(--accent))',
                border: '1px solid var(--accent-line)',
                background: 'var(--accent-wash)',
                padding: '9px 14px',
              }}
            >
              {f}
            </span>
          ))}
        </div>

        <p
          style={{
            fontSize: 15,
            lineHeight: 1.65,
            color: 'var(--text-body)',
            margin: '0 0 22px',
            maxWidth: 720,
          }}
        >
          {content.frameworkNote}
        </p>

        <Link href={ROUTES.trust} className="crumb">
          SECURITY &amp; TRUST →
        </Link>
      </div>
    </section>
  );
}
