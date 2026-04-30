import type { Metadata } from "next";
import { brand } from "@/lib/brand";

export const metadata: Metadata = { title: "Contact & Location" };

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-black tracking-tight sm:text-4xl text-red-900 dark:text-orange-50">
        Visit Us
      </h1>
      <p className="mt-3 max-w-2xl text-foreground/60">
        We&apos;re located inside the Chevron in Marriott-Slaterville, UT.
        Can&apos;t wait to serve you fresh, authentic Mexican food.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Map */}
        <div className="overflow-hidden rounded-2xl border border-orange-200/60 dark:border-orange-900/40">
          <iframe
            title="Paco's Tacos of Ogden location"
            src={`https://www.google.com/maps?q=${encodeURIComponent(brand.address)}&output=embed`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Details */}
        <div className="space-y-8">
          <Card
            title="Address"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          >
            <p>{brand.address}</p>
            <p className="mt-1 text-xs text-foreground/40">
              {brand.locatedIn}
            </p>
            <p className="mt-1 text-xs text-foreground/40">
              Plus code: {brand.plusCode}
            </p>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(brand.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-green-600 hover:underline dark:text-green-400"
            >
              Get Directions
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </Card>

          <Card
            title="Phone"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
          >
            <a
              href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}
              className="text-lg font-semibold text-green-600 hover:underline dark:text-green-400"
            >
              {brand.phone}
            </a>
          </Card>

          <Card
            title="Hours"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          >
            <p className="font-medium text-green-600 dark:text-green-400">
              {brand.hours}
            </p>
          </Card>

          <Card
            title="Services"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            }
          >
            <div className="flex flex-wrap gap-2">
              {brand.services.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700 dark:bg-red-900/40 dark:text-red-300"
                >
                  {s}
                </span>
              ))}
            </div>
          </Card>

          <Card
            title="Price Range"
            icon={
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          >
            <p>
              <span className="text-lg font-bold">{brand.priceRange}</span>
              <span className="ml-2 text-sm text-foreground/50">
                per person · Reported by 27 people
              </span>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Card({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-orange-200/60 p-5 dark:border-orange-900/40">
      <div className="flex items-center gap-2 text-red-600 dark:text-red-400 mb-3">
        {icon}
        <h2 className="font-semibold">{title}</h2>
      </div>
      <div className="text-sm text-foreground/80">{children}</div>
    </div>
  );
}
