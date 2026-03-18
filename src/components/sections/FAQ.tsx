import { useState } from 'react'
import faqImage from '../../assets/images/faq.png'

export interface FAQItem {
  question: string
  answer: string
}

const DEFAULT_FAQS: FAQItem[] = [
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

interface FAQProps {
  items?: FAQItem[]
  showImage?: boolean
  heading?: string
}

export default function FAQ({ items, showImage = false, heading }: FAQProps = {}) {
  const faqs = items ?? DEFAULT_FAQS
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]))

  return (
    <section className="bg-white py-20 max-md:py-12" id="faq">
      <div className="mx-auto max-w-[1440px] px-14 max-md:px-6">
        <div className={`${showImage ? 'flex flex-col gap-12 lg:flex-row lg:gap-20' : ''}`}>
          {(showImage || heading) && (
            <div className={`lg:pt-[15px] ${showImage ? 'lg:w-[407px] lg:flex-shrink-0' : ''}`}>
              {heading && (
                <h2 className="whitespace-pre-line font-heading text-4xl font-semibold leading-[1.28em] text-navy max-md:text-3xl">
                  {heading}
                </h2>
              )}
              {showImage && (
                <img
                  src={faqImage}
                  alt="Frequently asked questions"
                  className={`w-full max-w-[380px] object-contain max-lg:hidden ${heading ? 'mt-8' : ''}`}
                  loading="lazy"
                />
              )}
            </div>
          )}

          <div className="flex-1">
            {faqs.map((faq, idx) => {
              const isOpen = openIndices.has(idx)
              return (
                <div key={idx}>
                  <button
                    type="button"
                    onClick={() => setOpenIndices((prev) => {
                      const next = new Set(prev)
                      if (next.has(idx)) next.delete(idx)
                      else next.add(idx)
                      return next
                    })}
                    className="flex w-full items-center justify-between py-6 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-body text-xl font-medium leading-snug transition-colors max-md:text-base ${
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
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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
                      isOpen ? 'max-h-40 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="font-body text-base leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  </div>
                  <div className="h-px w-full bg-primary/20" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
