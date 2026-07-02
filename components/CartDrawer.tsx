"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import { eur } from "@/lib/format";
import { useCart } from "./CartContext";
import ProductImage from "./ProductImage";

export default function CartDrawer() {
  const { cart, total, isOpen, inc, dec, remove, close } = useCart();
  const [removing, setRemoving] = useState<number[]>([]);
  const ids = Object.keys(cart).map(Number);
  const remain = 80 - total;

  const startRemove = (id: number) =>
    setRemoving((r) => (r.includes(id) ? r : [...r, id]));

  const finishRemove = (id: number) => {
    remove(id);
    setRemoving((r) => r.filter((x) => x !== id));
  };

  return (
    <>
      <div className={`overlay${isOpen ? " open" : ""}`} onClick={close} />
      <aside className={`drawer${isOpen ? " open" : ""}`} aria-label="Panier">
        <div className="drawer__head">
          <h3>Votre panier</h3>
          <button className="drawer__close" aria-label="Fermer" onClick={close}>
            ✕
          </button>
        </div>
        <div className="drawer__items">
          {ids.length === 0 ? (
            <div className="cart-empty">
              Votre panier est vide.
              <br />
              Ajoutez vos pièces préférées.
            </div>
          ) : (
            ids.map((id) => {
              const p = products.find((x) => x.id === id);
              if (!p) return null;
              const q = cart[id];
              return (
                <div
                  className={`cart-line${removing.includes(id) ? " is-removing" : ""}`}
                  key={id}
                  onAnimationEnd={(e) => {
                    if (e.target === e.currentTarget && removing.includes(id)) finishRemove(id);
                  }}
                >
                  <div className="cart-line__img">
                    <ProductImage src={p.img} alt={p.name} wm={p.wm} />
                  </div>
                  <div className="cart-line__info">
                    <b>{p.name}</b>
                    <span className="p">{eur(p.price)}</span>
                    <div className="qty">
                      <button aria-label="Réduire" onClick={() => dec(id)}>
                        −
                      </button>
                      <span>{q}</span>
                      <button aria-label="Augmenter" onClick={() => inc(id)}>
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="cart-line__del"
                    aria-label={`Retirer ${p.name} du panier`}
                    onClick={() => startRemove(id)}
                    disabled={removing.includes(id)}
                  >
                    <svg className="bin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <g className="bin__lid">
                        <path d="M3 6h18" />
                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </g>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                      <path d="M10 11v6M14 11v6" />
                    </svg>
                  </button>
                </div>
              );
            })
          )}
        </div>
        <div className="drawer__foot">
          <div className="drawer__total">
            <span>Sous-total</span>
            <b>{eur(total)}</b>
          </div>
          <div className="drawer__ship">
            {total >= 80
              ? "🎉 Livraison offerte débloquée !"
              : `Ajoutez ${eur(remain)} pour la livraison offerte`}
          </div>
          <Link
            href="/checkout"
            className={`btn btn--primary${ids.length === 0 ? " is-disabled" : ""}`}
            onClick={close}
            aria-disabled={ids.length === 0}
          >
            Passer la commande
          </Link>
        </div>
      </aside>
    </>
  );
}
