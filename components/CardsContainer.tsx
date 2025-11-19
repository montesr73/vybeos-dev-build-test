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
  const isHorizontal = layout === "horizontal";

  const containerStyles = {
    clipPath:
      "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)",
  };

  return (
    <div className="w-full flex justify-center mt-8">
      <div
        className="cards-bg w-[90%] max-w-6xl rounded-large p-8 md:p-12"
        style={containerStyles}
      >
        <ol
          className={`flex ${
            isHorizontal
              ? "flex-row items-center justify-between gap-8"
              : "flex-col items-center gap-10"
          } `}
        >
          {/* Desktop: show arrows between items */}
          {cards.map((card, idx) => (
            <li
              key={card.id}
              className={`${
                isHorizontal ? "flex flex-1" : "w-full flex justify-center"
              }`}
            >
              <CardItem card={card} index={idx} />
              {/* add arrow in horizontal layout except last */}
              {isHorizontal && idx < cards.length - 1 && (
                <div className="hidden md:flex items-center justify-center mx-4">
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
