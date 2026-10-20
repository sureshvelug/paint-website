'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Shield, Zap, Wind, Droplets, ArrowRight } from 'lucide-react'

const techFeatures = [
  {
    icon: Shield,
    title: "Crystalline Matrix",
    desc: "Silica-free bonding agent that fuses with the substrate."
  },
  {
    icon: Droplets,
    title: "Hydrophobic",
    desc: "Self-cleaning surface that repels water and dirt."
  },
  {
    icon: Wind,
    title: "Breathable",
    desc: "Micro-porous structure prevents moisture trapping."
  },
  {
    icon: Zap,
    title: "High-Reflective",
    desc: "UV-stable pigments that resist fading for decades."
  }
]

export default function TechSection() {
  return (
    <section className=" relative
    overflow-hidden
    py-32
    bg-[#332116]
    bg-[radial-gradient(circle_at_top_left,#14b8a620,transparent_25%),radial-gradient(circle_at_bottom_right,#f59e0b15,transparent_30%)]
    text-stone-200">

      {/* =========================
   PAINT EFFECTS OVERLAY
========================= */}

      {/* Large Paint Blob - Left */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
    absolute
    -left-32
    top-10
    h-[350px]
    w-[350px]
    rounded-[60%_40%_55%_45%]
    bg-teal-500/15
    blur-3xl
  "
      />

      {/* Large Paint Blob - Right */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
    absolute
    -right-24
    bottom-10
    h-[400px]
    w-[400px]
    rounded-[45%_55%_65%_35%]
    bg-amber-400/10
    blur-3xl
  "
      />


      {/* Right Paint Drips */}
      <div className="absolute right-0 top-[85%] flex flex-col items-end">
        <div className="mb-6 h-10 w-40 rounded-l-full bg-amber-400/40" />
        <div className="mr-4 mb-6 h-8 w-28 rounded-l-full bg-amber-400/30" />
        <div className="h-12 w-52 rounded-l-full bg-amber-400/20" />
      </div>

      {/* Floating Drops */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-[15%] left-[10%] h-8 w-8 rounded-full bg-teal-400/50"
      />

      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-[25%] right-[15%] h-10 w-10 rounded-full bg-yellow-400/40"
      />

      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-[30%] left-[20%] h-6 w-6 rounded-full bg-orange-400/40"
      />

      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-[20%] right-[25%] h-8 w-8 rounded-full bg-teal-300/40"
      />

      {/* Paint Spray Cluster - Left */}
      <div className="absolute left-[5%] top-[45%]">
        <div className="h-12 w-12 rounded-full bg-teal-500/20" />
        <div className="absolute -left-5 top-3 h-4 w-4 rounded-full bg-teal-500/20" />
        <div className="absolute left-14 top-0 h-5 w-5 rounded-full bg-teal-500/20" />
        <div className="absolute left-8 top-12 h-3 w-3 rounded-full bg-teal-500/20" />
        <div className="absolute left-20 top-8 h-2 w-2 rounded-full bg-teal-500/20" />
      </div>

      {/* Paint Spray Cluster - Right */}
      <div className="absolute right-[8%] top-[65%]">
        <div className="h-14 w-14 rounded-full bg-yellow-400/20" />
        <div className="absolute -top-5 right-10 h-4 w-4 rounded-full bg-yellow-400/20" />
        <div className="absolute left-12 top-10 h-5 w-5 rounded-full bg-yellow-400/20" />
        <div className="absolute -left-4 top-6 h-3 w-3 rounded-full bg-yellow-400/20" />
        <div className="absolute left-6 -top-7 h-2 w-2 rounded-full bg-yellow-400/20" />
      </div>


      {/* Vertical Paint Drop */}
      <motion.div
        animate={{
          y: [8, -8, 8],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute top-0 right-[18%]"
      >
        <div className="h-52 w-10 rounded-b-full bg-amber-400/30" />
        <div className="-mt-3 h-10 w-10 rounded-full bg-amber-400/30" />
      </motion.div>

      {/* Tiny Paint Dust */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-5, 5, -5],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
            }}
            className="absolute h-1.5 w-1.5 rounded-full bg-white/20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

          {/* Left: Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-amber-500 text-xs font-bold tracking-[0.2em] uppercase mb-6 block flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                The Science
              </span>

              <h2 className="text-5xl md:text-5xl lg:text-7xl font-bold leading-none text-white">
                Molecular <br /> <span className="text-stone-400">Perfection.</span>
              </h2>

              <p className="mt-6 text-lg md:text-xl leading-relaxed text-white mb-12">
                Traditional paints sit on top of the wall. Lumina fuses with it.
                Our patented nano-mineral technology creates a petrified bond that becomes part of the substrate itself.
              </p>

              {/* Tech Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {techFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
                    className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-colors group"
                  >
                    <feature.icon className="w-6 h-6 text-indigo-400 mb-4 group-hover:text-amber-400 transition-colors" />
                    <h3 className="text-white font-medium mb-2">{feature.title}</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Metrics */}
              <div className="flex gap-12 border-t border-white/10 pt-8">
                <div>
                  <div className="text-3xl  text-white mb-1">0.05<span className="text-lg text-stone-400">mm</span></div>
                  <div className="text-xs text-stone-400 uppercase tracking-wider">Particle Size</div>
                </div>
                <div>
                  <div className="text-3xl  text-white mb-1">10<span className="text-lg text-stone-400">Yr</span></div>
                  <div className="text-xs text-stone-400 uppercase tracking-wider">Warranty</div>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right: Abstract Tech Visual */}
          <div className="w-full lg:w-1/2 relative h-[600px] hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10"
            >
              {/* 
                   Verified Unsplash ID: Abstract Blue Technology Background
                   Using a stable Unsplash ID to prevent 404s
                */}
              <Image
                src="/science/image.jpg"
                alt="Nano-structure abstract visualization"
                fill
                className="object-cover"
              />

              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-mono text-sm">Structure Analysis</p>
                    <p className="text-stone-500 text-xs">Magnification: 2000x</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <ArrowRight className="text-white w-5 h-5 -rotate-45" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-12 top-24 bg-stone-900 border border-white/10 p-4 rounded-lg shadow-2xl max-w-[200px]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-xs text-stone-400 uppercase tracking-widest">Active Bond</span>
              </div>
              <div className="h-1 w-full bg-stone-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '98%' }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-emerald-500"
                />
              </div>
              <div className="flex justify-between mt-1 text-[10px] text-stone-500">
                <span>Strength</span>
                <span>98%</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
