import CardItem from "./CardItem";
import type { Card } from "../types";
import ArrowSVG from "./ArrowSVG";

interface Props {
  cards: Card[];
  layout?: "horizontal" | "vertical";
}

export default function CardsContainer({
  cards,
  layout = "horizontal",
}: Props) {
  const containerStyles = {
    clipPath:
      "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)",
  };

  return (
    <div className="w-full flex justify-center mt-8">
      <div
        className="cards-bg w-full max-w-[1440px] rounded-large p-8 md:p-12"
        style={containerStyles}
      >
        <ol
          className={`flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 md:gap-6`}
        >
          {/* Desktop: show arrows between items */}
          {cards.map((card, idx) => (
            <li
              key={card.id}
              className={`flex flex-col md:flex-row gap-y-8 items-center justify-center`}
            >
              <CardItem card={card} index={idx} />
              {/* add arrow in horizontal layout except last */}
              {idx < cards.length - 1 && (
                <div className="flex items-center justify-center mx-4 min-w-6 max-w-12 min-h-6 max-h-12 rotate-90 md:rotate-0">
                  <ArrowSVG />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
