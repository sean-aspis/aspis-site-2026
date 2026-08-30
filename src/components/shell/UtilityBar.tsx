import Link from 'next/link';
import { UTILITY_LINKS, ROUTES } from '@/data/nav';
import { DOCUMENTS } from '@/data/documents';

/**
 * 38px utility bar above the nav: announcement slot left, utility links right
 * including the red-dotted "Experiencing an incident?".
 *
 * The announcement used to name a paper that did not exist ("Encryption Is Not
 * Enough"). It now names the first real document in the library — if the
 * library is reordered the announcement follows, so it can never advertise
 * something that is not published.
 *
 * It links to the featured block on the resources page rather than to the file:
 * the documents are gated and have no public URL, and a modal firing from the
 * top bar would be a jarring way to meet the form.
 */
const PROMO = {
  text: `${DOCUMENTS[0].title} — ${DOCUMENTS[0].subtitle}`,
  href: `${ROUTES.resources}#featured`,
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
        <Link
          href={PROMO.href}
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
