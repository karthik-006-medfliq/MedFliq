import { useEffect } from 'react'
import PageLayout from '../components/layout/PageLayout'
import { Link } from 'react-router-dom'

export default function AIVoiceAssistant() {
  useEffect(() => {
    document.title = "AI Voice Assistant for Doctors in India | Medical Dictation | MedFliq"
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', "Use MedFliq's AI voice assistant to simplify medical dictation, clinical notes, and doctor documentation workflows in clinics and hospitals.")
    }
  }, [])

  return (
    <PageLayout>
      <section className="relative pt-32 pb-20 px-6 lg:px-12 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-med-ink leading-tight mb-6">
            AI Voice Assistant for Doctors and Clinical Documentation
          </h1>
          <p className="text-lg text-med-slate mb-10 font-medium max-w-2xl mx-auto">
            Speak naturally and let our AI translate your voice into structured clinical notes effortlessly.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-med-primary text-white px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1">
            See it in action
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-med-ink mb-8 text-center">Speak Naturally. Create Structured Clinical Documentation.</h2>
          
          <div className="mb-16">
            <h2 className="text-3xl font-black text-med-ink mb-8">Medical Dictation Designed for Clinical Workflows</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#FAF7F2] p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-med-ink mb-4">Voice capture</h3>
                <p className="text-med-slate">Dictate your observations directly into the platform with high accuracy.</p>
              </div>
              <div className="bg-[#FAF7F2] p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-med-ink mb-4">Clinical note generation</h3>
                <p className="text-med-slate">Automatically organize transcribed text into relevant clinical sections.</p>
              </div>
              <div className="bg-[#FAF7F2] p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-med-ink mb-4">Review and approval</h3>
                <p className="text-med-slate">Finalize the documentation rapidly and focus on your next patient.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-black text-med-ink mb-8">Use Voice AI Across Your Clinic or Hospital</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-100 shadow-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-med-ink mb-2">Consultation documentation</h3>
                <p className="text-med-slate">Record complete patient encounters using just your voice.</p>
              </div>
              <div className="border border-gray-100 shadow-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-med-ink mb-2">Clinical observations</h3>
                <p className="text-med-slate">Quickly log vital observations and findings.</p>
              </div>
              <div className="border border-gray-100 shadow-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-med-ink mb-2">Prescription and follow-up workflows</h3>
                <p className="text-med-slate">Draft prescriptions and next steps verbally.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-black text-med-ink mb-8">Supported Languages and Integrations</h2>
            <p className="text-lg text-med-slate mb-8">
              Optimized for Indian accents and English medical terminology, seamlessly fitting into your daily tools.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-black text-med-ink mb-8">Frequently Asked Questions</h2>
            <p className="text-med-slate">Learn more about our voice recognition accuracy and privacy standards.</p>
          </div>

          <div className="text-center bg-[#FAF7F2] p-12 rounded-[40px]">
            <h2 className="text-3xl font-black text-med-ink mb-6">Request a MedFliq Demo</h2>
            <Link to="/contact" className="inline-flex items-center justify-center bg-med-primary text-white px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
