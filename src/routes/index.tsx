import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  Cake,
  ChevronLeft,
  ChevronRight,
  Cookie,
  Croissant,
  Heart,
  IceCream2,
  Sparkles,
  Star,
  ZoomIn,
  Award,
  Palette,
  Flame,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  CloudButton,
  Ornament,
  PhotoBand,
  Reveal,
  ScallopEdge,
  SectionHeading,
} from "@/components/bakery/decor";
import { Lightbox } from "@/components/bakery/Lightbox";
import { PricingCards } from "@/components/bakery/PricingCards";
import { Testimonials } from "@/components/bakery/Testimonials";
import { IMG, LOREM } from "@/lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dolcetta – Sweet Bakery | Cupcakes, Macarons & Occasion Cakes" },
      {
        name: "description",
        content:
          "Welcome to Dolcetta, a pastel boutique bakery offering bite-size pastries, macarons, cupcakes and custom occasion cakes.",
      },
      { property: "og:title", content: "Dolcetta – Sweet Bakery" },
      {
        property: "og:description",
        content: "A great range of different flavoured bite-size pastries and cakes.",
      },
    ],
  }),
  component: Home,
});

/* ------------------------- Hero ------------------------- */
function Hero() {
  const [i, setI] = useState(0);
  const slides = IMG.heroSlides;
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative h-[86vh] min-h-[540px] overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4 }}
          className="absolute inset-0"
        >
          <div
            className="animate-kenburns h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[i]})` }}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-white/10" />

      <div className="relative z-10 grid h-full place-items-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-lg bg-white/85 px-10 py-16 text-center backdrop-blur-sm"
          style={{ borderRadius: "48% 52% 46% 54% / 52% 46% 54% 48%" }}
        >
          <Ornament />
          <h1 className="script text-5xl text-ink sm:text-6xl">Welcome to Dolcetta</h1>
          <p className="mx-auto mt-4 max-w-sm text-[15px] text-body">
            We offer a great range of different flavoured bite-size pastries and cakes
          </p>
        </motion.div>
      </div>

      <button
        aria-label="Previous slide"
        onClick={() => setI((v) => (v - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/70 text-ink transition hover:bg-mint hover:text-white"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next slide"
        onClick={() => setI((v) => (v + 1) % slides.length)}
        className="absolute right-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/70 text-ink transition hover:bg-mint hover:text-white"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-16 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, d) => (
          <button
            key={d}
            aria-label={`Slide ${d + 1}`}
            onClick={() => setI(d)}
            className={`h-2.5 rounded-full transition-all ${
              d === i ? "w-7 bg-rose" : "w-2.5 bg-white/80"
            }`}
          />
        ))}
      </div>

      <ScallopEdge color="#ffffff" position="bottom" />
    </section>
  );
}

/* --------------------- Specialties --------------------- */
const SPECIALTIES = [
  { name: "Occasion Cakes", Icon: Cake },
  { name: "Cupcakes", Icon: Croissant },
  { name: "Macarons", Icon: Cookie },
  { name: "Small Cakes", Icon: IceCream2 },
];

