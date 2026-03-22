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
            <p className="font-body text-base leading-relaxed text-muted">
              Effective Date: 28/04/2025
              <br /><br />
              At Zentrixel (“we,” “our,” “us”), we are committed to protecting your privacy and ensuring transparency about how we handle your personal data. This Privacy Policy explains what information we collect, how we use it, and your rights in relation to that data when you interact with our website or services.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">1. Who We Are</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              Zentrixel is an IT solutions company offering AI, automation, cloud, DevOps, web/mobile development, consulting, and digital transformation services to clients across UAE, India, KSA, Egypt, and beyond.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">2. Information We Collect</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              We collect both personal and non-personal data in the following ways:
            </p>
            <h3 className="mt-4 font-heading text-xl font-semibold text-navy">A. Information You Provide Directly:</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 font-body text-base leading-relaxed text-muted">
              <li>Name, email, phone number, and message when you contact us via web forms</li>
              <li>Company details, job title, or project information (if shared)</li>
              <li>Newsletter or inquiry subscriptions</li>
            </ul>
            <h3 className="mt-6 font-heading text-xl font-semibold text-navy">B. Information Collected Automatically:</h3>
            <ul className="mt-2 list-disc space-y-2 pl-5 font-body text-base leading-relaxed text-muted">
              <li>IP address, browser type, device information</li>
              <li>Pages visited, time spent, and interaction data via analytics tools</li>
              <li>Cookies or tracking pixels (e.g., Google Analytics, Facebook Pixel if used)</li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">3. How We Use Your Information</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              We use collected information to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-base leading-relaxed text-muted">
              <li>Respond to inquiries and service requests</li>
              <li>Deliver our services or follow up on consultations</li>
              <li>Improve website performance, content, and user experience</li>
              <li>Send newsletters or updates (only with your consent)</li>
              <li>Maintain security and prevent abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              We do not sell or rent your personal data under any circumstances.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">4. Cookies and Tracking Technologies</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              We use cookies and similar technologies to understand how visitors interact with our site, improve navigation and performance, and measure marketing effectiveness. You can disable cookies in your browser settings at any time.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">5. Legal Basis for Processing</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              We process personal data under one or more of the following legal bases:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 font-body text-base leading-relaxed text-muted">
              <li>Your consent (e.g., newsletter signup)</li>
              <li>Contractual necessity (e.g., responding to service requests)</li>
              <li>Legitimate interest (e.g., analytics)</li>
              <li>Legal obligation (if applicable)</li>
            </ul>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">6. Data Retention</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              We retain your data only as long as needed to fulfill the purpose it was collected for, or required by law/for resolving disputes. You may request deletion of your data anytime by contacting us.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">7. Data Sharing and Third Parties</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              We may share data with trusted service providers (hosting, email marketing, analytics tools), or legal authorities if legally required. All third-party vendors are required to maintain data security and confidentiality.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">8. International Data Transfers</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              Your data may be processed in countries such as UAE, India, KSA, or others where Zentrixel or its service providers operate. We ensure appropriate safeguards are in place for cross-border data transfer.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">9. Your Rights</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              You have the right to request access to your data, correct it, request deletion (“Right to be Forgotten”), withdraw consent, object to processing, or lodge a complaint. To exercise any of these rights, contact us at <a href="mailto:admin@zentrixel.com" className="text-primary hover:underline">admin@zentrixel.com</a>.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">10. Data Security</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              We take reasonable and appropriate security measures to protect your data, including SSL encryption, access control, and monitoring for unauthorized access. However, no method of data transmission over the internet is 100% secure. You use our site at your own risk.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">11. Children’s Privacy</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              Our website and services are not directed at individuals under the age of 16. We do not knowingly collect data from minors. If you believe a child has submitted data, please contact us immediately.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">12. Third-Party Links</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              Our website may include links to external websites. We are not responsible for the content or privacy practices of those third-party websites.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">13. Changes to This Privacy Policy</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              We may update this Privacy Policy from time to time to reflect changes in technology, law, or our services. When we do, we’ll revise the effective date and post the updated policy on this page.
            </p>

            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">14. Contact Us</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-muted">
              For any privacy-related questions or requests, you can contact us at:
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
