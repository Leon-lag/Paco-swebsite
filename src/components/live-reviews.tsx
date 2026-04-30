"use client";

import { useCallback, useEffect, useState } from "react";
import { StarRating } from "@/components/star-rating";

const API_URL = "https://pacos-reviews-api-iclooqoo.fly.dev";
const POLL_INTERVAL = 8000;

interface LiveReview {
  id: string;
  author: string;
  rating: number;
  text: string;
  created_at: number;
}

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

function timeAgo(ts: number): string {
  const diff = Date.now() / 1000 - ts;
  if (diff < 60) return "just now";
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  if (diff < 604800) return `${Math.floor(diff / 86400)}d ago`;
  return new Date(ts * 1000).toLocaleDateString();
}

function LiveReviewCard({ review }: { review: LiveReview }) {
  const initials = review.author
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const idx = hashIndex(review.author, avatarColors.length);

  return (
    <div
      className={`rounded-2xl border bg-white p-6 dark:bg-neutral-900 ${borderColors[idx]} animate-[fadeIn_0.4s_ease-out]`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${avatarColors[idx]}`}
        >
          {initials}
        </div>
        <div className="min-w-0">
          <p className="font-semibold">{review.author}</p>
        </div>
        <span className="ml-auto shrink-0 text-xs text-foreground/50">
          {timeAgo(review.created_at)}
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

export function LiveReviews() {
  const [reviews, setReviews] = useState<LiveReview[]>([]);
  const [loading, setLoading] = useState(true);

  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState("");
  const [submitError, setSubmitError] = useState(false);

  const fetchReviews = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/reviews`);
      if (res.ok) {
        const data: LiveReview[] = await res.json();
        setReviews(data);
      }
    } catch {
      /* network error — keep existing */
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(`${API_URL}/reviews`);
        if (!cancelled && res.ok) {
          const data: LiveReview[] = await res.json();
          setReviews(data);
        }
      } catch {
        /* network error */
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    const interval = setInterval(load, POLL_INTERVAL);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) return;
    setSubmitting(true);
    setSubmitMsg("");
    setSubmitError(false);
    try {
      const res = await fetch(`${API_URL}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author: author.trim(), rating, text: text.trim() }),
      });
      if (res.ok) {
        setAuthor("");
        setRating(5);
        setText("");
        setSubmitMsg("Review submitted! It will appear below.");
        await fetchReviews();
        setTimeout(() => setSubmitMsg(""), 4000);
      } else {
        setSubmitError(true);
        setSubmitMsg("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitError(true);
      setSubmitMsg("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Submit Form */}
      <div className="rounded-2xl border-2 border-dashed border-orange-300/60 bg-orange-50/30 p-6 dark:border-orange-700/40 dark:bg-orange-950/10">
        <h3 className="text-lg font-bold text-red-700 dark:text-red-400 mb-4">
          Leave a Review
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="review-author" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                id="review-author"
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="John Doe"
                maxLength={100}
                required
                className="w-full rounded-lg border border-orange-300/60 bg-white px-3 py-2 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-200 dark:border-orange-700/40 dark:bg-neutral-900 dark:focus:ring-red-900"
              />
            </div>
            <div>
              <label htmlFor="review-rating" className="block text-sm font-medium mb-1">
                Rating
              </label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="focus:outline-none"
                    aria-label={`${star} star${star > 1 ? "s" : ""}`}
                  >
                    <svg
                      className={`h-8 w-8 transition-colors ${
                        star <= rating
                          ? "text-amber-400 hover:text-amber-500"
                          : "text-gray-300 hover:text-gray-400"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
                <span className="ml-2 text-sm text-foreground/60">{rating}/5</span>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="review-text" className="block text-sm font-medium mb-1">
              Your Review
            </label>
            <textarea
              id="review-text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Tell us about your experience..."
              maxLength={2000}
              required
              rows={3}
              className="w-full rounded-lg border border-orange-300/60 bg-white px-3 py-2 text-sm outline-none focus:border-red-400 focus:ring-2 focus:ring-red-200 dark:border-orange-700/40 dark:bg-neutral-900 dark:focus:ring-red-900"
            />
          </div>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex h-10 items-center justify-center rounded-full bg-red-600 px-6 text-sm font-semibold text-white hover:bg-red-700 transition-colors disabled:opacity-50"
            >
              {submitting ? "Submitting..." : "Submit Review"}
            </button>
            {submitMsg && (
              <p className={`text-sm font-medium ${submitError ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}>
                {submitMsg}
              </p>
            )}
          </div>
        </form>
      </div>

      {/* Live Reviews List */}
      <div className="mt-10">
        <div className="flex items-center gap-3 mb-6">
          <h3 className="text-xl font-bold text-green-700 dark:text-green-400">
            Live Reviews
          </h3>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
          </span>
          <span className="text-xs text-foreground/50">Updates automatically</span>
        </div>

        {loading ? (
          <div className="text-center py-8 text-foreground/50">Loading reviews...</div>
        ) : reviews.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-green-300/60 p-8 text-center dark:border-green-800/40">
            <p className="text-foreground/50">
              No reviews yet. Be the first to leave one!
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {reviews.map((review) => (
              <LiveReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
