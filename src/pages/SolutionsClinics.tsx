import { useEffect } from 'react'
import PageLayout from '../components/layout/PageLayout'
import { Link } from 'react-router-dom'

export default function SolutionsClinics() {
  useEffect(() => {
    document.title = "AI Copilot for Clinics | Clinic Workflow Automation | MedFliq"
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', "An AI copilot for clinics offering clinic workflow automation in India. Discover smart OPD software that scales with your practice.")
    }
  }, [])

  return (
    <PageLayout>
      <section className="relative pt-32 pb-20 px-6 lg:px-12 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-med-ink leading-tight mb-6">
            AI Copilot for Clinics
          </h1>
          <p className="text-lg text-med-slate mb-10 font-medium max-w-2xl mx-auto">
            Enhance your patient experience with clinic workflow automation and specialized OPD software built for India.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-med-primary text-white px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1">
            Book a demo
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black text-med-ink mb-12">Clinic Workflow Automation in India</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16 text-left">
            <div className="bg-[#FAF7F2] p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-med-ink mb-4">Modern OPD Software</h3>
              <p className="text-med-slate">Manage your outpatient flow more efficiently with intelligent coordination tools.</p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-med-ink mb-4">Focus on Patients</h3>
              <p className="text-med-slate">Our AI copilot handles the administrative overhead so you can prioritize patient care.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