function Specialties() {
  const [page, setPage] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setPage((v) => (v + 1) % 2), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <PhotoBand
      image={IMG.flour}
      overlay="rgba(255,255,255,0.88)"
      className="px-4 py-28"
    >
      <SectionHeading title="Our Specialties" subtitle={LOREM} />
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {SPECIALTIES.map(({ name, Icon }, i) => (
          <Reveal key={name} delay={i * 0.1} className="text-center">
            <motion.div
              whileHover={{ y: -8 }}
              className="mx-auto grid h-40 w-40 place-items-center rounded-full bg-mint/15 p-3"
              style={{
                boxShadow: "0 0 0 6px rgba(255,255,255,.9), 0 0 0 8px rgba(121,208,200,.6)",
              }}
            >
              <div className="grid h-full w-full place-items-center rounded-full bg-white">
                <Icon className="h-11 w-11 text-mint" strokeWidth={1.4} />
              </div>
            </motion.div>
            <h3 className="script mt-6 text-3xl">{name}</h3>
            <p className="mx-auto mt-2 max-w-[15rem] text-sm text-body">{LOREM.slice(0, 90)}…</p>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 flex justify-center gap-2">
        {[0, 1].map((d) => (
          <button
            key={d}
            aria-label={`Specialties page ${d + 1}`}
            onClick={() => setPage(d)}
            className={`h-2.5 rounded-full transition-all ${
              d === page ? "w-7 bg-mint" : "w-2.5 bg-mint/40"
            }`}
          />
        ))}
      </div>
    </PhotoBand>
  );
}

/* ------------------ Magic Processing ------------------ */
function MagicProcessing() {
  return (
    <PhotoBand
      image={IMG.greenMacarons}
      overlay="rgba(121,208,200,0.88)"
      drip="#79D0C8"
      className="px-4 py-28"
    >
      <Reveal className="mx-auto max-w-2xl pb-8 text-center">
        <Heart className="mx-auto h-10 w-10 text-white" strokeWidth={1.4} />
        <h2 className="script mt-4 text-5xl text-white">Magic Processing</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-white/90">{LOREM}</p>
        <div className="mt-8">
          <CloudButton>Discover More</CloudButton>
        </div>
      </Reveal>
    </PhotoBand>
  );
}

/* -------------------- Our Creations -------------------- */
export function GalleryGrid({ images }: { images: string[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
        {images.map((src, i) => (
          <Reveal key={src + i} delay={(i % 4) * 0.08}>
            <button
              onClick={() => setOpen(i)}
              className="group relative block aspect-square w-full overflow-hidden rounded-2xl"
            >
              <img
                src={src}
                alt={`Creation ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 grid place-items-center bg-[#453A3A]/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ZoomIn className="h-7 w-7 text-white" />
                <span className="script absolute bottom-4 text-2xl text-white">
                  Sweet Delight
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      <Lightbox images={images} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
    </>
  );
}

/* --------------------- Values band --------------------- */
const VALUES = [
  { title: "Tradition", Icon: Award },
  { title: "Quality", Icon: Star },
  { title: "Creativity", Icon: Palette },
  { title: "Passion", Icon: Flame },
];

function Values() {
  return (
    <PhotoBand
      image={IMG.ovenMuffins}
      overlay="linear-gradient(rgba(69,58,58,.86), rgba(69,58,58,.86))"
      drip="#453A3A"
      className="px-4 py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        {VALUES.map(({ title, Icon }, i) => (
          <Reveal key={title} delay={i * 0.1} className="text-center">
            <span className="mx-auto grid h-20 w-20 place-items-center rounded-full border-2 border-white/60">
              <Icon className="h-8 w-8 text-white" strokeWidth={1.4} />
            </span>
            <h3 className="script mt-5 text-3xl text-white">{title}</h3>
            <p className="mx-auto mt-2 max-w-[16rem] text-sm text-white/80">
              {LOREM.slice(0, 88)}…
            </p>
          </Reveal>
        ))}
      </div>
      <div className="text-center">
        <CloudButton>Know Us Better</CloudButton>
      </div>
    </PhotoBand>
  );
}

/* ------------------- Featured Recipe ------------------- */
const INGREDIENTS = [
  "10 Ounces blackberries",
  "2 Eggs",
  "½ Cup sugar",
  "1 Teaspoon cold water",
  "½ Tablespoon lemon juice",
  "1 Salt spoon salt",
];

function FeaturedRecipe() {
  const [dot, setDot] = useState(0);
  return (
    <PhotoBand
      image={IMG.ingredients}
      overlay="rgba(255,255,255,0.9)"
      className="px-4 py-28"
    >
      <SectionHeading title="Featured Recipe" />
      <div className="mx-auto grid max-w-5xl items-center gap-10 rounded-3xl bg-[#EFE3D6]/70 p-6 md:grid-cols-2 md:p-10">
        <Reveal>
          <img
            src={IMG.chocolateCake}
            alt="Chocolate cake"
            className="h-80 w-full rounded-3xl object-cover shadow-soft"
          />
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative rounded-2xl bg-white p-8 shadow-soft">
            <span className="absolute -left-3 top-8 h-[70%] w-6 rounded-full border-l-4 border-dashed border-mint/70" />
            <h3 className="script text-4xl">Chocolate Cake</h3>
            <div className="mt-2 flex gap-1">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-[#F5C451] text-[#F5C451]" />
              ))}
            </div>
            <ul className="mt-5 space-y-2 text-sm text-body">
              {INGREDIENTS.map((ing) => (
                <li key={ing} className="flex items-center gap-3 border-b border-dashed border-border pb-2">
                  <span className="grid h-4 w-4 place-items-center rounded-[4px] border border-mint text-mint">
                    <Sparkles className="h-2.5 w-2.5" />
                  </span>
                  {ing}
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <CloudButton>See Directions</CloudButton>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="mt-10 flex justify-center gap-2">
        {[0, 1, 2].map((d) => (
          <button
            key={d}
            aria-label={`Recipe ${d + 1}`}
            onClick={() => setDot(d)}
            className={`h-2.5 rounded-full transition-all ${
              d === dot ? "w-7 bg-mint" : "w-2.5 bg-mint/40"
            }`}
          />
        ))}
      </div>
    </PhotoBand>
  );
}

/* ------------------------ Page ------------------------ */
function Home() {
  return (
    <>
      <Hero />
      <Specialties />
      <MagicProcessing />
      <section className="bg-white px-4 py-28">
        <SectionHeading title="Our Creations" subtitle={LOREM} />
        <GalleryGrid images={IMG.gallery} />
      </section>
      <Values />
      <FeaturedRecipe />
      <Testimonials />
      <section className="bg-white px-4 py-28">
        <SectionHeading title="Our Prices" subtitle={LOREM} />
        <PricingCards />
      </section>
    </>
  );
}
