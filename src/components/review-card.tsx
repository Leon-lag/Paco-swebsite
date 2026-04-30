import { StarRating } from "@/components/star-rating";
import type { Review } from "@/lib/reviews";

export function ReviewCard({ review }: { review: Review }) {
  const initials = review.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className="rounded-2xl border border-amber-200/60 bg-white p-6 dark:border-amber-900/40 dark:bg-neutral-900">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="font-semibold">{review.author}</p>
          <p className="text-xs text-foreground/50">
            {review.badge && (
              <span className="mr-1 text-amber-600 dark:text-amber-400">
                {review.badge} ·{" "}
              </span>
            )}
            {review.reviewCount}
            {review.photoCount ? ` · ${review.photoCount}` : ""}
          </p>
        </div>
        <span className="ml-auto shrink-0 text-xs text-foreground/50">
          {review.timeAgo}
        </span>
      </div>
      <div className="mt-3">
        <StarRating rating={review.rating} size="sm" />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
        {review.text}
      </p>
    </div>
  );
}
