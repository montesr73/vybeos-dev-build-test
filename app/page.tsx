import HeroSection from "../components/HeroSection";
import CardsContainer from "../components/CardsContainer";
import type { Card } from "../types";

const cards: Card[] = [
  {
    id: 1,
    title: "Train\nYour\nBrand\nMemory",
    description:
      "Upload your site, assets, and product data. VybeOS builds a private brand memory that captures your tone and design DNA. No shared models, no data leaks.",
  },
  {
    id: 2,
    title: "Generate\nWith\nPrecision",
    description:
      "Create complete campaigns in one click. Every line and layout stays true to your brand’s identity, handcrafted quality, automated delivery.",
  },
  {
    id: 3,
    title: "Learn +\nRefine\nSafely",
    description:
      "Approve, adjust, and publish inside VybeOS. The system learns only from your edits, closing the loop between performance and creative consistency.",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-bg text-neutral-text">
      <div className="container mx-auto">
        <HeroSection />
        <CardsContainer cards={cards} />
      </div>
    </div>
  );
}
