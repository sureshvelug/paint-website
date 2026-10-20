'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="relative py-32 bg-[#fef8e7] overflow-hidden">
      {/* ======================
    FLOATING PAINT BALLS
====================== */}

<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {[
    { color: "bg-cyan-400/40", size: "w-20 h-20", top: "10%", left: "8%" },
    { color: "bg-pink-400/40", size: "w-14 h-14", top: "20%", left: "75%" },
    { color: "bg-yellow-400/40", size: "w-24 h-24", top: "65%", left: "12%" },
    { color: "bg-emerald-400/40", size: "w-16 h-16", top: "75%", left: "80%" },
    { color: "bg-orange-400/40", size: "w-12 h-12", top: "30%", left: "25%" },
    { color: "bg-violet-400/40", size: "w-10 h-10", top: "55%", left: "60%" },
    { color: "bg-red-400/40", size: "w-8 h-8", top: "15%", left: "50%" },
    { color: "bg-sky-400/40", size: "w-18 h-18", top: "40%", left: "88%" },
  ].map((ball, index) => (
    <motion.div
      key={index}
      animate={{
        y: [-20, 20, -20],
        x: [-10, 10, -10],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 6 + index,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full blur-sm ${ball.color} ${ball.size}`}
      style={{
        top: ball.top,
        left: ball.left,
      }}
    />
  ))}


  {/* Paint Splash Blobs */}
  <motion.div
    animate={{
      rotate: [0, 8, 0],
      scale: [1, 1.05, 1],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
    }}
    className="
      absolute
      -left-20
      top-20
      h-80
      w-80
      rounded-[60%_40%_55%_45%]
      bg-cyan-400/10
      blur-3xl
    "
  />

  <motion.div
    animate={{
      rotate: [0, -10, 0],
      scale: [1, 1.08, 1],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
    }}
    className="
      absolute
      -right-24
      bottom-10
      h-96
      w-96
      rounded-[45%_55%_65%_35%]
      bg-yellow-400/10
      blur-3xl
    "
  />
</div>
      <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-5xl lg:text-7xl font-bold leading-none mb-12">
            Ready to <span className="italic text-stone-500">transform</span> your space?
          </h2>
          <p className="text-xl text-stone-600 mb-12 max-w-2xl mx-auto font-light">
            Order a curated sample kit today and experience the depth, texture, and quality of Lumina firsthand.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 hover:text-white">
            {/* <Link 
              href="/shop" 
              className="group bg-stone-900 text-white px-10 py-5 flex items-center justify-center gap-3 hover:bg-stone-800 transition-all duration-300"
            >
              <span className="tracking-widest text-sm font-bold uppercase">Order Sample Kit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link> */}
            <Link 
              href="/consultation" 
              className="px-10 py-5 flex items-center justify-center gap-3 border border-stone-200  border-stone-900 text-stone-900 transition-all duration-300"
            >
              <span className="tracking-widest text-sm font-bold">Book Consultation</span>
            </Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-stone-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 translate-y-1/2"></div>
    </section>
  )
}
