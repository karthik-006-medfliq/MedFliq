import { useEffect } from 'react'
import PageLayout from '../components/layout/PageLayout'
import NewTermsLayout from '../components/terms-new/NewTermsLayout'

export default function NewTerms() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageLayout>
      <NewTermsLayout />
    </PageLayout>
  )
}
