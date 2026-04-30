import Link from "next/link";
import { brand } from "@/lib/brand";
import { StarRating } from "@/components/star-rating";
import { ReviewCard } from "@/components/review-card";
import { reviews, reviewHighlights } from "@/lib/reviews";
import { menuCategories } from "@/lib/menu";

const menuCardColors = [
  "border-red-300/60 dark:border-red-800/60",
  "border-green-300/60 dark:border-green-800/60",
  "border-yellow-300/60 dark:border-yellow-700/60",
];

const menuHeadingColors = [
  "text-red-700 dark:text-red-400",
  "text-green-700 dark:text-green-400",
  "text-yellow-700 dark:text-yellow-400",
];

const highlightColors = [
  "bg-red-50 text-red-800 dark:bg-red-950/40 dark:text-red-200",
  "bg-green-50 text-green-800 dark:bg-green-950/40 dark:text-green-200",
  "bg-yellow-50 text-yellow-800 dark:bg-yellow-950/40 dark:text-yellow-200",
  "bg-orange-50 text-orange-800 dark:bg-orange-950/40 dark:text-orange-200",
  "bg-teal-50 text-teal-800 dark:bg-teal-950/40 dark:text-teal-200",
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-orange-200/40 dark:border-orange-900/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(220,38,38,0.10),transparent_50%),radial-gradient(ellipse_at_top_right,rgba(22,163,74,0.08),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(234,179,8,0.06),transparent_50%)]" />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-20 sm:px-6 sm:py-28">
          <div className="flex flex-wrap items-center gap-3 text-sm text-foreground/60">
            <span className="rounded-full bg-gradient-to-r from-red-100 to-orange-100 px-3 py-1 text-xs font-semibold text-red-700 dark:from-red-900/40 dark:to-orange-900/40 dark:text-red-300">
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
          <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl">
            <span className="text-red-700 dark:text-red-400">Paco&apos;s </span>
            <span className="text-yellow-600 dark:text-yellow-400">Tacos </span>
            <span className="text-green-700 dark:text-green-400">of Ogden</span>
          </h1>
          <p className="max-w-xl text-base text-foreground/70 sm:text-lg">
            {brand.shortDescription}
          </p>
          <p className="text-sm text-foreground/50">{brand.locatedIn}</p>
          <div className="flex flex-wrap items-center gap-2 text-sm text-foreground/60">
            {brand.services.map((s, i) => {
              const colors = [
                "border-red-300/60 text-red-700 dark:border-red-700/60 dark:text-red-300",
                "border-green-300/60 text-green-700 dark:border-green-700/60 dark:text-green-300",
                "border-yellow-300/60 text-yellow-700 dark:border-yellow-700/60 dark:text-yellow-300",
              ];
              return (
                <span
                  key={s}
                  className={`rounded-full border px-3 py-1 font-medium ${colors[i % colors.length]}`}
                >
                  {s}
                </span>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/menu"
              className="inline-flex h-12 items-center justify-center rounded-full bg-red-600 px-7 text-sm font-semibold uppercase tracking-wider text-white hover:bg-red-700 transition-colors"
            >
              View Menu
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-green-600 px-7 text-sm font-semibold uppercase tracking-wider text-white hover:bg-green-700 transition-colors"
            >
              Get Directions
            </Link>
            <a
              href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex h-12 items-center justify-center rounded-full bg-yellow-500 px-7 text-sm font-semibold uppercase tracking-wider text-yellow-900 hover:bg-yellow-600 transition-colors"
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
            color="text-red-600 dark:text-red-400"
            borderColor="border-red-200/60 dark:border-red-900/40"
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
            color="text-green-600 dark:text-green-400"
            borderColor="border-green-200/60 dark:border-green-900/40"
            icon={
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="Hours"
            body={brand.hours}
          />
          <InfoCard
            color="text-yellow-600 dark:text-yellow-400"
            borderColor="border-yellow-200/60 dark:border-yellow-900/40"
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
            className="text-sm font-semibold uppercase tracking-wider text-red-600 hover:underline dark:text-red-400"
          >
            Full menu &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuCategories.slice(0, 3).map((category, i) => (
            <div
              key={category.name}
              className={`rounded-2xl border p-5 ${menuCardColors[i % menuCardColors.length]}`}
            >
              <h3 className={`text-lg font-bold ${menuHeadingColors[i % menuHeadingColors.length]}`}>
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
            className="text-sm font-semibold uppercase tracking-wider text-green-700 hover:underline dark:text-green-400"
          >
            All reviews &rarr;
          </Link>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {reviewHighlights.map((h, i) => (
            <span
              key={h}
              className={`rounded-full px-4 py-2 text-sm ${highlightColors[i % highlightColors.length]}`}
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
  color,
  borderColor,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  color: string;
  borderColor: string;
}) {
  return (
    <div className={`flex items-start gap-4 rounded-2xl border p-5 ${borderColor}`}>
      <div className={color}>{icon}</div>
      <div>
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-foreground/70">{body}</p>
      </div>
    </div>
  );
}
