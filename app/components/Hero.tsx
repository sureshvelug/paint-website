
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  primaryCTA: { text: string; href: string }
  secondaryCTA: { text: string; href: string }
  imageSrc: string
}

export default function Hero({ title, subtitle, primaryCTA, secondaryCTA, imageSrc }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={imageSrc}
          alt="Luxury interior with eco-friendly paint"
          fill
          priority
          className="object-cover"
          quality={95}
          sizes="100vw"
        />
      </motion.div>

      {/* Gradient Overlays for Depth & Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />

      {/* Subtle Vignette Effect */}
      <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Eyebrow Text */}
          <motion.p 
            className="text-white/90 text-sm md:text-base font-medium tracking-widest uppercase mb-6 drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Nano-Mineral Technology
          </motion.p>

          {/* Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-white/95 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link 
              href={primaryCTA.href}
              className="group relative bg-white text-gray-900 hover:text-white px-8 py-4 rounded-full font-semibold text-base overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <span className="relative z-10">{primaryCTA.text}</span>
              <div className="absolute inset-0 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>

            <Link 
              href={secondaryCTA.href}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-base border-2 border-white/40 hover:border-white/60 transition-all duration-300 hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              {secondaryCTA.text}
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-16 flex flex-wrap justify-center gap-8 text-white/80 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">VOC-Free Formula</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">10+ Year Durability</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">LEED Certified</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
      >
        <div className="flex flex-col items-center gap-2 text-white/70">
          <span className="text-xs font-medium tracking-wider uppercase">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}