import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProduct, catLabel } from "@/lib/products";
import { eur } from "@/lib/format";
import ProductImage from "@/components/ProductImage";
import AddToCartPanel from "@/components/AddToCartPanel";

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(Number(id));
  if (!product) return { title: "Produit introuvable — Urban Store" };
  return {
    title: `${product.name} — Urban Store`,
    description: product.desc,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(Number(id));
  if (!product) notFound();

  const discount = product.old
    ? Math.round((1 - product.price / product.old) * 100)
    : 0;

  const related = products
    .filter((p) => p.id !== product.id && p.cat === product.cat)
    .concat(products.filter((p) => p.id !== product.id && p.cat !== product.cat))
    .slice(0, 4);

  return (
    <>
      <section className="pdp">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Fil d'ariane">
            <Link href="/">Accueil</Link>
            <span>/</span>
            <Link href="/#drops">{catLabel(product.cat)}</Link>
            <span>/</span>
            <span style={{ color: "var(--muted)" }}>{product.name}</span>
          </nav>

          <div className="pdp__grid">
            <div className="pdp__media">
              <span className={`card__tag${product.hot ? " hot" : ""}`}>{product.tag}</span>
              <ProductImage src={product.img} alt={product.name} wm={product.wm} />
            </div>

            <div className="pdp__info">
              <div className="pdp__brand">{product.brand}</div>
              <h1 className="pdp__title">{product.name}</h1>
              <div className="pdp__price">
                {product.old && <s>{eur(product.old)}</s>}
                {eur(product.price)}
                {discount > 0 && <span className="save">−{discount}%</span>}
              </div>
              <p className="pdp__desc">{product.desc}</p>

              <AddToCartPanel id={product.id} />

              <div className="pdp__meta">
                <div>
                  <b>Livraison 48–72h</b> — offerte dès 80,00 € d&apos;achat
                </div>
                <div>
                  <b>Paiement sécurisé</b> — CB, PayPal &amp; Apple Pay
                </div>
                <div>
                  <b>Retours gratuits</b> — satisfait ou remboursé sous 14 jours
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pdp__related">
        <div className="wrap">
          <h2>Vous aimerez aussi</h2>
          <div className="rel-grid">
            {related.map((p) => (
              <Link href={`/product/${p.id}`} className="rel-card" key={p.id}>
                <div className="rel-card__img">
                  <span className={`card__tag${p.hot ? " hot" : ""}`}>{p.tag}</span>
                  <ProductImage src={p.img} alt={p.name} wm={p.wm} />
                </div>
                <div className="rel-card__name">{p.name}</div>
                <div className="rel-card__price">{eur(p.price)}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
