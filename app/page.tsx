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
        {/* Desktop horizontal layout, mobile vertical layout */}
        <div className="hidden md:block">
          <CardsContainer cards={cards} layout="horizontal" />
        </div>

        <div className="md:hidden">
          {/* For mobile, we want a stacked version that visually mirrors the right-side mobile column in your screenshot */}
          <section className="px-4 mt-8">
            <div className="cards-bg w-full rounded-large p-6">
              <div className="flex flex-col items-center gap-8">
                {cards.map((c, idx) => (
                  <div key={c.id} className="w-full flex justify-center">
                    {/* Use CardItem rendered full width */}
                    <div className="w-full max-w-xs">
                      {/* Reuse CardItem, but we want the index badge and spacing maintained */}
                      {/* Simpler inline usage to avoid circular import in this small demo */}
                      <article className="relative w-full bg-(--card-surface) rounded-card shadow-card-lg p-6 border border-neutral-border">
                        <div className="bg-black rounded-sm p-6 text-left text-white">
                          <h3 className="font-pp-machina font-semibold text-xl leading-tight">
                            {c.title.split("\n").map((line, i) => (
                              <span
                                key={i}
                                className={
                                  i === 1 ? "text-brand-primary block" : "block"
                                }
                              >
                                {line}
                              </span>
                            ))}
                          </h3>
                        </div>
                        <p className="mt-4 font-pp-montreal text-sm text-neutral-muted">
                          {c.description}
                        </p>
                        <div className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center bg-brand-primary rounded-md text-black text-xs font-semibold">
                          {String(idx + 1).padStart(2, "0")}
                        </div>
                      </article>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* decorative / uploaded reference image (from your provided path) */}
        {/* <div className="mt-12 px-6">
          <img
            src={"/mnt/data/Dev Build Test.png"}
            alt="Figma frame reference"
            className="mx-auto max-w-full h-auto border border-neutral-border"
          />
        </div> */}
      </div>
    </div>
  );
}
