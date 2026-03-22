import { Helmet } from 'react-helmet-async'

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Use | Zentrixel</title>
        <meta name="description" content="Zentrixel Terms of Use — the terms and conditions governing the use of our website and services." />
      </Helmet>

      <main>
        <section className="bg-navy pt-32 pb-16">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <h1 className="font-heading text-4xl font-semibold text-white max-md:text-3xl">Terms of Use</h1>
            <p className="mt-4 font-body text-base text-white/70">Last updated: February 2026</p>
          </div>
        </section>

        <section className="py-16 max-md:py-10">
          <div className="prose-content mx-auto max-w-[800px] px-14 max-md:px-5">
            <p className="font-body text-base leading-relaxed text-muted">
              Welcome to Zentrixel ("we", "our", or "us"). These Terms & Conditions ("Terms") govern your use of our website at <a href="https://zentrixel.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://zentrixel.com</a> and any services, content, or resources provided through the site. By accessing or using our website, you agree to be bound by these Terms.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">1. Use of the Website</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              You agree to use this website only for lawful purposes. You must not:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-base leading-relaxed text-muted">
              <li>Attempt to gain unauthorized access to any part of the site</li>
              <li>Disrupt or interfere with the website’s security or functionality</li>
              <li>Reproduce, duplicate, copy, sell, or exploit any portion of the website without our prior written consent</li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">2. Intellectual Property</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              All content on the site — including text, graphics, logos, images, software, and design — is the property of Zentrixel or its content providers and protected under applicable copyright, trademark, and intellectual property laws. Unauthorized use of this content is prohibited.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">3. Disclaimer of Warranties</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              The information and services provided on our site are for general informational purposes only. While we strive to keep the content accurate and up to date, we do not warrant or guarantee:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-base leading-relaxed text-muted">
              <li>The accuracy, reliability, or completeness of the information</li>
              <li>That the site will be available at all times without interruption</li>
              <li>That the site is free of viruses or harmful components</li>
            </ul>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              Use of the website is at your own risk.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">4. Limitation of Liability</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              Zentrixel shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of the website or reliance on its content. This includes, but is not limited to, loss of data, loss of profits, or business interruption.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">5. Third-Party Links</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              Our website may contain links to third-party websites for additional resources or convenience. We are not responsible for the content, accuracy, or privacy practices of any external sites. Access these sites at your own risk.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">6. Modifications to the Terms</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              We may update or modify these Terms at any time without prior notice. By continuing to use the website after changes are posted, you agree to the revised Terms. We recommend checking this page periodically.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">7. Governing Law</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              These Terms are governed by and construed in accordance with the laws of jurisdictions where Zentrixel operates globally. Any disputes will be subject to the non-exclusive jurisdiction of courts in the applicable region based on your location or our primary operating center.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">8. Contact Us</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <ul className="mt-4 list-none space-y-2 font-body text-base leading-relaxed text-muted">
              <li><strong>Zentrixel Email:</strong> <a href="mailto:admin@zentrixel.com" className="text-primary hover:underline">admin@zentrixel.com</a></li>
              <li><strong>Website:</strong> <a href="https://zentrixel.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://zentrixel.com</a></li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}
