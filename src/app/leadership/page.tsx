import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PAGES } from '@/data/pages';
import { ROUTES } from '@/data/nav';
import { pageMeta } from '@/lib/seo';
import { asset } from '@/lib/theme';
import { ChapterHeader } from '@/components/ui/Primitives';

/**
 * Leadership — design file lines 1905–2016.
 *
 * Five sections, all direct children of <main>: the hero, three roster tiers
 * (executives / board / advisors) and the closing CTA. Surfaces and hairlines
 * come from the nth-of-type rules in globals.css; the design's inline
 * `border-bottom` on the hero is dropped so the hairline stays 1px.
 *
 * Bios are client-supplied and reproduced verbatim from `@/data/pages`.
 */

export const metadata: Metadata = pageMeta({
  title: 'Leadership',
  description:
    'Experience across cybersecurity, telecommunications, enterprise technology, defense, operations, and governance—applied to one problem: protecting the communications organizations depend on.',
  path: ROUTES.leadership,
});

const VIOLET = '#A78BFA';

/**
 * Intrinsic sizes of the portraits actually shipped in public/assets/exec.
 * A roster entry whose `photo` is not in this map renders the initials
 * fallback instead of a broken image.
 */
const HEADSHOTS: Record<string, { w: number; h: number }> = {
  'headshot-alexander-deev-c1.png': { w: 900, h: 1125 },
  'headshot-candice-c1.png': { w: 368, h: 460 },
  'headshot-gilberto-peralta-c1.png': { w: 900, h: 1125 },
  'headshot-henri-blech-c1.png': { w: 900, h: 1125 },
  'headshot-luis-goldner-c1.png': { w: 900, h: 1125 },
  'headshot-paul-feller-c1.png': { w: 900, h: 1125 },
  'headshot-rose-roth-c1.png': { w: 900, h: 1125 },
  'headshot-shahar-aviv-c1.png': { w: 900, h: 1125 },
  'headshot-shimon-zigdon-c1.png': { w: 900, h: 1125 },
  'headshot-tomer-zigdon-c1.png': { w: 900, h: 1125 },
};

type Person = {
  readonly name: string;
  readonly bio: string;
  readonly photo?: string;
  readonly pos?: string;
  readonly hasPhoto?: boolean;
};

function initials(name: string): string {
  return name
    .replace(/,.*$/, '')
    .split(/\s+/)
    .filter((part) => /^[A-Za-z]/.test(part))
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join('');
}

function Portrait({ person }: { person: Person }) {
  const file = person.photo?.split('/').pop() ?? '';
  const shot = person.hasPhoto ? HEADSHOTS[file] : undefined;

  return (
    <div
      className="card-hover"
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '4/5',
        backgroundColor: '#080D1F',
        border: '1px solid rgba(122,160,255,.16)',
        overflow: 'hidden',
      }}
    >
      {shot ? (
        <Image
          src={asset(person.photo!)}
          alt=""
          width={shot.w}
          height={shot.h}
          sizes="(max-width:700px) 100vw, 300px"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: person.pos ?? '50% 50%',
          }}
        />
      ) : (
        <span
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px,4vw,44px)',
            fontWeight: 700,
            letterSpacing: '-.02em',
            color: VIOLET,
            backgroundImage: 'linear-gradient(180deg,rgba(167,139,250,.14),rgba(8,13,31,0))',
          }}
        >
          {initials(person.name)}
        </span>
      )}
    </div>
  );
}

function PersonCard({ person, role }: { person: Person; role: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Portrait person={person} />
      <div style={{ padding: '18px 2px 0', display: 'flex', flexDirection: 'column', gap: 9 }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 19,
            fontWeight: 700,
            letterSpacing: '-.02em',
            lineHeight: 1.15,
          }}
        >
          {person.name}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9.5,
            letterSpacing: '.13em',
            color: VIOLET,
            lineHeight: 1.5,
            paddingBottom: 11,
            borderBottom: '1px solid rgba(122,160,255,.16)',
          }}
        >
          {role}
        </span>
        <p style={{ fontSize: 13.5, lineHeight: 1.65, color: 'var(--text-muted)', margin: 0 }}>
          {person.bio}
        </p>
      </div>
    </div>
  );
}

