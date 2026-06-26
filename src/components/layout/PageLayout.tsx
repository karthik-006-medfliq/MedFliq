import type { ReactNode } from 'react'
import Footer from './Footer'

interface PageLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col pt-1">
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
