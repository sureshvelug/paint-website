export default function SustainabilityMetrics() {
  const metrics = [
    { value: '<5 g/L', label: 'VOC Emission', comparison: 'EU EcoLabel <30 g/L' },
    { value: '85%', label: 'Recycled Packaging', comparison: 'Industry Avg. 30%' },
    { value: '−42%', label: 'CO₂ Reduction', comparison: 'vs Standard Paint' }
  ]

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase bg-black/5 text-black rounded-full">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-black">
            Sustainability Beyond the Surface
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Eco-friendly mineral paints for homes and hotels that protect both your space and the planet
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white p-10 rounded-2xl border-2 border-gray-200 hover:border-black shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500"
            >
              {/* Large Metric Value */}
              <div className="text-5xl md:text-6xl font-bold text-black mb-4 group-hover:scale-105 transition-transform duration-300">
                {metric.value}
              </div>
              
              {/* Label */}
              <div className="text-xl font-serif font-bold text-black mb-3">
                {metric.label}
              </div>
              
              {/* Comparison */}
              <div className="text-base text-gray-600 font-light">
                {metric.comparison}
              </div>

              {/* Decorative element */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/5 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Every can of our paint is formulated with the future in mind—minimal environmental impact, maximum performance, and certified to exceed industry sustainability standards.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base">
            Learn About Our Process
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
