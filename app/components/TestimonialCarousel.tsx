'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Image from 'next/image'

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  
  const testimonials = [
    {
      quote: "It captures light in a way standard latex never could. The depth of color shifts beautifully throughout the day.",
      author: "Sarah Jenkins",
      role: "Principal Architect, AD100 Firm",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      project: "The Nordic Villa"
    },
    {
      quote: "Finally, a sustainable product that doesn't ask us to compromise on finish quality or durability.",
      author: "Marcus Chen",
      role: "Interior Designer, Studio Zen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      project: "Aesop Downtown"
    }
  ]

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="relative overflow-hidden py-32 bg-[#ffc77875]">
      {/* =========================
    FLOATING PAINT DUST
========================= */}

<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {Array.from({ length: 120 }).map((_, i) => {
    const colors = [
      "#22d3ee", // cyan
      "#f97316", // orange
      "#ec4899", // pink
      "#eab308", // yellow
      "#10b981", // emerald
      "#8b5cf6", // violet
      "#ef4444", // red
      "#3b82f6", // blue
    ];

    return (
      <motion.div
        key={i}
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
          opacity: [0.15, 0.8, 0.15],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 3 + (i % 6),
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.05,
        }}
        className="absolute rounded-full"
        style={{
          backgroundColor: colors[i % colors.length],
          width: `${2 + (i % 5)}px`,
          height: `${2 + (i % 5)}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          filter: "blur(0.5px)",
        }}
      />
    );
  })}
</div>
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-12 flex justify-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
               <Quote className="text-amber-700 w-8 h-8 fill-current" />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl md:text-5xl  text-stone-900 leading-tight mb-12 italic">
                {testimonials[current].quote}
              </h3>
              
              <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 mb-4 rounded-full overflow-hidden border-2 border-white shadow-lg">
                  <Image src={testimonials[current].image} alt={testimonials[current].author} fill className="object-cover" />
                </div>
                <h4 className="text-lg font-bold text-stone-900">{testimonials[current].author}</h4>
                <p className="text-stone text-sm mb-2">{testimonials[current].role}</p>
                <span className="text-xs font-medium text-amber-700 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full">
                  Project: {testimonials[current].project}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-12">
            <button onClick={prevSlide} className="p-4 rounded-full border border-stone-200 hover:bg-white hover:border-stone-400 transition-all">
              <ChevronLeft className="w-5 h-5 text-stone-600" />
            </button>
            <button onClick={nextSlide} className="p-4 rounded-full border border-stone-200 hover:bg-white hover:border-stone-400 transition-all">
              <ChevronRight className="w-5 h-5 text-stone-600" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
