/**
 * Apple App Site Association (AASA) for the ShieldiT iOS apps.
 *
 * Apple fetches this file from the bare domain to enable Universal Links
 * (`applinks`) and shared web credentials / passkeys (`webcredentials`). Apple's
 * requirements, all of which this handler meets: served over HTTPS, at exactly
 * this path with no file extension, with `Content-Type: application/json`, and
 * with no redirect anywhere in the chain. A redirect means the CDN silently
 * drops the association, so if Universal Links stop working, check that the
 * domain itself is not redirecting (for example apex to www) before anything else.
 *
 * `force-static` prerenders the response at build time — Next 16 no longer
 * caches GET route handlers by default.
 */

const TEAM_ID = 'CRHZ2U6WZS';

const APP_IDS = [`${TEAM_ID}.com.aspiscyber.shieldit`, `${TEAM_ID}.com.aspiscyber.shielditdefense`];

export const dynamic = 'force-static';

export function GET() {
  return Response.json(
    {
      applinks: {
        apps: [],
        details: [{ appIDs: APP_IDS, paths: ['*'] }],
      },
      webcredentials: {
        apps: APP_IDS,
      },
    },
    { headers: { 'Cache-Control': 'public, max-age=3600' } },
  );
}
