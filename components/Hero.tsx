"use client";

import { useState, useEffect, useCallback } from "react";

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

const slides = [
  {
    img: img("1441984904996-e0b6ba687e04"),
    eyebrow: "Drop de la semaine",
    title: ["L'art du streetwear", "accessible"],
    lede: "Sneakers, maillots et pièces streetwear à des prix qui défient toute concurrence. Livré chez vous en 48–72h.",
    primary: "Découvrir la boutique",
    secondary: "Voir les nouveautés",
  },
  {
    img: img("1483985988355-763728e1935b"),
    eyebrow: "Nouvelle saison",
    title: ["La collection", "Été 26"],
    lede: "Les dernières pièces sélectionnées pour vous, en éditions et quantités limitées.",
    primary: "Voir la collection",
    secondary: "Nos nouveautés",
  },
  {
    img: img("1490481651871-ab68de25d43d"),
    eyebrow: "Sneakers & Maillots",
    title: ["Le terrain", "rencontre la rue"],
    lede: "Des silhouettes running aux maillots collector, trouvez votre pièce signature.",
    primary: "Explorer la boutique",
    secondary: "Les best-sellers",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const count = slides.length;
  const go = useCallback((d: number) => setCurrent((p) => (p + d + count) % count), [count]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const timer = setInterval(() => setCurrent((p) => (p + 1) % count), 6000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <section className="hero">
      <div className="hero__slider">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`hero__slide${idx === current ? " is-active" : ""}`}
            aria-hidden={idx !== current}
            style={{
              backgroundImage: `linear-gradient(180deg,rgba(20,20,26,0) 26%,rgba(20,20,26,.82) 100%),linear-gradient(90deg,rgba(20,20,26,.62),rgba(20,20,26,0) 60%),url('${s.img}')`,
            }}
          >
            <div className="hero__content wrap">
              <span className="eyebrow">{s.eyebrow}</span>
              <h1>
                {s.title[0]}
                <br />
                {s.title[1]}
              </h1>
              <p className="hero__lede">{s.lede}</p>
              <div className="cta-row">
                <a href="#drops" className="btn btn--light">
                  {s.primary}
                </a>
                <a href="#drops" className="btn btn--outline-light">
                  {s.secondary}
                </a>
              </div>
            </div>
          </div>
        ))}

        <button
          className="hero__arrow hero__arrow--prev"
          onClick={() => go(-1)}
          aria-label="Slide précédent"
        >
          ‹
        </button>
        <button
          className="hero__arrow hero__arrow--next"
          onClick={() => go(1)}
          aria-label="Slide suivant"
        >
          ›
        </button>

        <div className="hero__dots">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`hero__dot${idx === current ? " is-active" : ""}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Aller au slide ${idx + 1}`}
              aria-current={idx === current}
            />
          ))}
        </div>
      </div>

      <div className="hero__statsband">
        <div className="wrap hero__stats">
          <div className="stat">
            <b>6 200+</b>
            <span>Clients</span>
          </div>
          <div className="stat">
            <b>230+</b>
            <span>Références</span>
          </div>
          <div className="stat">
            <b>48h</b>
            <span>Livraison</span>
          </div>
        </div>
      </div>
    </section>
  );
}
