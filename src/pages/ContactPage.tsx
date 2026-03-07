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
        <section className="bg-navy pt-32 pb-20">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <p className="font-sub-heading text-lg text-primary">Contact Us</p>
            <h1 className="mt-3 max-w-[700px] font-heading text-4xl font-semibold leading-snug text-white max-md:text-3xl">
              Let's Build Something Together
            </h1>
            <p className="mt-6 max-w-[680px] font-body text-lg leading-relaxed text-white/70 max-md:text-base">
              Whether you're exploring a new initiative or need a technology
              partner for an existing project, we'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-20 max-md:py-12">
          <div className="mx-auto max-w-[1440px] px-14 max-md:px-5">
            <div className="grid gap-16 lg:grid-cols-2">
              <div>
                <h2 className="font-heading text-2xl font-semibold text-navy">
                  Send Us a Message
                </h2>
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
                    placeholder="Subject"
                    className="rounded-lg border border-gray-200 px-4 py-3 font-body text-sm text-navy outline-none transition-colors focus:border-primary"
                  />
                  <textarea
                    placeholder="Tell us about your project"
                    rows={5}
                    className="resize-none rounded-lg border border-gray-200 px-4 py-3 font-body text-sm text-navy outline-none transition-colors focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-12 w-fit items-center justify-center rounded-[30px] bg-primary px-8 font-body text-base text-white transition-colors hover:bg-primary/90"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-navy">Get in Touch</h3>
                  <div className="mt-4 flex flex-col gap-3 font-body text-sm leading-relaxed text-muted">
                    <p>+91-9764013221 | +971-504711076</p>
                    <p>sales@zentrixel.com</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold text-navy">UAE Office</h3>
                  <div className="mt-4 font-body text-sm leading-relaxed text-muted">
                    <p className="font-medium text-navy">Zentrixel LLC-FZ</p>
                    <p>Meydan Grandstand, 6th Floor</p>
                    <p>Meydan Road, Nad Al Sheba, Dubai, UAE</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold text-navy">India Office</h3>
                  <div className="mt-4 font-body text-sm leading-relaxed text-muted">
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
