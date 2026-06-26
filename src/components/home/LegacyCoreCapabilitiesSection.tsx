import { useEffect, useRef, useState } from 'react'

export default function LegacyCoreCapabilitiesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Only animate once
        }
      },
      { threshold: 0.15 } // Trigger when 15% visible
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="capabilities-legacy"
      ref={sectionRef}
      className="relative w-full px-4 sm:px-6 md:px-12 py-16 lg:py-20 z-10 overflow-hidden"
    >
      <div className="max-w-[1300px] mx-auto">

        {/* Section Heading (Fades up first) */}
        <div className={`text-center max-w-4xl mx-auto mb-16 lg:mb-24 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="text-[11px] sm:text-xs font-bold text-med-primary uppercase tracking-[0.2em] mb-4 sm:mb-6">
            CORE CAPABILITIES
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-black leading-[1.1] text-med-ink tracking-tight">
            Designed Around <span className="text-med-primary italic">Intelligence</span>,<br className="hidden sm:block" />
            Not Just Software
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="flex flex-col gap-6 lg:gap-8">

          {/* Top Row: Card 1 (Left) + Card 2 & 3 (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

            {/* Card 1: AI Clinical Reasoning (Spans 7 cols) */}
            <div
              className={`group lg:col-span-7 bg-[#FAF7F2] backdrop-blur-xl border border-white/80 rounded-[40px] md:rounded-[60px] p-8 md:p-12 shadow-[0_20px_60px_rgba(44,35,25,0.03)] flex flex-col md:flex-row gap-8 relative overflow-hidden min-h-[500px] md:min-h-[600px] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(44,35,25,0.08)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: '100ms' }}
            >
              <div className="w-full md:w-5/12 relative z-10 flex flex-col justify-center">
                <div className="w-14 h-14 bg-white rounded-[16px] flex items-center justify-center mb-8 shadow-sm">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-med-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path>
                  </svg>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-med-ink mb-4 leading-tight group-hover:text-med-primary transition-colors">
                  AI Clinical Reasoning
                </h3>
                <p className="text-med-slate text-sm md:text-base leading-relaxed font-medium">
                  Continuously analyzes patient data, symptoms, vitals, and history to assist physicians with evidence-backed clinical insights and differential suggestions.
                </p>
              </div>

              {/* Image Dashboard (Desktop) */}
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none">
                <img
                  src="/images/dashboard.png"
                  alt="AI Reasoning Dashboard"
                  className="w-full h-full object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Image Dashboard (Mobile) */}
              <div className="block md:hidden relative -mx-8 -mb-8 mt-4 h-[350px] overflow-hidden rounded-b-[40px] pointer-events-none">
                <img
                  src="/images/dashboard.png"
                  alt="AI Reasoning Dashboard"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Right Column: Card 2 & 3 (Spans 5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">

              {/* Card 2: Smart Documentation */}
              <div
                className={`group flex-1 bg-[#FAF7F2] backdrop-blur-xl border border-white/80 rounded-[40px] md:rounded-[50px] shadow-[0_20px_60px_rgba(44,35,25,0.03)] flex flex-col relative overflow-hidden min-h-[400px] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(44,35,25,0.08)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="relative z-10 px-8 pt-8 md:px-10 md:pt-10 mb-6">
                  <div className="w-12 h-12 bg-white rounded-[14px] flex items-center justify-center mb-6 shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-med-primary">
                      <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                      <line x1="4" y1="10" x2="20" y2="10"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-med-ink mb-3 leading-tight group-hover:text-med-primary transition-colors">
                    Smart Documentation
                  </h3>
                  <p className="text-med-slate text-sm leading-relaxed font-medium">
                    Automatically generates structured medical notes, SOAP summaries, and patient timelines which reduces administrative overload.
                  </p>
                </div>

                {/* Image Wrapper */}
                <div className="relative w-full flex-1 overflow-hidden pointer-events-none min-h-[220px]">
                  <img
                    src="/images/smart-doc.webp"
                    alt="Smart Documentation Tablet"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Card 3: Medication & Safety Monitoring */}
              <div
                className={`group flex-1 bg-[#FAF7F2] backdrop-blur-xl border border-white/80 rounded-[40px] md:rounded-[50px] p-8 md:p-10 shadow-[0_20px_60px_rgba(44,35,25,0.03)] flex flex-col relative overflow-hidden min-h-[350px] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(44,35,25,0.08)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: '300ms' }}
              >
                <div className="relative z-10 mb-8">
                  <div className="w-12 h-12 bg-white rounded-[14px] flex items-center justify-center mb-6 shadow-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-med-primary">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-med-ink mb-3 leading-tight group-hover:text-med-primary transition-colors">
                    Medication & Safety Monitoring
                  </h3>
                  <p className="text-med-slate text-sm leading-relaxed font-medium">
                    Detects drug interactions, risk patterns, and critical safety signals in real time to support safer, more reliable clinical choices.
                  </p>
                </div>
                {/* Mock UI */}
                <div className="absolute bottom-0 left-8 right-8 bg-white rounded-t-[20px] border border-slate-200/60 shadow-lg overflow-hidden translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="p-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                    <div className="text-xs font-bold text-slate-600">Key Recommendations</div>
                  </div>
                  <div className="bg-[#2A1508] p-3 text-center">
                    <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider flex items-center justify-center gap-2">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                      Drug Safety Alert
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Row: Card 4 (Full Width) */}
          <div
            className={`group bg-[#FAF7F2] backdrop-blur-xl border border-white/80 rounded-[40px] md:rounded-[60px] p-0 shadow-[0_20px_60px_rgba(44,35,25,0.03)] grid grid-cols-1 lg:grid-cols-[45%_55%] relative overflow-hidden min-h-[400px] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(44,35,25,0.08)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="flex flex-col justify-center p-8 md:p-12 lg:pr-8 relative z-10">
              <div className="w-14 h-14 bg-white rounded-[16px] flex items-center justify-center mb-8 shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-med-primary">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-med-ink mb-4 leading-tight group-hover:text-med-primary transition-colors">
                Real-Time Operational Intelligence
              </h3>
              <p className="text-med-slate text-sm md:text-base leading-relaxed font-medium">
                Transform fragmented hospital operations into actionable intelligence with centralized workflow visibility across departments.
              </p>
            </div>

            {/* Actual Dashboard Image */}
            <div className="relative w-full h-[300px] lg:h-[450px] overflow-hidden">
              <img
                src="/images/dash.webp"
                alt="MedFliq Dashboard"
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
