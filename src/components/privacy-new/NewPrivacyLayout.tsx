import NewPrivacyContent from './NewPrivacyContent'
import { privacyData } from '../../data/privacyData'
import './privacy.css'

export default function NewPrivacyLayout() {
  return (
    <section className="bg-[#fbf6ed] min-h-screen pt-12 sm:pt-16 pb-12 sm:pb-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#fffaf2] rounded-[24px] sm:rounded-[32px] border border-[#e8751a]/10 shadow-sm p-6 sm:p-12 lg:p-16">
          {/* Header Area */}
          <div className="max-w-3xl mb-6 sm:mb-8 border-b border-[#172033]/5 pb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172033] tracking-tight mb-6">
              Privacy Policy – Medfliq
            </h1>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed mb-6">
              At Medfliq, protecting your personal information and maintaining your trust are important to us. This Privacy Policy explains how Medfliq and its affiliated entities collect, use, process, store, and safeguard information when you access our website, applications, platforms, products, or services.
            </p>
            <p className="text-sm text-[#172033] font-medium opacity-80">
              Last Updated: May 2026
            </p>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl">
            <NewPrivacyContent sections={privacyData} />
          </div>
        </div>
      </div>
    </section>
  )
}
