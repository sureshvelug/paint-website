'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { useRouter } from 'next/navigation'; 
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ALL_COLORS, FILTERS } from '../data';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function CollectionsPage() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredColors = useMemo(() => {
    return ALL_COLORS.filter(color => {
      const matchesFilter = activeFilter === 'all' || color.family === activeFilter;
      const matchesSearch = color.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  // Navigate using URL parameters
  const handleColorSelect = (colorId: string) => {
    router.push(`/product?color=${colorId}`);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white min-h-screen pt-24 pb-20">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12">
        {/* Filter Rail */}
        <div className="w-full md:w-64 shrink-0 md:sticky md:top-32 md:h-[calc(100vh-10rem)] flex flex-col">
          <div className="mb-8">
            <h1 className="text-3xl font-serif text-stone-900 mb-2">Palette</h1>
            <p className="text-xs text-stone-500 uppercase tracking-widest">{filteredColors.length} Pigments</p>
          </div>
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
            <input 
              type="text" placeholder="Search shade..."
              className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-stone-400 rounded-sm placeholder:text-stone-400"
              value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="space-y-2 overflow-y-auto pr-2 scrollbar-hide max-h-full">
            {FILTERS.map((f) => (
              <button key={f.id} onClick={() => setActiveFilter(f.id)} className={cn("w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all group hover:bg-stone-50", activeFilter === f.id ? "bg-stone-100" : "")}>
                <span className={cn("w-6 h-6 rounded-full border border-stone-200 shadow-sm relative", f.id === 'all' ? "bg-white" : "")} style={f.id !== 'all' ? { backgroundColor: f.hex } : {}}>
                   {f.id === 'all' && <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-stone-400">ALL</span>}
                </span>
                <span className={cn("text-sm font-medium transition-colors", activeFilter === f.id ? "text-stone-900" : "text-stone-500 group-hover:text-stone-800")}>{f.label}</span>
              </button>
            ))}
          </div>
        </div>
        {/* Grid */}
        <div className="flex-1">
           <div className="mb-6 flex items-center justify-between border-b border-stone-100 pb-4">
              <h2 className="text-xl font-serif text-stone-900">{FILTERS.find(f => f.id === activeFilter)?.label}</h2>
              {activeFilter !== 'all' && <button onClick={() => setActiveFilter('all')} className="text-xs text-stone-400 hover:text-stone-900 flex items-center gap-1"><X size={12}/> Clear Filter</button>}
           </div>
           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10">
              {filteredColors.map((color: any) => (
                <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={color.id} onClick={() => handleColorSelect(color.id)} className="group cursor-pointer flex flex-col gap-3">
                   <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-sm border border-stone-100 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                      <div className="w-full h-full" style={{ backgroundColor: color.hex }} />
                      <div className="absolute inset-0 shadow-inner pointer-events-none" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <span className="bg-white/90 backdrop-blur-sm text-stone-900 px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-sm rounded-full">View Shade</span>
                      </div>
                   </div>
                   <div className="px-1"><h3 className="text-sm font-bold text-stone-900">{color.name}</h3><p className="text-[10px] text-stone-400 uppercase tracking-widest font-medium">{color.family}</p></div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </motion.div>
  );
}
