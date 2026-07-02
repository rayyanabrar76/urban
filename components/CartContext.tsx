"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { products } from "@/lib/products";

type Cart = Record<number, number>;

type CartContextValue = {
  cart: Cart;
  count: number;
  total: number;
  isOpen: boolean;
  add: (id: number) => void;
  inc: (id: number) => void;
  dec: (id: number) => void;
  remove: (id: number) => void;
  open: () => void;
  close: () => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({});
  const [isOpen, setIsOpen] = useState(false);

  const add = (id: number) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));

  const inc = (id: number) => setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));

  const dec = (id: number) =>
    setCart((c) => {
      const next = { ...c };
      next[id] = (next[id] || 0) - 1;
      if (next[id] <= 0) delete next[id];
      return next;
    });

  const remove = (id: number) =>
    setCart((c) => {
      const next = { ...c };
      delete next[id];
      return next;
    });

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const clear = () => setCart({});

  const { count, total } = useMemo(() => {
    let count = 0;
    let total = 0;
    for (const [id, qty] of Object.entries(cart)) {
      const p = products.find((x) => x.id === Number(id));
      if (!p) continue;
      count += qty;
      total += p.price * qty;
    }
    return { count, total };
  }, [cart]);

  const value: CartContextValue = { cart, count, total, isOpen, add, inc, dec, remove, open, close, clear };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
