import { Link } from 'react-router-dom'
import ctaBg from '../../assets/images/read-to-lead-bg.jpg'

export default function CTASection() {
  return (
    <section id="cta" className="mx-auto max-w-[1440px] px-14 max-md:px-5">
      <div
        className="relative overflow-hidden rounded-[20px] bg-cover bg-center p-20 max-md:rounded-xl max-md:p-6"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="max-w-[560px]">
          <h2 className="whitespace-pre-line font-heading text-[40px] font-semibold leading-[1.45em] text-white max-md:text-[28px]">
            {'Let’s Build What’s Next'}
          </h2>

          <p className="mt-10 font-body text-xl leading-[1.6em] text-white max-md:mt-6 max-md:text-base">
            Whether you are looking for a software development company, custom software development company, AI development company, or enterprise IT solutions company
          </p>
          <p className="mt-10 font-body text-xl leading-[1.6em] text-white max-md:mt-6 max-md:text-base">
            we bring structured engineering and practical AI to long-term transformation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 max-md:mt-6 max-md:flex-col max-md:items-start">
            <Link
              to="/contact"
              className="inline-flex h-12 items-center justify-center rounded-[30px] border border-white px-6 font-body text-base text-white transition-colors hover:bg-white/10"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
