import Link from 'next/link';
import { ROUTES } from '@/data/nav';
import { bandWash } from '@/lib/theme';
import ProductPhone from './ProductPhone';
import type { ProductRecord } from './derive';

/**
 * Product hero. First section on the route, so no top hairline — the
 * nth-of-type(n+2) rule in globals.css handles that. The accent bloom is
 * declared as `background-image` only; the `background` shorthand would reset
 * background-color and defeat the surface alternation.
 */
export default function ProductHero({
  product,
  console: consoleVariant,
}: {
  product: ProductRecord;
  console: boolean;
}) {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: bandWash(product.accent),
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(122,160,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(122,160,255,.05) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 35% 40%,#000 30%,transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 35% 40%,#000 30%,transparent 80%)',
        }}
      />

      <div
        className="container pad-standard"
        style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(340px,100%),1fr))',
          gap: 'clamp(32px,5vw,72px)',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.2em',
              color: 'var(--accent)',
              marginBottom: 24,
            }}
          >
            {product.kicker}
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px,4.6vw,66px)',
              lineHeight: 1.03,
              letterSpacing: '-.035em',
              fontWeight: 700,
              margin: '0 0 20px',
              maxWidth: 900,
              textWrap: 'balance',
            }}
          >
            {product.name}
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(18px,1.6vw,26px)',
              lineHeight: 1.35,
              color: 'var(--accent)',
              margin: '0 0 26px',
              maxWidth: 760,
              fontWeight: 500,
              letterSpacing: '-.015em',
            }}
          >
            {product.lede}
          </p>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.62,
              color: 'var(--text-body)',
              margin: '0 0 34px',
              maxWidth: 720,
            }}
          >
            {product.intro}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <Link href={ROUTES.contact} className="btn-accent" style={{ padding: '15px 28px' }}>
              {product.cta}
            </Link>
            <Link href={ROUTES.platform} className="btn-ghost" style={{ fontSize: 15, padding: '15px 28px' }}>
              See the Platform
            </Link>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ProductPhone product={product} console={consoleVariant} />
        </div>
      </div>
    </section>
  );
}
