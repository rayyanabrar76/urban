import { Suspense } from "react";
import type { Metadata } from "next";
import Catalog from "@/components/Catalog";

export const metadata: Metadata = {
  title: "Boutique — Urban Store",
  description: "Tous nos produits : sneakers, maillots, montres et pièces streetwear.",
};

export default function ShopPage() {
  return (
    <Suspense fallback={null}>
      <Catalog />
    </Suspense>
  );
}
