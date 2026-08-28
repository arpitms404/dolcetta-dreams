import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import ornament from "@/assets/ornament-cupcake.png.asset.json";

/* ---------------- Scalloped icing edge ---------------- */
function scallopPath(bumps = 26, w = 1200, h = 25) {
  const steps = bumps * 16;
  let d = `M0 ${h}`;
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * w;
    const y = h - h * (0.5 + 0.5 * Math.cos((2 * Math.PI * bumps * x) / w));
    d += ` L${x.toFixed(2)} ${y.toFixed(2)}`;
  }
  d += ` L${w} ${h} Z`;
  return d;
}

export function ScallopEdge({
  color = "#ffffff",
  position = "top",
  className = "",
  height = 26,
}: {
  color?: string;
  position?: "top" | "bottom";
  className?: string;
  height?: number;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 z-20 ${position === "top" ? "top-0" : "bottom-0"} ${className}`}
      style={{ height, transform: position === "top" ? "scaleY(-1)" : undefined }}
    >
      <svg viewBox="0 0 1200 25" preserveAspectRatio="none" className="h-full w-full">
        <path d={scallopPath()} fill={color} />
      </svg>
    </div>
  );
}

/* ---------------- Melting drip edge ---------------- */
const DRIPS = [38, 64, 22, 78, 30, 55, 88, 26, 46, 70, 18, 60, 34, 82, 24];

function dripPath(w = 1200, base = 18) {
  const step = w / DRIPS.length;
  let d = `M0 0 L0 ${base}`;
  DRIPS.forEach((depth, i) => {
    const x = i * step;
    d += ` C ${x + step * 0.15} ${base + depth} ${x + step * 0.85} ${base + depth} ${x + step} ${base}`;
  });
  d += ` L${w} 0 Z`;
  return d;
}

export function DripEdge({
  color = "#79D0C8",
  position = "bottom",
  className = "",
}: {
  color?: string;
  position?: "top" | "bottom";
  className?: string;
}) {
  const top = position === "top";
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 z-20 ${top ? "top-0" : "bottom-0 translate-y-full"} ${className}`}
      style={{ height: 92 }}

    >
      <svg viewBox="0 0 1200 110" preserveAspectRatio="none" className="h-full w-full">
        <path d={dripPath()} fill={color} transform="translate(0,-18)" />
      </svg>
    </div>
  );
}

/* ---------------- Scalloped outline badge ---------------- */
export function ScallopBadge({
  size = 160,
  color = "#79D0C8",
  children,
  className = "",
}: {
  size?: number;
  color?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative grid place-items-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        <path d={scallopedSealPath(200, 18, 8)} fill="#fff" stroke={color} strokeWidth="3" />
      </svg>
      <div className="relative z-10 grid place-items-center">{children}</div>
    </div>
  );
}


/* ---------------- Cloud button ---------------- */
export function CloudButton({
  children,
  onPink = false,
  className = "",
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { onPink?: boolean }) {
  return (
    <button
      {...rest}
      className={`cloud-btn ${onPink ? "on-pink" : ""} ${className}`}
      style={{ color: onPink ? "var(--rose)" : undefined, ...rest.style }}
    >
      {children}
    </button>
  );
}

/* ---------------- Badge logo ---------------- */
export function BadgeLogo({ size = 110 }: { size?: number }) {
  return (
    <div
      className="relative grid shrink-0 place-items-center rounded-full bg-white shadow-soft"
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-[6%] rounded-full border-2 border-dashed border-mint" />
      <div className="absolute inset-[12%] rounded-full border border-mint/50" />
      <div className="px-2 text-center leading-none">
        <span
          className="script block text-ink"
          style={{ fontSize: size * 0.3 }}
        >
          Dolcetta
        </span>
      </div>
      <span
        className="absolute left-1/2 -translate-x-1/2 rounded-full bg-rose px-3 py-[3px] font-sans font-bold uppercase text-white"
        style={{ bottom: size * 0.18, fontSize: Math.max(6, size * 0.075), letterSpacing: "0.12em" }}
      >
        Sweet Bakery
      </span>
    </div>
  );
}

/* ---------------- Cupcake ornament ---------------- */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <img
      src={ornament.url}
      alt=""
      aria-hidden
      className={`mx-auto mb-3 h-10 w-auto opacity-90 ${className}`}
    />
  );
}

/* ---------------- Teal bow ornament ---------------- */
export function BowOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 40"
      aria-hidden
      className={`mx-auto mb-2 h-8 w-auto text-mint ${className}`}
    >
      <path
        d="M32 20 C32 10 20 6 20 18 C20 30 32 24 32 20 Z"
        fill="currentColor"
      />
      <path
        d="M32 20 C32 10 44 6 44 18 C44 30 32 24 32 20 Z"
        fill="currentColor"
      />
      <circle cx="32" cy="20" r="3" fill="currentColor" />
      <path
        d="M32 23 L28 36 M32 23 L36 36"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------------- Scalloped seal card ---------------- */
function scallopedSealPath(size: number, bumps: number, depth: number) {
  const cx = size / 2;
  const cy = size / 2;
  const R = size / 2 - 4;
  const r = R - depth;
  const steps = 140;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const theta = (i / steps) * Math.PI * 2;
    const radius = r + depth * (0.5 + 0.5 * Math.cos(bumps * theta));
    const x = cx + radius * Math.cos(theta);
    const y = cy + radius * Math.sin(theta);
    d += `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
  }
  d += " Z";
  return d;
}

export function ScallopedSeal({
  size = 520,
  bumps = 16,
  depth = 26,
  children,
  className = "",
}: {
  size?: number;
  bumps?: number;
  depth?: number;
  children?: ReactNode;
  className?: string;
}) {
  const path = scallopedSealPath(size, bumps, depth);
  return (
    <div className={`relative grid place-items-center ${className}`}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 h-full w-full"
        style={{ filter: "drop-shadow(0 18px 34px rgba(74,63,63,0.18))" }}
      >
        <path d={path} fill="#fff" />
      </svg>
      <div className="relative z-10 flex flex-col items-center justify-center px-10 text-center">
        {children}
      </div>
    </div>
  );
}

/* ---------------- Section heading ---------------- */
export function SectionHeading({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="mb-10 text-center">
      <Ornament />
      <h2
        className="script text-4xl sm:text-5xl"
        style={{ color: light ? "#fff" : "var(--ink)" }}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className="mx-auto mt-3 max-w-2xl text-[15px]"
          style={{ color: light ? "rgba(255,255,255,.85)" : "var(--body)" }}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}

/* ---------------- Reveal on scroll ---------------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 34 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Photo band wrapper ---------------- */
export function PhotoBand({
  image,
  overlay,
  children,
  topEdge = "#ffffff",
  bottomEdge = "#ffffff",
  drip,
  className = "",
  fixed = false,
}: {
  image: string;
  overlay: string;
  children: ReactNode;
  topEdge?: string | null;
  bottomEdge?: string | null;
  drip?: string;
  className?: string;
  fixed?: boolean;
}) {
  return (
    <section className={`relative ${drip ? "overflow-visible" : "overflow-hidden"} ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})`, backgroundAttachment: fixed ? "fixed" : undefined }}
      />
      <div className="absolute inset-0" style={{ background: overlay }} />
      {topEdge ? <ScallopEdge color={topEdge} position="top" /> : null}
      <div className="relative z-10">{children}</div>
      {drip ? <DripEdge color={drip} /> : bottomEdge ? <ScallopEdge color={bottomEdge} position="bottom" /> : null}
    </section>
  );
}
