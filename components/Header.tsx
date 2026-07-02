"use client";

import Logo from "./Logo";
import { useCart } from "./CartContext";

export default function Header() {
  const { count, open } = useCart();

  return (
    <header>
      <div className="wrap nav">
        <Logo />

        <nav className="links">
          <a href="/#drops">Nouveautés</a>
          <a href="/#drops">Chaussures</a>
          <a href="/#drops">Vêtements</a>
          <a href="/#drops">Maillots</a>
          <a href="/#drops">Luxe</a>
          <a href="/#drops">Montres</a>
        </nav>

        <div className="nav__right">
          <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input type="search" placeholder="Rechercher" aria-label="Rechercher un produit" />
          </form>

          <button className="icon-btn search-toggle" aria-label="Rechercher">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>

          <button className="country" aria-label="Devise et région">
            FR · EUR €
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <span className="nav__divider" aria-hidden="true" />

          <button className="icon-btn" aria-label="Favoris">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
            </svg>
          </button>

          <button className="icon-btn cart-btn" id="cartBtn" aria-label="Ouvrir le panier" onClick={open}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className={`cart-count${count > 0 ? " show" : ""}`}>{count}</span>
          </button>

          <button className="icon-btn menu-toggle" aria-label="Menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
