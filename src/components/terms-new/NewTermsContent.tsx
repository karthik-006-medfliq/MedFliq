import type { TermsSectionData } from '../../data/termsData'
import NewTermsSection from './NewTermsSection'

interface NewTermsContentProps {
  sections: TermsSectionData[]
}

export default function NewTermsContent({ sections }: NewTermsContentProps) {
  return (
    <div className="flex flex-col">
      {sections.map((section) => (
        <NewTermsSection 
          key={section.id} 
          section={section} 
        />
      ))}
    </div>
  )
}
