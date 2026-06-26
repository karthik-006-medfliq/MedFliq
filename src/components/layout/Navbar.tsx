import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

// ─── Types ───────────────────────────────────────────────────────────────────
interface NavLink {
  label: string
  href: string
}

// ─── Data ────────────────────────────────────────────────────────────────────
const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
]

// ─── Navbar ──────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const location = useLocation()

  // Glass effect triggers at 8px scroll — fires on first subtle scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
    }
    
    // Check immediately in case we start scrolled down (or reset to top)
    onScroll()
    
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  // Close mobile menu when viewport reaches desktop width
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      id="navbar"
      className={[
        'sticky top-0 left-0 right-0 z-50',
        'transition-all duration-700',
        'px-3 sm:px-6 md:px-12 py-4 sm:py-5',
        // Outer wrapper stays transparent — pill handles the glass
        scrolled
          ? 'bg-transparent'
          : 'bg-transparent',
      ].join(' ')}
    >
      {/* ── Rounded pill inner container ── */}
      <div
        className={[
          'max-w-7xl mx-auto flex items-center justify-between',
          'transition-all duration-700',
          'rounded-[24px] sm:rounded-[32px]',
          'px-4 sm:px-8 md:px-12 py-3 sm:py-4',
          scrolled
            ? 'bg-[#fffaf2]/85 backdrop-blur-2xl shadow-[0_18px_50px_rgba(23,32,51,0.08)] border border-white/40 supports-[backdrop-filter]:bg-[#fffaf2]/80'
            : 'bg-transparent border border-transparent shadow-none',
        ].join(' ')}
      >

        {/* ── Logo ── */}
        <a
          href="/"
          className="flex items-center gap-4 sm:gap-5 group"
          aria-label="MedFliq home"
        >
          {/* Icon circle */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100/60 group-hover:scale-110 transition-transform duration-500 shrink-0">
            <div className="relative w-[30px] h-[30px] sm:w-[34px] sm:h-[34px]">
              <img
                src="/images/medfliq-logo.png"
                alt="Medfliq Icon"
                className="object-contain group-hover:rotate-12 transition-transform duration-500 absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          {/* Horizontal wordmark image */}
          <div className="relative w-[159px] h-[48px] sm:w-[185px] sm:h-[56px] transition-transform duration-500">
            <img
              src="/images/medfliq-horizontal.png"
              alt="Medfliq Logo"
              className="object-contain absolute inset-0 w-full h-full"
            />
          </div>
        </a>

        {/* ── Desktop navigation ── */}
        <div className="hidden md:flex items-center gap-8">
          {/* Nav links */}
          <div className="flex items-center gap-2">
            {NAV_LINKS.map(({ label, href }) => (
              <NavLink
                key={label}
                to={href}
                className={({ isActive }) => `relative px-6 py-2.5 text-[13px] font-black uppercase tracking-[0.15em] transition-all hover:text-med-primary rounded-xl ${isActive ? 'text-[#e8751a]' : 'text-med-slate'}`}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Contact CTA */}
          <NavLink
            to="/contact"
            className={({ isActive }) => `group btn-shine relative overflow-hidden bg-med-primary text-white px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:shadow-[0_4px_24px_rgba(224,123,42,0.45)] transition-all duration-200 hover:-translate-y-1 active:translate-y-0 flex items-center gap-2 ${isActive ? 'shadow-[0_4px_24px_rgba(224,123,42,0.45)] -translate-y-1' : ''}`}
          >
            <span>Contact</span>
            {/* ChevronRight — animates right on group hover */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform duration-200"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </NavLink>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          className="md:hidden p-2 text-med-ink hover:bg-slate-100 rounded-xl transition-colors duration-150"
        >
          {menuOpen ? (
            /* X close icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            /* Menu icon */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile dropdown menu ── */}
      <div
        className={[
          'md:hidden overflow-hidden',
          'transition-[max-height,opacity] duration-300 ease-in-out',
          menuOpen
            ? 'max-h-80 opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <div className="mx-4 mt-2 mb-4 bg-white/50 backdrop-blur-md rounded-2xl border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-6 flex flex-col gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <NavLink
              key={label}
              to={href}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `text-2xl font-bold transition-colors duration-200 ${isActive ? 'text-med-primary' : 'text-med-ink hover:text-med-primary'}`}
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => `block w-full text-center btn-shine relative overflow-hidden bg-med-primary text-white font-bold text-base py-3.5 rounded-full hover:opacity-90 transition-opacity duration-200 ${isActive ? 'opacity-90' : ''}`}
          >
            <span className="relative z-10">Contact</span>
          </NavLink>
        </div>
      </div>
    </header>
  )
}
