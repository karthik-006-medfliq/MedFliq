import type { PrivacySectionData } from '../../data/privacyData'
import { getIconForSection, ChevronRight } from '../../data/privacyIcons'

interface PrivacySidebarProps {
  sections: PrivacySectionData[]
  activeSection: string
}

export default function PrivacySidebar({ sections, activeSection }: PrivacySidebarProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    const container = document.getElementById('privacy-content-scroll')
    
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
    <aside className="lg:col-span-4 sticky top-28 hidden lg:block privacy-reveal">
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-[32px] border border-slate-100 shadow-premium max-h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar">
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-2">
          Table of Contents
        </h3>
        
        <nav className="space-y-1">
          {sections.map((section, idx) => {
            const isActive = activeSection === section.id
            const Icon = getIconForSection(idx)

            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left transition-all duration-300 font-bold group ${
                  isActive
                    ? 'bg-med-primary text-white shadow-accent'
                    : 'hover:bg-accent text-med-slate hover:text-med-primary'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-50 text-slate-400 group-hover:bg-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black leading-none">
                    {idx + 1}. {section.title}
                  </span>
                </div>
                <ChevronRight
                  className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity ${
                    isActive ? 'text-white' : 'text-med-primary'
                  }`}
                />
              </button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
