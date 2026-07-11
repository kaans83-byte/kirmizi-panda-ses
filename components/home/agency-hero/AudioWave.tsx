"use client";

import { motion, useReducedMotion } from "framer-motion";

const BASE = [
  30, 55, 42, 70, 48, 84, 60, 38, 66, 50, 78, 44, 58, 34, 72, 52, 88, 46, 62, 40, 74, 36, 56, 48,
];

// Dekoratif ses dalgası — gerçek ses verisine bağlı değil.
export function AudioWave() {
  const reduce = useReducedMotion();

  return (
    <div
      className="flex h-full w-full items-end justify-center gap-[3px]"
      aria-hidden="true"
    >
      {BASE.map((h, i) => (
        <motion.span
          key={i}
          className="w-full max-w-[5px] flex-1 origin-bottom rounded-full bg-gradient-to-t from-primary/40 to-primary"
          style={{ height: `${h}%` }}
          animate={
            reduce
              ? undefined
              : { scaleY: [1, 0.45 + (h / 140), 0.6, 1] }
          }
          transition={
            reduce
              ? undefined
              : { duration: 1.8 + (i % 5) * 0.35, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }
          }
        />
      ))}
    </div>
  );
}
