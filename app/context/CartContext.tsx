// context/CartContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  uniqueId: string;
  productId: string;
  name: string;
  brand: string;
  finish: string;
  price: number;
  hex: string;
  size: string;
  qty: number;
}

// 1. Update the Interface to include clearCart
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'uniqueId'>) => void;
  removeFromCart: (uniqueId: string) => void;
  updateQty: (uniqueId: string, change: number) => void;
  clearCart: () => void; // <--- Added this
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from LocalStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tonester_cart');
      if (saved) {
        try {
          setCartItems(JSON.parse(saved));
        } catch (e) {
          console.error("Cart parse error", e);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  // Save to LocalStorage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('tonester_cart', JSON.stringify(cartItems));
    }
  }, [cartItems, isLoaded]);

  const addToCart = (newItem: Omit<CartItem, 'uniqueId'>) => {
    const uniqueId = `${newItem.productId}-${newItem.finish}-${newItem.hex}`.replace(/\s+/g, '-').toLowerCase();

    setCartItems((prev) => {
      const existing = prev.find((item) => item.uniqueId === uniqueId);
      if (existing) {
        return prev.map((item) =>
          item.uniqueId === uniqueId ? { ...item, qty: item.qty + newItem.qty } : item
        );
      }
      return [...prev, { ...newItem, uniqueId }];
    });
  };

  const removeFromCart = (uniqueId: string) => {
    setCartItems((prev) => prev.filter((item) => item.uniqueId !== uniqueId));
  };

  const updateQty = (uniqueId: string, change: number) => {
    setCartItems((prev) => 
      prev.map((item) => {
        if (item.uniqueId === uniqueId) {
          const newQty = Math.max(1, item.qty + change);
          return { ...item, qty: newQty };
        }
        return item;
      })
    );
  };

  // 2. Implement the clearCart function
  const clearCart = () => {
    setCartItems([]); // Clears state
    localStorage.removeItem('tonester_cart'); // Clears storage
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
