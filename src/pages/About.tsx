import PageLayout from '../components/layout/PageLayout'
import AboutHero from '../components/about/AboutHero'
import AboutVisionSection from '../components/about/AboutVisionSection'
import AboutMissionSection from '../components/about/AboutMissionSection'
import AboutBuildSection from '../components/about/AboutBuildSection'
import AboutDifferenceSection from '../components/about/AboutDifferenceSection'
import AboutRoadmapSection from '../components/about/AboutRoadmapSection'
import AboutApproachSection from '../components/about/AboutApproachSection'
import AboutCTASection from '../components/about/AboutCTASection'

export default function About() {
  return (
    <PageLayout>
      <div className="relative z-10 pb-0 lg:pb-0">
        <AboutHero />
        <AboutVisionSection />
        <AboutMissionSection />
        <AboutBuildSection />
        <AboutDifferenceSection />
        <AboutRoadmapSection />
        <AboutApproachSection />
        <AboutCTASection />
      </div>
    </PageLayout>
  )
}
