'use client'
import Header from './Header'
import Hero from './Hero'
import ValueProps from './ValueProps'
import TechSection from './TechSection'
import ProjectsShowcase from './ProjectsShowcase'
import SustainabilityMetrics from './SustainabilityMetrics'
import InspirationGallery from './Insipiration' 
import TestimonialCarousel from './TestimonialCarousel'
import CTASection from './CTASection'

export default function HomeContent() {
  return (
    <main className="bg-stone-50 min-h-screen selection:bg-amber-200 selection:text-amber-900">
      <Hero 
        title="The Art of Performance."
        subtitle="Architectural coatings engineered with nano-mineral technology for spaces that demand distinction."
        primaryCTA={{ text: "Explore Collection", href: "/collections" }}
        secondaryCTA={{ text: "Our Story", href: "/story" }}
        imageSrc="https://images.unsplash.com/photo-1563293775-e832df759e6e?q=80&w=2000"
      />

      <ValueProps />
      
      <ProjectsShowcase />
      
      <TechSection />
      
      <SustainabilityMetrics />
      
      <InspirationGallery />
      
      <TestimonialCarousel />
      
      <CTASection />
      
      {/* <Footer /> */}
    </main>
  )
}
