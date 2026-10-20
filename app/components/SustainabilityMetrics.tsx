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
      icon: Wind,
      bgColor: '#ff006c5e'
    },
    { 
      label: "Recycled", 
      value: 45, 
      prefix: "", 
      unit: "%", 
      desc: "Packaging made from post-consumer recycled materials.",
      icon: Recycle,
      bgColor: '#0bf1355e'
    },
    { 
      label: "Net Zero", 
      value: 100, 
      prefix: "", 
      unit: "%", 
      desc: "Carbon neutral production across all manufacturing facilities.",
      icon: Leaf,
      bgColor: '#00f1ff5e'
    },
  ];

  return (
    <section className="relative
    overflow-hidden
    py-24
    bg-[#f6151533]
    bg-[radial-gradient(circle_at_top_left,#00f1ff20,transparent_30%),radial-gradient(circle_at_top_right,#ff006c20,transparent_30%),radial-gradient(circle_at_bottom_left,#0bf13520,transparent_30%),radial-gradient(circle_at_bottom_right,#facc1520,transparent_30%)]
    text-stone-900">

      {/* ============================
    FLOATING PAINT OVERLAY
============================ */}

<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* Floating Paint Drops */}
  {Array.from({ length: 35 }).map((_, i) => {
    const colors = [
      "#22d3ee",
      "#f97316",
      "#facc15",
      "#ec4899",
      "#10b981",
      "#8b5cf6",
      "#ef4444",
      "#06b6d4",
    ];

    return (
      <motion.div
        key={i}
        animate={{
          y: [-15, 15, -15],
          x: [-5, 5, -5],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4 + (i % 5),
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute rounded-full"
        style={{
          backgroundColor: colors[i % colors.length],
          opacity: 0.3,
          width: `${8 + Math.random() * 18}px`,
          height: `${8 + Math.random() * 18}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      />
    );
  })}

</div>
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
             <span className="text-white text-xs font-bold tracking-widest uppercase mb-4 block">
                Sustainable Future
             </span>
             <h2 className="text-5xl md:text-5xl lg:text-7xl font-bold leading-none text-black">
                Designed for the Planet. <br/> Engineered for You.
             </h2>
          </div>
          <div className="mt-6 text-lg md:text-xl leading-relaxed text-black">
             We believe luxury should not cost the earth. Our formulations are rigorously tested to minimize environmental impact without compromising performance.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-200 border-y border-stone-200 bg-[#f8f8f8] border border-gray-300 p-3 rounded-lg gap-4">
           {metrics.map((item, idx) => (
              <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1 }}
                 style={{
                    backgroundColor: item.bgColor,
                 }}
                 className="p-8 md:p-12 group hover:bg-white transition-colors duration-500"
              >
                 <div className="flex items-center justify-between mb-8">
                    <item.icon className="w-6 h-6 text-stone-900 transition-colors" />
                    <span className="text-xs font-bold uppercase tracking-widest text-stone-400 group-hover:text-stone-900 transition-colors">
                       {item.label}
                    </span>
                 </div>
                 
                 <div className="text-5xl md:text-6xl  text-stone-1000 mb-4 flex items-baseline">
                    <span className="text-3xl mr-1 font-light">{item.prefix}</span>
                    <Counter value={item.value} />
                    <span className="text-2xl ml-1 font-sans font-light">{item.unit}</span>
                 </div>

                 <p className=" text-sm leading-relaxed max-w-[200px]">
                    {item.desc}
                 </p>
              </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
}
