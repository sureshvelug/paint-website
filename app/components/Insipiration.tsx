'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function InspirationGallery() {
  const finishes = [ 
    { 
      src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=100&w=2000", 
      title: "COLOURS BY NATURE", 
      desc: "Earth-born palettes inspired by stone, sand, and sky." 
    },
    { 
      src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=100&w=2000", 
      title: "NATURAL LIME WASH", 
      desc: "Soft, breathable mineral layers with a timeless, cloud-like movement." 
    },
    { 
      src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=100&w=2000", 
      title: "NATURAL CLAY WASH", 
      desc: "Velvety, matte finishes with gentle, natural depth and warmth." 
    },
    { 
      src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=100&w=2000", 
      title: "POLISHED PLASTERS", 
      desc: "Refined, hand-burnished surfaces with subtle sheen and movement." 
    },
    { 
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=100&w=2000", 
      title: "URBAN AURA (STUCCOS & MARMARINOS)", 
      desc: "Contemporary stucco and marble effects for elevated urban spaces." 
    },
    { 
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=100&w=2000", 
      title: "URBAN RUST", 
      desc: "Reactive rust textures that bring industrial patina and drama." 
    },
    { 
      src: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&q=100&w=2000", 
      title: "URBAN CONCRETE", 
      desc: "Raw, architectural concrete looks with minimalist character." 
    },
    { 
      src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=100&w=2000", 
      title: "TRAVERTONES", 
      desc: "Travertine-inspired textures with layered stone depth." 
    },
    { 
      src: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&q=100&w=2000", 
      title: "OLD AGE", 
      desc: "Antiqued surfaces that evoke heritage walls and lived-in charm." 
    },
    { 
      src: "https://images.unsplash.com/photo-1519710884009-22a691530a50?auto=format&fit=crop&q=100&w=2000", 
      title: "PEARLS & METALS", 
      desc: "Iridescent, light-catching finishes with metallic and pearlescent glow." 
    },
    { 
      src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=100&w=2000", 
      title: "WATERPROOFING", 
      desc: "High-performance protective systems for demanding wet areas." 
    },
    { 
      src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=100&w=2000", 
      title: "CONSTRUCTION CHEMICALS", 
      desc: "Technical solutions that support resilient, long-lasting builds." 
    },
  ]

  return (
    <section className="py-32 bg-stone-100">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Surface Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">
              Curated Finishes
            </h2>
          </div>
          <p className="text-stone-500 max-w-sm mt-6 md:mt-0 font-light leading-relaxed">
            From tactile minerals to reactive metals, explore surfaces that redefine architectural depth.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {finishes.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-sm border border-stone-200 hover:border-stone-900 transition-all duration-300 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden">
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                {/* Optional subtle overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>

              {/* Card Footer / Button Area */}
              <div className="p-6 border-t border-stone-100 group-hover:border-stone-900 transition-colors duration-300 bg-white relative z-10">
                <button className="flex items-center justify-between w-full text-left group/btn outline-none">
                  <div>
                    <h3 className="text-lg font-serif font-medium text-stone-900 group-hover:text-black transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-500 uppercase tracking-wider mt-1 font-medium group-hover:text-amber-700 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-stone-900 group-hover:bg-stone-900 transition-all duration-300">
                    <ArrowRight 
                      className="w-4 h-4 text-stone-400 group-hover:text-white transform group-hover:-rotate-45 transition-all duration-300" 
                    />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
