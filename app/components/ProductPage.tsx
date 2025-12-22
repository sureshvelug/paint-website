"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Droplets,
  Sun,
  Shield,
  Check,
  BookOpen,
  Lightbulb,
  Minus,
  Plus,
  X,
  ArrowRight,
  Star,
  Home,
  Armchair,
} from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ALL_COLORS, BRAND_CONTENT, SIZE_OPTIONS } from "../data";

import { useCart } from "../context/CartContext";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Toast = ({
  message,
  isVisible,
  onClose,
}: {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-0 right-0 md:bottom-10 md:right-10 z-[100] flex items-center gap-5 bg-stone-900 text-stone-50 px-8 py-6 shadow-2xl min-w-[320px] border-l-4 border-amber-700"
        >
          <div className="text-amber-500 shrink-0">
            <Check size={20} />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium tracking-wide font-serif">
              {message}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-stone-500 hover:text-white transition-colors"
          >
            <X size={16} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function ProductPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const { addToCart } = useCart();

  const [activeBrandId, setActiveBrandId] = useState<keyof typeof BRAND_CONTENT>("ceramic");
  const [activeFinishId, setActiveFinishId] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState("4ltr");
  const [quantity, setQuantity] = useState(1);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  
  const colorId = searchParams.get("color");
  const color = ALL_COLORS.find((c) => c.id === parseInt(colorId || "0"));

  const brand = BRAND_CONTENT[activeBrandId];

  useEffect(() => {
    if (brand && brand.finishes.length > 0) {
      setActiveFinishId(brand.finishes[0].id);
    }
  }, [activeBrandId, brand]);

  const finish = useMemo(() => {
    return (
      brand.finishes.find((f) => f.id === activeFinishId) || brand.finishes[0]
    );
  }, [brand, activeFinishId]);

  if (!color) {
    return <div>Color not found</div>;
  }

  const sizeOption =
    SIZE_OPTIONS.find((s) => s.id === selectedSize) || SIZE_OPTIONS[1];
  
  // Internal pricing calculation still happens for the Cart, 
  // but we won't display it on the UI anymore.
  const unitPrice = Math.round(finish.price * sizeOption.multiplier);

  const handleAddToCart = () => {
    addToCart({
      productId: color.id.toString(),
      name: color.name,
      brand: brand.name,
      finish: finish.label,
      hex: color.hex,
      size: sizeOption.label,
      price: unitPrice, 
      qty: quantity,
    });

    setToastMessage(
      `Added ${quantity} x ${color.name} (${sizeOption.label}) to bag.`
    );
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  const handleBack = () => {
    router.push("/");
  };

  // Use the dynamic interior image from data, fallback if missing
  const HERO_IMG = color.interiorImage || "https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  
  const warrantyText = (finish.details.specs as any).Warranty;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-stone-50 relative min-h-screen font-sans"
    >
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />

      <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
        {/* LEFT VISUALS */}
        <div className="w-full lg:w-[55%] xl:w-[60%] relative h-[40vh] lg:h-full bg-stone-200">
          <button
            onClick={handleBack}
            className="absolute top-8 left-8 z-20 group flex items-center gap-3 bg-white/90 backdrop-blur-sm px-5 py-3 text-xs font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all duration-300"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Library
          </button>

          <div className="w-full h-full relative">
            <img
              src={HERO_IMG}
              className="w-full h-full object-cover"
              alt={`${color.name} Interior Context`}
            />
            <div
              className="absolute inset-0 mix-blend-multiply opacity-20 transition-colors duration-700"
              style={{ backgroundColor: color?.hex }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent" />
            
            {/* Visual Label */}
            <div className="absolute bottom-8 left-8 text-white/90 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <Armchair size={14} />
                <span>Interior Simulation</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="w-full lg:w-[45%] xl:w-[40%] bg-white h-[60vh] lg:h-full flex flex-col relative z-10 shadow-2xl lg:shadow-none">
          
          {/* 1. FIXED HEADER */}
          <div className="shrink-0 px-8 md:px-12 pt-10 pb-6 border-b border-stone-100 bg-white z-20 mt-17">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-[1px] w-12 bg-amber-700"></span>
              <span className="text-amber-800 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]">
                Premium Finish
              </span>
            </div>

            <div className="flex items-end justify-between gap-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-stone-900 leading-[0.9]">
                {color?.name}
              </h1>
              <div className="hidden md:flex flex-col items-end pb-1 opacity-60">
                <div className="flex text-amber-500 gap-0.5 mb-1">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-stone-400">
                  4.9 Rating
                </span>
              </div>
            </div>
          </div>

          {/* 2. SCROLLABLE CONTROLS */}
          <div className="flex-1 overflow-y-auto px-8 md:px-12 py-10 space-y-12">
            
            <p className="text-stone-500 text-sm font-light leading-relaxed max-w-md">
              <span className="font-medium text-stone-900">{finish.title}</span>. 
              {finish.description}
            </p>

            {/* Brand */}
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center text-[9px] font-bold">1</span>
                Usage Type
              </label>
              <div className="flex flex-wrap w-fit rounded-sm overflow-hidden">
                {Object.values(BRAND_CONTENT).map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setActiveBrandId(b.id as any)}
                    className={cn(
                      "text-xs px-6 py-4 font-medium transition-all duration-300 border-r last:border-r-0 border-stone-200 min-w-[110px] hover:bg-stone-50",
                      activeBrandId === b.id
                        ? "bg-stone-900 text-white hover:bg-stone-800"
                        : "bg-white text-stone-500"
                    )}
                  >
                    {b.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Finish */}
            <div>
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center text-[9px] font-bold">2</span>
                Finish Quality
              </label>
              <div className="flex flex-wrap gap-3">
                {brand.finishes.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFinishId(f.id)}
                    className={cn(
                      "px-6 py-3 text-xs font-bold uppercase tracking-wider border transition-all duration-300 min-w-[100px]",
                      activeFinishId === f.id
                        ? "bg-white border-stone-900 text-stone-900 ring-1 ring-stone-900 shadow-sm"
                        : "bg-white border-stone-200 text-stone-400 hover:border-stone-400 hover:text-stone-600"
                    )}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Size & Quantity */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-8 gap-y-10">
              {/* Size */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center text-[9px] font-bold">3</span>
                  Container Size
                </label>
                <div className="flex flex-col gap-3">
                  {SIZE_OPTIONS.map((size) => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size.id)}
                      className={cn(
                        "flex items-center justify-between px-5 py-3 border transition-all duration-200 w-full text-left group rounded-sm",
                        selectedSize === size.id
                          ? "border-stone-900 bg-stone-50"
                          : "border-stone-200 bg-white hover:border-stone-400"
                      )}
                    >
                      <span
                        className={cn(
                          "text-xs font-bold uppercase transition-colors",
                          selectedSize === size.id
                            ? "text-stone-900"
                            : "text-stone-400 group-hover:text-stone-600"
                        )}
                      >
                        {size.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-4 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-500 flex items-center justify-center text-[9px] font-bold">4</span>
                  Quantity
                </label>
                <div className="flex items-center gap-4 h-[46px]">
                  <div className="flex items-center border border-stone-200 bg-white w-fit rounded-sm h-full">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-full flex items-center justify-center hover:bg-stone-50 text-stone-600 transition-colors border-r border-stone-100"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-14 text-center text-sm font-bold text-stone-900 font-mono">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-full flex items-center justify-center hover:bg-stone-50 text-stone-600 transition-colors border-l border-stone-100"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <span className="text-xs text-stone-400 uppercase tracking-wide">Unit(s)</span>
                </div>
              </div>
            </div>

            {/* Technical Specs Summary */}
            <div className="pt-10 border-t border-stone-100 flex flex-wrap gap-x-10 gap-y-4">
              <div className="flex items-center gap-3 text-stone-500">
                <Droplets size={16} strokeWidth={1.5}/>
                <span className="text-[10px] uppercase tracking-wider font-semibold">Washable</span>
              </div>
              <div className="flex items-center gap-3 text-stone-500">
                <Sun size={16} strokeWidth={1.5}/>
                <span className="text-[10px] uppercase tracking-wider font-semibold">Low VOC</span>
              </div>
              <div className="flex items-center gap-3 text-stone-500">
                <Shield size={16} strokeWidth={1.5}/>
                <span className="text-[10px] uppercase tracking-wider font-semibold">{warrantyText}</span>
              </div>
            </div>
            
            {/* Spacer for bottom bar */}
            <div className="h-32"></div>
          </div>

          {/* 3. STICKY FOOTER - REMOVED PRICE HERE */}
          <div className="shrink-0 p-6 md:px-12 md:py-8 border-t border-stone-100 bg-white/95 backdrop-blur-md absolute bottom-0 w-full z-30 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]">
            <div className="flex items-center justify-between mb-5">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">Configuration</span>
                {/* Shows summary instead of price */}
                <span className="text-xl font-serif text-stone-900">
                  {quantity} x {sizeOption.label}
                </span>
              </div>
              <div className="text-right hidden sm:block">
                 <div className="flex items-center gap-2 justify-end mb-1">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                   <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-700">In Stock</span>
                 </div>
                 <span className="text-[10px] text-stone-400">Ready for dispatch</span>
              </div>
            </div>
            
            <button
              onClick={handleAddToCart}
              className="w-full bg-stone-900 text-white h-16 text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-all flex items-center justify-center gap-4 group rounded-sm"
            >
              Add to Bag 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>

      {/* ADDITIONAL CONTENT SECTION */}
      <div className="bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeBrandId}-${activeFinishId}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
            >
               <div className="lg:col-span-7">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="h-[1px] w-12 bg-stone-300"></span>
                    <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em]">
                      The Story
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8 leading-tight">
                    <span className="text-amber-700 italic mr-3">{brand.tagline}</span>
                    for {color.name}
                  </h2>
                  
                  <div className="prose prose-stone prose-lg text-stone-600 font-light mb-12">
                      {color.story && <p>{color.story}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6 flex items-center gap-2">
                          What it does
                      </h3>
                      <ul className="space-y-4">
                        {finish.details.whatItDoes.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-stone-600 leading-relaxed">
                            <CheckCircle2 size={16} className="text-amber-700 shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {color.scientific && (
                        <div className="bg-stone-100 p-8 border border-stone-200">
                          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-4 flex items-center gap-2">
                            <Lightbulb size={16} /> Mood Science
                          </h3>
                          <p className="text-sm text-stone-600 leading-relaxed font-serif italic">
                            {color.scientific}
                          </p>
                        </div>
                    )}
                  </div>

                  {/* VISUAL CONTEXT SECTION */}
                  <div className="mt-16 pt-16 border-t border-stone-200">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="h-[1px] w-12 bg-stone-300"></span>
                        <span className="text-stone-400 text-xs font-bold uppercase tracking-[0.2em]">
                        Visual Context
                        </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="group relative aspect-[4/3] bg-stone-200 overflow-hidden cursor-pointer">
                             <img 
                                src={color.interiorImage} 
                                alt="Interior"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                             />
                             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                             <div className="absolute bottom-4 left-4 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                <Armchair size={14} /> Interior
                             </div>
                        </div>
                        <div className="group relative aspect-[4/3] bg-stone-200 overflow-hidden cursor-pointer">
                             <img 
                                src={color.exteriorImage} 
                                alt="Exterior"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                             />
                             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                             <div className="absolute bottom-4 left-4 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                <Home size={14} /> Exterior
                             </div>
                        </div>
                    </div>
                  </div>

               </div>
               
               <div className="lg:col-span-5">
                  <div className="sticky top-12 bg-stone-900 text-stone-50 p-8 md:p-12 shadow-2xl">
                    <div className="mb-8 pb-8 border-b border-stone-700 flex items-center justify-between">
                      <h3 className="text-xl font-serif">Technical Specifications</h3>
                      <BookOpen className="text-amber-500" size={24} />
                    </div>
                    <div className="space-y-6">
                      {Object.entries(finish.details.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-baseline border-b border-stone-800 pb-4 last:border-0 hover:bg-stone-800/50 transition-colors px-2 -mx-2 rounded">
                          <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </span>
                          <span className="text-sm font-medium text-white text-right">
                            {value as string}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
               </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
