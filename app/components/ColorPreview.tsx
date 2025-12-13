'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Check, Copy, Heart, ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 50,
      damping: 15
    }
  }
}

// FIX: Updated to a stable, high-availability Unsplash texture URL
// Removed complex query params that might cause 404s in Next.js proxy
const TEXTURE_URL = "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200"

export default function ColorPreview() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null)
  
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

  const handleCopy = (e: React.MouseEvent, hex: string) => {
    e.preventDefault() 
    e.stopPropagation()
    navigator.clipboard.writeText(hex)
    setCopiedHex(hex)
    setTimeout(() => setCopiedHex(null), 2000)
  }

  return (
    <section className="py-24 px-4 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-white border border-stone-200 text-stone-900 rounded-full shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              2025 Collection
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-stone-900 mb-6 tracking-tight">
              Curated Palette
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto font-light leading-relaxed">
              Discover shades engineered with nano-mineral technology for depth that shifts beautifully with the light.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {colors.map((color) => (
            <motion.div key={color.slug} variants={cardVariants}>
              <Link
                href={`/colors/${color.slug}`}
                className="group block relative bg-white p-3 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 ease-out hover:-translate-y-2 border border-stone-100"
              >
                {/* Color Swatch Area */}
                <div 
                  className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-5 transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ backgroundColor: color.hex }}
                >
                  {/* Texture Overlay (Multiplier Effect) */}
                  <Image 
                    src={TEXTURE_URL} 
                    alt="Paint Texture"
                    fill
                    className="object-cover opacity-30 mix-blend-multiply" 
                    sizes="(max-width: 768px) 100vw, 25vw"
                    unoptimized // Use this if Next.js image optimization keeps failing on external URLs
                  />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-400 hover:text-red-500 hover:scale-110 transition-all shadow-lg"
                    >
                      <Heart className="w-5 h-5 transition-colors" />
                    </button>
                    <button 
                      onClick={(e) => handleCopy(e, color.hex)}
                      className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-stone-600 hover:text-black hover:scale-110 transition-all shadow-lg"
                    >
                      {copiedHex === color.hex ? (
                        <Check className="w-5 h-5 text-emerald-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Collection Badge */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest uppercase text-white bg-black/20 backdrop-blur-md rounded-full border border-white/20">
                      {color.collection}
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="px-2 pb-2">
                  <div className="flex justify-between items-end mb-1">
                    <h3 className="text-xl font-medium text-stone-900 group-hover:text-stone-600 transition-colors">
                      {color.name}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-stone-300 group-hover:text-stone-900 -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-xs text-stone-400 uppercase tracking-wider group-hover:text-stone-500 transition-colors">
                      {color.hex}
                    </p>
                    {copiedHex === color.hex && (
                      <motion.span 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs font-medium text-emerald-600"
                      >
                        Copied!
                      </motion.span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            href="/colors"
            className="group inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-stone-800 hover:shadow-2xl hover:shadow-stone-900/20 hover:-translate-y-1"
          >
            <span>Explore Full Catalog</span>
            <div className="w-6 h-6 bg-white text-stone-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight className="w-3 h-3" />
            </div>
          </Link>

          {/* Stats Bar */}
          <div className="mt-16 pt-10 border-t border-stone-200 flex flex-wrap justify-center gap-8 md:gap-20">
            {[
              { label: 'Unique Shades', value: '200+' },
              { label: 'Finish Types', value: '4' },
              { label: 'Color Accuracy', value: '100%' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl font-serif font-medium text-stone-900 mb-1">{stat.value}</span>
                <span className="text-xs font-bold tracking-widest uppercase text-stone-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section> 
  )
}
