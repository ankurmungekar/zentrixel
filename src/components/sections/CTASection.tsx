import { Link } from 'react-router-dom'
import ctaBg from '../../assets/images/read-to-lead-bg.jpg'

export default function CTASection() {
  return (
    <section id="cta" className="mx-auto max-w-[1440px] px-14">
      <div
        className="relative overflow-hidden rounded-[20px] bg-cover bg-center p-20"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
        <div className="max-w-[560px]">
            <h2 className="whitespace-pre-line font-heading text-[40px] font-semibold leading-[1.45em] text-white">
              {'Ready to Lead Your Next\nPhase of Growth?'}
            </h2>

            <div
              className="mt-8 rounded-lg px-5 py-5"
              style={{ background: 'rgba(1, 19, 63, 0.3)' }}
            >
              <p className="whitespace-pre-line font-body text-base leading-[2em] text-white">
                {'Adopt powerful SaaS platforms.\nBuild custom AI-driven solutions.\nModernize with secure, scalable enterprise technology.'}
              </p>
            </div>

            <p className="mt-10 font-body text-xl leading-[1.6em] text-white">
              Zentrixel helps organizations turn ambition into intelligent digital
              systems designed for performance, resilience, and measurable impact.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="inline-flex h-12 items-center justify-center rounded-[30px] bg-primary px-6 font-body text-base text-white transition-colors hover:bg-primary/90"
              >
                Explore Our Platforms
              </Link>
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
