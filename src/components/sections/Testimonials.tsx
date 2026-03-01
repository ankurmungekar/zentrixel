import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/swiper.css'

const TESTIMONIALS = [
  {
    quote:
      'Zentrixel\u00a0understood the realities of our enterprise environment. The solution integrated seamlessly and was ready for production from day one.',
    role: 'Business Head, BFSI Organization',
    location: 'Middle East',
  },
  {
    quote:
      'The ERP implementation improved visibility while meeting strict healthcare compliance requirements.',
    role: 'Product Owner, Healthcare Organization',
    location: 'USA',
  },
  {
    quote:
      'Their AI automation reduced our manual processing time by 60% while maintaining full regulatory compliance.',
    role: 'CTO, Insurance Company',
    location: 'UAE',
  },
  {
    quote:
      'The facility management platform transformed how we operate across 50+ properties with real-time insights.',
    role: 'Operations Director, Real Estate Firm',
    location: 'India',
  },
]

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section className="bg-white py-20 mb-20" id="testimonials">
      <div className="mx-auto max-w-[1440px] px-14">
        <p className="mx-auto mb-4 w-fit font-sub-heading text-2xl leading-[1.5em] text-[#023497]">
          Client Testimonials
        </p>
        <h2 className="text-center font-heading text-4xl font-semibold leading-[1.611em] text-navy">
          Trusted by Enterprise Teams
        </h2>

        <div className="relative mx-auto mt-12 max-w-[1062px]">
          {/* Prev arrow */}
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute -left-14 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#C8CFFF] bg-[#E8F1FF] transition-colors hover:bg-[#DEE8FF] lg:flex"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute -right-14 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-[#C8CFFF] bg-[#E8F1FF] transition-colors hover:bg-[#DEE8FF] lg:flex"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => { swiperRef.current = swiper }}
            slidesPerView={1}
            spaceBetween={30}
            loop
            breakpoints={{
              1024: { slidesPerView: 2 },
            }}
          >
            {TESTIMONIALS.map((t, idx) => (
              <SwiperSlide key={idx} className="pt-[28px]">
                <article className="relative h-[360px] overflow-visible rounded-xl border border-[#C8CFFF] bg-white">
                  {/* Quote badge + top line */}
                  <div className="absolute left-[30px] right-[30px] top-0 h-px bg-gradient-to-r from-[#DCE4F8] to-transparent" />
                  <span className="absolute left-[20px] top-[-40px] z-10 flex h-[82px] w-[82px] items-center justify-center rounded-full border-[12px] border-white bg-[#E8F1FF]">
                    <svg width="37px" height="30px" viewBox="0 0 24 24" fill="#1E5EFF" className="opacity-60">
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z" />
                    </svg>
                  </span>

                  {/* Quote text */}
                  <blockquote className="px-10 pt-[75px] text-[20px] leading-[1.6em] text-muted">
                    {t.quote}
                  </blockquote>

                  {/* Footer */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[121px] border-t border-[#C8CFFF] px-10 pt-6"
                    style={{ background: 'linear-gradient(180deg, rgba(245,249,255,1) 0%, rgba(232,241,255,1) 91%)' }}
                  >
                    <p className="font-body text-base font-medium leading-[1.25em] text-navy">
                      {t.role}
                    </p>
                    <p className="mt-2 font-body text-base leading-[1.25em] text-muted">
                      {t.location}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
