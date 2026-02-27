const TESTIMONIALS = [
  {
    quote:
      'Zentrixel\u00a0understood the realities of our enterprise environment. The solution integrated seamlessly and was ready for production from day one.',
    role: 'Business Head, BFSI Organization',
    location: 'Middle East',
  },
  {
    quote:
      'The ERP implementation improved visibility while meeting strict healthcare compliance requirements',
    role: 'Product Owner, Healthcare Organization',
    location: 'USA',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-20" id="testimonials">
      <div className="mx-auto max-w-[1440px] px-14">
        <div className="mb-10 flex justify-center">
          <span className="font-sub-heading text-2xl leading-[1.5em] text-[#023497]">
            Client Testimonials
          </span>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-200"
            >
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z" />
                  </svg>
                </div>
                <blockquote className="flex-1 font-body text-base italic leading-relaxed text-muted">
                  "{t.quote}"
                </blockquote>
              </div>
              <div className="border-t border-gray-200 bg-[#F8FAFF] px-8 py-4">
                <p className="font-body text-sm font-semibold text-navy">
                  {t.role}
                </p>
                <p className="font-body text-xs text-muted">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="/testimonials"
            className="inline-flex items-center justify-center rounded-[30px] bg-primary px-6 py-3 font-body text-base text-white transition-colors hover:bg-primary/90"
          >
            Know More
          </a>
        </div>
      </div>
    </section>
  )
}
