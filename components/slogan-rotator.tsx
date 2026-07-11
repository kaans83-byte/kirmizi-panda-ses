"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { slogans } from "@/lib/slogans";

// Sloganları dönüşümlü gösterir; reduced-motion'da tek slogan sabit kalır.
export function SloganRotator({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slogans.length);
    }, 4200);
    return () => clearInterval(id);
  }, [reduce]);

  if (reduce) {
    return <p className={className}>{slogans[0]}</p>;
  }

  return (
    // Dekoratif pazarlama metni: ekran okuyucuda sürekli okunmasın diye canlı bölge değil.
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {slogans[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
