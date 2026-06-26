import PageLayout from '../components/layout/PageLayout'
import TermsLayout from '../components/terms/TermsLayout'
import { useEffect } from 'react'

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageLayout>
      <TermsLayout />
    </PageLayout>
  )
}
