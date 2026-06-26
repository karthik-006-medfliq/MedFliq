import PageLayout from '../components/layout/PageLayout'
import ContactHero from '../components/contact/ContactHero'
import ContactInfoSection from '../components/contact/ContactInfoSection'

export default function Contact() {
  return (
    <PageLayout>
      <div className="relative z-10">
        <ContactHero />
        <ContactInfoSection />
      </div>
    </PageLayout>
  )
}
