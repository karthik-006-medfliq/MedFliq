import { useEffect } from 'react'
import PageLayout from '../components/layout/PageLayout'
import { Link } from 'react-router-dom'

export default function Security() {
  useEffect(() => {
    document.title = "Healthcare Data Security & Privacy | MedFliq"
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', "Trust and security are paramount. Learn how MedFliq protects clinical data and ensures privacy across its AI platforms.")
    }
  }, [])

  return (
    <PageLayout>
      <section className="relative pt-32 pb-20 px-6 lg:px-12 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-med-ink leading-tight mb-6">
            Enterprise-Grade Security
          </h1>
          <p className="text-lg text-med-slate mb-10 font-medium max-w-2xl mx-auto">
            Your patient data is protected with industry-leading encryption and strict data governance policies.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-med-primary text-white px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1">
            Talk to our team
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
