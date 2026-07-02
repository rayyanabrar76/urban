import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function Shop() {
  return (
    <>
      <section className="sec" id="drops">
        <div className="wrap">
          <div className="sec__head">
            <div>
              <h2>Drops de la semaine</h2>
            </div>
            <Link href="/shop" className="view-all">
              Voir tout →
            </Link>
          </div>
          <div className="grid">
            {products.slice(0, 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
