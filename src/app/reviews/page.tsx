import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { reviews, reviewHighlights, popularTags } from "@/lib/reviews";
import { StarRating } from "@/components/star-rating";
import { ReviewCard } from "@/components/review-card";

export const metadata: Metadata = { title: "Reviews" };

const barColors = [
  "bg-green-500",
  "bg-teal-500",
  "bg-yellow-500",
  "bg-orange-500",
  "bg-red-500",
];

const highlightColors = [
  "bg-red-50 text-red-800 dark:bg-red-950/40 dark:text-red-200",
  "bg-green-50 text-green-800 dark:bg-green-950/40 dark:text-green-200",
  "bg-yellow-50 text-yellow-800 dark:bg-yellow-950/40 dark:text-yellow-200",
  "bg-orange-50 text-orange-800 dark:bg-orange-950/40 dark:text-orange-200",
  "bg-teal-50 text-teal-800 dark:bg-teal-950/40 dark:text-teal-200",
];

const tagColors = [
  "border-red-300/60 text-red-700 dark:border-red-700/60 dark:text-red-300",
  "border-green-300/60 text-green-700 dark:border-green-700/60 dark:text-green-300",
  "border-yellow-300/60 text-yellow-700 dark:border-yellow-700/60 dark:text-yellow-300",
  "border-teal-300/60 text-teal-700 dark:border-teal-700/60 dark:text-teal-300",
  "border-orange-300/60 text-orange-700 dark:border-orange-700/60 dark:text-orange-300",
  "border-pink-300/60 text-pink-700 dark:border-pink-700/60 dark:text-pink-300",
];

export default function ReviewsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
            <span className="text-green-700 dark:text-green-400">Customer </span>
            <span className="text-red-700 dark:text-red-400">Reviews</span>
          </h1>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-4xl font-black text-yellow-600 dark:text-yellow-400">{brand.rating}</span>
            <div>
              <StarRating rating={brand.rating} size="lg" />
              <p className="mt-1 text-sm text-foreground/60">
                {brand.reviewCount} reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rating Distribution */}
      <div className="mt-8 rounded-2xl border border-orange-200/60 p-6 dark:border-orange-900/40">
        <h2 className="font-semibold mb-4">Rating Breakdown</h2>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((stars, i) => {
            const counts: Record<number, number> = { 5: 380, 4: 138, 3: 69, 2: 42, 1: 62 };
            const count = counts[stars] ?? 0;
            const pct = (count / brand.reviewCount) * 100;
            return (
              <div key={stars} className="flex items-center gap-3 text-sm">
                <span className="w-4 text-right font-medium">{stars}</span>
                <StarRating rating={stars} size="sm" />
                <div className="flex-1 h-2.5 rounded-full bg-gray-100 dark:bg-neutral-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${barColors[i]}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="w-8 text-right text-foreground/50">{count}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-8">
        <h2 className="font-semibold mb-3">What People Love</h2>
        <div className="flex flex-wrap gap-3">
          {reviewHighlights.map((h, i) => (
            <span
              key={h}
              className={`rounded-full px-4 py-2 text-sm ${highlightColors[i % highlightColors.length]}`}
            >
              &ldquo;{h}&rdquo;
            </span>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="mt-6">
        <h2 className="font-semibold mb-3">Popular Mentions</h2>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag, i) => (
            <span
              key={tag.label}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium ${tagColors[i % tagColors.length]}`}
            >
              {tag.label}
              <span className="text-xs opacity-60">{tag.count}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="mt-10 space-y-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-r from-red-50 via-yellow-50 to-green-50 p-8 text-center dark:from-red-950/30 dark:via-yellow-950/30 dark:to-green-950/30">
        <p className="text-lg font-semibold text-red-800 dark:text-red-200">
          Enjoying your experience?
        </p>
        <p className="mt-2 text-sm text-foreground/60">
          We&apos;d love to hear from you! Leave us a review on Google.
        </p>
      </div>
    </div>
  );
}
