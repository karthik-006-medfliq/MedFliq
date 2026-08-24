import { useEffect } from 'react'
import PageLayout from '../components/layout/PageLayout'
import { Link } from 'react-router-dom'

export default function MedicalSpeechToText() {
  useEffect(() => {
    document.title = "Medical Speech to Text India | Voice to EMR | MedFliq"
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', "Industry-leading medical speech to text software in India. Experience highly accurate medical voice recognition and direct voice to EMR capabilities.")
    }
  }, [])

  return (
    <PageLayout>
      <section className="relative pt-32 pb-20 px-6 lg:px-12 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-med-ink leading-tight mb-6">
            Medical Speech to Text in India
          </h1>
          <p className="text-lg text-med-slate mb-10 font-medium max-w-2xl mx-auto">
            Speak naturally and let our medical voice recognition software transcribe directly into your EMR.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-med-primary text-white px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1">
            Request a demo
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-black text-med-ink mb-12">Advanced Medical Voice Recognition</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16 text-left">
            <div className="bg-[#FAF7F2] p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-med-ink mb-4">Unmatched Accuracy</h3>
              <p className="text-med-slate">Optimized for Indian accents and complex medical terminology.</p>
            </div>
            <div className="bg-[#FAF7F2] p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-med-ink mb-4">Seamless Voice to EMR</h3>
              <p className="text-med-slate">Dictate your notes directly into your existing electronic medical records systems.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
