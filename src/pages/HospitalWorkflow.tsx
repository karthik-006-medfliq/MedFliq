import { useEffect } from 'react'
import PageLayout from '../components/layout/PageLayout'
import { Link } from 'react-router-dom'

export default function HospitalWorkflow() {
  useEffect(() => {
    document.title = "Hospital Workflow Automation Software in India | AI Clinical Workflows | MedFliq"
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', "MedFliq helps hospitals automate clinical documentation and workflow coordination with an AI platform designed for Indian healthcare teams.")
    }
  }, [])

  return (
    <PageLayout>
      <section className="relative pt-32 pb-20 px-6 lg:px-12 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-med-ink leading-tight mb-6">
            AI-Powered Hospital Workflow Automation
          </h1>
          <p className="text-lg text-med-slate mb-10 font-medium max-w-2xl mx-auto">
            Modernize your hospital operations by automating clinical documentation and enhancing care coordination.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center bg-med-primary text-white px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1">
            Schedule a demo
          </Link>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-black text-med-ink mb-12 text-center">Reduce Documentation and Coordination Burden</h2>
          
          <div className="mb-16">
            <h2 className="text-3xl font-black text-med-ink mb-8">Automate Clinical Workflows With AI</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-100 shadow-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-med-ink mb-2">Clinical documentation</h3>
                <p className="text-med-slate">Transform time-consuming charting into an automated, streamlined process.</p>
              </div>
              <div className="border border-gray-100 shadow-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-med-ink mb-2">Outpatient and OPD workflows</h3>
                <p className="text-med-slate">Manage high patient volumes effortlessly with intelligent automation.</p>
              </div>
              <div className="border border-gray-100 shadow-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-med-ink mb-2">Care coordination</h3>
                <p className="text-med-slate">Ensure smooth transitions and communication between hospital departments.</p>
              </div>
              <div className="border border-gray-100 shadow-sm p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-med-ink mb-2">Operational intelligence</h3>
                <p className="text-med-slate">Gain insights into workflow bottlenecks and optimize resources.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-black text-med-ink mb-8">Designed for Hospital Teams</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#FAF7F2] p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-med-ink mb-4">Doctors</h3>
                <p className="text-med-slate">Reduce burnout by cutting administrative tasks and focusing on care.</p>
              </div>
              <div className="bg-[#FAF7F2] p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-med-ink mb-4">Clinical coordinators</h3>
                <p className="text-med-slate">Streamline handoffs and improve operational efficiency.</p>
              </div>
              <div className="bg-[#FAF7F2] p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-med-ink mb-4">Hospital administrators</h3>
                <p className="text-med-slate">Enhance overall hospital throughput and data accuracy.</p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-black text-med-ink mb-8">Integration, Security, and Governance</h2>
            <p className="text-lg text-med-slate mb-8">
              Built with enterprise-grade security and designed to integrate into existing hospital IT infrastructure.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-black text-med-ink mb-8">Frequently Asked Questions</h2>
            <p className="text-med-slate">Find answers about deployment, training, and support.</p>
          </div>

          <div className="text-center bg-[#FAF7F2] p-12 rounded-[40px]">
            <h2 className="text-3xl font-black text-med-ink mb-6">Modernize Your Hospital Workflow</h2>
            <Link to="/contact" className="inline-flex items-center justify-center bg-med-primary text-white px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1">
              Schedule a demo
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
