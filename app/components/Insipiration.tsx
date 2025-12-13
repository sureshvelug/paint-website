'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function InspirationGallery() {
  const moods = [
    { 
      // Organic Modern -> Warm wood, plants, natural light (Japandi style)
      src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=600", 
      title: "Organic Modern", 
      color: "Sage & Stone" 
    },
    { 
      // Industrial Luxe -> Dark walls, concrete textures, sophisticated lighting
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600", 
      title: "Industrial Luxe", 
      color: "Charcoal" 
    },
    { 
      // Minimalist Warmth -> Clean White/Beige (VERY Stable ID)
      src: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=600", 
      title: "Minimalist Warmth", 
      color: "Alabaster" 
    },
    { 
      // Earthen Clay -> Warm Terracotta/Brown (VERY Stable ID)
      src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=600", 
      title: "Earthen Clay", 
      color: "Terracotta" 
    },
  ]
  

  return (
    <section className="py-32 bg-stone-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Inspiration</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Curated Palettes</h2>
          </div>
          <p className="text-stone-500 max-w-sm mt-6 md:mt-0">
            Explore how top designers are using Lumina to create spaces that evoke emotion and calm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moods.map((mood, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-stone-200">
                <Image 
                  src={mood.src} 
                  alt={mood.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <h3 className="text-lg font-serif text-stone-900">{mood.title}</h3>
              <p className="text-stone-500 text-xs uppercase tracking-wider mt-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-stone-400"></span>
                {mood.color}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
