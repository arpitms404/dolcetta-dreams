import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { PageBanner } from "@/components/bakery/PageBanner";
import { Reveal, SectionHeading } from "@/components/bakery/decor";
import { Testimonials } from "@/components/bakery/Testimonials";
import { IMG, LOREM } from "@/lib/images";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us – Dolcetta Sweet Bakery" },
      {
        name: "description",
        content:
          "The story behind Dolcetta: a family boutique bakery baking pastel cakes, macarons and pastries since day one.",
      },
      { property: "og:title", content: "About Us – Dolcetta Sweet Bakery" },
      { property: "og:description", content: "The story behind our little pastel bakery." },
    ],
  }),
  component: AboutUs,
});

const POINTS = [
  "Fresh butter, cream and seasonal fruit every single morning",
  "Hand piped decoration on every cupcake we send out",
  "Custom occasion cakes designed together with you",
  "Small batch macarons in twelve rotating flavours",
];

function AboutUs() {
  return (
    <>
      <PageBanner title="About Us" crumb="About Us" />
      <section className="bg-white px-4 py-28">
        <SectionHeading title="Our Story" subtitle={LOREM} />
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-3">
          <Reveal>
            <img
              src={IMG.ingredients}
              alt="Baking ingredients"
              className="h-72 w-full rounded-3xl object-cover shadow-soft"
            />
          </Reveal>
          <Reveal delay={0.15} className="text-center">
            <p className="text-[15px] leading-relaxed text-body">{LOREM}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-body">{LOREM}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <img
              src={IMG.cakeSlice}
              alt="Cake slice"
              className="h-72 w-full rounded-3xl object-cover shadow-soft"
            />
          </Reveal>
        </div>

        <ul className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
          {POINTS.map((p, i) => (
            <Reveal key={p} delay={i * 0.08}>
              <li className="flex items-start gap-3 rounded-2xl bg-cream px-5 py-4 text-sm text-body">
                <Heart className="mt-0.5 h-4 w-4 shrink-0 fill-rose text-rose" />
                {p}
              </li>
            </Reveal>
          ))}
        </ul>
      </section>
      <Testimonials />
    </>
  );
}
