'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function InspirationGallery() {
  const finishes = [ 
    { 
      src: "/finishes/image1.jpg", 
      title: "Colours By Nature", 
      desc: "Earth-born palettes inspired by stone, sand, and sky." 
    },
    { 
      src: "/finishes/image2.jpg", 
      title: "Natural Lime Wash", 
      desc: "Soft, breathable mineral layers with a timeless, cloud-like movement." 
    },
    { 
      src: "/finishes/image3.jpg", 
      title: "Natural Clay Wash", 
      desc: "Velvety, matte finishes with gentle, natural depth and warmth." 
    },
    { 
      src: "/finishes/image4.jpg", 
      title: "Polished Plasters", 
      desc: "Refined, hand-burnished surfaces with subtle sheen and movement." 
    },
    { 
      src: "/finishes/image5.jpg", 
      title: "Uraban Aura (Stuccos & Marmarinos)", 
      desc: "Contemporary stucco and marble effects for elevated urban spaces." 
    },
    { 
      src: "/finishes/image6.jpg", 
      title: "Urban Rust", 
      desc: "Reactive rust textures that bring industrial patina and drama." 
    },
    { 
      src: "/finishes/image7.jpg", 
      title: "Urban Concrete", 
      desc: "Raw, architectural concrete looks with minimalist character." 
    },
    { 
      src: "/finishes/image8.jpg", 
      title: "Travertones", 
      desc: "Travertine-inspired textures with layered stone depth." 
    },
    { 
      src: "/finishes/image9.jpg", 
      title: "Old Age", 
      desc: "Antiqued surfaces that evoke heritage walls and lived-in charm." 
    },
    { 
      src: "/finishes/image10.jpg", 
      title: "Pearls & Metals", 
      desc: "Iridescent, light-catching finishes with metallic and pearlescent glow." 
    },
    { 
      src: "/finishes/image11.jpg", 
      title: "Water Proofing", 
      desc: "High-performance protective systems for demanding wet areas." 
    },
    { 
      src: "/finishes/image12.jpg", 
      title: "Constraction Chemicals", 
      desc: "Technical solutions that support resilient, long-lasting builds." 
    },
  ]

  return (
    <section className="relative overflow-hidden bg-[#e0e7fb] py-32 bg-[radial-gradient(circle_at_top_left,#91c9ba33,transparent_10%),radial-gradient(circle_at_bottom_right,#ffc85733,transparent_0%)]">

{/* Paint Splash Background */}

      <motion.div
        animate={{
          y: [-15, 15, -15],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-10
          left-10
          h-52
          w-52
          rounded-[60%_40%_50%_50%]
          bg-[#91c9ba]/30
          blur-2xl
        "
      />

      <motion.div
        animate={{
          y: [10, -10, 10],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-10
          top-20
          h-64
          w-64
          rounded-[60%_40%_60%_40%]
          bg-[#ffc857]/20
          blur-3xl
        "
      />

      <motion.div
        animate={{
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
        className="
          absolute
          bottom-20
          right-0
          h-[300px]
          w-[300px]
          rounded-[45%_55%_60%_40%]
          bg-[#0d9488]/10
          blur-3xl
        "
      />

      {/* Floating Paint Drops */}

      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-[10%] top-[20%] h-6 w-6 rounded-full bg-yellow-400"
      />

      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute right-[12%] top-[35%] h-10 w-10 rounded-full bg-teal-500/40"
      />

      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-28 left-[15%] h-8 w-8 rounded-full bg-orange-400"
      />

      {/* Paint Drips */}

      <div className="absolute left-[18%] top-0">
        <div className="h-28 w-6 rounded-b-full bg-[#91c9ba]" />
        <div className="-mt-2 h-6 w-6 rounded-full bg-[#91c9ba]" />
      </div>
      

      <div className="absolute right-[15%] top-0">
        <div className="h-40 w-8 rounded-b-full bg-[#ffc857]" />
        <div className="-mt-2 h-8 w-8 rounded-full bg-[#ffc857]" />
      </div>
      
      <motion.div
  animate={{ y: [-8, 8, -8] }}
  transition={{ duration: 4, repeat: Infinity }}
  className="
    absolute
    top-52
    left-10
    h-5
    w-5
    rounded-full
    bg-[#0d9488]
  "
/>

<motion.div
  animate={{ y: [8, -8, 8] }}
  transition={{ duration: 5, repeat: Infinity }}
  className="
    absolute
    top-96
    right-20
    h-8
    w-8
    rounded-full
    bg-[#ffc857]
  "
/>

<motion.div
  animate={{
    rotate: [0, 8, 0, -8, 0],
    scale: [1, 1.05, 1],
  }}
  transition={{
    duration: 15,
    repeat: Infinity,
  }}
  className="
    absolute
    top-32
    right-24
    h-[250px]
    w-[250px]
    bg-[#0f766e]/10
    rounded-[58%_42%_65%_35%]
    blur-xl
  "
/>

<div
  className="
    absolute
    left-0
    top-1/3
    w-64
    h-10
    bg-[#91c9ba]/20
    rotate-[-8deg]
    blur-sm
  "
/>

<div
  className="
    absolute
    right-0
    bottom-1/4
    w-72
    h-12
    bg-[#ff8c42]/15
    rotate-[12deg]
    blur-sm
  "
/>

{/* Floating Paint Drops Layer */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* Large Drops */}
  <motion.div
    animate={{ y: [-12, 12, -12] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute top-[10%] left-[8%] h-20 w-20 rounded-full bg-[#91c9ba]/30 blur-sm"
  />

  <motion.div
    animate={{ y: [12, -12, 12] }}
    transition={{ duration: 8, repeat: Infinity }}
    className="absolute top-[18%] right-[10%] h-24 w-24 rounded-full bg-[#ffc857]/25 blur-sm"
  />

  {/* Medium Drops */}
  <motion.div
    animate={{ y: [-8, 8, -8] }}
    transition={{ duration: 5, repeat: Infinity }}
    className="absolute top-[40%] left-[15%] h-12 w-12 rounded-full bg-[#0f766e]/20"
  />

  <motion.div
    animate={{ y: [8, -8, 8] }}
    transition={{ duration: 7, repeat: Infinity }}
    className="absolute top-[55%] right-[18%] h-14 w-14 rounded-full bg-[#ff8c42]/20"
  />

  <motion.div
    animate={{ y: [-10, 10, -10] }}
    transition={{ duration: 9, repeat: Infinity }}
    className="absolute bottom-[25%] left-[30%] h-16 w-16 rounded-full bg-[#f4d35e]/20"
  />

  {/* Small Drops */}
  <motion.div
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="absolute top-[15%] left-[35%] h-5 w-5 rounded-full bg-[#ffc857]"
  />

  <motion.div
    animate={{ scale: [1, 1.3, 1] }}
    transition={{ duration: 6, repeat: Infinity }}
    className="absolute top-[65%] left-[10%] h-4 w-4 rounded-full bg-[#0f766e]"
  />

  <motion.div
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: 5, repeat: Infinity }}
    className="absolute top-[28%] right-[30%] h-6 w-6 rounded-full bg-[#ff8c42]"
  />

  <motion.div
    animate={{ scale: [1, 1.4, 1] }}
    transition={{ duration: 7, repeat: Infinity }}
    className="absolute bottom-[15%] right-[15%] h-5 w-5 rounded-full bg-[#91c9ba]"
  />

  {/* Paint Splashes */}
  <motion.div
    animate={{ rotate: [0, 5, 0, -5, 0] }}
    transition={{ duration: 12, repeat: Infinity }}
    className="
      absolute
      top-[12%]
      right-[25%]
      h-48
      w-48
      rounded-[55%_45%_60%_40%]
      bg-[#91c9ba]/15
      blur-xl
    "
  />

  <motion.div
    animate={{ rotate: [0, -8, 0] }}
    transition={{ duration: 15, repeat: Infinity }}
    className="
      absolute
      bottom-[10%]
      left-[5%]
      h-64
      w-64
      rounded-[40%_60%_50%_50%]
      bg-[#ffc857]/15
      blur-2xl
    "
  />

  <motion.div
    animate={{ rotate: [0, 6, 0] }}
    transition={{ duration: 14, repeat: Infinity }}
    className="
      absolute
      top-[40%]
      right-[5%]
      h-56
      w-56
      rounded-[65%_35%_55%_45%]
      bg-[#ff8c42]/10
      blur-2xl
    "
  />

</div>

      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Surface Collection
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-none text-black">
              Curated Finishes
            </h2>
          </div>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-black">
            From tactile minerals to reactive metals, explore surfaces that redefine architectural depth.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {finishes.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group
  relative
  overflow-hidden
  rounded-2xl
  border
  border-stone-200
  bg-white
  shadow-sm
  transition-all
  duration-500
  hover:-translate-y-2
  hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-96 overflow-hidden">
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                {/* Optional subtle overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>

              {/* Card Footer / Button Area */}
              <div className="p-6 border-t border-stone-100 group-hover:border-stone-900 transition-colors duration-300 bg-white relative z-10">
                <button className="flex items-center justify-between w-full text-left group/btn outline-none">
                  <div>
                    <h3 className="mb-2 font-semibold text-black capitalize">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  
                  <div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-stone-900 group-hover:bg-stone-900 transition-all duration-300">
                    <ArrowRight 
                      className="w-4 h-4 text-stone-400 group-hover:text-white transform group-hover:-rotate-45 transition-all duration-300" 
                    />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
