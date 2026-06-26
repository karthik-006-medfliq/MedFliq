import { useState } from 'react'

interface ContactFormProps {
  isVisible: boolean
}

export default function ContactForm({ isVisible }: ContactFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || ''
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.detail || 'Failed to submit the form. Please try again later.')
      }

      setStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Reset back to idle after a few seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (err: unknown) {
      setStatus('error')
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.'
      setErrorMessage(errorMessage)
    }
  }

  const inputStyles = "w-full bg-[#f4f7f9]/80 border border-transparent rounded-[24px] px-6 py-[18px] text-med-ink placeholder:text-med-slate/40 focus:outline-none focus:border-med-primary/30 focus:bg-white focus:shadow-[0_0_0_4px_rgba(224,123,42,0.1)] transition-all duration-300"
  const labelStyles = "block text-[11px] sm:text-xs font-bold text-med-ink uppercase tracking-[0.15em] mb-2 sm:mb-3 ml-2"
  
  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6 sm:gap-8">
      
      {/* Success Message Banner */}
      {status === 'success' && (
        <div className="w-full bg-green-50 border border-green-100 text-green-700 rounded-2xl p-4 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-medium text-sm">Thanks! We'll get back to you soon.</span>
        </div>
      )}

      {/* Error Message Banner */}
      {status === 'error' && (
        <div className="w-full bg-red-50 border border-red-100 text-red-700 rounded-2xl p-4 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-medium text-sm">{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Name */}
      <div 
        className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        style={{ transitionDelay: '300ms' }}
      >
        <div>
          <label htmlFor="firstName" className={labelStyles}>First Name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={formData.firstName}
            onChange={handleChange}
            placeholder="John"
            required
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelStyles}>Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Doe"
            required
            className={inputStyles}
          />
        </div>
      </div>

      {/* Row 2: Email */}
      <div 
        className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        style={{ transitionDelay: '400ms' }}
      >
        <label htmlFor="email" className={labelStyles}>Email Address</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
          className={inputStyles}
        />
      </div>

      {/* Row 3: Subject */}
      <div 
        className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        style={{ transitionDelay: '500ms' }}
      >
        <label htmlFor="subject" className={labelStyles}>Subject</label>
        <div className="relative">
          <select 
            id="subject" 
            name="subject" 
            value={formData.subject}
            onChange={handleChange}
            required
            className={`${inputStyles} appearance-none cursor-pointer pr-12`}
          >
            <option value="" disabled>Select a subject</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Appointment Request">Appointment Request</option>
            <option value="Medical Record Access">Medical Record Access</option>
            <option value="Billing Question">Billing Question</option>
            <option value="Others">Others</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-6 flex items-center">
            <svg className="w-4 h-4 text-med-slate/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Row 4: Message */}
      <div 
        className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        style={{ transitionDelay: '600ms' }}
      >
        <label htmlFor="message" className={labelStyles}>Message</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          required
          className={`${inputStyles} resize-none h-[140px] rounded-[28px]`}
        ></textarea>
      </div>

      {/* Submit Button */}
      <div 
        className={`pt-2 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        style={{ transitionDelay: '700ms' }}
      >
        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className={`w-full btn-shine relative overflow-hidden bg-med-primary hover:bg-med-primary-dark active:scale-[0.98] text-white rounded-full py-[18px] px-8 font-bold text-[15px] tracking-wide transition-all duration-300 shadow-[0_8px_20px_rgba(224,123,42,0.25)] hover:shadow-[0_12px_24px_rgba(224,123,42,0.35)] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed`}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {status === 'submitting' ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                SENDING...
              </>
            ) : (
              'Send Message'
            )}
          </span>
        </button>
      </div>

    </form>
  )
}
