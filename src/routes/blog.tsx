import { createFileRoute } from "@tanstack/react-router";
import { Heart, MessageCircle, Search, Tag } from "lucide-react";
import { PageBanner } from "@/components/bakery/PageBanner";
import { Ornament, Reveal } from "@/components/bakery/decor";
import { IMG, LOREM } from "@/lib/images";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog – Dolcetta Sweet Bakery" },
      {
        name: "description",
        content: "Stories, baking tips and sweet news from the Dolcetta bakery journal.",
      },
      { property: "og:title", content: "Blog – Dolcetta Sweet Bakery" },
      { property: "og:description", content: "News and baking notes from our kitchen." },
    ],
  }),
  component: Blog,
});

const POSTS = [
  { title: "Consequat vel donec", date: "04 Dec", likes: 12, cats: "Cakes, Tips" },
  { title: "Suspendisse potenti", date: "18 Nov", likes: 24, cats: "Macarons" },
  { title: "Vivamus sagittis lacus", date: "02 Nov", likes: 9, cats: "Cupcakes, News" },
];

const CATEGORIES = ["Cakes", "Cupcakes", "Macarons", "Recipes", "Sweet News"];

function Blog() {
  return (
    <>
      <PageBanner title="Blog Standard" crumb="Blog" />
      <section className="bg-white px-4 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            {POSTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <article className="mb-14">
                  <div className="relative overflow-hidden rounded-3xl">
                    <img
                      src={IMG.blog[i]}
                      alt={p.title}
                      loading="lazy"
                      className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <span className="absolute left-6 top-6 grid h-16 w-16 place-items-center rounded-full bg-white text-center leading-tight shadow-soft">
                      <span className="serif text-sm font-bold text-rose">
                        {p.date.split(" ")[0]}
                        <br />
                        <span className="text-[10px] uppercase tracking-widest text-body">
                          {p.date.split(" ")[1]}
                        </span>
                      </span>
                    </span>
                  </div>
                  <h2 className="script mt-6 text-center text-4xl">{p.title}</h2>
                  <p className="mt-2 flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.15em] text-body">
                    <span>by admin</span>
                    <span className="flex items-center gap-1">
                      <Heart className="h-3.5 w-3.5 text-rose" /> {p.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <Tag className="h-3.5 w-3.5 text-mint" /> {p.cats}
                    </span>
                  </p>
                  <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-relaxed text-body">
                    {LOREM}{" "}
                    <a href="#" className="serif font-bold italic text-rose hover:underline">
                      […]
                    </a>
                  </p>
                  <Ornament className="!mt-10 !h-8" />
                </article>
              </Reveal>
            ))}
          </div>

          <aside className="space-y-10">
            <div className="rounded-3xl bg-cream p-6">
              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-3">
                <Search className="h-4 w-4 text-mint" />
                <input placeholder="Search…" className="w-full bg-transparent text-sm outline-none" />
              </div>
            </div>
            <div>
              <h3 className="script mb-4 text-3xl">Gallery</h3>
              <div className="grid grid-cols-3 gap-2">
                {IMG.gallery.slice(0, 6).map((g, i) => (
                  <img
                    key={i}
                    src={g}
                    alt=""
                    loading="lazy"
                    className="aspect-square w-full rounded-xl object-cover transition-transform hover:scale-105"
                  />
                ))}
              </div>
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
            <div>
              <h3 className="script mb-4 text-3xl">Recent Posts</h3>
              <ul className="space-y-4">
                {POSTS.map((p, i) => (
                  <li key={p.title} className="flex items-center gap-3">
                    <img src={IMG.blog[i]} alt="" className="h-14 w-14 rounded-xl object-cover" />
                    <div className="min-w-0">
                      <p className="serif truncate text-sm font-bold text-ink">{p.title}</p>
                      <p className="flex items-center gap-1 text-xs text-body">
                        <MessageCircle className="h-3 w-3" /> {p.date}
                      </p>
                    </div>
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
