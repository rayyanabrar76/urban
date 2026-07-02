import Link from "next/link";
import { categories } from "@/lib/products";

const imgByCat: Record<string, string> = {
  chaussures: "1595950653106-6c9ebd614d3a",
  vetements: "1521572163474-6864f9cf17ab",
  montres: "1523275335684-37898b6baf30",
  luxe: "1584917865442-de89df76afd3",
  maillots: "1517466787929-bc90951d0974",
};

const bg = (id: string) =>
  `url('https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1000&q=80'), linear-gradient(150deg,#2A2A31,#14141A)`;

export default function CategoryTiles() {
  const cats = categories.filter((c) => c.filter !== "all");
  const big = cats.slice(0, 2);
  const small = cats.slice(2);

  return (
    <section className="cattiles">
      <div className="wrap">
        <div className="sec__head">
          <div>
            <h2>Explorez par catégorie</h2>
          </div>
          <span className="sub">// Trouvez votre style</span>
        </div>

        <div className="cattiles__row cattiles__row--2">
          {big.map((c) => (
            <Link key={c.filter} href={`/shop?cat=${c.filter}`} className="cattile cattile--lg">
              <span className="cattile__media" style={{ backgroundImage: bg(imgByCat[c.filter]) }} />
              <span className="cattile__label">{c.label}</span>
              <span className="cattile__cta">Voir la sélection →</span>
            </Link>
          ))}
        </div>

        <div className="cattiles__row cattiles__row--3">
          {small.map((c) => (
            <Link key={c.filter} href={`/shop?cat=${c.filter}`} className="cattile cattile--sm">
              <span className="cattile__media" style={{ backgroundImage: bg(imgByCat[c.filter]) }} />
              <span className="cattile__label">{c.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
