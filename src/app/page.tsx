import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import Chapter01Gap from '@/components/home/Chapter01Gap';
import Chapter02Architecture from '@/components/home/Chapter02Architecture';
import PlatformInUse from '@/components/home/PlatformInUse';
import Chapter03ShieldiT from '@/components/home/Chapter03ShieldiT';
import Chapter04ControlPlane from '@/components/home/Chapter04ControlPlane';
import Chapter05MobileThreatDefense from '@/components/home/Chapter05MobileThreatDefense';
import Chapter06Deployment from '@/components/home/Chapter06Deployment';
import Chapter07Compliance from '@/components/home/Chapter07Compliance';
import Chapter08Industries from '@/components/home/Chapter08Industries';
import Chapter09Integrations from '@/components/home/Chapter09Integrations';
import Chapter10Intelligence from '@/components/home/Chapter10Intelligence';
import ShieldMeBridge from '@/components/home/ShieldMeBridge';
import HomeCta from '@/components/home/HomeCta';
import { SITE_URL, DEFAULT_DESCRIPTION } from '@/lib/seo';

export const metadata: Metadata = {
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: '/' },
};

/**
 * 14 sections, 10 numbered chapters. Every child of <main> is a <section> so
 * the nth-of-type alternation in globals.css resolves correctly — do not wrap
 * any of these in a div.
 */
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'ASPIS Cyber Technologies, Inc.',
            url: SITE_URL,
            logo: `${SITE_URL}/assets/aspis-logo-horizontal-electric.png`,
            description: DEFAULT_DESCRIPTION,
            sameAs: ['https://www.linkedin.com/company/aspis-cyber/'],
          }),
        }}
      />
      <main id="main">
        <Hero />
        <Chapter01Gap />
        <Chapter02Architecture />
        <PlatformInUse />
        <Chapter03ShieldiT />
        <Chapter04ControlPlane />
        <Chapter05MobileThreatDefense />
        <Chapter06Deployment />
        <Chapter07Compliance />
        <Chapter08Industries />
        <Chapter09Integrations />
        <Chapter10Intelligence />
        <ShieldMeBridge />
        <HomeCta />
      </main>
    </>
  );
}
