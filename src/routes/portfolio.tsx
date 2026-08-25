import { createFileRoute } from "@tanstack/react-router";
import { ZoomIn } from "lucide-react";
import { useState } from "react";
import { PageBanner } from "@/components/bakery/PageBanner";
import { Reveal, SectionHeading } from "@/components/bakery/decor";
import { Lightbox } from "@/components/bakery/Lightbox";
import { IMG, LOREM } from "@/lib/images";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio – Dolcetta Sweet Bakery" },
      {
        name: "description",
        content: "A masonry gallery of cakes, macarons and pastries created in the Dolcetta kitchen.",
      },
      { property: "og:title", content: "Portfolio – Dolcetta Sweet Bakery" },
      { property: "og:description", content: "Our sweetest creations, in pictures." },
    ],
  }),
  component: Portfolio,
});

const TITLES = [
  "Berry Layer Cake",
  "Pastel Macarons",
  "Vanilla Cupcakes",
  "Wedding Tier",
  "Frosted Minis",
  "Chocolate Drip",
  "Rose Cupcakes",
  "Cookie Boxes",
  "Summer Gelato",
];

function Portfolio() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <PageBanner title="Portfolio Masonry" crumb="Portfolio" />
      <section className="bg-white px-4 py-24">
        <SectionHeading title="Our Creations" subtitle={LOREM} />
        <div className="mx-auto max-w-6xl columns-1 gap-6 sm:columns-2 lg:columns-3">
          {IMG.portfolio.map((src, i) => (
            <Reveal key={src + i} delay={(i % 3) * 0.08} className="mb-6 break-inside-avoid">
              <button
                onClick={() => setOpen(i)}
                className="group relative block w-full overflow-hidden rounded-3xl"
              >
                <img
                  src={src}
                  alt={TITLES[i]}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ height: [320, 420, 260][i % 3] }}
                />
                <span className="absolute inset-0 grid place-items-center bg-[#453A3A]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-7 w-7 text-white" />
                  <span className="script absolute bottom-5 text-2xl text-white">{TITLES[i]}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>
      <Lightbox images={IMG.portfolio} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </>
  );
}
