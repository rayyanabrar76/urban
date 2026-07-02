"use client";

import { useRef } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import { eur } from "@/lib/format";
import { useCart } from "./CartContext";
import ProductImage from "./ProductImage";

export default function Collection() {
  const railRef = useRef<HTMLDivElement>(null);
  const { add } = useCart();

  const scroll = (dir: number) => {
    const el = railRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="collection">
      <div className="wrap collection__head">
        <h2>Collection Été 26</h2>
        <div className="collection__nav">
          <button className="rail-arrow" aria-label="Précédent" onClick={() => scroll(-1)}>
            ‹
          </button>
          <button className="rail-arrow" aria-label="Suivant" onClick={() => scroll(1)}>
            ›
          </button>
          <a href="#drops" className="view-all">
            Voir tout →
          </a>
        </div>
      </div>

      <div className="wrap">
        <div className="rail" ref={railRef}>
          {products.map((p) => (
            <article className="rail__card" key={p.id}>
              <div className="rail__img">
                <Link className="rail__imglink" href={`/product/${p.id}`} aria-label={p.name} />
                <span className={`card__tag${p.hot ? " hot" : ""}`}>{p.tag}</span>
                <ProductImage src={p.img} alt={p.name} wm={p.wm} />
                <button
                  className="rail__add"
                  aria-label={`Ajouter ${p.name} au panier`}
                  onClick={() => add(p.id)}
                >
                  + Ajouter au panier
                </button>
              </div>
              <div className="rail__meta">
                <span className="rail__price">
                  {p.old && <s>{eur(p.old)}</s>}
                  {eur(p.price)}
                </span>
                <Link href={`/product/${p.id}`} className="rail__name">
                  {p.name}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
