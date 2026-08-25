import { Facebook, Instagram, Twitter, Youtube, Music2 } from "lucide-react";
import { IMG } from "@/lib/images";
import { BadgeLogo, CloudButton, ScallopEdge } from "./decor";

const socials = [Facebook, Instagram, Twitter, Music2, Youtube];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMG.chocolate})` }}
      />
      <div className="absolute inset-0 bg-[#453A3A]/90" />
      <ScallopEdge color="#ffffff" position="top" />
      <ScallopEdge color="#ffffff" position="bottom" />

      <div className="relative z-10 px-4 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-3 md:items-center">
          <div className="text-center md:text-left">
            <h3 className="script mb-5 text-3xl text-white">Follow Us</h3>
            <div className="flex justify-center gap-3 md:justify-start">
              {socials.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/40 text-white transition-all hover:scale-110 hover:border-mint hover:bg-mint"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <BadgeLogo size={170} />
          </div>

          <div className="text-center md:text-right">
            <h3 className="script mb-5 text-3xl text-white">Get Our Sweet News</h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col items-center gap-4 md:items-end"
            >
              <input
                type="email"
                placeholder="Your e-mail"
                className="w-full max-w-xs rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/60 outline-none focus:border-mint"
              />
              <CloudButton type="submit">Subscribe</CloudButton>
            </form>
          </div>
        </div>

        <p className="mt-16 text-center text-sm text-white/70">
          Dolcetta – A Delicious Cakes and Bakery Website
        </p>
      </div>
    </footer>
  );
}
