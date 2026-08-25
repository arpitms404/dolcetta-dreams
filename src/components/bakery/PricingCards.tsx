import { IMG } from "@/lib/images";
import { CloudButton, Reveal } from "./decor";

const PLANS = [
  { name: "Occasion Cakes", price: "15", per: "For 1 Cake", qty: 1, best: false },
  { name: "Cupcakes", price: "35", per: "For 2 Cakes", qty: 2, best: false },
  { name: "Macarons", price: "55", per: "For 5 Cakes", qty: 5, best: true },
  { name: "Small Cakes", price: "95", per: "For 10 Cakes", qty: 10, best: false },
];

const FEATURES = ["Sweet Aniseed", "Soft Fruits", "Assorted", "Flavour Mix"];

export function PricingCards() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {PLANS.map((p, i) => (
        <Reveal key={p.name} delay={i * 0.12}>
          <div className="group relative overflow-hidden rounded-3xl bg-white shadow-soft transition-transform duration-300 hover:-translate-y-2 hover:shadow-lift">
            {p.best && (
              <span className="absolute right-4 top-4 z-10 rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-rose">
                Best
              </span>
            )}
            <div className="h-36 overflow-hidden">
              <img
                src={IMG.donut}
                alt={p.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div
              className="px-6 py-5 text-center text-white"
              style={{ background: p.best ? "var(--rose)" : "var(--mint)" }}
            >
              <h3 className="script text-3xl text-white">{p.name}</h3>
              <p className="mt-1 text-4xl font-extrabold">
                <span className="align-super text-lg">$</span>
                {p.price}
              </p>
              <p className="text-xs uppercase tracking-widest opacity-90">{p.per}</p>
            </div>
            <ul className="space-y-3 px-6 py-6 text-center text-sm text-body">
              {FEATURES.map((f) => (
                <li key={f} className="border-b border-border/70 pb-3 last:border-0">
                  {p.qty} × {f}
                </li>
              ))}
            </ul>
            <div className="pb-9 text-center">
              <CloudButton onPink={p.best}>Order Now</CloudButton>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
