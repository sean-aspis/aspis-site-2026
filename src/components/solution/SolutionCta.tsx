import Link from 'next/link';
import { ROUTES } from '@/data/nav';
import { BAND_WASH_IMAGE, type Solution } from './derive';

/**
 * Closing CTA — design file lines 1747–1756. Repeats the hero's glow and its
 * two buttons; the last section on the route, so it carries no bottom rule
 * (the footer supplies the boundary).
 */
export default function SolutionCta({ sol }: { sol: Solution }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', backgroundImage: BAND_WASH_IMAGE }}>
      <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: sol.heroGlow }} />
      <div className="container pad-standard" style={{ position: 'relative', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px,3vw,44px)',
            lineHeight: 1.08,
            letterSpacing: '-.03em',
            fontWeight: 700,
            margin: '0 0 28px',
            textWrap: 'balance',
          }}
        >
          {sol.ctaTitle}
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
          <Link href={ROUTES.contact} className="btn-accent" style={{ padding: '15px 28px' }}>
            {sol.cta1}
          </Link>
          <Link
            href={sol.productHref}
            className="btn-ghost"
            style={{ fontSize: 15, padding: '15px 28px' }}
          >
            {sol.cta2}
          </Link>
        </div>
      </div>
    </section>
  );
}
