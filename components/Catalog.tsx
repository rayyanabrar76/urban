"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories } from "@/lib/products";
import ProductCard from "./ProductCard";

const brands = Array.from(new Set(products.map((p) => p.brand)));

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Catalog() {
  const params = useSearchParams();
  const catParam = params.get("cat");
  const initialCat = categories.some((c) => c.filter === catParam) ? (catParam as string) : "all";

  const [cat, setCat] = useState(initialCat);
  const [brand, setBrand] = useState("all");
  const [sale, setSale] = useState(false);
  const [openCat, setOpenCat] = useState(true);
  const [openBrand, setOpenBrand] = useState(true);

  const list = products.filter(
    (p) =>
      (cat === "all" || p.cat === cat) &&
      (brand === "all" || p.brand === brand) &&
      (!sale || p.old != null)
  );

  return (
    <section className="shoppage">
      <div className="wrap">
        <div className="shoppage__head">
          <div>
            <span className="shoppage__eyebrow">Boutique</span>
            <h1>Tous les produits</h1>
          </div>
          <p className="shoppage__count">
            {list.length} article{list.length > 1 ? "s" : ""}
          </p>
        </div>

        <div className="shoppage__layout">
          <aside className="shopside">
            <div className="shopside__group">
              <button
                className="shopside__title"
                onClick={() => setOpenCat((o) => !o)}
                aria-expanded={openCat}
              >
                Catégories
                <Chevron />
              </button>
              {openCat && (
                <div className="shopside__list">
                  <button className={cat === "all" ? "active" : ""} onClick={() => setCat("all")}>
                    Tout
                  </button>
                  {categories
                    .filter((c) => c.filter !== "all")
                    .map((c) => (
                      <button
                        key={c.filter}
                        className={cat === c.filter ? "active" : ""}
                        onClick={() => setCat(c.filter)}
                      >
                        {c.label}
                      </button>
                    ))}
                </div>
              )}
            </div>

            <div className="shopside__group">
              <button
                className="shopside__title"
                onClick={() => setOpenBrand((o) => !o)}
                aria-expanded={openBrand}
              >
                Marques
                <Chevron />
              </button>
              {openBrand && (
                <div className="shopside__list">
                  <button className={brand === "all" ? "active" : ""} onClick={() => setBrand("all")}>
                    Toutes
                  </button>
                  {brands.map((b) => (
                    <button key={b} className={brand === b ? "active" : ""} onClick={() => setBrand(b)}>
                      {b}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="shopside__group">
              <button
                className={`shopside__sale${sale ? " active" : ""}`}
                onClick={() => setSale((s) => !s)}
              >
                Promotions
              </button>
            </div>
          </aside>

          <div className="shoppage__main">
            {list.length ? (
              <div className="grid shop-grid">
                {list.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            ) : (
              <p className="shoppage__empty">Aucun produit ne correspond à ces filtres.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
