import { useEffect, useRef, useState } from 'react'
import ContactForm from './ContactForm'

export default function ContactInfoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative w-full pt-16 lg:pt-24 pb-8 lg:pb-12 px-4 sm:px-6 md:px-12 z-10"
    >
      {/* Main Split Container */}
      <div 
        className={`max-w-7xl mx-auto rounded-[36px] lg:rounded-[48px] overflow-hidden shadow-[0_20px_60px_rgba(44,35,25,0.05)] border border-white/40 flex flex-col lg:flex-row transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      >
        
        {/* Left Panel: Contact Information (Orange) */}
        <div className="w-full lg:w-[45%] bg-gradient-to-br from-[#e17b2b] to-[#c7651a] p-10 sm:p-14 lg:p-16 flex flex-col relative overflow-hidden">
          
          {/* Subtle overlay effect */}
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          
          {/* Content Wrapper */}
          <div className="relative z-10 h-full flex flex-col">
            
            <h2 
              className={`text-4xl sm:text-[40px] lg:text-[44px] font-black text-white leading-tight mb-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '100ms' }}
            >
              Contact Information
            </h2>
            
            <p 
              className={`text-white/90 text-lg sm:text-[19px] leading-relaxed max-w-[400px] mb-12 sm:mb-16 font-medium transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '200ms' }}
            >
              Clinical Intelligence designed to think and respond the way clinicians do. Join us in building the backbone of smart healthcare.
            </p>

            <div className="flex flex-col gap-10 sm:gap-12 mt-auto">
              
              {/* Item 1: Phone */}
              <div 
                className={`flex items-start gap-5 group transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: '300ms' }}
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm shadow-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:bg-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.436-4.136-7.032-7.032l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-[11px] font-bold text-white/70 uppercase tracking-[0.2em] mb-1">CALL US</span>
                  <a href="tel:+917708989363" className="text-xl sm:text-[22px] font-black text-white hover:text-white/90 transition-colors">
                    +91 7708 989 363
                  </a>
                </div>
              </div>

              {/* Item 2: Email */}
              <div 
                className={`flex items-start gap-5 group transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm shadow-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:bg-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-[11px] font-bold text-white/70 uppercase tracking-[0.2em] mb-1">EMAIL US</span>
                  <a href="mailto:info@medfliq.com" className="text-xl sm:text-[22px] font-black text-white hover:text-white/90 transition-colors">
                    info@medfliq.com
                  </a>
                </div>
              </div>

              {/* Item 3: Location */}
              <div 
                className={`flex items-start gap-5 group transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: '500ms' }}
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white backdrop-blur-sm shadow-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:bg-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-[11px] font-bold text-white/70 uppercase tracking-[0.2em] mb-1">OUR LOCATION</span>
                  <span className="text-xl sm:text-[22px] font-black text-white">
                    Coimbatore, Tamil Nadu
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Panel: Contact Form (White/Glass) */}
        <div className="w-full lg:w-[55%] bg-white/90 backdrop-blur-xl p-10 sm:p-14 lg:p-16 xl:p-20 flex flex-col justify-center">
          <ContactForm isVisible={isVisible} />
        </div>

      </div>
    </section>
  )
}
