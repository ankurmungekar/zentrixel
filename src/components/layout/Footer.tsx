import { Link } from 'react-router-dom'
import logoWhite from '../../assets/images/logo-white.png'

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Insights', href: '/insight' },
  { label: 'Contact Us', href: '/contact' },
]

const PRODUCTS = [
  { label: 'AI Chatbot Platform', href: '/products' },
  { label: 'AI Calling Platform', href: '/products/ai-calling' },
  { label: 'AI Social Engagement Platform', href: '/products' },
  { label: 'Smart Facility Management Platform', href: '/products' },
  { label: 'Solid Waste Management Platform', href: '/products' },
]

const SERVICES = [
  { label: 'AI & ML Solutions', href: '/services/ai-and-ml-solutions' },
  { label: 'Web & Mobile Apps', href: '/services/web-and-mobile-apps' },
  { label: 'Cloud Computing', href: '/services/cloud-computing-solutions' },
  { label: 'Automation Solutions', href: '/services/automation-solutions' },
  { label: 'Database Management', href: '/services/database-management' },
  { label: 'DevOps Solutions', href: '/services/devops-solutions' },
  { label: 'UI & UX Design', href: '/services/ui-and-ux-design' },
  { label: 'Digital Marketing', href: '/services/digital-marketing' },
  { label: 'Virtual CTO & IT Consult', href: '/services/virtual-cto-x-it-consult' },
]

const INDUSTRIES_LINKS = [
  { label: 'AI Data-Driven Company', href: '/industries/ai-data-driven-company' },
  { label: 'Startup', href: '/industries/startup' },
  { label: 'FinTech', href: '/industries/fintech' },
  { label: 'SMEs', href: '/industries/smes' },
  { label: 'BFSI', href: '/industries/bfsi' },
  { label: 'Real Estate', href: '/industries/real-estate' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1440px] px-20 pt-10 pb-8 max-md:px-6">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Left: Logo + Contact + Locations */}
          <div className="relative flex flex-col gap-6 pr-16 lg:w-[416px] lg:flex-shrink-0">
            <Link to="/" aria-label="Zentrixel Home">
              <img src={logoWhite} alt="Zentrixel" className="h-[61px] w-auto" />
            </Link>

            <div className="flex flex-col gap-6 pl-6 max-md:pl-0">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span className="font-body text-sm font-medium tracking-[0.04em] text-primary">
                    Contact us
                  </span>
                </div>
                <div className="flex flex-col gap-2 font-body text-sm leading-[1.8em] text-[#EFF9FB]">
                  <span>+91-9764013221 | +971-504711076</span>
                  <span>sales@zentrixel.com</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <span className="font-body text-sm font-medium tracking-[0.04em] text-primary">
                    Locations
                  </span>
                </div>
                <div className="flex flex-col gap-5 font-body text-sm leading-[1.8em]">
                  <div>
                    <p className="font-semibold text-white">UAE</p>
                    <p className="text-white">Zentrixel LLC-FZ</p>
                    <p className="font-light text-[#EFF9FB]">
                      Meydan Grandstand, 6th Floor
                      <br />
                      Meydan Road, Nad Al Sheba, Dubai, UAE
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">India</p>
                    <p className="text-white">Zentrixel Private Limited</p>
                    <p className="font-light text-[#EFF9FB]">
                      17th Floor, Nyati Enthral
                      <br />
                      Kharadi, Pune, Maharashtra, India – 411014
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute top-0 right-0 hidden h-full w-px bg-white/10 lg:block" />
          </div>

          {/* Right: Link Columns + Follow Us */}
          <div className="flex flex-1 flex-col gap-12 lg:py-4 lg:pl-16">
            <div className="grid flex-1 grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-3">
              {/* Column 1: Quick Links + Services stacked */}
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  <h3 className="font-body text-sm font-medium tracking-[0.04em] text-primary">
                    Quick Links
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {QUICK_LINKS.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.href}
                          className="font-body text-sm leading-[1.4em] text-[#EFF9FB] transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-6">
                  <h3 className="font-body text-sm font-medium tracking-[0.04em] text-primary">
                    Services
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {SERVICES.map((service) => (
                      <li key={service.label}>
                        <Link
                          to={service.href}
                          className="font-body text-sm leading-[1.4em] text-[#EFF9FB] transition-colors hover:text-white"
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 2: Products */}
              <div className="flex flex-col gap-6">
                <h3 className="font-body text-sm font-medium tracking-[0.04em] text-primary">
                  Products
                </h3>
                <ul className="flex flex-col gap-3">
                  {PRODUCTS.map((product) => (
                    <li key={product.label}>
                      <Link
                        to={product.href}
                        className="font-body text-sm leading-[1.4em] text-[#EFF9FB] transition-colors hover:text-white"
                      >
                        {product.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Industries */}
              <div className="flex flex-col gap-6">
                <h3 className="font-body text-sm font-medium tracking-[0.04em] text-primary">
                  Industries
                </h3>
                <ul className="flex flex-col gap-3">
                  {INDUSTRIES_LINKS.map((ind) => (
                    <li key={ind.label}>
                      <Link
                        to={ind.href}
                        className="font-body text-sm leading-[1.4em] text-[#EFF9FB] transition-colors hover:text-white"
                      >
                        {ind.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <span className="font-body text-sm text-white">Follow Us</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-primary"
                  aria-label="Facebook"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-primary"
                  aria-label="Instagram"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-primary"
                  aria-label="YouTube"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-primary"
                  aria-label="X"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-body text-sm leading-[1.71em] text-white/60">
              © Zentrixel. All rights reserved.
            </p>
            <p className="font-body text-sm leading-[1.71em] text-white/60">
              <Link to="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
              {' | '}
              <Link to="/terms" className="transition-colors hover:text-white">
                Terms of Use
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
