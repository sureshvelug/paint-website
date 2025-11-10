export default function ValueProps() {
  const props = [
    {
      icon: '🧪',
      title: 'Nano-Enhanced',
      subtitle: 'Advanced Technology',
      description: 'Cutting-edge nanotechnology delivers superior adhesion and self-cleaning properties.',
      features: [
        { label: '2× Stronger Adhesion', detail: 'Superior bonding strength' },
        { label: 'Self-Cleaning Surface', detail: 'Repels dust & dirt' },
        { label: 'ASTM D3359 5B Rated', detail: 'Industry certified' }
      ]
    },
    {
      icon: '🌱',
      title: 'Eco-Certified',
      subtitle: 'Sustainable Choice',
      description: 'Environmentally responsible formulations that protect both your home and the planet.',
      features: [
        { label: '<5 g/L VOC', detail: 'Ultra-low emissions' },
        { label: 'APEO-Free Formula', detail: 'Safe for families' },
        { label: 'LEED Compatible', detail: 'Green building approved' }
      ]
    },
    {
      icon: '⏳',
      title: 'Long-Lasting',
      subtitle: 'Built to Endure',
      description: 'Engineered with premium ingredients for decades of vibrant, beautiful walls.',
      features: [
        { label: '3× Color Retention', detail: 'Fade resistant' },
        { label: '10+ Year Durability', detail: 'Long-term performance' },
        { label: 'Washability Class 1', detail: 'Easy maintenance' }
      ]
    }
  ]

  return (
    <section className="relative py-24 px-4 bg-white">
      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase bg-black/5 text-black rounded-full">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black leading-tight">
            Science Meets Sustainability
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Where cutting-edge innovation and environmental responsibility create paints that perform beautifully for decades
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {props.map((prop, idx) => (
            <div 
              key={idx}
              className="group relative bg-white rounded-3xl p-8 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 border-2 border-gray-200 hover:border-black overflow-hidden"
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className="relative inline-flex mb-6">
                  <div className="relative w-16 h-16 rounded-2xl bg-black flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {prop.icon}
                  </div>
                </div>

                {/* Subtitle Badge */}
                <div className="inline-block mb-3 mx-4">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {prop.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-black leading-tight">
                  {prop.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                  {prop.description}
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-gray-200 mb-6" />

                {/* Features List */}
                <ul className="space-y-4">
                  {prop.features.map((feature, fIdx) => (
                    <li 
                      key={fIdx}
                      className="flex items-start gap-3"
                    >
                      {/* Checkmark */}
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-black/5 flex items-center justify-center mt-0.5">
                        <svg 
                          className="w-3 h-3 text-black" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={3} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                      </div>
                      
                      {/* Feature Text */}
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-black leading-tight mb-0.5">
                          {feature.label}
                        </div>
                        <div className="text-xs text-gray-500">
                          {feature.detail}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Number */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-black/5 group-hover:text-black/10 transition-colors duration-500">
                {idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base">
            Explore Our Technology
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
