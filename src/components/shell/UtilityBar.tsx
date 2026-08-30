import Link from 'next/link';
import { UTILITY_LINKS, ROUTES } from '@/data/nav';

/**
 * 38px utility bar above the nav: announcement slot left, utility links right
 * including the red-dotted "Experiencing an incident?".
 */
export default function UtilityBar() {
  return (
    <aside
      aria-label="Announcement and utility links"
      style={{ background: 'var(--utility-bar)', borderBottom: '1px solid var(--line-soft)' }}
    >
      <div
        className="container"
        style={{
          height: 38,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
        }}
      >
        <Link
          href={ROUTES.resources}
          className="lnk-bright"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            minWidth: 0,
            height: '100%',
            paddingRight: 12,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              letterSpacing: '.14em',
              color: '#04060E',
              background: 'var(--cyan)',
              padding: '3px 7px',
              flex: '0 0 auto',
            }}
          >
            NEW
          </span>
          <span
            style={{
              fontSize: 12.5,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            Encryption Is Not Enough — the mobile communications security gap, in one paper
          </span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--cyan)',
              flex: '0 0 auto',
            }}
          >
            READ →
          </span>
        </Link>

        <nav
          aria-label="Utility"
          className="utility-links"
          style={{ display: 'flex', alignItems: 'center', gap: 18, flex: '0 0 auto' }}
        >
          {UTILITY_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="lnk-soft"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 12,
                whiteSpace: 'nowrap',
                height: '100%',
                padding: '0 2px',
                ...(l.incident ? { color: 'var(--sev-high)' } : {}),
              }}
            >
              {l.incident && (
                <span
                  aria-hidden
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: 'var(--sev-critical)',
                  }}
                />
              )}
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
