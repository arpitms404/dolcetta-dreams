import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/bakery/PageBanner";
import { SectionHeading } from "@/components/bakery/decor";
import { PricingCards } from "@/components/bakery/PricingCards";
import { LOREM } from "@/lib/images";

export const Route = createFileRoute("/pricing-tables")({
  head: () => ({
    meta: [
      { title: "Pricing Tables – Dolcetta Sweet Bakery" },
      {
        name: "description",
        content: "Flexible bakery pricing for occasion cakes, cupcakes, macarons and small cakes.",
      },
      { property: "og:title", content: "Pricing Tables – Dolcetta Sweet Bakery" },
      { property: "og:description", content: "Flexible prices for every sweet order." },
    ],
  }),
  component: PricingTables,
});

function PricingTables() {
  return (
    <>
      <PageBanner title="Pricing Tables" crumb="Pricing Tables" />
      <section className="bg-white px-4 py-28">
        <SectionHeading title="Flexible Prices" subtitle={LOREM} />
        <PricingCards />
      </section>
    </>
  );
}
