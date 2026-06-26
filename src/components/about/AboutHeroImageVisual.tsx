export default function AboutHeroImageVisual({ isVisible }: { isVisible: boolean }) {
  return (
    <div 
      className={`relative max-w-[380px] lg:max-w-[420px] mx-auto w-full transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
      }`}
      style={{ transitionDelay: '700ms' }}
    >
      <div className="relative rounded-[40px] lg:rounded-[48px] overflow-hidden shadow-[0_8px_40px_rgba(44,35,25,0.08)] hover:shadow-[0_0_40px_rgba(224,123,42,0.4)] transition-shadow duration-500 group animate-float-subtle">
        <img 
          alt="Modern Medical Facility" 
          loading="lazy" 
          width="420" 
          height="540" 
          decoding="async" 
          className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-105" 
          src="/images/about-hero.png" 
        />
      </div>
    </div>
  )
}
