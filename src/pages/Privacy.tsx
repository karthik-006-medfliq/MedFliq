import PageLayout from '../components/layout/PageLayout'
import PrivacyLayout from '../components/privacy/PrivacyLayout'
import { useEffect } from 'react'

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageLayout>
      <PrivacyLayout />
    </PageLayout>
  )
}
