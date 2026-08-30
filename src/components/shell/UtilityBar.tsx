import Link from 'next/link';
import { UTILITY_LINKS } from '@/data/nav';
import { DOCUMENTS } from '@/data/documents';

/**
 * 38px utility bar above the nav: announcement slot left, utility links right
 * including the red-dotted "Experiencing an incident?".
 *
 * The announcement used to name a paper that did not exist ("Encryption Is Not
 * Enough"), and pointed at the resources index. It now names the first real
 * document in the library and links straight to it — if the library is
 * reordered the announcement follows, so it can never advertise something that
 * is not published.
 */
const PROMO = {
  text: `${DOCUMENTS[0].title} — ${DOCUMENTS[0].subtitle}`,
  href: DOCUMENTS[0].file,
};
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
        <a
          href={PROMO.href}
          target="_blank"
          rel="noopener noreferrer"
          type="application/pdf"
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
            {PROMO.text}
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
        </a>

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
