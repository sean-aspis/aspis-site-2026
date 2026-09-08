/**
 * OIDC login endpoint placeholder.
 *
 * `/oidc/login/` is registered with an identity provider, which checks that the
 * address answers 200. Nothing is processed here yet; the response body is a
 * plain "ok". Both `/oidc/login` and `/oidc/login/` reach this handler — the
 * trailing-slash form is exempted from the site-wide redirect in src/proxy.ts.
 */

export const dynamic = 'force-static';

export function GET() {
  return new Response('ok', { status: 200 });
}
