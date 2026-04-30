import Link from "next/link";
import { brand } from "@/lib/brand";
import { StarRating } from "@/components/star-rating";
import { ReviewCard } from "@/components/review-card";
import { reviews, reviewHighlights } from "@/lib/reviews";
import { menuCategories } from "@/lib/menu";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-amber-200/40 dark:border-amber-900/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.12),transparent_60%)]" />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-20 sm:px-6 sm:py-28">
          <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/60">
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-300">
              Mexican Restaurant
            </span>
            <span>{brand.priceRange}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <StarRating rating={brand.rating} size="sm" />
              <span className="font-semibold text-foreground">
                {brand.rating}
              </span>
              <span>({brand.reviewCount})</span>
            </span>
          </div>
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-amber-900 sm:text-6xl dark:text-amber-50">
            {brand.name}
          </h1>
          <p className="max-w-xl text-base text-foreground/70 sm:text-lg">
            {brand.shortDescription}
          </p>
          <p className="text-sm text-foreground/50">{brand.locatedIn}</p>
          <div className="flex flex-wrap items-center gap-2 text-sm text-foreground/60">
            {brand.services.map((s) => (
              <span
                key={s}
                className="rounded-full border border-amber-300/60 px-3 py-1 dark:border-amber-800/60"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/menu"
              className="inline-flex h-12 items-center justify-center rounded-full bg-amber-500 px-7 text-sm font-semibold uppercase tracking-wider text-white hover:bg-amber-600 transition-colors"
            >
              View Menu
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-amber-400/40 px-7 text-sm font-semibold uppercase tracking-wider hover:bg-amber-50 dark:border-amber-700/40 dark:hover:bg-amber-900/20 transition-colors"
            >
              Get Directions
            </Link>
            <a
              href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex h-12 items-center justify-center rounded-full border border-amber-400/40 px-7 text-sm font-semibold uppercase tracking-wider hover:bg-amber-50 dark:border-amber-700/40 dark:hover:bg-amber-900/20 transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <InfoCard
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
            title="Location"
            body={brand.address}
          />
          <InfoCard
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="Hours"
            body={brand.hours}
          />
          <InfoCard
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
            title="Phone"
            body={brand.phone}
          />
        </div>
      </section>

      {/* Menu Preview */}
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Our Menu
          </h2>
          <Link
            href="/menu"
            className="text-sm font-semibold uppercase tracking-wider text-amber-600 hover:underline dark:text-amber-400"
          >
            Full menu &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuCategories.slice(0, 3).map((category) => (
            <div
              key={category.name}
              className="rounded-2xl border border-amber-200/60 p-5 dark:border-amber-900/40"
            >
              <h3 className="text-lg font-bold text-amber-700 dark:text-amber-400">
                {category.name}
              </h3>
              <ul className="mt-3 space-y-2">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-foreground/60 leading-relaxed">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Review Highlights */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              What People Say
            </h2>
            <div className="mt-2 flex items-center gap-2">
              <StarRating rating={brand.rating} />
              <span className="text-lg font-bold">{brand.rating}</span>
              <span className="text-foreground/60">
                ({brand.reviewCount} reviews)
              </span>
            </div>
          </div>
          <Link
            href="/reviews"
            className="text-sm font-semibold uppercase tracking-wider text-amber-600 hover:underline dark:text-amber-400"
          >
            All reviews &rarr;
          </Link>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {reviewHighlights.map((h) => (
            <span
              key={h}
              className="rounded-full bg-amber-50 px-4 py-2 text-sm text-amber-800 dark:bg-amber-950/40 dark:text-amber-200"
            >
              &ldquo;{h}&rdquo;
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-amber-200/60 p-5 dark:border-amber-900/40">
      <div className="text-amber-500">{icon}</div>
      <div>
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-foreground/70">{body}</p>
      </div>
    </div>
  );
}
