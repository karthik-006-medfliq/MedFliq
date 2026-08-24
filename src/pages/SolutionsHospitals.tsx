import { useEffect } from 'react'
import PageLayout from '../components/layout/PageLayout'
import { Link } from 'react-router-dom'

export default function SolutionsHospitals() {
  useEffect(() => {
    document.title = "AI Copilot for Hospitals | Hospital Workflow Automation | MedFliq"
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', "MedFliq provides an AI copilot for hospitals, driving hospital workflow automation and advanced hospital operations AI to reduce burnout and improve care.")
    }
  }, [])

  return (
    <PageLayout>
      <section className="relative pt-32 pb-20 px-6 lg:px-12 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-med-ink leading-tight mb-6">
            AI Copilot for Hospitals
          </h1>
          <p className="text-lg text-med-slate mb-10 font-medium max-w-2xl mx-auto">
            Transform your facility with hospital operations AI and workflow automation to cut costs and improve care delivery.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-med-primary text-white px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1">
            Schedule a demo
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black text-med-ink mb-12">Intelligent Hospital Workflow Automation</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16 text-left">
            <div className="bg-[#FAF7F2] p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-med-ink mb-4">Streamline Operations</h3>
              <p className="text-med-slate">Connect fragmented departments with our centralized hospital operations AI.</p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-med-ink mb-4">Reduce Documentation Burden</h3>
              <p className="text-med-slate">Empower your clinicians with AI tools that handle time-consuming paperwork automatically.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
