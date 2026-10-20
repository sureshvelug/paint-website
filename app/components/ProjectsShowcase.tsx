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
    // location: 'Kyoto, Japan',
    category: 'Residential',
    image: '/architecture/image1.jpg' 
  },
  { 
    id: 2, 
    name: 'Aesop Flagship', 
    // location: 'London, UK',
    category: 'Commercial',
    // Verified Stable Image
    image: '/architecture/image2.jpg' 
  },
  { 
    id: 3, 
    name: 'Desert Villa', 
    // location: 'Palm Springs, USA',
    category: 'Residential',
    image: '/architecture/image3.jpg' 
  }
]

export default function ProjectsShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.6 
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }
  
  return (
    <section className="bg-[#cbbc97] py-32 overflow-hidden relative group/section">

  {/* Right Splash */}
  <motion.div
    animate={{
      x: [10, -10, 10],
      rotate: [3, -3, 3],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      right-0
      bottom-[15%]
      h-[340px]
      w-[220px]
      rounded-l-[140px]
      bg-[#7c9b00]/20
      blur-xl
      pointer-events-none
    "
  />

  {/* Right Horizontal Paint Drips */}
  <div className="absolute right-0 top-[10%] z-10 flex flex-col items-end pointer-events-none">
    <div className="mb-8 h-8 w-40 rounded-l-full bg-[#f59e0b]/40" />
    <div className="mr-3 mb-8 h-6 w-28 rounded-l-full bg-[#f59e0b]/30" />
    <div className="h-10 w-48 rounded-l-full bg-[#f59e0b]/25" />
  </div>

  {/* Floating Drops */}
  <motion.div
    animate={{ y: [-10, 10, -10] }}
    transition={{ duration: 5, repeat: Infinity }}
    className="
      absolute
      left-[58%]
      top-[35%]
      h-10
      w-10
      rounded-full
      bg-[#14b8a6]/50
    "
  />

  <motion.div
    animate={{ y: [10, -10, 10] }}
    transition={{ duration: 7, repeat: Infinity }}
    className="
      absolute
      left-[58%]
      top-[55%]
      h-6
      w-6
      rounded-full
      bg-[#14b8a6]/40
    "
  />

  <motion.div
    animate={{ y: [-8, 8, -8] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="
      absolute
      right-[10%]
      top-[40%]
      h-8
      w-8
      rounded-full
      bg-[#f59e0b]/50
    "
  />

  <motion.div
    animate={{ scale: [1, 1.3, 1] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="
      absolute
      right-[20%]
      bottom-[20%]
      h-5
      w-5
      rounded-full
      bg-[#f97316]/50
    "
  />

  {/* Paint Splatter Left */}
  <div className="absolute left-[4%] top-[2%] pointer-events-none">
    <div className="h-12 w-12 rounded-full bg-[#14b8a6]/25" />
    <div className="absolute -left-4 top-3 h-3 w-3 rounded-full bg-[#14b8a6]/25" />
    <div className="absolute left-14 top-0 h-4 w-4 rounded-full bg-[#14b8a6]/25" />
    <div className="absolute left-8 top-12 h-2 w-2 rounded-full bg-[#14b8a6]/25" />
  </div>

  {/* Paint Splatter Right */}
  <div className="absolute right-[4%] top-[90%] pointer-events-none">
    <div className="h-14 w-14 rounded-full bg-[#f59e0b]/25" />
    <div className="absolute -top-4 right-8 h-4 w-4 rounded-full bg-[#f59e0b]/25" />
    <div className="absolute left-12 top-10 h-3 w-3 rounded-full bg-[#f59e0b]/25" />
    <div className="absolute -left-3 top-6 h-2 w-2 rounded-full bg-[#f59e0b]/25" />
  </div>

      <div className="container mx-auto px-6 mb-16 flex justify-between items-end">
        <div>
          <span className="text-stone-500 text-xs tracking-widest uppercase block mb-4">Selected Works</span>
          <h2 className="text-5xl md:text-5xl lg:text-7xl font-bold leading-none text-black">
            Architecture <br /> & <span className="text-stone-500">Texture</span>
          </h2>
        </div>
        {/* <button className="hidden md:flex items-center gap-2 text-white hover:text-amber-500 transition-colors">
          View All Projects <ArrowUpRight className="w-4 h-4"/>
        </button> */}
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
                  <h3 className="text-3xl  text-white mb-1">{project.name}</h3>
                  {/* <p className="text-stone-400 font-light">{project.location}</p> */}
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
