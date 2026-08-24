import { useEffect } from 'react'
import PageLayout from '../components/layout/PageLayout'
import { Link } from 'react-router-dom'

export default function ClinicWorkflow() {
  useEffect(() => {
    document.title = "Clinic Workflow Automation in India | AI for OPD Documentation | MedFliq"
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', "MedFliq helps clinics simplify OPD documentation and clinical workflows using an AI co-pilot built for doctors and outpatient care teams.")
    }
  }, [])

  return (
    <PageLayout>
      <section className="relative pt-32 pb-20 px-6 lg:px-12 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-med-ink leading-tight mb-6">
            Clinic Workflow Automation With an AI Clinical Co-Pilot
          </h1>
          <p className="text-lg text-med-slate mb-10 font-medium max-w-2xl mx-auto">
            Simplify OPD documentation and streamline clinical operations for your outpatient practice.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-med-primary text-white px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1">
            Book a Demo
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-med-ink mb-12 text-center">Make Every OPD Consultation Easier to Document</h2>
          
          <div className="mb-16">
            <h2 className="text-3xl font-black text-med-ink mb-8">Reduce Repetitive Clinical Administration</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-100 shadow-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-med-ink mb-2">Consultation notes</h3>
                <p className="text-med-slate">Automatically draft notes for every patient visit without manual typing.</p>
              </div>
              <div className="border border-gray-100 shadow-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-med-ink mb-2">Follow-ups</h3>
                <p className="text-med-slate">Easily document chronic care and routine follow-up encounters.</p>
              </div>
              <div className="border border-gray-100 shadow-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-med-ink mb-2">Patient records</h3>
                <p className="text-med-slate">Keep longitudinal patient histories accurate and up to date.</p>
              </div>
              <div className="border border-gray-100 shadow-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-med-ink mb-2">Clinic coordination</h3>
                <p className="text-med-slate">Sync information smoothly across your clinic's front desk and clinical staff.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-black text-med-ink mb-8">How MedFliq Fits Into Your Clinic Workflow</h2>
            <p className="text-lg text-med-slate mb-8">
              Our AI operates ambiently during your consultations, allowing you to focus purely on the patient while we handle the paperwork.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-black text-med-ink mb-8">Built for Growing Clinics and Outpatient Teams</h2>
            <p className="text-lg text-med-slate mb-8">
              Designed to scale with your practice, ensuring that as patient volume increases, documentation quality never drops.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-black text-med-ink mb-8">Frequently Asked Questions</h2>
            <p className="text-med-slate">Got questions on pricing, support, or implementation? Explore our FAQs.</p>
          </div>

          <div className="text-center bg-[#FAF7F2] p-12 rounded-[40px]">
            <h2 className="text-3xl font-black text-med-ink mb-6">Book a Demo</h2>
            <Link to="/contact" className="inline-flex items-center justify-center bg-med-primary text-white px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
