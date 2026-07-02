"use client";

import { useState } from "react";
import { useCart } from "./CartContext";

export default function AddToCartPanel({ id }: { id: number }) {
  const { add, open } = useCart();
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) add(id);
    open();
  };

  return (
    <div className="pdp__buy">
      <div className="pdp__qty">
        <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Réduire la quantité">
          −
        </button>
        <span>{qty}</span>
        <button onClick={() => setQty((q) => q + 1)} aria-label="Augmenter la quantité">
          +
        </button>
      </div>
      <button className="btn btn--primary pdp__addbtn" onClick={handleAdd}>
        Ajouter au panier
      </button>
    </div>
  );
}
