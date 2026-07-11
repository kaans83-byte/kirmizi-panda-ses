"use client";

import { motion, useReducedMotion } from "framer-motion";

export function MiniBrowserCard() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="w-[150px] overflow-hidden rounded-xl border border-white/10 bg-[#0d0d10]/85 shadow-2xl backdrop-blur-md sm:w-[172px]"
      style={{ transform: "perspective(700px) rotateY(-16deg) rotateX(6deg)" }}
      animate={reduce ? undefined : { y: [0, -8, 0] }}
      transition={reduce ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      {/* Tarayıcı üst çubuğu */}
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-2.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-primary/80" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="ml-1.5 h-2 flex-1 rounded-full bg-white/[0.06]" />
      </div>

      {/* İçerik */}
      <div className="space-y-2 p-2.5">
        {/* mini navbar */}
        <div className="flex items-center justify-between">
          <span className="h-1.5 w-6 rounded-full bg-primary/70" />
          <div className="flex gap-1">
            <span className="h-1 w-3 rounded-full bg-white/15" />
            <span className="h-1 w-3 rounded-full bg-white/15" />
            <span className="h-1 w-3 rounded-full bg-white/15" />
          </div>
        </div>

        {/* hero blok */}
        <div className="space-y-1 rounded-md bg-white/[0.03] p-2">
          <span className="block h-1.5 w-16 rounded-full bg-white/25" />
          <span className="block h-1.5 w-10 rounded-full bg-white/15" />
          {/* CTA butonu */}
          <span className="mt-1 inline-block h-3 w-10 rounded bg-primary" />
        </div>

        {/* analytics grafiği */}
        <div className="flex h-8 items-end gap-1 rounded-md bg-white/[0.03] p-1.5">
          {[40, 62, 50, 78, 66, 90].map((h, i) => (
            <motion.span
              key={i}
              className="flex-1 origin-bottom rounded-sm bg-gradient-to-t from-primary/40 to-primary"
              style={{ height: `${h}%` }}
              animate={reduce ? undefined : { scaleY: [0.7, 1, 0.7] }}
              transition={
                reduce ? undefined : { duration: 2.4 + i * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }
              }
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
