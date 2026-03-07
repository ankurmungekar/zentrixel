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
            <h2 className="font-heading text-2xl font-semibold text-navy">Acceptance of Terms</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              By accessing and using the Zentrixel website, you accept and agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you should not use our website.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">Use of Website</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              You may use our website for lawful purposes only. You agree not to use the website in any way that could damage, disable, or impair the website or interfere with any other party's use of the website.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">Intellectual Property</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              All content on this website, including text, graphics, logos, images, and software, is the property of Zentrixel and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">Limitation of Liability</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              Zentrixel shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of or inability to use our website or services.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">Contact</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              For questions regarding these Terms of Use, please contact us at sales@zentrixel.com.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
