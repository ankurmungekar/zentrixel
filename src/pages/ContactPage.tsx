import { Helmet } from 'react-helmet-async'

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Zentrixel</title>
        <meta
          name="description"
          content="Get in touch with Zentrixel. Book a free consultation, request a demo, or discuss your enterprise technology needs."
        />
      </Helmet>

      <main>
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="bg-navy pt-32 pb-20">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <p className="font-sub-heading text-lg text-primary">Contact Us</p>
            <h1 className="mt-3 max-w-[700px] font-heading text-4xl font-semibold leading-snug text-white max-md:text-3xl">
              We'd Love to Hear From You
            </h1>
            <p className="mt-6 max-w-[680px] font-body text-lg leading-relaxed text-white/70 max-md:text-base">Let's connect and explore how we can turn your ideas into innovative, high-impact digital solutions.</p>
            <p className="mt-6 max-w-[680px] font-body text-lg leading-relaxed text-white/70 max-md:text-base">
              Whether you have a question, need a consultation, or want to learn more about our
              services — Zentrixel is your one-stop partner for technological excellence.
            </p>
          </div>
        </section>

        {/* ── Form + Info ──────────────────────────────────────── */}
        <section className="py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid gap-16 lg:grid-cols-2">

              {/* Left — Form */}
              <div>
                <h2 className="font-heading text-2xl font-semibold text-navy">Drop us a line!</h2>
                <p className="mt-2 font-body text-base text-muted">Sign up for our email list for updates.</p>

                <form className="mt-8 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="rounded-lg border border-gray-200 px-4 py-3 font-body text-sm text-navy outline-none transition-colors focus:border-primary"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="rounded-lg border border-gray-200 px-4 py-3 font-body text-sm text-navy outline-none transition-colors focus:border-primary"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="rounded-lg border border-gray-200 px-4 py-3 font-body text-sm text-navy outline-none transition-colors focus:border-primary"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="rounded-lg border border-gray-200 px-4 py-3 font-body text-sm text-navy outline-none transition-colors focus:border-primary"
                  />
                  <textarea
                    placeholder="Tell us about your project or question"
                    rows={5}
                    className="resize-none rounded-lg border border-gray-200 px-4 py-3 font-body text-sm text-navy outline-none transition-colors focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-12 w-fit items-center justify-center rounded-[30px] bg-primary px-8 font-body text-base text-white transition-colors hover:bg-primary/90"
                  >
                    Send Message
                  </button>
                  <p className="font-body text-xs leading-relaxed text-muted">
                    This site is protected by reCAPTCHA and the Google{' '}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-primary"
                    >
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-primary"
                    >
                      Terms of Service
                    </a>{' '}
                    apply.
                  </p>
                </form>
              </div>

              {/* Right — Info */}
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-navy">
                    Get in Touch
                  </h2>
                  <p className="mt-3 font-body text-base leading-relaxed text-muted">
                    We're here to help. Reach out to us through any of the channels below.
                  </p>
                </div>

                {/* Contact details */}
                <div>
                  <div className="mt-3 flex flex-col gap-2 font-body text-sm leading-relaxed text-muted">
                    <p>
                      <span className="font-medium text-navy">Email: </span>
                      <a href="mailto:sales@zentrixel.com" className="hover:text-primary">
                        sales@zentrixel.com
                      </a>
                    </p>
                    <p>
                      <span className="font-medium text-navy">Phone: </span>
                      +971 504711076, +91 9764013221
                    </p>
                  </div>
                  {/* WhatsApp CTA */}
                  <a
                    href="https://wa.me/919764013221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-[30px] border border-[#25D366] px-5 py-2.5 font-body text-sm font-medium text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                    </svg>
                    Message us on WhatsApp
                  </a>
                </div>

                {/* UAE Office */}
                <div>
                  <h3 className="font-heading text-lg font-semibold text-navy">Head Office — UAE</h3>
                  <div className="mt-3 font-body text-sm leading-relaxed text-muted">
                    <p className="font-medium text-navy">Zentrixel LLC-FZ</p>
                    <p>Meydan Grandstand, 6th Floor</p>
                    <p>Meydan Road, Nad Al Sheba, Dubai, UAE</p>
                  </div>
                </div>

                {/* India Office */}
                <div>
                  <h3 className="font-heading text-lg font-semibold text-navy">India Office</h3>
                  <div className="mt-3 font-body text-sm leading-relaxed text-muted">
                    <p className="font-medium text-navy">Zentrixel Private Limited</p>
                    <p>17th Floor, Nyati Enthral</p>
                    <p>Kharadi, Pune, Maharashtra, India – 411014</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
