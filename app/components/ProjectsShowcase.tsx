'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

// Mock Data - Replace with real project images
const projects = [
  { 
    id: 1, 
    name: 'Kyoto Minimalist', 
    location: 'Kyoto, Japan',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80' 
  },
  { 
    id: 2, 
    name: 'Aesop Flagship', 
    location: 'London, UK',
    category: 'Commercial',
    // Verified Stable Image
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop' 
  },
  { 
    id: 3, 
    name: 'Desert Villa', 
    location: 'Palm Springs, USA',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=1200&q=80' 
  }
]

export default function ProjectsShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.6 // Scroll by 60vw
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }
  
  return (
    <section className="bg-stone-900 py-32 overflow-hidden relative group/section">
      <div className="container mx-auto px-6 mb-16 flex justify-between items-end">
        <div>
          <span className="text-stone-500 text-xs tracking-widest uppercase block mb-4">Selected Works</span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            Architecture <br /> & <span className="text-stone-500">Texture</span>
          </h2>
        </div>
        <Link href="/projects" className="hidden md:flex items-center gap-2 text-white hover:text-amber-500 transition-colors">
          View All Projects <ArrowUpRight className="w-4 h-4"/>
        </Link>
      </div>

      {/* Navigation Buttons (Visible on Hover or Mobile) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
         <button 
           onClick={() => scroll('left')}
           className="p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-stone-900 transition-all border border-white/20"
         >
           <ChevronLeft className="w-6 h-6" />
         </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
         <button 
           onClick={() => scroll('right')}
           className="p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-stone-900 transition-all border border-white/20"
         >
           <ChevronRight className="w-6 h-6" />
         </button>
      </div>

      {/* Horizontal Scroll Area */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto px-6 pb-12 snap-x snap-mandatory scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar for Firefox/IE
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            className="relative min-w-[85vw] md:min-w-[60vw] lg:min-w-[45vw] aspect-[4/3] snap-center group cursor-pointer"
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.5 }}
          >
            {/* Image */}
            <Image
              src={project.image}
              alt={project.name}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <div className="flex justify-between items-end border-t border-white/20 pt-6">
                <div>
                  <p className="text-amber-500 text-xs uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-3xl font-serif text-white mb-1">{project.name}</h3>
                  <p className="text-stone-400 font-light">{project.location}</p>
                </div>
                <div className="bg-white/10 p-3 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="text-white w-6 h-6" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* CSS to hide scrollbar specifically for Webkit (Chrome/Safari) */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}</style>
    </section>
  )
}
