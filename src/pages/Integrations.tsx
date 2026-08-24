import { useEffect } from 'react'
import PageLayout from '../components/layout/PageLayout'
import { Link } from 'react-router-dom'

export default function Integrations() {
  useEffect(() => {
    document.title = "AI EMR Integration & EHR Workflows | MedFliq"
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', "MedFliq integrates smoothly into your hospital information systems. Discover AI EMR integration for seamless documentation automation.")
    }
  }, [])

  return (
    <PageLayout>
      <section className="relative pt-32 pb-20 px-6 lg:px-12 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-med-ink leading-tight mb-6">
            Seamless EMR & EHR Integrations
          </h1>
          <p className="text-lg text-med-slate mb-10 font-medium max-w-2xl mx-auto">
            Our platform connects directly with your existing hospital information systems and EHR software to ensure data continuity.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-med-primary text-white px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1">
            Explore Integrations
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
