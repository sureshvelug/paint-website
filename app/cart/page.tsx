// app/cart/page.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Trash2, ArrowRight, X, Check, Loader2, Info } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

// Simple Toast Component for the Cart Page
const CartToast = ({ message, isVisible, onClose }: { message: string, isVisible: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          exit={{ opacity: 0, y: 20, x: '-50%' }}
          className="fixed bottom-10 left-1/2 z-[200] flex items-center gap-4 bg-stone-900 text-white px-6 py-4 rounded-sm shadow-2xl min-w-[300px]"
        >
          <Check size={18} className="text-emerald-400" />
          <span className="text-sm font-medium">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function LuxuryCart() {
  const { cartItems, updateQty, removeFromCart, clearCart } = useCart(); 
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showClearCartPrompt, setShowClearCartPrompt] = useState(false);
  
  // Toast State
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // SIMULATE NETWORK REQUEST (No Email Logic)
    setTimeout(() => {
      setIsSubmitting(false);
      
      // 1. Show Success Toast
      setToastMessage("Request received! We will reach out soon.");
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 4000);

      // 2. Show Clear Cart Prompt
      setShowClearCartPrompt(true);
    }, 1500);
  };

  const handleClearCartDecision = (shouldClear: boolean) => {
    if (shouldClear) {
      if (clearCart) {
        clearCart();
      } else {
        // Fallback if clearCart isn't in context yet
        cartItems.forEach(item => removeFromCart(item.uniqueId)); 
      }
    }
    // Reset Everything
    setShowClearCartPrompt(false);
    setIsFormOpen(false);
    setFormData({ name: '', email: '', phone: '', notes: '' });
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 pt-32 pb-20 relative overflow-x-hidden">
      
      <CartToast 
        message={toastMessage} 
        isVisible={toastVisible} 
        onClose={() => setToastVisible(false)} 
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT: CART ITEMS */}
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
                <Link href="/" className="inline-block bg-stone-900 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:bg-stone-800">
                  Return to Library
                </Link>
             </div>
          )}
        </div>

        {/* RIGHT: SUMMARY */}
        <div className="lg:col-span-4 h-full">
            <div className="bg-white p-8 border border-stone-200 sticky top-32 shadow-sm">
              <h2 className="text-sm font-bold uppercase tracking-widest text-stone-900 mb-8 pb-4 border-b border-stone-100">
                Inquiry Summary
              </h2>
              <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-stone-600 font-light">
                    <span>Total Items</span>
                    <span className="font-medium text-stone-900">{cartItems.reduce((acc, item) => acc + item.qty, 0)}</span>
                  </div>
                  <div className="flex justify-between text-stone-600 font-light">
                    <span>Pricing</span>
                    <span className="font-medium text-stone-400 italic text-sm">Quote upon request</span>
                  </div>
              </div>
              <button 
                onClick={() => setIsFormOpen(true)}
                disabled={cartItems.length === 0}
                className="w-full bg-stone-900 text-white py-5 flex items-center justify-center gap-3 hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                  <span className="text-xs font-bold uppercase tracking-widest">Request Quote</span>
                  <ArrowRight size={16} />
              </button>
            </div>
        </div>
      </div>

      {/* FORM DRAWER */}
      <AnimatePresence>
        {isFormOpen && (
          <>
            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => !showClearCartPrompt && setIsFormOpen(false)}
                className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-[100]"
            />
            
            <motion.div 
                initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-full max-w-md bg-stone-50 z-[101] shadow-2xl flex flex-col"
            >
                {/* 1. CLEAR CART PROMPT (Success State) */}
                {showClearCartPrompt ? (
                   <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-white">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-800 mb-6">
                         <Check size={32} />
                      </div>
                      <h3 className="text-2xl font-serif text-stone-900 mb-4">Request Received</h3>
                      <p className="text-stone-500 mb-12 leading-relaxed">
                        Our team will contact you shortly. <br/>
                        Would you like to clear your cart for a fresh start?
                      </p>
                      
                      <div className="flex flex-col gap-4 w-full">
                         <button 
                           onClick={() => handleClearCartDecision(true)}
                           className="w-full bg-stone-900 text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-stone-800"
                         >
                           Yes, Clear Cart
                         </button>
                         <button 
                           onClick={() => handleClearCartDecision(false)}
                           className="w-full bg-white border border-stone-200 text-stone-500 py-4 text-xs font-bold uppercase tracking-widest hover:border-stone-900 hover:text-stone-900"
                         >
                           No, Keep Items
                         </button>
                      </div>
                   </div>
                ) : (
                /* 2. INQUIRY FORM */
                   <>
                    <div className="p-8 border-b border-stone-200 flex items-center justify-between bg-white">
                        <h2 className="text-xl font-serif text-stone-900">Complete Inquiry</h2>
                        <button onClick={() => setIsFormOpen(false)} className="text-stone-400 hover:text-stone-900">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-8 bg-stone-50">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="bg-white p-6 border border-stone-200 mb-8">
                               <p className="text-stone-500 text-sm font-light leading-relaxed">
                                   Please provide your contact details. We will prepare a custom invoice and shipping estimate for you.
                               </p>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-stone-900">Full Name</label>
                                <input required type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-white border border-stone-300 p-4 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors rounded-none" placeholder="John Doe" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-stone-900">Phone</label>
                                <input required type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-white border border-stone-300 p-4 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors rounded-none" placeholder="+91 98765 43210" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-stone-900">Email</label>
                                <input required type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-white border border-stone-300 p-4 text-stone-900 focus:outline-none focus:border-stone-900 transition-colors rounded-none" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-stone-900">Notes</label>
                                <textarea name="notes" value={formData.notes} onChange={handleInputChange} rows={4} className="w-full bg-white border border-stone-300 p-4 text-stone-900 focus:outline-none focus:border-stone-900 resize-none" placeholder="Questions?" />
                            </div>

                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-stone-900 text-white py-5 mt-8 text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <>Sending <Loader2 className="animate-spin" size={16} /></>
                                ) : (
                                    <>Send Request <ArrowRight size={16} /></>
                                )}
                            </button>
                        </form>
                    </div>
                   </>
                )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
