'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Leaf, ShieldCheck, Droplets, Wind, Zap } from 'lucide-react';

export default function ValueProps() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#d1ffda] px-6 md:px-12">
      {/* Floating Paint Overlay */}

  {/* Large Splash */}
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
      -top-20
      -left-20
      h-80
      w-80
      rounded-[60%_40%_50%_50%]
      bg-[#0d9488]/15
      blur-3xl
    "
  />

  <motion.div
    animate={{
      scale: [1, 1.1, 1],
      rotate: [0, -10, 0],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
    className="
      absolute
      right-0
      top-10
      h-96
      w-96
      rounded-[50%_60%_40%_50%]
      bg-[#facc15]/15
      blur-3xl
    "
  />

  {/* Floating Drops */}

  <motion.div
    animate={{ y: [-12, 12, -12] }}
    transition={{ duration: 5, repeat: Infinity }}
    className="absolute left-[8%] top-[20%] h-8 w-8 rounded-full bg-yellow-400/50"
  />

  <motion.div
    animate={{ y: [12, -12, 12] }}
    transition={{ duration: 7, repeat: Infinity }}
    className="absolute left-[25%] top-[50%] h-5 w-5 rounded-full bg-teal-500/40"
  />

  <motion.div
    animate={{ y: [-10, 10, -10] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute right-[10%] top-[30%] h-10 w-10 rounded-full bg-orange-400/40"
  />

  <motion.div
    animate={{ scale: [1, 1.3, 1] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="absolute right-[25%] bottom-[25%] h-6 w-6 rounded-full bg-yellow-300/70"
  />

  <motion.div
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 8, repeat: Infinity }}
    className="absolute left-[15%] bottom-[20%] h-12 w-12 rounded-full bg-teal-400/30"
  />

  {/* Paint Splatter Cluster */}

  <div className="relative
  overflow-hidden
  before:absolute
  before:inset-0
  before:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_40%)]
  before:pointer-events-none">
    <div className="h-10 w-10 rounded-full bg-[#14b8a6]/20" />
    <div className="absolute -left-5 top-2 h-3 w-3 rounded-full bg-[#14b8a6]/20" />
    <div className="absolute left-12 top-0 h-4 w-4 rounded-full bg-[#14b8a6]/20" />
    <div className="absolute left-8 top-10 h-2 w-2 rounded-full bg-[#14b8a6]/20" />
  </div>

  <div className="relative
  overflow-hidden
  before:absolute
  before:inset-0
  before:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_40%)]
  before:pointer-events-none">
    <div className="h-12 w-12 rounded-full bg-[#facc15]/20" />
    <div className="absolute -top-4 right-8 h-3 w-3 rounded-full bg-[#facc15]/20" />
    <div className="absolute left-10 top-10 h-4 w-4 rounded-full bg-[#facc15]/20" />
    <div className="absolute -left-3 top-6 h-2 w-2 rounded-full bg-[#facc15]/20" />
  </div>

      
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-5xl">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-none text-black">
              Science Meets <span className="italic text-stone-500">Substance</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-black">
              We have engineered the compromise out of coating. Where cutting-edge nanotechnology 
              merges with environmental responsibility to create finishes that perform beautifully.
            </p>
          </div>
          {/* <div className="hidden md:block">
             <button className="text-stone-900 border-b border-stone-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors">
                View Technical Specs
             </button>
          </div> */}
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          
          {/* Card 1: Main Tech (Large - Spans 2 cols) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-stone-900 p-8 md:p-12 text-white rounded-sm relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="bg-stone-800 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                <Microscope className="text-amber-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl  mb-4">Nano-Enhanced Adhesion</h3>
              <p className="text-stone-400 max-w-md mb-8">
                Our proprietary mineral binding technology creates a molecular bond with the substrate, 
                delivering 2x stronger adhesion than traditional acrylics.
              </p>
              
              <div className="grid grid-cols-2 gap-8 border-t border-stone-800 pt-8">
                <div>
                   <div className="text-3xl font-light text-amber-400 mb-1">5B</div>
                   <div className="text-xs uppercase tracking-wider text-stone-500">ASTM Rated</div>
                </div>
                <div>
                   <div className="text-3xl font-light text-amber-400 mb-1">2x</div>
                   <div className="text-xs uppercase tracking-wider text-stone-500">Bond Strength</div>
                </div>
              </div>
            </div>
            {/* Abstract Tech BG */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          </motion.div>

          {/* Card 2: Eco (Tall - Spans 1 col, 2 rows) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-emerald-900/5 border border-emerald-900/10 p-8 md:p-12 rounded-sm md:row-span-2 flex flex-col justify-between"
          >
            <div>
              <div className="bg-emerald-100 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                <Leaf className="text-emerald-700 w-6 h-6" />
              </div>
              <h3 className="text-2xl  text-emerald-900 mb-4">Pure & Safe</h3>
              <p className="text-emerald-800/70 mb-8 text-sm">
                Breathe easy. Our water-based formulas eliminate harsh chemicals for a healthier home environment.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-emerald-900 font-medium">
                  <Wind className="w-5 h-5 text-emerald-600" /> &lt;5g/L VOCs
                </li>
                <li className="flex items-center gap-3 text-emerald-900 font-medium">
                  <Droplets className="w-5 h-5 text-emerald-600" /> APEO Free
                </li>
                <li className="flex items-center gap-3 text-emerald-900 font-medium">
                  <Leaf className="w-5 h-5 text-emerald-600" /> LEED Ready
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-8 border-t border-emerald-900/10">
               <div className="text-6xl  text-emerald-900/20">0%</div>
               <div className="text-sm font-bold text-emerald-900 uppercase">Toxins</div>
            </div>
          </motion.div>

          {/* Card 3: Durability (Standard) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 md:p-12 border border-stone-200 rounded-sm"
          >
            <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-full mb-6">
              <ShieldCheck className="text-blue-700 w-6 h-6" />
            </div>
            <h3 className="text-2xl  text-stone-900 mb-2">10+ Year Life</h3>
            <p className="text-stone-500 text-sm">
              Fade-resistant mineral pigments ensure your walls look freshly painted for a decade.
            </p>
          </motion.div>

           {/* Card 4: Application (Standard) */}
           <motion.div 
            whileHover={{ y: -5 }}
            className="bg-stone-200 p-8 md:p-12 rounded-sm"
          >
            <div className="bg-stone-300 w-12 h-12 flex items-center justify-center rounded-full mb-6">
              <Zap className="text-stone-700 w-6 h-6" />
            </div>
            <h3 className="text-2xl  text-stone-900 mb-2">Self-Priming</h3>
            <p className="text-stone-600 text-sm">
              High-opacity formulation covers in fewer coats, saving time and labor costs.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
