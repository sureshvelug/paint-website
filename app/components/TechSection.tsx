/**
 * TechSection Component - Technology explanation with visual
 * File: components/TechSection.tsx
 */

import Image from 'next/image'
import Link from 'next/link'

export default function TechSection() {
  const techSpecs = [
    {
      label: 'Particle Size',
      value: '20–50 nm',
      description: 'Optimized for optical clarity and strength'
    },
    {
      label: 'VOC Content',
      value: '<5 g/L',
      description: 'Well below EU EcoLabel limits'
    },
    {
      label: 'Washability',
      value: 'ISO 11998 Class 1',
      description: 'Over 5,000 wash cycles'
    },
    {
      label: 'Adhesion Rating',
      value: 'ASTM 5B',
      description: 'Maximum adhesion performance'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80"
                alt="Nano-particle technology microscopic view"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 bg-brand-sage text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-xs font-medium">Nano-Enhanced</div>
                <div className="text-lg font-bold">TiO₂ + SiO₂</div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block">
              <div className="text-4xl font-bold text-brand-sage mb-1">10+</div>
              <div className="text-sm text-gray-600">Years Durability</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-block bg-brand-sage/10 text-brand-sage px-4 py-2 rounded-full text-sm font-medium mb-4">
              Advanced Technology
            </div>
            
            <h2 className="text-h2 font-serif text-black mb-2">Where Nanoscience Meets Aesthetics</h2>
            <p className="text-sm text-gray-600 mb-6 font-light">Nano-based Low VOC Paints in India</p>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed font-light">
              Our patented <strong>Nano-Silica-Titania Hybrid Network</strong> forms a 3D lattice 
              within the paint film. This structure strengthens adhesion while diffusing light 
              for a soft, timeless glow.
            </p>

            <p className="text-gray-600 mb-8 font-light">
              Unlike synthetic polymer paints, Eco-Luxury formulations are solvent-free, 
              odorless, and UV-stable, ensuring your walls stay beautiful for decades.
            </p>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {techSpecs.map((spec, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-4 rounded-lg border border-gray-200 hover:border-brand-sage transition-colors"
                >
                  <div className="text-2xl font-bold text-brand-sage mb-1">
                    {spec.value}
                  </div>
                  <div className="text-sm font-serif font-medium text-gray-900 mb-1">
                    {spec.label}
                  </div>
                  <div className="text-xs text-gray-600 font-light">
                    {spec.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Features Checklist */}
            <div className="space-y-3 mb-8">
              {[
                'Self-purifying photocatalytic properties',
                'Breathable film regulates humidity',
                'Zero plasticizers for healthier indoor air',
                'Temperature stable from −5°C to 65°C'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <svg 
                    className="w-6 h-6 text-brand-sage shrink-0" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  <span className="text-gray-700 font-light">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/technology"
                className="inline-flex items-center justify-center gap-2 bg-brand-sage text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-sage/90 transition-all group"
              >
                Learn More About Our Technology
                <svg 
                  className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              
              <Link 
                href="/technology#download"
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-sage text-brand-sage px-6 py-3 rounded-lg font-medium hover:bg-brand-sage hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Technical Data Sheet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
