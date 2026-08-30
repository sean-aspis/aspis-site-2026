import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
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
