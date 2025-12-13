'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Leaf, Recycle, Wind } from 'lucide-react';

// --- COUNTER ---
function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 50 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.floor(latest).toString();
    });
  }, [springValue]);

  return <span ref={ref} />;
}

export default function SustainabilityMetrics() {
  const metrics = [
    { 
      label: "Low VOC", 
      value: 5, 
      prefix: "<", 
      unit: "g/L", 
      desc: "Exceeds global safety standards for indoor air quality.",
      icon: Wind
    },
    { 
      label: "Recycled", 
      value: 45, 
      prefix: "", 
      unit: "%", 
      desc: "Packaging made from post-consumer recycled materials.",
      icon: Recycle
    },
    { 
      label: "Net Zero", 
      value: 100, 
      prefix: "", 
      unit: "%", 
      desc: "Carbon neutral production across all manufacturing facilities.",
      icon: Leaf
    },
  ];

  return (
    <section className="py-24 bg-stone-50 text-stone-900 border-t border-stone-200">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
             <span className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-4 block">
                Sustainable Future
             </span>
             <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Designed for the Planet. <br/> Engineered for You.
             </h2>
          </div>
          <div className="max-w-xs text-stone-500 font-light leading-relaxed text-sm md:text-base">
             We believe luxury should not cost the earth. Our formulations are rigorously tested to minimize environmental impact without compromising performance.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200 border-y border-stone-200">
           {metrics.map((item, idx) => (
              <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 className="p-8 md:p-12 group hover:bg-white transition-colors duration-500"
              >
                 <div className="flex items-center justify-between mb-8">
                    <item.icon className="w-6 h-6 text-stone-400 group-hover:text-amber-600 transition-colors" />
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-400 group-hover:text-stone-900 transition-colors">
                       {item.label}
                    </span>
                 </div>
                 
                 <div className="text-5xl md:text-6xl font-serif text-stone-900 mb-4 flex items-baseline">
                    <span className="text-3xl mr-1 text-stone-400 font-light">{item.prefix}</span>
                    <Counter value={item.value} />
                    <span className="text-2xl ml-1 text-stone-400 font-sans font-light">{item.unit}</span>
                 </div>

                 <p className="text-stone-500 text-sm leading-relaxed max-w-[200px]">
                    {item.desc}
                 </p>
              </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
}
