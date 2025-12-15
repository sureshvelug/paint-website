'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Leaf } from 'lucide-react'

interface HeroProps {
  title: string
  subtitle: string
  primaryCTA: { text: string; href: string }
  secondaryCTA: { text: string; href: string }
  imageSrc: string
}

export default function Hero({ title, subtitle, primaryCTA, secondaryCTA, imageSrc }: HeroProps) {
  return (
    <section className="relative h-screen w-full bg-stone-50 overflow-hidden flex flex-col lg:flex-row">
      
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-8 md:px-20 z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-12 bg-amber-700"></span>
            <span className="text-amber-800 font-medium tracking-widest text-xs uppercase">
              Nano-Mineral Technology
            </span>
          </div>

          {/* Headline - Editorial Serif */}
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1.1] mb-8">
            {title}
          </h1>

          {/* Subtitle - Clean Sans */}
          <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-10 max-w-md font-light">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Link href={primaryCTA.href} className="group flex items-center justify-center gap-3 bg-stone-900 text-stone-50 px-8 py-4 rounded-none hover:bg-stone-800 transition-all duration-300">
              <span className="tracking-wide text-sm font-medium text-white">{primaryCTA.text}</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href={secondaryCTA.href} className="group flex items-center justify-center gap-3 border border-stone-300 px-8 py-4 rounded-none hover:border-stone-900 hover:bg-stone-50 transition-all duration-300">
              <span className="tracking-wide text-sm font-medium text-stone-900">{secondaryCTA.text}</span>
            </Link>
          </div>

          {/* Trust Indicators - Minimalist Row */}
          <div className="mt-16 pt-8 border-t border-stone-200 flex gap-8 text-stone-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span className="text-xs uppercase tracking-wider">10yr Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-emerald-700" />
              <span className="text-xs uppercase tracking-wider">VOC Free</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* RIGHT: Visual Hero Image */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative h-full w-full"
        >
          {/* 
             Updated Image: Verified High-Res Interior with Deep Green Wall
             Source: Unsplash (ID: 1560448204-e02f11c3d0e2)
          */}
          <Image
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2000&auto=format&fit=crop" 
            alt="Luxury modern living room with deep green painted accent wall"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle Overlay to blend edges */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-transparent to-transparent lg:w-1/3" />
        </motion.div>
      </div>
    </section>
  )
}
  