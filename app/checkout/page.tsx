import type { Metadata } from "next";
import Checkout from "@/components/Checkout";

export const metadata: Metadata = {
  title: "Commande — Urban Store",
  description: "Finalisez votre commande en toute sécurité.",
};

export default function CheckoutPage() {
  return <Checkout />;
}
