import type { TermsSectionData } from '../../data/termsData'

interface NewTermsSectionProps {
  section: TermsSectionData
}

export default function NewTermsSection({ section }: NewTermsSectionProps) {
  return (
    <section className="pt-6 sm:pt-8 pb-6 sm:pb-8 border-b border-[#172033]/5 last:border-0 last:pb-0">
      <h2 className="text-[22px] sm:text-2xl font-bold text-[#172033] mb-4 tracking-tight">
        {section.title}
      </h2>
      <div 
        className="privacy-new-content text-base max-w-none"
        dangerouslySetInnerHTML={{ __html: section.html }}
      />
    </section>
  )
}
