import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { AlertTriangle, CheckCircle2, Info, X, XCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PageBanner } from "@/components/bakery/PageBanner";
import { Reveal, SectionHeading } from "@/components/bakery/decor";
import { IMG, LOREM } from "@/lib/images";

export const Route = createFileRoute("/content-elements")({
  head: () => ({
    meta: [
      { title: "Content Elements – Dolcetta Sweet Bakery" },
      {
        name: "description",
        content: "Message boxes, animated pie charts and promo tiles from the Dolcetta style guide.",
      },
      { property: "og:title", content: "Content Elements – Dolcetta Sweet Bakery" },
      { property: "og:description", content: "Reusable sweet UI elements of our bakery theme." },
    ],
  }),
  component: ContentElements,
});

const BOXES = [
  { title: "Information", color: "#5BA9E0", Icon: Info },
  { title: "Confirmation", color: "#66C08A", Icon: CheckCircle2 },
  { title: "Warning", color: "#EEB84E", Icon: AlertTriangle },
  { title: "Error", color: "#E0625B", Icon: XCircle },
];

function MessageBox({ title, color, Icon }: (typeof BOXES)[number]) {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return (
    <div
      className="flex items-center gap-4 rounded-full border-2 px-6 py-4"
      style={{ borderColor: color, color }}
    >
      <Icon className="h-5 w-5 shrink-0" />
      <p className="min-w-0 flex-1 text-sm">
        <span className="serif font-bold">{title}: </span>
        <span className="text-body">{LOREM.slice(0, 70)}…</span>
      </p>
      <button aria-label="Close" onClick={() => setOpen(false)}>
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

function PieChart({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);
  const R = 52;
  const C = 2 * Math.PI * R;

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1400, 1);
      setN(Math.round(value * p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="relative mx-auto h-32 w-32">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle cx="60" cy="60" r={R} fill="none" stroke="var(--mint-soft)" strokeWidth="8" />
          <motion.circle
            cx="60"
            cy="60"
            r={R}
            fill="none"
            stroke="var(--rose)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={C}
            initial={{ strokeDashoffset: C }}
            animate={inView ? { strokeDashoffset: C * (1 - value / 100) } : {}}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </svg>
        <span className="serif absolute inset-0 grid place-items-center text-2xl font-bold text-ink">
          {n}%
        </span>
      </div>
      <p className="script mt-4 text-2xl">{label}</p>
    </div>
  );
}

const CHARTS = [
  { value: 35, label: "Occasion Cakes" },
  { value: 38, label: "Cupcakes" },
  { value: 36, label: "Macarons" },
  { value: 35, label: "Small Cakes" },
];

const TILES = [
  { text: "Sweet", bg: "var(--mint)", img: IMG.gallery[0] },
  { text: "Any Design", bg: "var(--rose)", img: IMG.gallery[2] },
  { text: "-50%", bg: "#453A3A", img: IMG.gallery[4] },
];

function ContentElements() {
  return (
    <>
      <PageBanner title="Content Elements" crumb="Content Elements" />

      <section className="bg-white px-4 py-24">
        <SectionHeading title="Message Boxes" />
        <div className="mx-auto grid max-w-4xl gap-4">
          {BOXES.map((b) => (
            <Reveal key={b.title}>
              <MessageBox {...b} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream px-4 py-24">
        <SectionHeading title="Our Skills" subtitle={LOREM} />
        <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {CHARTS.map((c) => (
            <PieChart key={c.label} {...c} />
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-24">
        <SectionHeading title="Promo Banners" />
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {TILES.map((t, i) => (
            <Reveal key={t.text} delay={i * 0.1}>
              <div className="group relative h-56 overflow-hidden rounded-3xl">
                <img
                  src={t.img}
                  alt={t.text}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute inset-0 opacity-70" style={{ background: t.bg }} />
                <span className="script absolute inset-0 grid place-items-center text-5xl text-white">
                  {t.text}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
