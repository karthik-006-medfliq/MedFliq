import NewTermsContent from './NewTermsContent'
import { termsData } from '../../data/termsData'
import '../privacy-new/privacy.css'

export default function NewTermsLayout() {
  return (
    <section className="bg-[#fbf6ed] min-h-screen pt-12 sm:pt-16 pb-12 sm:pb-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fffaf2] rounded-[24px] sm:rounded-[32px] border border-[#e8751a]/10 shadow-sm p-6 sm:p-12 lg:p-16">
          {/* Header Area */}
          <div className="max-w-3xl mb-6 sm:mb-8 border-b border-[#172033]/5 pb-8">
            <p className="text-[#e8751a] font-bold text-sm tracking-widest uppercase mb-4">
              Legal & Compliance
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172033] tracking-tight mb-6">
              Terms of Use – Medfliq
            </h1>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed mb-6">
              These Terms of Use set out the legally binding agreement between you and Medfliq for access to and use of our websites, applications, developer interfaces, evaluation tools, and any related services.
            </p>
            <p className="text-sm text-[#172033] font-medium opacity-80">
              Last Updated: May 2026
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl">
            <NewTermsContent sections={termsData} />
          </div>
        </div>
      </div>
    </section>
  )
}
