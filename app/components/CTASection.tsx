'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8">
            Ready to <span className="italic text-stone-500">transform</span> your space?
          </h2>
          <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto font-light">
            Order a curated sample kit today and experience the depth, texture, and quality of Lumina firsthand.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/shop" 
              className="group bg-stone-900 text-white px-10 py-5 flex items-center justify-center gap-3 hover:bg-stone-800 transition-all duration-300"
            >
              <span className="tracking-widest text-sm font-bold uppercase">Order Sample Kit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/consultation" 
              className="px-10 py-5 flex items-center justify-center gap-3 border border-stone-200 hover:border-stone-900 text-stone-900 transition-all duration-300"
            >
              <span className="tracking-widest text-sm font-bold uppercase">Book Consultation</span>
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-stone-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
    </section>
  )
}
