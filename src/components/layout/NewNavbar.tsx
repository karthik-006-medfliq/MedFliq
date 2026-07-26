import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

interface NavLinkData {
  label: string
  href: string
}

const NAV_LINKS: NavLinkData[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
]

export default function NewNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [logoCollapsed, setLogoCollapsed] = useState(false)

  // Scroll tracking logic
  useEffect(() => {
    let lastScrollY = window.scrollY

    const onScroll = () => {
      const currentScrollY = window.scrollY
      
      // Trigger glassmorphism styling
      setScrolled(currentScrollY > 8)

      // Logo collapse logic (smooth threshold)
      if (currentScrollY <= 40) {
        setLogoCollapsed(false)
      } else {
        const scrollDiff = currentScrollY - lastScrollY
        if (scrollDiff > 8) {
          // Scrolling down deliberately
          setLogoCollapsed(true)
        } else if (scrollDiff < -8) {
          // Scrolling up deliberately
          setLogoCollapsed(false)
        }
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      id="new-navbar"
      className={[
        'sticky top-0 left-0 right-0 z-50 flex flex-col',
        'transition-all duration-700',
        'navbar-entrance' // Fade down softly on load
      ].join(' ')}
    >
      {/* ── 1. Top Announcement Strip ── */}
      <div className="w-full bg-[#e8751a] py-2.5 px-4 text-center z-20">
        <p className="text-[#fffaf2] text-xs sm:text-sm font-medium tracking-wide">
          Building smart clinic management software tailored for modern practices
        </p>
      </div>

      {/* ── 2. Main Navbar Bar ── */}
      <div
        className={[
          'w-full transition-all duration-700 border-b relative z-10',
          scrolled
            ? 'bg-[#fffaf2] border-[#172033]/10 shadow-[0_4px_24px_rgba(0,0,0,0.06)]'
            : 'bg-[#fffaf2] border-[#172033]/5 shadow-sm',
        ].join(' ')}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 h-[72px] sm:h-[80px] grid grid-cols-3 items-center">
          
          {/* ── Left: Logo ── */}
          <div className="flex justify-start ml-2 md:ml-6">
            <NavLink
              to="/"
              className="flex items-center gap-3 group logo-container shrink-0"
              aria-label="MedFliq home"
            >
              {/* Animated Icon Circle */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-100/60 relative overflow-hidden transition-all duration-500 group-hover:-translate-y-[2px] group-hover:shadow-[0_4px_16px_rgba(232,117,26,0.15)] shrink-0 logo-icon-entrance">
                <div className="relative w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] z-10">
                  <img
                    src="/images/medfliq-logo.png"
                    alt="Medfliq Icon"
                    className="object-contain absolute inset-0 w-full h-full"
                  />
                </div>
                {/* Soft orange glow sweep effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f6b26b]/30 to-[#e8751a]/20 translate-x-[-150%] logo-glow-sweep group-hover:translate-x-full transition-transform duration-700 ease-in-out pointer-events-none" />
              </div>

              {/* Collapsible Wordmark */}
              <div 
                className={[
                  'relative h-[34px] sm:h-[40px] w-[110px] sm:w-[130px] transition-all duration-[750ms] ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden block origin-left whitespace-nowrap will-change-[max-width,opacity,transform] motion-reduce:transition-none',
                  logoCollapsed ? 'max-w-0 opacity-0 -translate-x-[10px] scale-x-[0.86]' : 'max-w-[130px] opacity-100 translate-x-0 scale-x-100 logo-wordmark-entrance'
                ].join(' ')}
              >
                <img
                  src="/images/medfliq-horizontal.png"
                  alt="Medfliq Logo"
                  className="object-contain absolute left-0 top-0 w-[110px] sm:w-[130px] h-full"
                />
              </div>
            </NavLink>
          </div>

          {/* ── Center: Desktop Navigation ── */}
          <div className="hidden md:flex justify-center items-center gap-8 lg:gap-12">
            {NAV_LINKS.map(({ label, href }, index) => (
              <NavLink
                key={label}
                to={href}
                style={{ animationDelay: `${index * 100}ms` }}
                className={({ isActive }) => `
                  relative py-2 text-[15px] font-medium tracking-wide transition-colors duration-300 nav-link-entrance
                  ${isActive ? 'text-[#e8751a]' : 'text-[#172033] hover:text-[#e8751a]'}
                `}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* ── Right: CTA & Mobile Hamburger ── */}
          <div className="flex justify-end items-center gap-4">
            {/* Desktop Contact CTA */}
            <NavLink
              to="/contact"
              className={({ isActive }) => `
                hidden md:flex group relative overflow-hidden bg-[#e8751a] text-[#fffaf2] px-6 py-2.5 rounded-xl text-[14px] font-medium transition-all duration-300 hover:bg-[#d46613] hover:shadow-[0_4px_16px_rgba(232,117,26,0.25)] hover:-translate-y-0.5 active:translate-y-0 items-center justify-center nav-link-entrance
                ${isActive ? 'bg-[#d46613] shadow-[0_4px_16px_rgba(232,117,26,0.25)]' : ''}
              `}
              style={{ animationDelay: '300ms' }}
            >
              <span className="relative z-10">Contact</span>
            </NavLink>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 text-[#172033] focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      <div
        className={[
          'md:hidden overflow-hidden absolute top-full left-0 right-0 z-0 bg-[#fffaf2] border-b border-[#172033]/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)]',
          'transition-all duration-400 ease-in-out',
          menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, href }) => (
            <NavLink
              key={label}
              to={href}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `
                text-lg font-medium transition-all duration-200 px-4 py-3 rounded-xl
                ${isActive ? 'text-[#e8751a] bg-[#e8751a]/10' : 'text-[#172033] hover:bg-slate-50/50'}
              `}
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) => `
              block w-full text-center relative overflow-hidden bg-[#e8751a] text-[#fffaf2] font-medium text-base py-3.5 rounded-xl hover:shadow-[0_4px_16px_rgba(232,117,26,0.25)] hover:bg-[#d46613] transition-all duration-200 mt-2
              ${isActive ? 'bg-[#d46613]' : ''}
            `}
          >
            <span className="relative z-10">Contact</span>
          </NavLink>
        </div>
      </div>
    </header>
  )
}
