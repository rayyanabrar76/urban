"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import { eur } from "@/lib/format";
import { useCart } from "./CartContext";
import ProductImage from "./ProductImage";

const SHIP_THRESHOLD = 80;
const SHIP_FEE = 4.99;

export default function Checkout() {
  const { cart, total, clear } = useCart();
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState(false);
  const [orderNo, setOrderNo] = useState<string | null>(null);

  const lines = Object.keys(cart)
    .map((id) => ({ p: products.find((x) => x.id === Number(id)), q: cart[Number(id)] }))
    .filter((l): l is { p: (typeof products)[number]; q: number } => Boolean(l.p));

  const discount = promoApplied ? 10 : 0;
  const shipping = total === 0 || total >= SHIP_THRESHOLD ? 0 : SHIP_FEE;
  const grandTotal = Math.max(0, total - discount) + shipping;

  const applyPromo = () => {
    if (promo.trim().toUpperCase() === "URBAN10") {
      setPromoApplied(true);
      setPromoError(false);
    } else {
      setPromoApplied(false);
      setPromoError(true);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setOrderNo("US-" + Date.now().toString().slice(-8));
    clear();
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ---- Confirmation ---- */
  if (orderNo) {
    return (
      <section className="checkout co-confirm">
        <div className="wrap">
          <div className="co-confirm__box">
            <div className="co-confirm__check">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h1>Merci pour votre commande&nbsp;!</h1>
            <p>
              Votre commande <b>{orderNo}</b> a bien été enregistrée. Un email de confirmation
              vient de vous être envoyé. Livraison estimée sous 48–72h.
            </p>
            <Link href="/#drops" className="btn btn--primary">
              Continuer mes achats
            </Link>
          </div>
        </div>
      </section>
    );
  }

  /* ---- Empty cart ---- */
  if (!lines.length) {
    return (
      <section className="checkout co-empty">
        <div className="wrap">
          <div className="co-empty__box">
            <h1>Votre panier est vide</h1>
            <p>Ajoutez quelques pièces avant de passer commande.</p>
            <Link href="/#drops" className="btn btn--primary">
              Découvrir la boutique
            </Link>
          </div>
        </div>
      </section>
    );
  }

  /* ---- Checkout ---- */
  return (
    <section className="checkout">
      <div className="wrap">
        <nav className="breadcrumb" aria-label="Fil d'ariane">
          <Link href="/">Accueil</Link>
          <span>/</span>
          <span style={{ color: "var(--muted)" }}>Commande</span>
        </nav>
        <h1 className="checkout__title">Finaliser la commande</h1>

        <form className="checkout__grid" onSubmit={handleSubmit}>
          <div className="checkout__form">
            <div className="co-sec">
              <h3>Contact</h3>
              <div className="field">
                <label htmlFor="email">Adresse email</label>
                <input id="email" className="co-input" type="email" placeholder="vous@email.com" required />
              </div>
            </div>

            <div className="co-sec">
              <h3>Livraison</h3>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="fn">Prénom</label>
                  <input id="fn" className="co-input" type="text" autoComplete="given-name" required />
                </div>
                <div className="field">
                  <label htmlFor="ln">Nom</label>
                  <input id="ln" className="co-input" type="text" autoComplete="family-name" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="addr">Adresse</label>
                <input id="addr" className="co-input" type="text" autoComplete="street-address" required />
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="zip">Code postal</label>
                  <input id="zip" className="co-input" type="text" autoComplete="postal-code" required />
                </div>
                <div className="field">
                  <label htmlFor="city">Ville</label>
                  <input id="city" className="co-input" type="text" autoComplete="address-level2" required />
                </div>
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="country">Pays</label>
                  <input id="country" className="co-input" type="text" defaultValue="France" required />
                </div>
                <div className="field">
                  <label htmlFor="phone">Téléphone</label>
                  <input id="phone" className="co-input" type="tel" autoComplete="tel" required />
                </div>
              </div>
            </div>

            <div className="co-sec">
              <h3>Paiement</h3>
              <div className="field">
                <label htmlFor="card">Numéro de carte</label>
                <input
                  id="card"
                  className="co-input"
                  type="text"
                  inputMode="numeric"
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="exp">Expiration</label>
                  <input id="exp" className="co-input" type="text" placeholder="MM/AA" required />
                </div>
                <div className="field">
                  <label htmlFor="cvc">CVC</label>
                  <input id="cvc" className="co-input" type="text" inputMode="numeric" placeholder="123" required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="holder">Titulaire de la carte</label>
                <input id="holder" className="co-input" type="text" required />
              </div>
              <p className="co-secure">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Paiement chiffré &amp; 100% sécurisé. Ceci est une démo — aucune carte n&apos;est débitée.
              </p>
            </div>
          </div>

          <aside className="checkout__summary">
            <h3>Votre commande</h3>
            <div className="co-lines">
              {lines.map(({ p, q }) => (
                <div className="co-line" key={p.id}>
                  <div className="co-line__thumb">
                    <span className="co-line__qty">{q}</span>
                    <ProductImage src={p.img} alt={p.name} wm={p.wm} />
                  </div>
                  <div className="co-line__info">
                    <b>{p.name}</b>
                    <span>{p.brand}</span>
                  </div>
                  <span className="co-line__price">{eur(p.price * q)}</span>
                </div>
              ))}
            </div>

            <div className="co-promo">
              <input
                className="co-input"
                type="text"
                placeholder="Code promo"
                value={promo}
                onChange={(e) => setPromo(e.target.value)}
              />
              <button type="button" onClick={applyPromo}>
                Appliquer
              </button>
            </div>
            {promoApplied && <p className="co-promo__ok">Code URBAN10 appliqué — 10,00 € offerts.</p>}
            {promoError && <p className="co-promo__err">Code promo invalide.</p>}

            <div className="co-totals">
              <div className="sum-line">
                <span>Sous-total</span>
                <b>{eur(total)}</b>
              </div>
              {discount > 0 && (
                <div className="sum-line sum-line--discount">
                  <span>Remise</span>
                  <b>−{eur(discount)}</b>
                </div>
              )}
              <div className="sum-line">
                <span>Livraison</span>
                <b>{shipping === 0 ? "Offerte" : eur(shipping)}</b>
              </div>
              <div className="sum-line sum-line--total">
                <span>Total</span>
                <b>{eur(grandTotal)}</b>
              </div>
            </div>

            <button type="submit" className="btn btn--primary co-place">
              Payer {eur(grandTotal)}
            </button>
            <Link href="/#drops" className="co-back">
              ← Continuer mes achats
            </Link>
          </aside>
        </form>
      </div>
    </section>
  );
}
