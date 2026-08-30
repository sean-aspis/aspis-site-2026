import { readFile } from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { DOC_BY_SLUG } from '@/data/documents';
import { ACCESS_COOKIE, readToken } from '@/lib/docAccess';

/**
 * Serves one gated PDF.
 *
 * The files live in /private/documents, outside the public directory, so this
 * route is the only way to reach one — there is no CDN URL to share and nothing
 * for a crawler to index. `outputFileTracingIncludes` in next.config.ts is what
 * ships them alongside this function; if a download ever 404s in production,
 * check that entry first.
 *
 * `slug` is matched against the document registry rather than being joined into
 * a path, so a traversal attempt resolves to no document and 404s.
 */
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const doc = DOC_BY_SLUG[slug];
  if (!doc) {
    return NextResponse.json({ error: 'No such document.' }, { status: 404 });
  }

  const email = readToken((await cookies()).get(ACCESS_COOKIE)?.value);
  if (!email) {
    return NextResponse.json(
      { error: 'Access required.', message: 'Complete the access form to read this document.' },
      { status: 401 }
    );
  }

  const file = path.basename(doc.file); // registry value, but normalise anyway
  let bytes: Buffer;
  try {
    bytes = await readFile(path.join(process.cwd(), 'private', 'documents', file));
  } catch {
    return NextResponse.json({ error: 'Document unavailable.' }, { status: 500 });
  }

  return new NextResponse(new Uint8Array(bytes), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Length': String(bytes.byteLength),
      'Content-Disposition': `inline; filename="${file}"`,
      // Gated, and the response depends on the caller's cookie: never store it
      // in a shared cache.
      'Cache-Control': 'private, no-store',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}
