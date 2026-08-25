import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageBanner } from "@/components/bakery/PageBanner";
import { CloudButton, Reveal, SectionHeading } from "@/components/bakery/decor";
import { LOREM } from "@/lib/images";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Contacts – Dolcetta Sweet Bakery" },
      {
        name: "description",
        content: "Opening hours, address and message form for the Dolcetta bakery boutique.",
      },
      { property: "og:title", content: "Contacts – Dolcetta Sweet Bakery" },
      { property: "og:description", content: "Come and visit our sweet little bakery." },
    ],
  }),
  component: Contacts,
});

const HOURS = [
  ["Monday – Friday", "08:00 – 19:00"],
  ["Saturday", "09:00 – 17:00"],
  ["Sunday", "10:00 – 14:00"],
];

function Contacts() {
  return (
    <>
      <PageBanner title="Contacts" crumb="Contacts" />
      <section className="bg-white px-4 py-24">
        <SectionHeading title="Our Contacts" subtitle={LOREM} />
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-3">
          <Reveal>
            <div className="rounded-3xl bg-cream p-8">
              <h3 className="script mb-5 flex items-center gap-2 text-3xl">
                <Clock className="h-5 w-5 text-mint" /> Opening Hours
              </h3>
              <ul className="space-y-3 text-sm text-body">
                {HOURS.map(([d, h]) => (
                  <li key={d} className="flex justify-between border-b border-dashed border-border pb-2">
                    <span>{d}</span>
                    <span className="serif font-bold text-ink">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="rounded-3xl bg-white p-8 shadow-soft"
            >
              <h3 className="script mb-5 text-3xl">Send Message</h3>
              <div className="space-y-3">
                {["Name", "Email", "Subject"].map((f) => (
                  <input
                    key={f}
                    placeholder={f}
                    className="w-full rounded-full border border-border px-5 py-3 text-sm outline-none focus:border-mint"
                  />
                ))}
                <textarea
                  rows={4}
                  placeholder="Message"
                  className="w-full rounded-3xl border border-border px-5 py-3 text-sm outline-none focus:border-mint"
                />
              </div>
              <div className="mt-6 text-center">
                <CloudButton type="submit">Send</CloudButton>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="rounded-3xl bg-cream p-8">
              <h3 className="script mb-5 text-3xl">Where We Are</h3>
              <ul className="space-y-4 text-sm text-body">
                <li className="flex gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-rose" />
                  12 Sugar Lane, Pastel Quarter, Lisbon 1200-109
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-rose" />
                  +351 210 555 018
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-rose" />
                  hello@dolcetta-bakery.com
                </li>
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mx-auto mt-16 max-w-6xl overflow-hidden rounded-3xl shadow-soft">
          <iframe
            title="Dolcetta bakery location"
            src="https://www.google.com/maps?q=lisbon%20bakery&output=embed"
            className="h-96 w-full border-0"
            loading="lazy"
          />
        </Reveal>
      </section>
    </>
  );
}
