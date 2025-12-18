'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Minus, Plus, Trash2, ShieldCheck, 
  ArrowRight, Lock, Truck 
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- MOCK DATA ---
const INITIAL_CART = [
  {
    id: 1,
    name: 'Storms in Paris',
    subtitle: 'The Warm Soul Collection',
    brand: 'Ceramic Society™',
    finish: 'Matt Finish',
    size: '1 Gallon',
    price: 85,
    hex: '#8C9BAB', // Muted Blue-Grey
    qty: 1,
    inStock: true
  },
  {
    id: 2,
    name: 'Jaipur Rouge',
    subtitle: 'The Sun’s Legacy Collection',
    brand: 'Ellora by Elements',
    finish: 'Satin Expression',
    size: '2 Gallons',
    price: 115,
    hex: '#A33E2A', // Deep Terracotta
    qty: 2,
    inStock: true
  }
];

export default function LuxuryCart() {
  const [cartItems, setCartItems] = useState(INITIAL_CART);

  const updateQty = (id: number, change: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + change);
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = subtotal > 200 ? 0 : 25;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 pt-24 pb-20">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* ========================================= */}
        {/* LEFT COLUMN: THE ART OF THE CART          */}
        {/* ========================================= */}
        <div className="lg:col-span-8">
          <div className="flex items-baseline justify-between mb-8 border-b border-stone-200 pb-4">
             <h1 className="text-3xl md:text-4xl font-serif text-stone-900">Your Selection</h1>
             <span className="text-sm font-bold uppercase tracking-widest text-stone-400">
               {cartItems.length} Items
             </span>
          </div>

          <div className="space-y-8">
             <AnimatePresence>
               {cartItems.map((item) => (
                 <motion.div 
                   key={item.id}
                   layout
                   initial={{ opacity: 0, y: 20 }} 
                   animate={{ opacity: 1, y: 0 }} 
                   exit={{ opacity: 0, scale: 0.95 }}
                   className="group relative bg-white p-6 shadow-sm border border-stone-100 flex flex-col sm:flex-row gap-6 transition-all hover:shadow-md"
                 >
                    {/* Visual Swatch */}
                    <div className="w-full sm:w-32 aspect-[4/5] sm:aspect-square shrink-0 relative overflow-hidden bg-stone-100">
                       <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110" style={{ backgroundColor: item.hex }} />
                       {/* Texture Overlay */}
                       <div className="absolute inset-0 bg-black/5 opacity-50 mix-blend-overlay" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                       <div className="flex justify-between items-start">
                          <div>
                             <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1 block">
                               {item.brand}
                             </span>
                             <h3 className="text-2xl font-serif text-stone-900 mb-1">
                               {item.name}
                             </h3>
                             <p className="text-sm text-stone-500 font-light mb-4">
                               {item.finish} · {item.size}
                             </p>
                          </div>
                          <span className="text-xl font-serif text-stone-900">
                             ${item.price * item.qty}
                          </span>
                       </div>

                       {/* Controls */}
                       <div className="flex items-center justify-between pt-4 border-t border-stone-100 mt-2">
                          
                          {/* Minimalist Qty */}
                          <div className="flex items-center gap-4">
                             <button 
                               onClick={() => updateQty(item.id, -1)}
                               disabled={item.qty === 1}
                               className="text-stone-400 hover:text-stone-900 disabled:opacity-30 transition-colors"
                             >
                               <Minus size={16} />
                             </button>
                             <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                             <button 
                               onClick={() => updateQty(item.id, 1)}
                               className="text-stone-400 hover:text-stone-900 transition-colors"
                             >
                               <Plus size={16} />
                             </button>
                          </div>

                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-red-700 transition-colors flex items-center gap-2"
                          >
                            <Trash2 size={14} /> Remove
                          </button>
                       </div>
                    </div>
                 </motion.div>
               ))}
             </AnimatePresence>
          </div>
          
          {cartItems.length === 0 && (
             <div className="py-20 text-center">
                <p className="text-stone-400 text-lg mb-6 font-serif italic">"Color is a power which directly influences the soul."</p>
                <button className="bg-stone-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-stone-800">
                  Return to Library
                </button>
             </div>
          )}
        </div>

        {/* ========================================== */}
        {/* RIGHT COLUMN: ARCHITECTURAL SUMMARY        */}
        {/* ========================================== */}
        <div className="lg:col-span-4 h-full">
            <div className="bg-white p-8 border border-stone-200 sticky top-8">
               <h2 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-8 pb-4 border-b border-stone-100">
                 Order Summary
               </h2>
               
               <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-stone-600 font-light">
                     <span>Subtotal</span>
                     <span className="font-medium text-stone-900">${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-stone-600 font-light">
                     <span>Shipping</span>
                     <span className="font-medium text-stone-900">
                       {shipping === 0 ? "Complimentary" : `$${shipping}`}
                     </span>
                  </div>
                  <div className="flex justify-between text-stone-600 font-light">
                     <span>Taxes</span>
                     <span className="font-medium text-stone-900">Calculated at Checkout</span>
                  </div>
               </div>

               <div className="flex justify-between items-baseline pt-6 border-t border-stone-100 mb-8">
                  <span className="text-lg font-serif text-stone-900">Total</span>
                  <span className="text-3xl font-serif text-stone-900">${total}</span>
               </div>

               <button className="w-full bg-stone-900 text-white py-5 flex items-center justify-center gap-3 hover:bg-stone-800 transition-all group mb-6">
                  <span className="text-xs font-bold uppercase tracking-widest">Proceed to Checkout</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>

               {/* Trust Signals - Clean & Minimal */}
               <div className="grid grid-cols-2 gap-4 pt-6 border-t border-stone-100">
                  <div className="flex items-center gap-2 text-stone-400">
                     <Lock size={14} />
                     <span className="text-[10px] uppercase tracking-wider font-bold">Secure SSL</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-400">
                     <Truck size={14} />
                     <span className="text-[10px] uppercase tracking-wider font-bold">Fast Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-stone-400">
                     <ShieldCheck size={14} />
                     <span className="text-[10px] uppercase tracking-wider font-bold">Warranty</span>
                  </div>
               </div>
            </div>
        </div>

      </div>
    </div>
  );
}
