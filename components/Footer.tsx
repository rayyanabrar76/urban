"use client";

import { useState } from "react";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer>
      <div className="wrap foot__inner">
        <div className="foot__news">
          <span className="foot__label">S&apos;inscrire à la newsletter</span>
          <form
            className="foot__sub"
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
          >
            <input
              type="email"
              placeholder={subscribed ? "Inscrit ✓" : "Email"}
              aria-label="Votre email"
              required
            />
            <button type="submit" aria-label="S'inscrire">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17 17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </button>
          </form>
          <div className="foot__socials">
            <a
              href="https://instagram.com/_1urban_store"
              target="_blank"
              rel="noopener"
              aria-label="Instagram @_1urban_store"
            >
              <svg viewBox="0 0 24 24" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="Snapchat urban_store570">
              <svg viewBox="0 0 24 24" strokeWidth="2">
                <path d="M12 2c2.8 0 4.5 2 4.5 4.8 0 1 .2 2.4.5 3 .3.5 1 .8 1.7 1 .5.2.8.5.8.9 0 .5-.6.8-1.5 1.1-.4.1-.6.3-.4.8.3.9 1.3 1.9 2.6 2.3.4.1.5.5.2.8-.7.7-2 .9-2.8 1-.2 0-.3.2-.4.5-.1.5-.3.9-.9.9-.6 0-1.3-.4-2.4-.4-1 0-1.6.6-3.2 1.6-.4.2-.9.2-1.3 0-1.6-1-2.2-1.6-3.2-1.6-1.1 0-1.8.4-2.4.4-.6 0-.8-.4-.9-.9-.1-.3-.2-.5-.4-.5-.8-.1-2.1-.3-2.8-1-.3-.3-.2-.7.2-.8 1.3-.4 2.3-1.4 2.6-2.3.2-.5 0-.7-.4-.8-.9-.3-1.5-.6-1.5-1.1 0-.4.3-.7.8-.9.7-.2 1.4-.5 1.7-1 .3-.6.5-2 .5-3C7.5 4 9.2 2 12 2z" />
              </svg>
            </a>
            <a href="#" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" strokeWidth="2">
                <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 21l2.1-5.3A8.5 8.5 0 1 1 21 11.5z" />
                <path d="M8.5 9c.5 2 2.5 4 4.5 4.5" />
              </svg>
            </a>
          </div>
        </div>

        <nav className="foot__links">
          <a href="/shop">Boutique</a>
          <a href="#">Contact</a>
          <a href="#">Livraison &amp; Retours</a>
          <a href="#">Mentions légales</a>
          <a href="#">Confidentialité</a>
        </nav>

        <div className="foot__copy">
          © 2026 Urban Store
          <br />
          Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
