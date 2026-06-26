import type { TermsSectionData } from '../../data/termsData'
import { getIconForSection, ChevronRight } from '../../data/termsIcons'

interface TermsSidebarProps {
  sections: TermsSectionData[]
  activeSection: string
}

export default function TermsSidebar({ sections, activeSection }: TermsSidebarProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    const container = document.getElementById('terms-content-scroll')
    
    if (el && container) {
      const topPos = el.offsetTop - container.offsetTop
      container.scrollTo({ top: topPos, behavior: 'smooth' })
    } else if (el) {
      // Fallback for mobile if container isn't used
      const y = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="lg:col-span-4 sticky top-28 sm:top-32 lg:top-36 z-40 terms-reveal">
      <div className="bg-white/80 backdrop-blur-xl rounded-[32px] p-6 sm:p-8 border border-slate-100 shadow-premium max-h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar">
        <h3 className="text-[10px] sm:text-[11px] font-black text-med-slate uppercase tracking-[0.3em] mb-6 sm:mb-8 pl-2">
          Table of Contents
        </h3>
        <nav className="flex flex-col gap-2">
          {sections.map((section, idx) => {
            const isActive = activeSection === section.id
            const Icon = getIconForSection(idx)

            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center gap-4 p-3 rounded-2xl text-left transition-all duration-300 group ${
                  isActive
                    ? 'bg-med-primary text-white shadow-md shadow-med-primary/20 scale-[1.02]'
                    : 'hover:bg-slate-50 text-med-slate hover:text-med-ink'
                }`}
              >
                <div className="flex items-center gap-3.5 flex-1 min-w-0">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-50 text-slate-400 group-hover:bg-white border border-slate-100/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-xs sm:text-sm leading-tight truncate ${isActive ? 'font-black' : 'font-bold'}`}>
                    {idx + 1}. {section.title}
                  </span>
                </div>
                <ChevronRight
                  className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ${
                    isActive ? 'text-white' : 'text-med-primary'
                  }`}
                />
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
