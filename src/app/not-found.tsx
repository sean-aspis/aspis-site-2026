import Link from 'next/link';
import { ROUTES } from '@/data/nav';

export default function NotFound() {
  return (
    <main id="main">
      <section className="pad-chapter">
        <div className="container" style={{ maxWidth: 720 }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 10.5,
              letterSpacing: '.18em',
              color: 'var(--coral)',
              marginBottom: 18,
            }}
          >
            404 — NOT FOUND
          </div>
          <h1 className="h1" style={{ marginBottom: 20 }}>
            That page isn&rsquo;t here.
          </h1>
          <p className="lede" style={{ marginBottom: 32 }}>
            The address may have changed, or the link that brought you here may be out of date.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <Link href="/" className="btn-primary">
              Back to the homepage
            </Link>
            <Link href={ROUTES.platform} className="btn-ghost">
              Explore the Platform
            </Link>
            <Link href={ROUTES.contact} className="btn-ghost">
              Contact ASPIS
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
