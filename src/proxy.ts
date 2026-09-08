import { NextResponse, type NextRequest } from 'next/server';

/**
 * Trailing-slash handling.
 *
 * The site's URLs have no trailing slash, and Next normally 308-redirects
 * `/about/` to `/about` for us. Two addresses are registered with third parties
 * WITH a trailing slash and must answer 200 as written, so the built-in redirect
 * is switched off (`skipTrailingSlashRedirect` in next.config.ts) and
 * re-implemented here with those two exempted. Next matches `/oidc/login/` to
 * the `/oidc/login` route on its own once the redirect is out of the way.
 *
 * The matcher only fires for paths that end in a slash, so ordinary page and
 * asset requests never invoke this function.
 *
 * A plain URL is used rather than `request.nextUrl`: NextURL remembers whether
 * the incoming path had a trailing slash and puts it back when it formats the
 * href, which would turn the redirect into a loop.
 */

const TRAILING_SLASH_ALLOWED = new Set(['/oidc/login/', '/account-deletion-request/']);

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
