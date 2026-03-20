import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import logoBlack from '../../assets/images/logo-black.png'
import letsArrow from '../../assets/images/lets-arrow.svg'
import SERVICES from '../../data/services'
import INDUSTRIES from '../../data/industries'

/**
 * Header style per route:
 *  'dark'              – always white bg, black logo, black text
 *  'transparent-dark'  – transparent + black logo/text initially → white bg on scroll
 *  (default)           – transparent + white logo/text initially → navy bg on scroll
 */
function getHeaderStyle(pathname: string): 'dark' | 'transparent-dark' | 'transparent-light' {
  if (pathname.startsWith('/services')) return 'dark'
  if (pathname.startsWith('/industries')) return 'dark'
  const DARK: string[] = ['/about', '/contact', '/insight']
  if (DARK.includes(pathname)) return 'dark'
  if (pathname === '/products/ai-calling') return 'transparent-dark'
  return 'transparent-light'
}

const SCROLL_THRESHOLD = 80

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const industriesDropdownRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  const headerStyle = getHeaderStyle(pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setIndustriesOpen(false)
  }, [pathname])

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
      if (industriesDropdownRef.current && !industriesDropdownRef.current.contains(e.target as Node)) {
        setIndustriesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // ── computed styles ───────────────────────────────────────────
  let headerBg: string
  let textColor: string
  let useDarkLogo: boolean

  if (headerStyle === 'dark') {
    headerBg = 'bg-white shadow-[0_4px_8px_rgba(0,0,0,0.05)]'
    textColor = 'text-[#0F172A]'
    useDarkLogo = true
  } else if (headerStyle === 'transparent-dark') {
    headerBg = scrolled ? 'bg-white shadow-[0_4px_8px_rgba(0,0,0,0.05)]' : 'bg-transparent'
    textColor = 'text-[#0F172A]'
    useDarkLogo = true
  } else {
    headerBg = scrolled ? 'bg-[#0D1429] shadow-md' : 'bg-transparent'
    textColor = 'text-white'
    useDarkLogo = false
  }

  const mobileBg =
    headerStyle === 'dark' || headerStyle === 'transparent-dark'
      ? 'border-gray-100 bg-white'
      : scrolled
        ? 'border-white/10 bg-[#0D1429]'
        : 'border-white/10 bg-navy/95 backdrop-blur-md'

  const mobileLinkColor =
    headerStyle === 'dark' || headerStyle === 'transparent-dark'
      ? 'text-[#0F172A] hover:bg-gray-50'
      : 'text-white hover:bg-white/10'

  const dropdownBorderColor = headerStyle === 'dark' || headerStyle === 'transparent-dark'
    ? 'border-gray-100'
    : 'border-white/10'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-14 max-md:px-5">
        <Link to="/" aria-label="Zentrixel Home">
          <img
            src={useDarkLogo ? logoBlack : logo}
            alt="Zentrixel"
            className="mt-[4px] h-[53px] max-md:h-[40px]"
          />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className={`hidden items-center gap-10 font-body text-base transition-colors duration-300 lg:flex ${textColor}`}>
          <Link to="/about" className="transition-colors hover:text-primary">About</Link>

          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              className="flex items-center gap-2.5 transition-colors hover:text-primary"
              onClick={() => setServicesOpen((o) => !o)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <svg
                width="10" height="5" viewBox="0 0 10 5" fill="none"
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
              >
                <path d="M1 1L5 4L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {servicesOpen && (
              <div
                className={`absolute left-1/2 top-full mt-3 -translate-x-1/2 rounded-xl border bg-white shadow-xl ${dropdownBorderColor}`}
                style={{ minWidth: '680px' }}
              >
                {/* Arrow */}
                <div className="absolute -top-[6px] left-1/2 -translate-x-1/2">
                  <div className="h-3 w-3 rotate-45 border-l border-t border-gray-100 bg-white" />
                </div>

                <div className="p-5">
                  <p className="mb-3 px-1 font-sub-heading text-[11px] font-semibold uppercase tracking-widest text-muted">
                    Our Services
                  </p>
                  <div className="grid grid-cols-3 gap-1">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="group rounded-lg px-3 py-2.5 transition-colors hover:bg-light-bg"
                      >
                        <p className="font-body text-sm font-medium text-navy transition-colors group-hover:text-primary">
                          {s.navLabel}
                        </p>
                        <p className="mt-0.5 font-body text-xs leading-snug text-muted line-clamp-1">
                          {s.intro.slice(0, 55)}…
                        </p>
                      </Link>
                    ))}
                  </div>
                  <div className={`mt-4 border-t pt-3 ${dropdownBorderColor}`}>
                    <Link
                      to="/services"
                      className="flex items-center gap-1.5 px-1 font-body text-sm font-medium text-primary hover:underline"
                    >
                      View all services →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Industries dropdown */}
          <div className="relative" ref={industriesDropdownRef}>
            <button
              type="button"
              className="flex items-center gap-2.5 transition-colors hover:text-primary"
              onClick={() => setIndustriesOpen((o) => !o)}
              aria-expanded={industriesOpen}
              aria-haspopup="true"
            >
              Industries
              <svg
                width="10" height="5" viewBox="0 0 10 5" fill="none"
                className={`transition-transform duration-200 ${industriesOpen ? 'rotate-180' : ''}`}
              >
                <path d="M1 1L5 4L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {industriesOpen && (
              <div
                className={`absolute left-1/2 top-full mt-3 -translate-x-1/2 rounded-xl border bg-white shadow-xl ${dropdownBorderColor}`}
                style={{ minWidth: '480px' }}
              >
                {/* Arrow */}
                <div className="absolute -top-[6px] left-1/2 -translate-x-1/2">
                  <div className="h-3 w-3 rotate-45 border-l border-t border-gray-100 bg-white" />
                </div>

                <div className="p-5">
                  <p className="mb-3 px-1 font-sub-heading text-[11px] font-semibold uppercase tracking-widest text-muted">
                    Industries We Serve
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    {INDUSTRIES.map((ind) => (
                      <Link
                        key={ind.slug}
                        to={`/industries/${ind.slug}`}
                        className="group rounded-lg px-3 py-2.5 transition-colors hover:bg-light-bg"
                      >
                        <p className="font-body text-sm font-medium text-navy transition-colors group-hover:text-primary">
                          {ind.navLabel}
                        </p>
                        <p className="mt-0.5 font-body text-xs leading-snug text-muted line-clamp-1">
                          {ind.intro.slice(0, 55)}…
                        </p>
                      </Link>
                    ))}
                  </div>
                  <div className={`mt-4 border-t pt-3 ${dropdownBorderColor}`}>
                    <Link
                      to="/industries"
                      className="flex items-center gap-1.5 px-1 font-body text-sm font-medium text-primary hover:underline"
                    >
                      View all industries →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link to="/insight" className="transition-colors hover:text-primary">Insight</Link>
          <Link to="/contact" className="transition-colors hover:text-primary">Contact</Link>
        </nav>

        <Link
          to="/contact"
          className="hidden items-center gap-2.5 rounded-[30px] bg-primary px-4 py-3 font-body text-base text-white transition-colors hover:bg-primary/90 lg:flex"
        >
          Let's Connect
          <img src={letsArrow} alt="" width={22} height={22} />
        </Link>

        {/* ── Mobile hamburger ── */}
        <button
          type="button"
          className={`transition-colors duration-300 lg:hidden ${textColor}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div className={`border-t lg:hidden ${mobileBg}`}>
          <nav className="mx-auto flex max-w-[1440px] flex-col gap-1 px-14 py-6 font-body max-md:px-5">
            <Link to="/about" className={`rounded-lg px-3 py-3 text-base transition-colors ${mobileLinkColor}`} onClick={() => setMobileOpen(false)}>About</Link>

            {/* Mobile Services group */}
            <div>
              <Link
                to="/services"
                className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${mobileLinkColor}`}
                onClick={() => setMobileOpen(false)}
              >
                Services
              </Link>
              <div className="ml-4 mt-1 flex flex-col gap-0.5">
                {SERVICES.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className={`rounded-lg px-3 py-2 text-sm transition-colors ${mobileLinkColor}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.navLabel}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Industries group */}
            <div>
              <Link
                to="/industries"
                className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${mobileLinkColor}`}
                onClick={() => setMobileOpen(false)}
              >
                Industries
              </Link>
              <div className="ml-4 mt-1 flex flex-col gap-0.5">
                {INDUSTRIES.map((ind) => (
                  <Link
                    key={ind.slug}
                    to={`/industries/${ind.slug}`}
                    className={`rounded-lg px-3 py-2 text-sm transition-colors ${mobileLinkColor}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {ind.navLabel}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/insight" className={`rounded-lg px-3 py-3 text-base transition-colors ${mobileLinkColor}`} onClick={() => setMobileOpen(false)}>Insight</Link>
            <Link to="/contact" className={`rounded-lg px-3 py-3 text-base transition-colors ${mobileLinkColor}`} onClick={() => setMobileOpen(false)}>Contact</Link>

            <Link
              to="/contact"
              className="mt-4 flex items-center justify-center gap-2 rounded-[30px] bg-primary px-4 py-3 text-base text-white"
              onClick={() => setMobileOpen(false)}
            >
              Let's Connect
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
