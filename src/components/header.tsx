"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/lib/brand";

const nav = [
  { href: "/", label: "Home", color: "bg-red-600 hover:bg-red-700" },
  { href: "/menu", label: "Menu", color: "bg-green-600 hover:bg-green-700" },
  { href: "/reviews", label: "Reviews", color: "bg-yellow-500 hover:bg-yellow-600" },
  { href: "/contact", label: "Contact", color: "bg-teal-600 hover:bg-teal-700" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur dark:bg-neutral-950/90">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-black tracking-tight"
        >
          <span
            aria-hidden
            className="inline-flex h-8 w-8 items-center justify-center text-2xl"
          >
            🌮
          </span>
          <span className="text-red-800 dark:text-orange-300">
            {brand.name}
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  active
                    ? `${item.color} text-white`
                    : "text-foreground/80 hover:bg-orange-50 dark:hover:bg-neutral-800"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500" />
    </header>
  );
}
