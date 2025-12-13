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
    <section className="bg-stone-950 text-stone-200 py-32 relative overflow-hidden">
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
              
              <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-[1.1]">
                Molecular <br/> <span className="text-stone-500">Perfection.</span>
              </h2>
              
              <p className="text-stone-400 text-lg leading-relaxed mb-12 font-light max-w-xl">
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
                    <p className="text-stone-500 text-sm leading-relaxed">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Metrics */}
              <div className="flex gap-12 border-t border-white/10 pt-8">
                 <div>
                    <div className="text-3xl font-serif text-white mb-1">0.05<span className="text-lg text-stone-500">mm</span></div>
                    <div className="text-xs text-stone-500 uppercase tracking-wider">Particle Size</div>
                 </div>
                 <div>
                    <div className="text-3xl font-serif text-white mb-1">10<span className="text-lg text-stone-500">Yr</span></div>
                    <div className="text-xs text-stone-500 uppercase tracking-wider">Warranty</div>
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
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop" 
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
