import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  /**
   * Trailing-slash redirects are handled in src/proxy.ts instead of by Next,
   * because several registered addresses must answer 200 with their trailing
   * slash.
   */
  skipTrailingSlashRedirect: true,
  /**
   * The gated PDFs live in /private/documents, outside the public directory, so
   * nothing serves them but the /api/documents/[slug] route. Nothing imports
   * them either — the route reads them from disk — so Next cannot infer the
   * dependency and would ship the function without them. This is what puts them
   * in the bundle. If a download 404s in production, look here first.
   */
  outputFileTracingIncludes: {
    '/api/documents/[slug]': ['./private/documents/**'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [420, 640, 828, 1080, 1200, 1600, 1920, 2560],
  },
  async rewrites() {
    return [
      // The logo is referenced both with and without its extension; /logo
      // serves the same transparent PNG as /logo.png.
      { source: '/logo', destination: '/logo.png' },
      // The ShieldiT apps and their identity-provider registration carry the
      // legal documents under these addresses. Each serves the same document
      // as its published address (a rewrite, not a redirect, so it answers
      // 200 as written); the rendered page's canonical still points at the
      // published address. The trailing-slash forms are exempted from the
      // site-wide redirect in src/proxy.ts. There is no separate copyright
      // policy: /copyright-policy serves the Terms of Use, whose
      // "Intellectual property" section covers it.
      { source: '/privacy', destination: '/privacy-policy' },
      { source: '/acceptable-use-policy-terms', destination: '/legal/terms-of-use' },
      { source: '/terms-of-use-and-acceptance', destination: '/legal/terms-of-use' },
      { source: '/copyright-policy', destination: '/legal/terms-of-use' },
    ];
  },
  async redirects() {
    return [
      // The privacy policy's published address is /privacy-policy (it is the
      // URL given to the app stores). The old /legal path forwards to it.
      { source: '/legal/privacy-policy', destination: '/privacy-policy', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        // Gated downloads: never cached by a shared cache, never indexed.
        source: '/api/documents/:path*',
        headers: [
          { key: 'Cache-Control', value: 'private, no-store' },
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
    ];
  },
};

export default nextConfig;
