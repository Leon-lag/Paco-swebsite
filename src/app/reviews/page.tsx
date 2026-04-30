import type { Metadata } from "next";
import { brand } from "@/lib/brand";
import { reviews, reviewHighlights, popularTags } from "@/lib/reviews";
import { StarRating } from "@/components/star-rating";
import { ReviewCard } from "@/components/review-card";

export const metadata: Metadata = { title: "Reviews" };

export default function ReviewsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-black tracking-tight sm:text-4xl text-amber-900 dark:text-amber-50">
            Customer Reviews
          </h1>
          <div className="mt-3 flex items-center gap-3">
            <span className="text-4xl font-black">{brand.rating}</span>
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
      <div className="mt-8 rounded-2xl border border-amber-200/60 p-6 dark:border-amber-900/40">
        <h2 className="font-semibold mb-4">Rating Breakdown</h2>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((stars) => {
            const counts: Record<number, number> = { 5: 380, 4: 138, 3: 69, 2: 42, 1: 62 };
            const count = counts[stars] ?? 0;
            const pct = (count / brand.reviewCount) * 100;
            return (
              <div key={stars} className="flex items-center gap-3 text-sm">
                <span className="w-4 text-right font-medium">{stars}</span>
                <StarRating rating={stars} size="sm" />
                <div className="flex-1 h-2.5 rounded-full bg-gray-100 dark:bg-neutral-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-amber-400"
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
          {reviewHighlights.map((h) => (
            <span
              key={h}
              className="rounded-full bg-amber-50 px-4 py-2 text-sm text-amber-800 dark:bg-amber-950/40 dark:text-amber-200"
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
          {popularTags.map((tag) => (
            <span
              key={tag.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/60 px-3 py-1 text-sm dark:border-amber-800/60"
            >
              {tag.label}
              <span className="text-xs text-foreground/40">{tag.count}</span>
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

      <div className="mt-10 rounded-2xl bg-amber-50/70 p-8 text-center dark:bg-amber-950/30">
        <p className="text-lg font-semibold text-amber-800 dark:text-amber-200">
          Enjoying your experience?
        </p>
        <p className="mt-2 text-sm text-foreground/60">
          We&apos;d love to hear from you! Leave us a review on Google.
        </p>
      </div>
    </div>
  );
}
