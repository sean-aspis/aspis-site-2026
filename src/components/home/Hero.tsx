import Link from 'next/link';
import HeroPhone from './HeroPhone';
import { SITE } from '@/data/site';
import { ROUTES } from '@/data/nav';

/**
 * Canonical hero: Secure the Conversation. / Secure the Device. / Control the Data.
 * First section on the route — no top hairline (nth-of-type(n+2) handles that).
 */
export default function Hero() {
  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(122,160,255,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(122,160,255,.055) 1px,transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage:
            'radial-gradient(ellipse 80% 70% at 50% 30%,#000 30%,transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 70% at 50% 30%,#000 30%,transparent 78%)',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '-18%',
          left: '52%',
          width: '70%',
          height: '120%',
          background:
            'radial-gradient(ellipse at center,rgba(63,107,255,.22) 0%,rgba(5,7,14,0) 62%)',
          animation: 'glowPulse 9s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container pad-standard"
        style={{
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(400px,100%),1fr))',
          gap: 'clamp(36px,5vw,72px)',
          alignItems: 'center',
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(40px,5vw,74px)',
              lineHeight: 1.02,
              letterSpacing: '-.035em',
              fontWeight: 700,
              margin: '0 0 28px',
              textWrap: 'balance',
            }}
          >
            Secure the Conversation.
            <br />
            Secure the Device.
            <br />
            <span
              style={{
                background: 'linear-gradient(96deg,#7FA0FF 10%,#67E8F9 90%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Control the Data.
            </span>
          </h1>
          <p
            style={{
              fontSize: 'clamp(17px,1.3vw,20px)',
              lineHeight: 1.55,
              color: '#C0CBE4',
              margin: '0 0 18px',
              maxWidth: 620,
              textWrap: 'pretty',
            }}
          >
            Enterprise- and government-grade secure communications, Mobile Threat Defense,
            governance, and communications intelligence—unified in one security architecture.
          </p>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              margin: '0 0 36px',
              maxWidth: 580,
              textWrap: 'pretty',
            }}
          >
            Protect voice, video, messaging, and file exchange. Meet supervision, retention, and
            audit requirements. Keep policy, federation, and deployment under your organization&rsquo;s
            control.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <Link href={ROUTES.contact} className="btn-primary" style={{ fontSize: 15.5, padding: '16px 30px' }}>
              Request a Demo
            </Link>
            <Link href={ROUTES.platform} className="btn-ghost" style={{ fontSize: 15.5, padding: '16px 30px' }}>
              Explore the Platform
            </Link>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <HeroPhone motion />
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          overflow: 'hidden',
          background: 'rgba(10,15,30,.5)',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 'max-content',
            animation: 'marquee 38s linear infinite',
            padding: '14px 0',
          }}
        >
          {[...SITE.marquee, ...SITE.marquee].map((m, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11.5,
                letterSpacing: '.18em',
                color: 'var(--text-dim)',
                padding: '0 30px',
                whiteSpace: 'nowrap',
              }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
