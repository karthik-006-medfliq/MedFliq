export default function ServicesWhySection() {
  const pills = [
    { text: "AI-native healthcare infrastructure", delay: "services-why-delay-400" },
    { text: "End-to-end hospital ecosystem", delay: "services-why-delay-500" },
    { text: "Proactive operational assistance", delay: "services-why-delay-600" },
    { text: "Unified clinical coordination", delay: "services-why-delay-700" },
    { text: "Intelligent automation at scale", delay: "services-why-delay-800" },
  ]

  return (
    <section id="services-why" className="relative pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="flex flex-col">
            <h4 className="services-why-reveal services-why-delay-100 text-[11px] sm:text-[12px] font-bold text-med-primary uppercase tracking-[0.2em] mb-6">
              WHY MEDFLIQ
            </h4>
            
            <h2 className="services-why-reveal services-why-delay-200 text-[36px] sm:text-[48px] lg:text-[54px] font-black text-med-ink leading-[1.1] tracking-tight mb-8">
              From Passive Systems<br />
              To Active Healthcare<br />
              Intelligence
            </h2>

            <p className="services-why-reveal services-why-delay-300 text-[16px] sm:text-[17px] text-med-slate font-medium leading-relaxed mb-6">
              Traditional healthcare systems are designed to store information. MedFliq is designed to assist action.
            </p>

            <p className="services-why-reveal services-why-delay-300 text-[16px] sm:text-[17px] text-med-slate font-medium leading-relaxed mb-6">
              Our services are built around agentic healthcare intelligence where AI systems continuously support clinical reasoning, automate workflows, and coordinate operations across the hospital ecosystem in real time.
            </p>

            <p className="services-why-reveal services-why-delay-300 text-[16px] sm:text-[17px] text-med-slate font-medium leading-relaxed">
              Instead of forcing healthcare professionals to navigate disconnected platforms, MedFliq delivers unified intelligence directly into their workflow.
            </p>
          </div>

          {/* Right Column: Pill Cards */}
          <div className="flex flex-col space-y-4">
            {pills.map((pill, index) => (
              <div 
                key={index}
                className={`services-why-reveal ${pill.delay} flex items-center bg-white/60 backdrop-blur-md rounded-full py-5 px-8 border border-white/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] group hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-med-primary/30`}
              >
                {/* Orange Check Icon */}
                <div className="mr-5 shrink-0 flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 text-med-primary group-hover:scale-110 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" className="text-med-primary/20 fill-med-primary/5"></circle>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4"></path>
                  </svg>
                </div>
                
                {/* Pill Text */}
                <span className="text-[16px] sm:text-[18px] font-bold text-med-ink">
                  {pill.text}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
