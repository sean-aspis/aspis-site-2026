import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/data/site';
import { FOOTER_LINK_MAP, EXTERNAL } from '@/data/nav';

const LINKEDIN = 'https://www.linkedin.com/company/aspis-cyber/';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#02040A',
        borderTop: '1px solid var(--line)',
        color: 'var(--text-primary)',
      }}
    >
      <div
        className="container"
        style={{
          paddingTop: 'var(--pad-standard)',
          paddingBottom: 'var(--pad-continuation-bottom)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(170px,100%),1fr))',
            gap: '36px 28px',
            paddingBottom: 44,
            borderBottom: '1px solid var(--hairline)',
          }}
        >
          {SITE.footerCols.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 10.5,
                  letterSpacing: '.16em',
                  color: 'var(--periwinkle)',
                  marginBottom: 18,
                }}
              >
                {col.title}
              </div>
              {col.links.map((l) => (
                <div key={l}>
                  <Link
                    href={FOOTER_LINK_MAP[l] ?? '/contact'}
                    className="lnk-soft"
                    style={{
                      // Inline links here measured 16px tall — under the 24px
                      // WCAG 2.2 target minimum, in a six-column grid where a
                      // mis-tap lands on the wrong destination. Block display
                      // turns the existing padding into real target area.
                      display: 'block',
                      padding: '6px 0',
                      minHeight: 24,
                      fontSize: 14.5,
                      lineHeight: 1.5,
                      color: 'var(--text-body)',
                    }}
                  >
                    {l}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            paddingTop: 32,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 24,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <Image
              src="/assets/aspis-logo-horizontal-electric.png"
              alt="ASPIS Cyber Security"
              width={430}
              height={72}
              style={{ height: 30, width: 'auto', display: 'block', opacity: 0.9 }}
            />
            {[
              { label: 'MANAGEIT LOGIN — ADMIN PORTAL ↗', href: EXTERNAL.manageIt },
              { label: 'LINKEDIN ↗', href: LINKEDIN },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="lnk-soft"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11.5,
                  letterSpacing: '.1em',
                  border: '1px solid rgba(122,160,255,.22)',
                  padding: '8px 12px',
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div style={{ fontSize: 13, color: '#9AA7C4' }}>
            © ASPIS Cyber Technologies, Inc. All rights reserved.
          </div>
        </div>

        <div
          style={{
            paddingTop: 24,
            fontSize: 13,
            lineHeight: 1.6,
            color: 'var(--text-muted)',
            maxWidth: 900,
          }}
        >
          Product capabilities vary by edition, deployment, configuration, integration, and customer
          requirements. Contact ASPIS for current availability.
        </div>
      </div>
    </footer>
  );
}
