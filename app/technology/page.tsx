'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Custom cubic-bezier for smoothness
  }
};

const staggerText = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const charVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// --- Components ---

// 1. Text Reveal Component
const RevealTitle = ({ text, className }) => {
  return (
    <motion.h2
      variants={staggerText}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block mr-2">
          {word.split('').map((char, j) => (
            <motion.span key={j} variants={charVariant} className="inline-block">
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h2>
  );
};

// 2. Parallax Image Component
const ParallaxImage = ({ src, alt, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.div style={{ y, scale }} className="w-full h-[120%] relative">
        <Image src={src} alt={alt} fill className="object-cover" />
        {/* Gradient Overlay for better integration */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
      </motion.div>
    </div>
  );
};

export default function StoryPage() {
  return (
    <main className="bg-slate-950 text-slate-200 overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Scale Effect */}
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop" // Abstract Molecule
            alt="Molecular Structure"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/60 to-slate-950" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs tracking-[0.2em] font-bold uppercase mb-6 backdrop-blur-md">
              Nanograds Tech
            </span>
          </motion.div>

          <RevealTitle 
            text="Luxury Built at the Molecular Level" 
            className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tight leading-none"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Science you can feel. Performance you can trust. <br/>
            <span className="text-cyan-400 font-medium">Beauty engineered to last.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="px-10 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-cyan-50 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Discover Technology
            </button>
            <button className="px-10 py-4 bg-transparent border border-slate-700 text-white rounded-full font-bold hover:bg-white/5 hover:border-white transition-all duration-300 backdrop-blur-sm">
              View Products
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 1: ORIGINS (Glassmorphism) --- */}
      <section className="py-32 px-4 relative">
        {/* Ambient Glow */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="order-2 md:order-1"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Innovation Meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Purpose
              </span>
            </h2>
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-light">
              <p>
                At <span className="font-semibold text-white">NANOGRADS</span>, we bridge the gap between advanced nanotechnology and everyday life.
              </p>
              <p>
                We grew tired of the compromise. Why should you have to choose between a material that looks beautiful and one that actually lasts? We took formulas from aerospace laboratories and refined them for the luxury consumer.
              </p>
            </div>
          </motion.div>

          <div className="order-1 md:order-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <ParallaxImage 
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" // Lab/Science
              alt="Lab Innovation" 
              className="h-[500px] w-full rounded-2xl shadow-2xl z-10 relative bg-slate-900" 
            />
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE PROBLEM (Dark Card) --- */}
      <section className="py-32 px-4 relative bg-slate-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
             <ParallaxImage 
              src="https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?q=80&w=2070&auto=format&fit=crop" // Aerospace/Dark
              alt="Aerospace Texture" 
              className="h-full w-full" 
            />
            {/* Overlay Text on Image */}
            <div className="absolute bottom-10 left-10 z-20">
                <p className="text-xs font-mono text-cyan-400 mb-2">SECTOR: AEROSPACE</p>
                <p className="text-white font-bold text-xl">Original Application Area</p>
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="text-cyan-500 font-mono tracking-widest uppercase text-sm mb-4 block">
              // The Gap in the Market
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Illusion of <span className="text-amber-200">Luxury</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                The world's most advanced materials remained locked in research facilities. Meanwhile, consumers were buying products that looked premium on day one but degraded by day one hundred.
              </p>
              <blockquote className="border-l-2 border-cyan-500 pl-6 italic text-slate-300 my-8">
                "Planned obsolescence is the enemy of true luxury. We built Nanograds to destroy that concept."
              </blockquote>
              <p>
                No one delivered the truth: materials could be stronger, smarter, and longer-lasting using technology that already exists.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 3: FEATURES (Grid) --- */}
      <section className="py-32 px-4 relative">
           {/* Background Detail */}
           <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-to-b from-cyan-900/10 to-transparent blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Breaking the Compromise
            </h2>
            <p className="text-slate-400 text-xl">
              For decades, you had to choose. We created NANOGRADS to end the false choice.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Aesthetics Trap",
                desc: "Beautiful finishes that fade. We engineered molecular bonds that refuse to let go of pigment.",
                icon: "01"
              },
              {
                title: "Durability Gap",
                desc: "Functional items used to be ugly. We applied diamond-like carbon structures to pure elegance.",
                icon: "02"
              },
              {
                title: "Eco Sacrifice",
                desc: "Green usually meant weak. Our sustainable formulations are actually stronger than toxic alternatives.",
                icon: "03"
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-3xl bg-slate-900 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/0 via-cyan-900/0 to-cyan-900/10 group-hover:to-cyan-900/30 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="text-6xl font-bold text-white/5 mb-6 group-hover:text-cyan-500/20 transition-colors duration-500 font-mono">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: MATERIAL INTELLIGENCE (Tech Specs) --- */}
      
      <section className="py-32 px-4 bg-slate-50 relative overflow-hidden text-slate-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center relative z-10">
            
          <motion.div 
            className="md:col-span-7 relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
             <ParallaxImage 
              src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=2070&auto=format&fit=crop" // Abstract Material Texture
              alt="Material Intelligence" 
              className="h-full w-full" 
            />
            {/* Tech HUD Overlay */}
            <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none"></div>
            <div className="absolute top-8 right-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg">
                <p className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-1">Protection Level</p>
                <p className="text-3xl font-black text-slate-900">99.9%</p>
            </div>
          </motion.div>

          <motion.div 
            className="md:col-span-5"
            initial="hidden"
            whileInView="visible"
            variants={staggerText}
            viewport={{ once: true }}
          >
            <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              The Future of Luxury
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Material <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Intelligence™</span>
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              We don't coat surfaces. We transform them from within using aerospace-grade nanotechnology.
            </p>

            <div className="space-y-6">
              {[
                "Brilliant Color Retention",
                "Self-Healing Surface Matrix",
                "Hydrophobic Engineering",
                "Molecular Bonding"
              ].map((feature, i) => (
                <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all cursor-default"
                >
                    <div className="w-2 h-2 rounded-full bg-cyan-500 shrink-0" />
                    <span className="text-lg font-semibold text-slate-800">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 5: CALL TO ACTION --- */}
      <section className="py-40 px-4 relative overflow-hidden flex items-center justify-center">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-slate-900 to-black z-0" />
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0 mix-blend-overlay" />

        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            The Molecular Revolution
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 font-light">
              True luxury isn't a logo. It's longevity engineered at the atomic scale.
          </p>
          <button className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300">
            Experience Nanograds
          </button>
        </motion.div>
      </section>
      
    </main>
  );
}