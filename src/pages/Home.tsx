import PageLayout from '../components/layout/PageLayout'
import HeroSection from '../components/home/HeroSection'
import StatsSection from '../components/home/StatsSection'
import AboutSection from '../components/home/AboutSection'
import CoreCapabilities from '../components/home/CoreCapabilities'
import SpecializedCare from '../components/home/SpecializedCare'

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CoreCapabilities />
      <SpecializedCare />
    </PageLayout>
  )
}
