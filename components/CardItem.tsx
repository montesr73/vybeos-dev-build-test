import type { Card } from "../types";

interface Props {
  card: Card;
  index: number;
}

export default function CardItem({ card, index }: Props) {
  return (
    <article className="relative w-full max-w-xs bg-[color:var(--card-surface)] rounded-card shadow-card-lg p-6 border border-neutral-border">
      {/* black title block */}
      <div className="bg-black rounded-sm p-6 text-left text-white">
        <h3 className="font-pp-machina font-semibold text-xl leading-tight">
          {card.title.split("\n").map((line, i) => (
            <span
              key={i}
              className={i === 1 ? "text-brand-primary block" : "block"}
            >
              {line}
            </span>
          ))}
        </h3>
      </div>

      {/* description */}
      <p className="mt-4 font-pp-montreal text-sm text-neutral-muted">
        {card.description}
      </p>

      {/* index badge */}
      <div className="absolute bottom-4 right-4 w-8 h-8 flex items-center justify-center bg-brand-primary rounded-md text-black text-xs font-semibold">
        {String(index + 1).padStart(2, "0")}
      </div>
    </article>
  );
}
