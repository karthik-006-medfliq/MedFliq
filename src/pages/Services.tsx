import PageLayout from '../components/layout/PageLayout'
import ServicesHero from '../components/services/ServicesHero'
import ServicesOverviewSection from '../components/services/ServicesOverviewSection'
import ServicesGridSection from '../components/services/ServicesGridSection'
import ServicesWhySection from '../components/services/ServicesWhySection'
import ServicesRoadmapSection from '../components/services/ServicesRoadmapSection'
import ServicesAudienceSection from '../components/services/ServicesAudienceSection'
import ServicesCTASection from '../components/services/ServicesCTASection'

export default function Services() {
  return (
    <PageLayout>
      <div className="services-page">
        <ServicesHero />
        <ServicesOverviewSection />
        <ServicesGridSection />
        <ServicesWhySection />
        <ServicesRoadmapSection />
        <ServicesAudienceSection />
        <ServicesCTASection />
      </div>
    </PageLayout>
  )
}
