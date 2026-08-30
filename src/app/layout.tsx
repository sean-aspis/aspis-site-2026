import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import Header from '@/components/shell/Header';
import UtilityBar from '@/components/shell/UtilityBar';
import Footer from '@/components/shell/Footer';
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION } from '@/lib/seo';
import './globals.css';

/**
 * Fonts are self-hosted rather than pulled from Google at build time: no
 * third-party request on the critical path, no layout shift, and the build
 * stays reproducible in any network environment. Files are the Google Fonts
 * latin subsets specified in the handoff (README §2).
 */
const archivo = localFont({
  src: [
    { path: '../fonts/archivo-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/archivo-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/archivo-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/archivo-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-archivo',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});
const spaceGrotesk = localFont({
  src: [
    { path: '../fonts/space-grotesk-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/space-grotesk-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/space-grotesk-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-space-grotesk',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});
const plexMono = localFont({
  src: [
    { path: '../fonts/ibm-plex-mono-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/ibm-plex-mono-latin-500-normal.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-plex-mono',
  display: 'swap',
  fallback: ['ui-monospace', 'monospace'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Secure the Conversation. Secure the Device. Control the Data.`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    url: SITE_URL,
    images: [{ url: '/assets/aspis-logo-horizontal-electric.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.svg' },
};

export const viewport: Viewport = {
  themeColor: '#05070E',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${spaceGrotesk.variable} ${plexMono.variable}`}
    >
      <body>
        <a
          href="#main"
          style={{
            position: 'absolute',
            left: -9999,
            top: 0,
            zIndex: 100,
            background: 'var(--cyan)',
            color: '#04060E',
            padding: '10px 16px',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
          }}
          className="skip-link"
        >
          Skip to content
        </a>
        <UtilityBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
