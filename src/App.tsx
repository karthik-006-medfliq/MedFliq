import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import ErrorBoundary from './components/utils/ErrorBoundary'
import ScrollToTop from './components/utils/ScrollToTop'
import VideoBackground from './components/layout/VideoBackground'
const Home = lazy(() => import('./pages/Home'))
const Contact = lazy(() => import('./pages/Contact'))
const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Privacy = lazy(() => import('./pages/Privacy'))
const NewPrivacy = lazy(() => import('./pages/NewPrivacy'))
const Terms = lazy(() => import('./pages/Terms'))
const NewTerms = lazy(() => import('./pages/NewTerms'))
const AIMedicalScribe = lazy(() => import('./pages/AIMedicalScribe'))
const AIVoiceAssistant = lazy(() => import('./pages/AIVoiceAssistant'))
const HospitalWorkflow = lazy(() => import('./pages/HospitalWorkflow'))
const ClinicWorkflow = lazy(() => import('./pages/ClinicWorkflow'))
const ClinicalDocumentation = lazy(() => import('./pages/ClinicalDocumentation'))
const MedicalSpeechToText = lazy(() => import('./pages/MedicalSpeechToText'))
const SolutionsHospitals = lazy(() => import('./pages/SolutionsHospitals'))
const SolutionsClinics = lazy(() => import('./pages/SolutionsClinics'))
const AIOpdSoftware = lazy(() => import('./pages/AIOpdSoftware'))
const Integrations = lazy(() => import('./pages/Integrations'))
const Security = lazy(() => import('./pages/Security'))
import Navbar from './components/layout/Navbar'
function AppContent() {
  const location = useLocation()
  
  return (
    <ErrorBoundary>
      <div className="page-transition">
      <Suspense fallback={<div className="flex h-screen items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-med-primary"></div></div>}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<NewPrivacy />} />
        <Route path="/privacy-old" element={<Privacy />} />
        <Route path="/terms" element={<NewTerms />} />
        <Route path="/terms-old" element={<Terms />} />
        <Route path="/ai-medical-scribe-india" element={<AIMedicalScribe />} />
        <Route path="/ai-voice-assistant-doctors" element={<AIVoiceAssistant />} />
        <Route path="/hospital-workflow-automation" element={<HospitalWorkflow />} />
        <Route path="/clinic-workflow-automation" element={<ClinicWorkflow />} />
        <Route path="/clinical-documentation-ai" element={<ClinicalDocumentation />} />
        <Route path="/medical-speech-to-text-india" element={<MedicalSpeechToText />} />
        <Route path="/solutions/hospitals" element={<SolutionsHospitals />} />
        <Route path="/solutions/clinics" element={<SolutionsClinics />} />
        <Route path="/ai-opd-software" element={<AIOpdSoftware />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/security" element={<Security />} />
      </Routes>
      </Suspense>
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
