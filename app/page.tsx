import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import Promo from "@/components/Promo";
import CategoryTiles from "@/components/CategoryTiles";
import Shop from "@/components/Shop";
import ShopCTA from "@/components/ShopCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Collection />
      <Promo />
      <CategoryTiles />
      <Shop />
      <ShopCTA />
    </>
  );
}
