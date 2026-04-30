import Link from "next/link";
import { brand } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-amber-200/60 bg-amber-50/50 py-10 text-sm text-foreground/70 dark:border-amber-900/40 dark:bg-neutral-900/50">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <div>
          <div className="flex items-center gap-2 text-base font-black tracking-tight text-amber-900 dark:text-amber-400">
            <span
              aria-hidden
              className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-white text-xs"
            >
              P
            </span>
            {brand.name}
          </div>
          <p className="mt-2 max-w-sm">{brand.shortDescription}</p>
          <p className="mt-2">{brand.address}</p>
          <p className="text-xs text-foreground/50">{brand.locatedIn}</p>
          <p>
            <a
              href={`tel:${brand.phone.replace(/[^\d+]/g, "")}`}
              className="hover:underline"
            >
              {brand.phone}
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <Link href="/menu" className="hover:underline">
            Menu
          </Link>
          <Link href="/reviews" className="hover:underline">
            Reviews
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
        <div className="text-xs opacity-70">
          &copy; {brand.year} {brand.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
