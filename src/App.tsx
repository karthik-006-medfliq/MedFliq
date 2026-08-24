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
import AIMedicalScribe from './pages/AIMedicalScribe'
import AIVoiceAssistant from './pages/AIVoiceAssistant'
import HospitalWorkflow from './pages/HospitalWorkflow'
import ClinicWorkflow from './pages/ClinicWorkflow'
import ClinicalDocumentation from './pages/ClinicalDocumentation'
import MedicalSpeechToText from './pages/MedicalSpeechToText'
import SolutionsHospitals from './pages/SolutionsHospitals'
import SolutionsClinics from './pages/SolutionsClinics'
import AIOpdSoftware from './pages/AIOpdSoftware'
import Integrations from './pages/Integrations'
import Security from './pages/Security'
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
