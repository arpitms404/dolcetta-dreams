import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function Gear({ color, size, style, reverse }: { color: string; size: number; style: React.CSSProperties; reverse?: boolean }) {
  const teeth = Array.from({ length: 12 });
  return (
    <div
      className="absolute"
      style={{
        ...style,
        width: size,
        height: size,
        animation: `${reverse ? "spin-slow-rev" : "spin-slow"} 3.2s linear infinite`,
      }}
    >
      <div className="relative h-full w-full">
        {teeth.map((_, i) => (
          <span
            key={i}
            className="absolute left-1/2 top-1/2"
            style={{
              width: size * 0.16,
              height: size * 1.02,
              marginLeft: -size * 0.08,
              marginTop: -size * 0.51,
              background: color,
              borderRadius: size * 0.03,
              transform: `rotate(${(180 / teeth.length) * i}deg)`,
            }}
          />
        ))}
        <span
          className="absolute inset-[10%] rounded-full"
          style={{ background: color }}
        />
        <span className="absolute inset-[36%] rounded-full bg-white" />
      </div>
    </div>
  );
}

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative h-40 w-40">
            <Gear color="#EE6E9F" size={84} style={{ left: 26, top: 4 }} />
            <Gear color="#9BD6EE" size={66} style={{ left: 0, top: 66 }} reverse />
            <Gear color="#FBCC5C" size={62} style={{ left: 72, top: 74 }} reverse />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
