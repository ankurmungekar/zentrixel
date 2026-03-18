import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import logoBlack from '../../assets/images/logo-black.png'
import letsArrow from '../../assets/images/lets-arrow.svg'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Industries', href: '/industries', hasDropdown: true },
  { label: 'Insight', href: '/insight' },
  { label: 'Contact', href: '/contact' },
]

/**
 * Header style per route:
 *  'dark'              – always white bg, black logo, black text (e.g. About)
 *  'transparent-dark'  – transparent + black logo/text initially → white bg on scroll
 *  (default)           – transparent + white logo/text initially → navy bg on scroll
 */
const ROUTE_HEADER_STYLE: Record<string, 'dark' | 'transparent-dark'> = {
  '/about': 'dark',
  '/products/ai-calling': 'transparent-dark',
}

const SCROLL_THRESHOLD = 80

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  const headerStyle = ROUTE_HEADER_STYLE[pathname] ?? 'transparent-light'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // ── computed styles ──────────────────────────────────────────
  let headerBg: string
  let textColor: string
  let useDarkLogo: boolean

  if (headerStyle === 'dark') {
    // Always solid white (About page)
    headerBg = 'bg-white shadow-[0_4px_8px_rgba(0,0,0,0.05)]'
    textColor = 'text-[#0F172A]'
    useDarkLogo = true
  } else if (headerStyle === 'transparent-dark') {
    // Transparent → white on scroll (AI Calling page)
    headerBg = scrolled
      ? 'bg-white shadow-[0_4px_8px_rgba(0,0,0,0.05)]'
      : 'bg-transparent'
    textColor = 'text-[#0F172A]'
    useDarkLogo = true
  } else {
    // Transparent → navy on scroll (Homepage + default)
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-14 max-md:px-5">
        <Link to="/" aria-label="Zentrixel Home">
          <img
            src={useDarkLogo ? logoBlack : logo}
            alt="Zentrixel"
            className="mt-[4px] h-[53px] max-md:h-[40px]"
          />
        </Link>

        <nav
          className={`hidden items-center gap-10 font-body text-base transition-colors duration-300 lg:flex ${textColor}`}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="flex items-center gap-2.5 transition-colors hover:text-primary"
            >
              {link.label}
              {link.hasDropdown && (
                <svg width="10" height="5" viewBox="0 0 10 5" fill="none">
                  <path
                    d="M1 1L5 4L9 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden items-center gap-2.5 rounded-[30px] bg-primary px-4 py-3 font-body text-base text-white transition-colors hover:bg-primary/90 lg:flex"
        >
          Let's Connect
          <img src={letsArrow} alt="" width={22} height={22} />
        </Link>

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

      {mobileOpen && (
        <div className={`border-t lg:hidden ${mobileBg}`}>
          <nav className="mx-auto flex max-w-[1440px] flex-col gap-1 px-14 py-6 font-body max-md:px-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`rounded-lg px-3 py-3 text-base transition-colors ${mobileLinkColor}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 flex items-center justify-center gap-2 rounded-[30px] bg-primary px-4 py-3 text-base text-white"
              onClick={() => setMobileOpen(false)}
            >
              Let's Connect
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
