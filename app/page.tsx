import type { Metadata } from "next";
import HomeContent from "./components/HomeContent";

export const metadata: Metadata = {
  title: "The Chemical Industry - Nano-Based Sustainable Premium Paints",
  description:
    "India's first nano-mineral paint combining luxury, science, and sustainability. VOC-free, LEED-certified, 10+ year durability.",
  alternates: {
    canonical: "https://thechemicalIndustry.com",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
