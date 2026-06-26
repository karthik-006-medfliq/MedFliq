import { useEffect } from 'react'
import PageLayout from '../components/layout/PageLayout'
import NewPrivacyLayout from '../components/privacy-new/NewPrivacyLayout'

export default function NewPrivacy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageLayout>
      <NewPrivacyLayout />
    </PageLayout>
  )
}
