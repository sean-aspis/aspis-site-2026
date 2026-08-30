import Link from 'next/link';
import { ROUTES } from '@/data/nav';

/**
 * Closing CTA. The bloom is declared as background-image only — the
 * `background` shorthand would reset background-color and defeat the
 * nth-of-type alternation rules in globals.css. The second, stronger bloom
 * rising from the bottom sits on an inner div, where the shorthand is safe.
 */
export default function HomeCta() {
  return (
    <section
      id="demo"
      style={{
        position: 'relative',
        overflow: 'hidden',
        backgroundImage:
          'radial-gradient(ellipse 62% 76% at 50% 0%,rgba(63,107,255,.11),rgba(5,7,14,0) 66%)',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 80% at 50% 120%,rgba(63,107,255,.30),rgba(5,7,14,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container pad-chapter"
        style={{ position: 'relative', textAlign: 'center' }}
      >
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px,4.6vw,68px)',
            lineHeight: 1.04,
            letterSpacing: '-.035em',
            fontWeight: 700,
            margin: '0 0 34px',
            textWrap: 'balance',
          }}
        >
          Secure every conversation.
          <br />
          Protect every device.
          <br />
          <span
            style={{
              background: 'linear-gradient(96deg,#7FA0FF,#67E8F9)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Govern every interaction.
          </span>
        </h2>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
          <Link
            href={ROUTES.contact}
            className="btn-primary"
            style={{ fontSize: 15.5, padding: '16px 32px' }}
          >
            Request a Demo
          </Link>
          <Link
            href={ROUTES.contact}
            className="btn-ghost"
            style={{ fontSize: 15.5, padding: '16px 32px' }}
          >
            Talk to an Expert
          </Link>
        </div>
      </div>
    </section>
  );
}
