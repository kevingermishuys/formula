import { Star } from "lucide-react";
import { reviews } from "@/content/site";

export function ReviewsTicker() {
  const track = [...reviews, ...reviews];

  return (
    <div className="mt-10 overflow-hidden border-y border-ink/10 py-3">
      <div className="animate-marquee flex w-max items-center gap-10">
        {track.map((review, i) => (
          <div key={i} className="flex shrink-0 items-center gap-2 text-sm text-ink-soft">
            <Star className="h-3.5 w-3.5 shrink-0 fill-gold text-gold" strokeWidth={0} aria-hidden />
            <span className="italic text-ink">&ldquo;{review.quote}&rdquo;</span>
            <span className="whitespace-nowrap text-xs text-ink-soft/70">— {review.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
