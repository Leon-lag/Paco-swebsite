import type { Metadata } from "next";
import { menuCategories } from "@/lib/menu";

export const metadata: Metadata = { title: "Menu" };

export default function MenuPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-black tracking-tight sm:text-4xl text-red-900 dark:text-orange-50">
        Our Menu
      </h1>
      <p className="mt-3 max-w-2xl text-foreground/60">
        Everything is made fresh daily with authentic Mexican recipes and the
        finest ingredients. Prices range from $10–$20 per person.
      </p>

      <div className="mt-12 space-y-12">
        {menuCategories.map((category) => (
          <section key={category.name}>
            <h2 className="mb-6 text-2xl font-bold text-green-700 dark:text-green-400 border-b border-orange-200/60 pb-3 dark:border-orange-900/40">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="rounded-xl border border-orange-200/60 p-5 dark:border-orange-900/40 hover:border-orange-300 dark:hover:border-orange-700 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold">{item.name}</h3>
                    {item.price && (
                      <span className="shrink-0 text-sm font-bold text-red-600 dark:text-red-400">
                        {item.price}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
