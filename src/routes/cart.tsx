import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { PageBanner } from "@/components/bakery/PageBanner";
import { CloudButton, Reveal } from "@/components/bakery/decor";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Cart – Dolcetta Sweet Bakery" },
      { name: "description", content: "Your Dolcetta bakery basket: review your sweet selection." },
      { property: "og:title", content: "Cart – Dolcetta Sweet Bakery" },
      { property: "og:description", content: "Your bakery basket." },
    ],
  }),
  component: Cart,
});

function Cart() {
  const navigate = useNavigate();
  return (
    <>
      <PageBanner title="Cart" crumb="Cart" />
      <section className="bg-white px-4 py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex items-center gap-4 rounded-full border-2 border-[#5BA9E0] px-8 py-5 text-left text-[#5BA9E0]">
            <Info className="h-5 w-5 shrink-0" />
            <p className="text-sm text-body">Your cart is currently empty.</p>
          </div>
          <div className="mt-10">
            <CloudButton onClick={() => navigate({ to: "/shop" })}>Return to shop</CloudButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
