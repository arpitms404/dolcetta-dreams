import { Link } from "@tanstack/react-router";
import { IMG } from "@/lib/images";
import { ScallopEdge } from "./decor";

export function PageBanner({
  title,
  crumb,
}: {
  title: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMG.pinkCookies})` }}
      />
      <div className="absolute inset-0 bg-white/45" />
      <ScallopEdge color="#ffffff" position="top" />
      <ScallopEdge color="#ffffff" position="bottom" />
      <div className="relative z-10 px-4 py-24 text-center">
        <h1 className="script text-5xl text-ink sm:text-6xl">{title}</h1>
        <p className="serif mt-3 text-sm font-bold text-body">
          <Link to="/" className="transition-colors hover:text-rose">
            Home
          </Link>
          <span className="mx-2 text-rose">/</span>
          {crumb}
        </p>
      </div>
    </section>
  );
}
