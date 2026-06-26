import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ErrorBoundary from './components/utils/ErrorBoundary'
import ScrollToTop from './components/utils/ScrollToTop'
import VideoBackground from './components/layout/VideoBackground'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'
import Privacy from './pages/Privacy'
import NewPrivacy from './pages/NewPrivacy'
import Terms from './pages/Terms'
import NewTerms from './pages/NewTerms'
import Navbar from './components/layout/Navbar'

function AppContent() {
  const location = useLocation()
  
  return (
    <ErrorBoundary>
      <div className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<NewPrivacy />} />
        <Route path="/privacy-old" element={<Privacy />} />
        <Route path="/terms" element={<NewTerms />} />
        <Route path="/terms-old" element={<Terms />} />
      </Routes>
      </div>
    </ErrorBoundary>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <VideoBackground />
      <Navbar />
      <AppContent />
    </Router>
  )
}
