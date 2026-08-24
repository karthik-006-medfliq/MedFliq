import { useEffect } from 'react'
import PageLayout from '../components/layout/PageLayout'
import { Link } from 'react-router-dom'

export default function AIMedicalScribe() {
  useEffect(() => {
    document.title = "AI Medical Scribe for Indian Doctors | Voice-Based Clinical Notes | MedFliq"
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', "Create structured clinical notes from consultations with MedFliq, an AI medical scribe designed for doctors, outpatient clinics, and hospitals in India.")
    }
  }, [])

  return (
    <PageLayout>
      <section className="relative pt-32 pb-20 px-6 lg:px-12 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-med-ink leading-tight mb-6">
            AI Medical Scribe for Faster Clinical Documentation
          </h1>
          <p className="text-lg text-med-slate mb-10 font-medium max-w-2xl mx-auto">
            Convert consultations into reviewable, structured clinical documentation automatically. 
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-med-primary text-white px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1">
            Book a Demo
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-med-ink mb-12 text-center">Turn Consultations Into Structured Clinical Notes</h2>
          
          <div className="mb-16">
            <h2 className="text-3xl font-black text-med-ink mb-8">How the AI Medical Scribe Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#FAF7F2] p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-med-ink mb-4">Capture clinical conversation or dictation</h3>
                <p className="text-med-slate">Seamlessly record the consultation naturally without disrupting the patient experience.</p>
              </div>
              <div className="bg-[#FAF7F2] p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-med-ink mb-4">Generate structured notes</h3>
                <p className="text-med-slate">Our AI automatically formats the conversation into comprehensive clinical documentation.</p>
              </div>
              <div className="bg-[#FAF7F2] p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-med-ink mb-4">Doctor review and approval</h3>
                <p className="text-med-slate">Review, edit, and approve the notes directly within your existing workflow.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-black text-med-ink mb-8">Built for Indian Clinical Workflows</h2>
            <p className="text-lg text-med-slate mb-8">
              Designed specifically to handle Indian accents, local medical terminology, and fast-paced clinical environments.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-black text-med-ink mb-8">Use Cases for Doctors, Clinics, and Hospitals</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-100 shadow-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-med-ink mb-2">Consultation notes</h3>
                <p className="text-med-slate">Automate standard visit summaries instantly.</p>
              </div>
              <div className="border border-gray-100 shadow-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-med-ink mb-2">SOAP notes</h3>
                <p className="text-med-slate">Generate structured Subjective, Objective, Assessment, and Plan notes.</p>
              </div>
              <div className="border border-gray-100 shadow-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-med-ink mb-2">Follow-up documentation</h3>
                <p className="text-med-slate">Quickly document follow-ups and care plans.</p>
              </div>
              <div className="border border-gray-100 shadow-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-med-ink mb-2">OPD documentation</h3>
                <p className="text-med-slate">Streamline high-volume outpatient department records.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-black text-med-ink mb-8">Frequently Asked Questions</h2>
            <p className="text-med-slate">Have questions about integrations or security? Our team is ready to help.</p>
          </div>

          <div className="text-center bg-[#FAF7F2] p-12 rounded-[40px]">
            <h2 className="text-3xl font-black text-med-ink mb-6">See MedFliq in Your Workflow</h2>
            <Link to="/contact" className="inline-flex items-center justify-center bg-med-primary text-white px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1">
              Request a demo
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
