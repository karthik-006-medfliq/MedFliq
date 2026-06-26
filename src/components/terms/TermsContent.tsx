import TermsSection from './TermsSection'
import type { TermsSectionData } from '../../data/termsData'

interface TermsContentProps {
  sections: TermsSectionData[]
  onIntersect: (id: string) => void
}

export default function TermsContent({ sections, onIntersect }: TermsContentProps) {
  return (
    <div 
      id="terms-content-scroll"
      className="lg:col-span-8 space-y-8 sm:space-y-10 max-h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar pr-2 pb-12"
    >
      {sections.map((section, idx) => (
        <TermsSection
          key={section.id}
          section={section}
          index={idx}
          onIntersect={onIntersect}
        />
      ))}
    </div>
  )
}
