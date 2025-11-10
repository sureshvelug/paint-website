'use client'

import Link from 'next/link'

export default function ColorPreview() {
  const colors = [
    { name: 'Sage Whisper', hex: '#A8B4A5', slug: 'sage-whisper', collection: 'Elysian Matte' },
    { name: 'Dove Grey', hex: '#C9C5C1', slug: 'dove-grey', collection: 'Elysian Matte' },
    { name: 'Sand Echo', hex: '#E8DCC8', slug: 'sand-echo', collection: 'Elysian Matte' },
    { name: 'Misty Blue', hex: '#8A9BA8', slug: 'misty-blue', collection: 'Lustra Satin' },
    { name: 'Warm Clay', hex: '#C9A88A', slug: 'warm-clay', collection: 'Lustra Satin' },
    { name: 'Silver Sage', hex: '#B8C4B5', slug: 'silver-sage', collection: 'Lustra Satin' },
    { name: 'Terracotta Rust', hex: '#C66B3D', slug: 'terracotta-rust', collection: 'Terra Texture' },
    { name: 'Ocean Mist', hex: '#B8D4D1', slug: 'ocean-mist', collection: 'Aqua Guard' },
  ]

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto bg-white">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase bg-black/5 text-black rounded-full">
          Color Collections
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          Explore Our Signature Colors
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Each shade is crafted with nano-mineral technology for unmatched beauty and durability
        </p>
      </div>

      {/* Color Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {colors.map((color) => (
          <Link
            key={color.slug}
            href={`/colors/${color.slug}`}
            className="group relative"
          >
            {/* Color Swatch */}
            <div 
              className="aspect-square rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 group-hover:scale-105 relative overflow-hidden border-2 border-gray-200 group-hover:border-black"
              style={{ backgroundColor: color.hex }}
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

              {/* Info Overlay on Hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-bold text-base mb-1">{color.name}</p>
                <p className="text-white/90 text-sm mb-1">{color.hex}</p>
                <p className="text-white/75 text-xs">{color.collection}</p>
              </div>

              {/* Heart Icon */}
              <button 
                className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg border border-gray-200"
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Color Name Below (Always Visible) */}
            <div className="mt-4 text-center">
              <p className="font-bold text-lg text-black group-hover:text-gray-700 transition-colors">
                {color.name}
              </p>
              <p className="text-sm text-gray-500 font-medium">{color.hex}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <Link 
          href="/colors"
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 hover:shadow-xl hover:scale-105 group shadow-lg text-base"
        >
          View All 200+ Colors
          <svg 
            className="w-5 h-5 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Color Stats */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-sm hover:shadow-lg hover:border-black transition-all duration-300">
          <div className="text-4xl font-bold text-black mb-2">200+</div>
          <div className="text-base text-gray-600 font-medium">Unique Colors</div>
        </div>
        <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-sm hover:shadow-lg hover:border-black transition-all duration-300">
          <div className="text-4xl font-bold text-black mb-2">4</div>
          <div className="text-base text-gray-600 font-medium">Collections</div>
        </div>
        <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-sm hover:shadow-lg hover:border-black transition-all duration-300">
          <div className="text-4xl font-bold text-black mb-2">100%</div>
          <div className="text-base text-gray-600 font-medium">Customizable</div>
        </div>
        <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-sm hover:shadow-lg hover:border-black transition-all duration-300">
          <div className="text-4xl font-bold text-black mb-2">Free</div>
          <div className="text-base text-gray-600 font-medium">Color Samples</div>
        </div>
      </div>
    </section>
  )
}
