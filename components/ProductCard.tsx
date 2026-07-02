"use client";

import { useState } from "react";
import Link from "next/link";
import { type Product } from "@/lib/products";
import { eur } from "@/lib/format";
import { useCart } from "./CartContext";
import ProductImage from "./ProductImage";

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [done, setDone] = useState(false);

  const handleAdd = () => {
    add(product.id);
    setDone(true);
    setTimeout(() => setDone(false), 500);
  };

  return (
    <article className="card" data-cat={product.cat}>
      <div className="card__img">
        <Link className="card__imglink" href={`/product/${product.id}`} aria-label={product.name} />
        <span className={`card__tag${product.hot ? " hot" : ""}`}>{product.tag}</span>
        <ProductImage src={product.img} alt={product.name} wm={product.wm} />
      </div>
      <div className="card__body">
        <span className="card__brand">{product.brand}</span>
        <Link className="card__name" href={`/product/${product.id}`}>
          {product.name}
        </Link>
        <div className="card__foot">
          <span className="card__price">
            {product.old && <s>{eur(product.old)}</s>}
            {eur(product.price)}
          </span>
          <button
            className={`add${done ? " done" : ""}`}
            aria-label={`Ajouter ${product.name} au panier`}
            onClick={handleAdd}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
