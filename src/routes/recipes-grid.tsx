import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { PageBanner } from "@/components/bakery/PageBanner";
import { Ornament, Reveal, SectionHeading } from "@/components/bakery/decor";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/recipes-grid")({
  head: () => ({
    meta: [
      { title: "Recipes Grid – Dolcetta Sweet Bakery" },
      {
        name: "description",
        content: "Browse Dolcetta's sweet recipes: red velvet cake, macarons, ice creams and cupcakes.",
      },
      { property: "og:title", content: "Recipes Grid – Dolcetta Sweet Bakery" },
      { property: "og:description", content: "A grid of our favourite bakery recipes." },
    ],
  }),
  component: RecipesGrid,
});

const RECIPES = [
  "Red Velvet Cake",
  "Avocado Ice Cream",
  "Vanilla Ice Cream",
  "Chocolate Macarons",
  "Homemade Ice Cream",
  "Endless Flavor Cupcakes",
];

function RecipesGrid() {
  return (
    <>
      <PageBanner title="Recipes Grid" crumb="Recipes Grid" />
      <section className="bg-white px-4 py-24">
        <SectionHeading title="Sweet Recipes" />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mb-14 grid max-w-5xl gap-3 rounded-3xl bg-cream p-4 sm:grid-cols-2 lg:grid-cols-[1fr_1.4fr_1fr_auto]"
        >
          <select className="rounded-full border border-border bg-white px-5 py-3 text-sm text-body outline-none">
            <option>Browse</option>
            <option>Cakes</option>
            <option>Macarons</option>
            <option>Ice Cream</option>
          </select>
          <input
            placeholder="Find a recipe…"
            className="rounded-full border border-border bg-white px-5 py-3 text-sm outline-none focus:border-mint"
          />
          <select className="rounded-full border border-border bg-white px-5 py-3 text-sm text-body outline-none">
            <option>Newest first</option>
            <option>Oldest first</option>
            <option>A – Z</option>
          </select>
          <button
            type="submit"
            aria-label="Search recipes"
            className="grid place-items-center rounded-full bg-rose px-6 py-3 text-white transition hover:scale-105"
          >
            <Search className="h-4 w-4" />
          </button>
        </form>

        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {RECIPES.map((name, i) => (
            <Reveal key={name} delay={(i % 3) * 0.1}>
              <article className="group overflow-hidden rounded-3xl bg-white shadow-soft transition-transform duration-300 hover:-translate-y-2">
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={IMG.recipes[i]}
                    alt={name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-[#453A3A]/35" />
                  <h3 className="script absolute inset-x-0 bottom-5 text-center text-3xl text-white">
                    {name}
                  </h3>
                </div>
                <div className="px-6 py-6 text-center">
                  <Ornament className="!mb-2 !h-7" />
                  <p className="text-xs uppercase tracking-[0.2em] text-body">By admin</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
