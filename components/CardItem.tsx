import type { Card } from "../types";

interface Props {
  card: Card;
  index: number;
}

export default function CardItem({ card, index }: Props) {
  const cardItemContainerStyles = {
    width: "clamp(275px, 20vw, 300px)",
  };
  const cardTitleBlockStyles = {
    clipPath: "polygon(20px 0, 100% 0, 100% 100%, 0 100%, 0 20px)",
  };
  const cardCornerStyles = {
    clipPath:
      "polygon(0 0, 100% 0, 0 100%);-webkit-clip-path:polygon(0 0, 100% 0, 0 100%)",
  };
  return (
    <article
      className="relative rounded-card shadow-card-lg px-3 py-3.5 border border-[#353535]  h-[500px]"
      style={cardItemContainerStyles}
    >
      {/* corner triangle */}
      <div
        className="absolute top-0 left-0 z-10 w-4 h-4 bg-[#b3ff94]"
        style={cardCornerStyles}
      />

      <div className="flex flex-col p-2 bg-(--card-surface) h-full">
        {/* black title block */}
        <div
          className="flex items-center justify-center h-1/2 bg-black rounded-sm p-6 text-center text-white"
          style={cardTitleBlockStyles}
        >
          <h3 className="font-pp-machina font-semibold text-[36px] leading-tight">
            {card.title.split("\n").map((line, i) => (
              <span
                key={i}
                className={`block ${
                  card.highlight && card.highlight.includes(line)
                    ? "text-[#b3ff94]"
                    : ""
                }`}
              >
                {line}
              </span>
            ))}
          </h3>
        </div>

        <div className="relative flex flex-col flex-1 p-4">
          {/* description */}
          <p className="mt-4 font-pp-montreal text-[15px] text-neutral-muted text-black">
            {card.description}
          </p>

          {/* index badge */}
          <div className="absolute bottom-4 right-4 bg-[#b3ff94] border-2 border-[#0e0f0e] rounded-md w-10 h-10 flex items-center justify-center text-black">
            <span className="text-[16px] text-[#0e0f0e] font-semibold">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
