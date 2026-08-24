import { useEffect } from 'react'
import PageLayout from '../components/layout/PageLayout'
import { Link } from 'react-router-dom'

export default function ClinicalDocumentation() {
  useEffect(() => {
    document.title = "Clinical Documentation AI India | MedFliq"
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', "Transform your workflow with clinical documentation AI in India. Generate AI SOAP notes and consultation notes effortlessly.")
    }
  }, [])

  return (
    <PageLayout>
      <section className="relative pt-32 pb-20 px-6 lg:px-12 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-med-ink leading-tight mb-6">
            Clinical Documentation AI India
          </h1>
          <p className="text-lg text-med-slate mb-10 font-medium max-w-2xl mx-auto">
            Automate your consultation notes with intelligent AI software built for fast-paced healthcare environments.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-med-primary text-white px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1">
            Explore documentation AI
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black text-med-ink mb-12">AI SOAP Notes and Consultation Software</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16 text-left">
            <div className="bg-[#FAF7F2] p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-med-ink mb-4">Instant Consultation Notes</h3>
              <p className="text-med-slate">Stop typing. Our clinical documentation AI listens and structures your notes immediately.</p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-med-ink mb-4">Accurate AI SOAP Notes</h3>
              <p className="text-med-slate">Automatically generate Subjective, Objective, Assessment, and Plan components.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
