import Button from '../ui/Button'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden py-20" id="cta">
      <div className="absolute inset-0 bg-gradient-to-r from-navy to-deep-blue" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMC41IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+')] opacity-30" />

      <div className="relative mx-auto max-w-[1440px] px-14 text-center">
        <p className="mx-auto max-w-[800px] font-body text-base leading-relaxed text-white/80">
          Zentrixel helps organizations turn ambition into intelligent digital
          systems designed for performance, resilience, and measurable impact.
        </p>

        <h2 className="mt-4 font-heading text-4xl font-bold leading-tight text-white md:text-5xl">
          Ready to Lead Your Next{' '}
          <span className="block">Phase of Growth?</span>
        </h2>

        <div className="mt-6 mx-auto max-w-[600px] rounded-lg bg-white/10 p-4">
          <p className="font-body text-sm leading-relaxed text-white">
            Adopt powerful SaaS platforms.
            <br />
            Build custom AI-driven solutions.
            <br />
            Modernize with secure, scalable enterprise technology.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/products" variant="primary">
            Explore Our Platforms
          </Button>
          <Button href="/contact" variant="outline">
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
