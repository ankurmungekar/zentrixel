import { Helmet } from 'react-helmet-async'

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Zentrixel</title>
        <meta name="description" content="Zentrixel Privacy Policy — how we collect, use, and protect your personal information." />
      </Helmet>

      <main>
        <section className="bg-navy pt-32 pb-16">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <h1 className="font-heading text-4xl font-semibold text-white max-md:text-3xl">Privacy Policy</h1>
            <p className="mt-4 font-body text-base text-white/70">Last updated: February 2026</p>
          </div>
        </section>

        <section className="py-16 max-md:py-10">
          <div className="prose-content mx-auto max-w-[800px] px-14 max-md:px-5">
            <h2 className="font-heading text-2xl font-semibold text-navy">Information We Collect</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              We collect information you provide directly to us, such as when you fill out a contact form, request a demo, or communicate with us. This may include your name, email address, phone number, company name, and project details.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">How We Use Your Information</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              We use the information we collect to respond to your inquiries, provide our services, send relevant communications, and improve our website and offerings. We do not sell your personal information to third parties.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">Data Security</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">Cookies</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">Contact Us</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              If you have questions about this Privacy Policy, please contact us at sales@zentrixel.com.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
