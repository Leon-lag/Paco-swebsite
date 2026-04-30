import type { Metadata } from "next";
import { menuCategories } from "@/lib/menu";

export const metadata: Metadata = { title: "Menu" };

const categoryColors = [
  {
    heading: "text-red-700 dark:text-red-400",
    border: "border-red-200/60 dark:border-red-900/40",
    cardBorder: "border-red-200/60 dark:border-red-900/40 hover:border-red-300 dark:hover:border-red-700",
    price: "text-red-600 dark:text-red-400",
  },
  {
    heading: "text-green-700 dark:text-green-400",
    border: "border-green-200/60 dark:border-green-900/40",
    cardBorder: "border-green-200/60 dark:border-green-900/40 hover:border-green-300 dark:hover:border-green-700",
    price: "text-green-600 dark:text-green-400",
  },
  {
    heading: "text-yellow-700 dark:text-yellow-400",
    border: "border-yellow-200/60 dark:border-yellow-800/40",
    cardBorder: "border-yellow-200/60 dark:border-yellow-800/40 hover:border-yellow-300 dark:hover:border-yellow-600",
    price: "text-yellow-600 dark:text-yellow-400",
  },
  {
    heading: "text-teal-700 dark:text-teal-400",
    border: "border-teal-200/60 dark:border-teal-900/40",
    cardBorder: "border-teal-200/60 dark:border-teal-900/40 hover:border-teal-300 dark:hover:border-teal-700",
    price: "text-teal-600 dark:text-teal-400",
  },
  {
    heading: "text-orange-700 dark:text-orange-400",
    border: "border-orange-200/60 dark:border-orange-900/40",
    cardBorder: "border-orange-200/60 dark:border-orange-900/40 hover:border-orange-300 dark:hover:border-orange-700",
    price: "text-orange-600 dark:text-orange-400",
  },
];

export default function MenuPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
        <span className="text-red-700 dark:text-red-400">Our </span>
        <span className="text-yellow-600 dark:text-yellow-400">Menu</span>
      </h1>
      <p className="mt-3 max-w-2xl text-foreground/60">
        Everything is made fresh daily with authentic Mexican recipes and the
        finest ingredients. Prices range from $10–$20 per person.
      </p>

      <div className="mt-12 space-y-12">
        {menuCategories.map((category, i) => {
          const colors = categoryColors[i % categoryColors.length];
          return (
            <section key={category.name}>
              <h2 className={`mb-6 text-2xl font-bold border-b pb-3 ${colors.heading} ${colors.border}`}>
                {category.name}
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className={`rounded-xl border p-5 transition-colors ${colors.cardBorder}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold">{item.name}</h3>
                      {item.price && (
                        <span className={`shrink-0 text-sm font-bold ${colors.price}`}>
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
          );
        })}
      </div>
    </div>
  );
}
