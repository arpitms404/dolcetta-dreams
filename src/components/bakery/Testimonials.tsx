import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IMG, LOREM } from "@/lib/images";
import { ScallopEdge, SectionHeading } from "./decor";

const QUOTES = [
  { name: "Maria Doe", text: LOREM, img: IMG.avatars[0] },
  { name: "Julia Smith", text: LOREM, img: IMG.avatars[1] },
  { name: "Anna Rose", text: LOREM, img: IMG.avatars[2] },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % QUOTES.length), 5000);
    return () => clearInterval(t);
  }, []);
  const q = QUOTES[i];

  return (
    <section className="relative overflow-hidden bg-rose px-4 py-28">
      <ScallopEdge color="#ffffff" position="top" />
      <ScallopEdge color="#ffffff" position="bottom" />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <SectionHeading title="Clients Say" light />
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={q.img}
              alt={q.name}
              className="mx-auto h-24 w-24 rounded-full border-4 border-white/70 object-cover"
            />
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/90">
              “{q.text}”
            </p>
            <p className="script mt-5 text-3xl text-white">{q.name}</p>
          </motion.div>
        </AnimatePresence>
        <div className="mt-8 flex justify-center gap-2">
          {QUOTES.map((_, d) => (
            <button
              key={d}
              aria-label={`Testimonial ${d + 1}`}
              onClick={() => setI(d)}
              className={`h-2.5 rounded-full transition-all ${
                d === i ? "w-7 bg-white" : "w-2.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
