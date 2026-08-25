import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { PageBanner } from "@/components/bakery/PageBanner";
import { Reveal, SectionHeading } from "@/components/bakery/decor";
import { IMG, LOREM } from "@/lib/images";

export const Route = createFileRoute("/our-staff")({
  head: () => ({
    meta: [
      { title: "Our Staff – Dolcetta Sweet Bakery" },
      {
        name: "description",
        content: "Meet the bakers, pastry chefs and cake designers behind every Dolcetta creation.",
      },
      { property: "og:title", content: "Our Staff – Dolcetta Sweet Bakery" },
      { property: "og:description", content: "The people who bake, pipe and decorate at Dolcetta." },
    ],
  }),
  component: OurStaff,
});

const TEAM = [
  { name: "Maria Doe", role: "Head Baker" },
  { name: "Sofia Bell", role: "Pastry Chef" },
  { name: "Anna Rose", role: "Cake Designer" },
  { name: "Elena Wills", role: "Head Baker" },
  { name: "Clara Finn", role: "Pastry Chef" },
  { name: "Nina Todd", role: "Cake Designer" },
];

function OurStaff() {
  return (
    <>
      <PageBanner title="Our Staff" crumb="Our Staff" />
      <section className="bg-white px-4 py-28">
        <SectionHeading title="Sweet People" subtitle={LOREM} />
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 0.1}>
              <div className="group overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={IMG.staff[i]}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end justify-center gap-3 bg-[#453A3A]/55 pb-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {[Facebook, Instagram, Twitter].map((Icon, k) => (
                      <a
                        key={k}
                        href="#"
                        className="grid h-9 w-9 place-items-center rounded-full bg-white text-mint transition hover:bg-rose hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="px-6 py-6 text-center">
                  <h3 className="script text-3xl">{m.name}</h3>
                  <p className="serif mt-1 text-xs font-bold uppercase tracking-[0.2em] text-rose">
                    {m.role}
                  </p>
                  <p className="mt-3 text-sm text-body">{LOREM.slice(0, 96)}…</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
