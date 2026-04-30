import { StarRating } from "@/components/star-rating";
import type { Review } from "@/lib/reviews";

const avatarColors = [
  "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
];

const borderColors = [
  "border-red-200/60 dark:border-red-900/40",
  "border-green-200/60 dark:border-green-900/40",
  "border-yellow-200/60 dark:border-yellow-800/40",
  "border-teal-200/60 dark:border-teal-900/40",
  "border-orange-200/60 dark:border-orange-900/40",
  "border-pink-200/60 dark:border-pink-900/40",
];

function hashIndex(str: string, len: number) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash) % len;
}

export function ReviewCard({ review }: { review: Review }) {
  const initials = review.author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const colorIdx = hashIndex(review.author, avatarColors.length);

  return (
    <div className={`rounded-2xl border bg-white p-6 dark:bg-neutral-900 ${borderColors[colorIdx]}`}>
      <div className="flex items-start gap-3">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${avatarColors[colorIdx]}`}>
          {initials}
        </div>
        <div className="min-w-0">
          <p className="font-semibold">{review.author}</p>
          <p className="text-xs text-foreground/50">
            {review.badge && (
              <span className="mr-1 text-teal-600 dark:text-teal-400">
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
