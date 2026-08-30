import Link from 'next/link';
import { ROUTES } from '@/data/nav';
import SolutionTopology from './SolutionTopology';
import { BAND_WASH_IMAGE, type Solution } from './derive';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

/**
 * Solution hero — design file lines 1593–1619.
 * First section on the route, so no top hairline (nth-of-type(n+2) handles it).
 * The bloom and the glow are background-image only; the section's
 * background-colour still comes from the alternation rules in globals.css.
 */
export default function SolutionHero({ sol }: { sol: Solution }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', backgroundImage: BAND_WASH_IMAGE }}>
      <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: sol.heroGlow }} />
      {/* Two columns, stated rather than inferred. `auto-fit` with a 360px
          minimum fitted THREE tracks in the 1328px container, so the copy was
          squeezed into 395px and 522px of the row sat empty — the hero read as
          shoved against the left edge. See .hero-split in globals.css. */}
      <div className="container pad-standard hero-split" style={{ position: 'relative' }}>
          <Breadcrumbs span trail={[{ name: 'Solutions', href: '/solutions' }, { name: sol.name }]} />
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.2em',
              color: 'var(--accent-text, var(--accent))',
              marginBottom: 24,
            }}
          >
            {sol.eyebrow}
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px,3.8vw,54px)',
              lineHeight: 1.05,
              letterSpacing: '-.035em',
              fontWeight: 700,
              margin: '0 0 20px',
              maxWidth: 720,
              textWrap: 'balance',
            }}
          >
            {sol.headline}
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(17px,1.4vw,22px)',
              lineHeight: 1.35,
              color: 'var(--accent-text, var(--accent))',
              margin: '0 0 24px',
              maxWidth: 620,
              fontWeight: 500,
              letterSpacing: '-.015em',
            }}
          >
            {sol.lede}
          </p>
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.62,
              color: 'var(--text-body)',
              margin: '0 0 16px',
              maxWidth: 640,
            }}
          >
            {sol.intro}
          </p>
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.62,
              color: 'var(--text-body)',
              margin: '0 0 34px',
              maxWidth: 640,
            }}
          >
            {sol.intro2}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center' }}>
          <SolutionTopology nodes={sol.nodes} hub={sol.hub} />
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              justifyContent: 'center',
              maxWidth: 520,
            }}
          >
            {sol.status.map((st) => (
              <span
                key={st.k}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 7,
                  border: '1px solid rgba(122,160,255,.18)',
                  background: 'rgba(10,15,30,.6)',
                  padding: '7px 11px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9.5,
                    letterSpacing: '.1em',
                    color: 'var(--text-dim)',
                  }}
                >
                  {st.k}
                </span>
                <span style={{ fontSize: 11.5, color: st.color }}>{st.v}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
