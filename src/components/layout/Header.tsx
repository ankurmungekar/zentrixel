import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import letsArrow from '../../assets/images/lets-arrow.svg'

const NAV_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Industries', href: '/industries', hasDropdown: true },
  { label: 'Insight', href: '/insight' },
  { label: 'Contact', href: '/contact' },
]

const SCROLL_THRESHOLD = 176

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= SCROLL_THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0D1429] shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-14">
        <Link to="/" aria-label="Zentrixel Home">
          <img src={logo} alt="Zentrixel" className="h-[71px] w-auto" />
        </Link>

        <nav
          className={`hidden items-center gap-10 font-body text-base lg:flex transition-colors duration-300 ${
            scrolled ? 'text-white' : 'text-white'
          }`}
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
                  <path d="M1 1L5 4L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className={`hidden items-center gap-2.5 rounded-[30px] px-4 py-3 font-body text-base text-white transition-colors lg:flex ${
            scrolled ? 'bg-primary hover:bg-primary/90' : 'bg-[#0D1429] hover:bg-[#0D1429]/90'
          }`}
        >
          Let's Connect
          <img src={letsArrow} alt="" width={22} height={22} />
        </Link>

        <button
          type="button"
          className={`lg:hidden transition-colors duration-300 text-white`}
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
        <div className={`border-t lg:hidden ${scrolled ? 'border-white/10 bg-[#0D1429]' : 'border-white/10 bg-navy/95 backdrop-blur-md'}`}>
          <nav className="mx-auto flex max-w-[1440px] flex-col gap-1 px-14 py-6 font-body">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`rounded-lg px-3 py-3 text-base transition-colors ${
                  scrolled ? 'text-white hover:bg-white/10' : 'text-white hover:bg-white/10'
                }`}
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
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
