import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import Products from '../components/sections/Products'
import Services from '../components/sections/Services'
import WhyZentrixel from '../components/sections/WhyZentrixel'
import Industries from '../components/sections/Industries'
import Testimonials from '../components/sections/Testimonials'
import CTASection from '../components/sections/CTASection'
import FAQ from '../components/sections/FAQ'

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zentrixel',
  url: 'https://zentrixel.com',
  description:
    'AI-powered enterprise software development company delivering scalable SaaS platforms, custom software, and technology consulting.',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-9764013221',
      contactType: 'sales',
      areaServed: ['IN', 'AE'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+971-504711076',
      contactType: 'sales',
      areaServed: ['AE', 'IN'],
    },
  ],
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: '17th Floor, Nyati Enthral, Kharadi',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411014',
      addressCountry: 'IN',
    },
  ],
  sameAs: [
    'https://linkedin.com/company/zentrixel',
    'https://twitter.com/zentrixel',
  ],
}

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Zentrixel - AI-Powered Enterprise Software & Digital Solutions</title>
        <meta
          name="description"
          content="Zentrixel builds scalable AI-powered SaaS platforms and enterprise software for finance, healthcare, and real estate. Custom software development, AI automation, and technology consulting."
        />
        <meta property="og:title" content="Zentrixel - AI-Powered Enterprise Software & Digital Solutions" />
        <meta property="og:description" content="Engineering the future of enterprise with AI. Scalable SaaS platforms for regulated industries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zentrixel.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zentrixel - AI-Powered Enterprise Software" />
        <meta name="twitter:description" content="Engineering the future of enterprise with AI." />
        <link rel="canonical" href="https://zentrixel.com" />
        <script type="application/ld+json">
          {JSON.stringify(ORGANIZATION_SCHEMA)}
        </script>
      </Helmet>
      <main>
        <Hero />
        <Products />
        <Services />
        <WhyZentrixel />
        <Industries />
        <Testimonials />
        <CTASection />
        <FAQ />
      </main>
    </>
  )
}
