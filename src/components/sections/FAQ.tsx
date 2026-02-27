import { useState } from 'react'

const FAQS = [
  {
    question: 'How much does custom software development cost?',
    answer:
      'Costs depend on scope, integrations, security requirements, and long-term support needs.',
  },
  {
    question: 'How long does it take to develop an enterprise application or MVP?',
    answer:
      'Timelines vary based on complexity. An MVP typically takes 8–12 weeks, while full enterprise applications may take 4–9 months depending on scope and integrations.',
  },
  {
    question: 'Do you provide artificial intelligence services?',
    answer:
      'Yes. We offer end-to-end AI services including conversational AI, predictive analytics, workflow automation, and secure AI integration into existing enterprise systems.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer:
      'Absolutely. We provide ongoing support, monitoring, and maintenance to ensure your systems continue to perform reliably as your business evolves.',
  },
  {
    question: 'Which industries do you work with?',
    answer:
      'We serve Banking & Fintech, Healthcare, Insurance, Real Estate & Facilities, and Enterprise B2B organizations across regulated industries.',
  },
  {
    question: 'Do you serve clients in the UAE and Middle East?',
    answer:
      'Yes. We have a presence in Dubai, UAE and work with enterprise clients across the Middle East, India, and internationally.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white py-20" id="faq">
      <div className="mx-auto max-w-[1440px] px-14">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
          <h2 className="font-heading text-4xl font-semibold leading-snug text-navy lg:w-[340px]">
            FREQUENTLY{' '}
            <span className="block">ASKED QUESTIONS</span>
          </h2>

          <div className="flex-1">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={idx}
                  className="border-b border-gray-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="flex w-full items-center justify-between py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-body text-base font-medium transition-colors ${
                        isOpen ? 'text-primary' : 'text-muted'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span className="ml-4 flex-shrink-0">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      >
                        <path
                          d="M5 8l5 5 5-5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-40 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="font-body text-sm leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
