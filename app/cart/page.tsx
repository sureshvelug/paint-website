// app/cart/page.tsx
'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Trash2, ShieldCheck, ArrowRight, Lock, Truck } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

export default function LuxuryCart() {
  const { cartItems, updateQty, removeFromCart } = useCart();

  // Safe Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const shipping = subtotal > 200 || subtotal === 0 ? 0 : 25; // Free if empty or > 200
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 pt-32 pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-8">
          <div className="flex items-baseline justify-between mb-8 border-b border-stone-200 pb-4">
             <h1 className="text-3xl md:text-4xl font-serif text-stone-900">Your Selection</h1>
             <span className="text-sm font-bold uppercase tracking-widest text-stone-400">
               {cartItems.length} Items
             </span>
          </div>

          <div className="space-y-8">
             <AnimatePresence mode="popLayout">
               {cartItems.map((item) => (
                 <motion.div 
                   key={item.uniqueId}
                   layout
                   initial={{ opacity: 0, y: 20 }} 
                   animate={{ opacity: 1, y: 0 }} 
                   exit={{ opacity: 0, scale: 0.95 }}
                   className="relative bg-white p-6 shadow-sm border border-stone-100 flex flex-col sm:flex-row gap-6 transition-all"
                 >
                    <div className="w-full sm:w-32 aspect-[4/5] sm:aspect-square shrink-0 relative overflow-hidden bg-stone-100">
                       <div className="absolute inset-0" style={{ backgroundColor: item.hex }} />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                       <div className="flex justify-between items-start">
                          <div>
                             <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1 block">{item.brand}</span>
                             <h3 className="text-2xl font-serif text-stone-900 mb-1">{item.name}</h3>
                             <p className="text-sm text-stone-500 font-light mb-4">{item.finish} · {item.size}</p>
                          </div>
                          <span className="text-xl font-serif text-stone-900">${item.price * item.qty}</span>
                       </div>

                       <div className="flex items-center justify-between pt-4 border-t border-stone-100 mt-2">
                          <div className="flex items-center gap-4">
                             <button onClick={() => updateQty(item.uniqueId, -1)} disabled={item.qty === 1} className="text-stone-400 hover:text-stone-900 disabled:opacity-30">
                               <Minus size={16} />
                             </button>
                             <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                             <button onClick={() => updateQty(item.uniqueId, 1)} className="text-stone-400 hover:text-stone-900">
                               <Plus size={16} />
                             </button>
                          </div>
                          <button onClick={() => removeFromCart(item.uniqueId)} className="text-xs font-bold uppercase tracking-widest text-stone-400 hover:text-red-700 flex items-center gap-2">
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
                <Link href="/collections" className="inline-block bg-stone-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-stone-800">
                  Return to Library
                </Link>
             </div>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-4 h-full">
            <div className="bg-white p-8 border border-stone-200 sticky top-32">
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
                    <span className="font-medium text-stone-900">{shipping === 0 ? "Complimentary" : `$${shipping}`}</span>
                  </div>
              </div>

              <div className="flex justify-between items-baseline pt-6 border-t border-stone-100 mb-8">
                  <span className="text-lg font-serif text-stone-900">Total</span>
                  <span className="text-3xl font-serif text-stone-900">${total}</span>
              </div>

              <button 
                disabled={cartItems.length === 0}
                className="w-full bg-stone-900 text-white py-5 flex items-center justify-center gap-3 hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                  <span className="text-xs font-bold uppercase tracking-widest">Proceed to Checkout</span>
                  <ArrowRight size={16} />
              </button>
            </div>
        </div>

      </div>
    </div>
  );
}
