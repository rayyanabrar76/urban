import Link from "next/link";

export default function ShopCTA() {
  return (
    <section className="shopcta">
      <div className="wrap">
        <Link href="/shop" className="btn btn--dark shopcta__btn">
          Voir toutes les nouveautés
        </Link>
      </div>
    </section>
  );
}
