import CardItem from "./CardItem";
import type { Card } from "../types";

interface Props {
  cards: Card[];
  layout?: "horizontal" | "vertical";
}

export default function CardsContainer({
  cards,
  layout = "horizontal",
}: Props) {
  const isHorizontal = layout === "horizontal";

  return (
    <div className="w-full flex justify-center mt-8">
      <div className="cards-bg w-[90%] max-w-6xl rounded-large p-8 md:p-12">
        <div
          className={`flex ${
            isHorizontal
              ? "flex-row items-center justify-between gap-8"
              : "flex-col items-center gap-10"
          } `}
        >
          {/* Desktop: show arrows between items */}
          {cards.map((card, idx) => (
            <div
              key={card.id}
              className={`${
                isHorizontal ? "flex-1" : "w-full flex justify-center"
              }`}
            >
              <CardItem card={card} index={idx} />
              {/* add arrow in horizontal layout except last */}
              {isHorizontal && idx < cards.length - 1 && (
                <div className="hidden md:flex items-center justify-center mx-4">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M5 12h14"
                      stroke="#3F3F3F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13 5l7 7-7 7"
                      stroke="#3F3F3F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
