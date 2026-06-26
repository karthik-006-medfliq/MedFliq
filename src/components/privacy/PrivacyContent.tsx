import PrivacySection from './PrivacySection'
import type { PrivacySectionData } from '../../data/privacyData'

interface PrivacyContentProps {
  sections: PrivacySectionData[]
  onIntersect: (id: string) => void
}

export default function PrivacyContent({ sections, onIntersect }: PrivacyContentProps) {
  return (
    <div 
      id="privacy-content-scroll"
      className="lg:col-span-8 space-y-8 sm:space-y-10 max-h-[calc(100vh-140px)] overflow-y-auto custom-scrollbar pr-2 pb-12"
    >
      {sections.map((section, idx) => (
        <PrivacySection
          key={section.id}
          section={section}
          index={idx}
          onIntersect={onIntersect}
        />
      ))}
    </div>
  )
}
