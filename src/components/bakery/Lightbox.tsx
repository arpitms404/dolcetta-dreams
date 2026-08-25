import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export function Lightbox({
  images,
  index,
  onClose,
  onIndex,
}: {
  images: string[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] grid place-items-center bg-[#453A3A]/95 p-6"
          onClick={onClose}
        >
          <button className="absolute right-6 top-6 text-white" aria-label="Close">
            <X className="h-7 w-7" />
          </button>
          <button
            aria-label="Previous"
            className="absolute left-4 text-white sm:left-10"
            onClick={(e) => {
              e.stopPropagation();
              onIndex((index - 1 + images.length) % images.length);
            }}
          >
            <ChevronLeft className="h-9 w-9" />
          </button>
          <motion.img
            key={index}
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={images[index]}
            alt=""
            onClick={(e) => e.stopPropagation()}
            className="max-h-[80vh] max-w-[86vw] rounded-3xl object-contain shadow-lift"
          />
          <button
            aria-label="Next"
            className="absolute right-4 text-white sm:right-10"
            onClick={(e) => {
              e.stopPropagation();
              onIndex((index + 1) % images.length);
            }}
          >
            <ChevronRight className="h-9 w-9" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
