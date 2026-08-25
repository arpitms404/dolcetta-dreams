import { createFileRoute } from "@tanstack/react-router";
import { Search, Star } from "lucide-react";
import { PageBanner } from "@/components/bakery/PageBanner";
import { CloudButton, Reveal } from "@/components/bakery/decor";
import { IMG } from "@/lib/images";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop – Dolcetta Sweet Bakery" },
      {
        name: "description",
        content: "Order cupcakes, macarons, cookie boxes and celebration cakes from the Dolcetta shop.",
      },
      { property: "og:title", content: "Shop – Dolcetta Sweet Bakery" },
      { property: "og:description", content: "Sweet products, freshly baked and beautifully boxed." },
    ],
  }),
  component: Shop,
});

const PRODUCTS = [
  { name: "Berry Layer Cake", price: 32, sale: true, rating: 5 },
  { name: "Glazed Donuts", price: 12, sale: false, rating: 4 },
  { name: "Vanilla Cupcakes", price: 18, sale: false, rating: 5 },
  { name: "Pastel Macarons", price: 24, sale: true, rating: 5 },
  { name: "Frosted Minis", price: 15, sale: false, rating: 4 },
  { name: "Chocolate Drip", price: 39, sale: false, rating: 5 },
  { name: "Rose Cupcakes", price: 21, sale: false, rating: 4 },
  { name: "Cookie Box", price: 16, sale: true, rating: 5 },
  { name: "Summer Gelato", price: 9, sale: false, rating: 4 },
];

const CATEGORIES = ["Cakes", "Cupcakes", "Macarons", "Cookies", "Ice Cream"];

function Shop() {
  return (
    <>
      <PageBanner title="Shop" crumb="Products" />
      <section className="bg-white px-4 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_300px]">
          <div>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-body">Showing all 12 results</p>
              <div className="flex flex-wrap items-center gap-3">
                <select className="rounded-full border border-border px-5 py-2.5 text-sm text-body outline-none">
                  <option>Default sorting</option>
                  <option>Sort by price</option>
                  <option>Sort by popularity</option>
                </select>
                <div className="flex items-center gap-2 rounded-full border border-border px-4 py-2.5">
                  <Search className="h-4 w-4 text-mint" />
                  <input
                    placeholder="Search products…"
                    className="w-40 bg-transparent text-sm outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((p, i) => (
                <Reveal key={p.name} delay={(i % 3) * 0.08}>
                  <div className="group text-center">
                    <div className="relative overflow-hidden rounded-3xl">
                      <img
                        src={IMG.products[i]}
                        alt={p.name}
                        loading="lazy"
                        className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {p.sale && (
                        <span className="absolute left-4 top-4 rounded-full bg-rose px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                          Sale!
                        </span>
                      )}
                      <span className="absolute inset-x-0 bottom-5 flex justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                        <CloudButton className="!min-w-0 !px-6 !py-2 !text-xs">
                          Add to cart
                        </CloudButton>
                      </span>
                    </div>
                    <h3 className="script mt-4 text-2xl">{p.name}</h3>
                    <p className="serif font-bold text-rose">${p.price}.00</p>
                    <div className="mt-1 flex justify-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star
                          key={s}
                          className={`h-3.5 w-3.5 ${
                            s < p.rating ? "fill-[#F5C451] text-[#F5C451]" : "text-border"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <aside className="space-y-10">
            <div className="rounded-3xl bg-cream p-6">
              <h3 className="script mb-3 text-3xl">Cart</h3>
              <p className="text-sm text-body">No products in the cart.</p>
            </div>
            <div>
              <h3 className="script mb-4 text-3xl">Filter by price</h3>
              <input type="range" min={5} max={100} defaultValue={55} className="w-full accent-[#EE6E9F]" />
              <p className="mt-2 text-sm text-body">Price: $5 — $55</p>
            </div>
            <div>
              <h3 className="script mb-4 text-3xl">Categories</h3>
              <ul className="space-y-2 text-sm text-body">
                {CATEGORIES.map((c) => (
                  <li key={c} className="border-b border-dashed border-border pb-2">
                    <a href="#" className="transition-colors hover:text-rose">
                      {c}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
