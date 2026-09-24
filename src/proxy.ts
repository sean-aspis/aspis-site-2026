import { NextResponse, type NextRequest } from 'next/server';

/**
 * Trailing-slash handling.
 *
 * The site's URLs have no trailing slash, and Next normally 308-redirects
 * `/about/` to `/about` for us. A handful of addresses are registered with
 * third parties (the ShieldiT apps, their store listings and their identity
 * provider) WITH a trailing slash and must answer 200 as written, so the
 * built-in redirect is switched off (`skipTrailingSlashRedirect` in
 * next.config.ts) and re-implemented here with those exempted. Next matches
 * `/oidc/login/` to the `/oidc/login` route on its own once the redirect is out
 * of the way, and the same goes for the rewrites in next.config.ts.
 *
 * The matcher only fires for paths that end in a slash, so ordinary page and
 * asset requests never invoke this function.
 *
 * A plain URL is used rather than `request.nextUrl`: NextURL remembers whether
 * the incoming path had a trailing slash and puts it back when it formats the
 * href, which would turn the redirect into a loop.
 */

const TRAILING_SLASH_ALLOWED = new Set([
  '/oidc/login/',
  '/account-deletion-request/',
  '/privacy-policy/',
  '/terms-of-use-and-acceptance/',
  '/copyright-policy/',
]);

export function proxy(request: NextRequest) {
  const url = new URL(request.url);

  if (url.pathname === '/' || !url.pathname.endsWith('/') || TRAILING_SLASH_ALLOWED.has(url.pathname)) {
    return NextResponse.next();
  }

  url.pathname = url.pathname.replace(/\/+$/, '');
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: '/(.*/)',
};
