import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    
    if (footerRef.current) {
      observer.observe(footerRef.current)
    }
    
    return () => observer.disconnect()
  }, [])

  return (
    <footer 
      ref={footerRef}
      aria-label="Site footer" 
      className="relative w-full px-4 sm:px-6 md:px-12 pt-24 pb-8 z-10 bg-white mt-12 overflow-hidden"
    >
      {/* Very subtle glow effect behind footer */}
      <div className="absolute inset-0 bg-med-primary/10 blur-[100px] -z-10 translate-y-24 scale-150 opacity-60" />
      
      <div className="max-w-[1300px] mx-auto">
        
        {/* Main 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Logo & Description (Spans 5 cols on desktop) */}
          <div 
            className={`lg:col-span-5 flex flex-col transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Link 
              to="/" 
              className="group flex items-center gap-4 mb-8 w-fit transition-transform duration-300 ease-out hover:-translate-y-1"
              aria-label="MedFliq Home"
            >
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm border border-slate-100/60 shrink-0 transition-all duration-300 ease-out group-hover:shadow-[0_8px_24px_rgba(224,123,42,0.12)] group-hover:border-med-primary/30">
                <div className="relative w-[30px] h-[30px]">
                  <img
                    src="/images/medfliq-logo.png"
                    alt="Medfliq Icon"
                    className="object-contain absolute inset-0 w-full h-full"
                  />
                </div>
              </div>

              {/* Horizontal wordmark image */}
              <div className="relative w-[159px] h-[48px] transition-opacity duration-300 ease-out group-hover:opacity-80">
                <img
                  src="/images/medfliq-horizontal.png"
                  alt="Medfliq Logo"
                  className="object-contain absolute inset-0 w-full h-full"
                />
              </div>
            </Link>
            
            <p className="text-med-slate text-base leading-relaxed font-medium max-w-[400px]">
              An Agentic AI Clinical Decision Support Platform designed to validate medical reasoning, reduce diagnostic errors, and empower doctors with intelligent co-pilots.
            </p>
          </div>

          {/* Column 2: Platform Links (Spans 3 cols on desktop) */}
          <div 
            className={`lg:col-span-3 lg:col-start-7 flex flex-col transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '150ms' }}
          >
            <h4 className="text-xs font-black text-med-ink tracking-[0.2em] uppercase mb-8">
              Platform
            </h4>
            <ul className="flex flex-col gap-5">
              <li>
                <Link to="/about" className="group text-med-slate hover:text-med-primary font-bold transition-colors inline-flex items-center">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">About</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="group text-med-slate hover:text-med-primary font-bold transition-colors inline-flex items-center">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Services</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="group text-med-slate hover:text-med-primary font-bold transition-colors inline-flex items-center">
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details (Spans 3 cols on desktop) */}
          <div 
            className={`lg:col-span-3 flex flex-col transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <h4 className="text-xs font-black text-med-ink tracking-[0.2em] uppercase mb-8">
              Contact
            </h4>
            <ul className="flex flex-col gap-6">
              
              <li className="group flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 group-hover:-translate-y-1 transition-transform duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-med-primary">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="text-med-slate font-bold text-sm leading-relaxed mt-1">
                  Coimbatore,<br />Tamil Nadu
                </div>
              </li>
              
              <li className="group flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 group-hover:-translate-y-1 transition-transform duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-med-primary">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <a href="tel:+917708989363" className="text-med-slate font-bold text-sm group-hover:text-med-primary transition-colors">
                  +91 7708 989 363
                </a>
              </li>
              
              <li className="group flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0 group-hover:-translate-y-1 transition-transform duration-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-med-primary">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <a href="mailto:info@medfliq.com" className="text-med-slate font-bold text-sm group-hover:text-med-primary transition-colors">
                  info@medfliq.com
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Copyright Row & Divider */}
        <div 
          className={`border-t border-slate-200/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="text-[10px] font-bold text-med-slate uppercase tracking-[0.1em]">
            © 2026 MedFliq Intelligence. Built for Diagnostic Accuracy.
          </div>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="text-[10px] font-bold text-med-slate hover:text-med-primary transition-colors uppercase tracking-[0.1em]">
              Privacy
            </Link>
            <Link to="/terms" className="text-[10px] font-bold text-med-slate hover:text-med-primary transition-colors uppercase tracking-[0.1em]">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
