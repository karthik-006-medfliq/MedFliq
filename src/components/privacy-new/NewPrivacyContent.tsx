import type { PrivacySectionData } from '../../data/privacyData'
import NewPrivacySection from './NewPrivacySection'

interface NewPrivacyContentProps {
  sections: PrivacySectionData[]
}

export default function NewPrivacyContent({ sections }: NewPrivacyContentProps) {
  return (
    <div className="flex flex-col">
      {sections.map((section, index) => (
        <NewPrivacySection 
          key={section.id} 
          section={section} 
          index={index}
        />
      ))}
    </div>
  )
}