const ROSTER_GRID: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill,minmax(min(230px,100%),1fr))',
  gap: 'clamp(20px,2.4vw,30px)',
};

export default function LeadershipPage() {
  return (
    <main id="main" style={{ ['--ghost-hover' as string]: 'var(--violet)' } as React.CSSProperties}>
      {/* 1 — hero */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 55% 70% at 78% 0%,rgba(63,107,255,.18),rgba(5,7,14,0) 62%)',
          }}
        />
        <div className="container pad-standard" style={{ position: 'relative' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.2em',
              color: VIOLET,
              marginBottom: 24,
            }}
          >
            LEADERSHIP
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(320px,100%),1fr))',
              gap: 'clamp(24px,4vw,64px)',
              alignItems: 'end',
            }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(34px,4.2vw,60px)',
                lineHeight: 1.04,
                letterSpacing: '-.035em',
                fontWeight: 700,
                margin: 0,
                maxWidth: 620,
                textWrap: 'balance',
              }}
            >
              Built by operators who have defended these environments.
            </h1>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.62,
                color: 'var(--text-body)',
                margin: 0,
                maxWidth: 520,
              }}
            >
              Experience across cybersecurity, telecommunications, enterprise technology, defense,
              operations, and governance—applied to one problem: protecting the communications
              organizations depend on.
            </p>
          </div>
        </div>
      </section>

      {/* 2 — executive leadership */}
      <section>
        <div className="container pad-standard">
          <ChapterHeader
            eyebrow="EXECUTIVE LEADERSHIP"
            accent={VIOLET}
            caption={`CHAPTER 01 — ${PAGES.leaderCount} EXECUTIVES`}
          />
          <div style={ROSTER_GRID}>
            {PAGES.leaders.map((l) => (
              <PersonCard key={l.slot} person={l} role={l.role} />
            ))}
          </div>
        </div>
      </section>

      {/* 3 — board of directors */}
      <section>
        <div className="container pad-standard">
          <ChapterHeader
            eyebrow="BOARD OF DIRECTORS"
            accent={VIOLET}
            caption={`CHAPTER 02 — ${PAGES.boardCount} DIRECTORS`}
          />
          <div style={ROSTER_GRID}>
            {PAGES.board.map((b) => (
              <PersonCard key={b.slot} person={b} role={b.role} />
            ))}
          </div>
        </div>
      </section>

      {/* 4 — strategic advisors */}
      <section
        style={{
          backgroundImage:
            'linear-gradient(180deg,rgba(122,160,255,.035),rgba(5,7,14,0) 78%)',
        }}
      >
        <div className="container pad-standard">
          <ChapterHeader
            eyebrow="STRATEGIC ADVISORS"
            accent={VIOLET}
            caption={`CHAPTER 03 — ${PAGES.advisorCount} ADVISORS`}
          />
          <div style={ROSTER_GRID}>
            {PAGES.advisors.map((a) => (
              <PersonCard key={a.slot} person={a} role="STRATEGIC ADVISOR" />
            ))}
          </div>
        </div>
      </section>

      {/* 5 — closing CTA */}
      <section>
        <div className="container pad-standard" style={{ textAlign: 'center' }}>
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
            Talk to the team building it.
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
            <Link
              href={ROUTES.contact}
              className="btn-primary"
              style={{ fontSize: 15, padding: '15px 28px' }}
            >
              Request a Demo
            </Link>
            <Link
              href={ROUTES.about}
              className="btn-ghost"
              style={{ fontSize: 15, padding: '15px 28px' }}
            >
              About ASPIS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
