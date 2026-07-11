"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HeroServiceCard } from "./heroVisualData";

export function FloatingServiceCard({ card }: { card: HeroServiceCard }) {
  const reduce = useReducedMotion();
  const Icon = card.icon;

  return (
    <div
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${card.pos.x}%`, top: `${card.pos.y}%` }}
    >
      {/* Giriş animasyonu */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: card.delay }}
      >
        {/* Bağımsız floating */}
        <motion.div
          animate={reduce ? undefined : { y: [0, -card.floatY, 0] }}
          transition={
            reduce ? undefined : { duration: card.duration, repeat: Infinity, ease: "easeInOut" }
          }
        >
          {/* Kart + hover (CSS, 300ms) */}
          <div className="group flex w-[112px] items-center gap-2 rounded-2xl border border-white/10 bg-[#101013]/70 px-2.5 py-2 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.06] hover:border-primary/50 hover:shadow-glow sm:w-[132px] sm:gap-2.5 sm:px-3 sm:py-2.5">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 sm:h-8 sm:w-8">
              <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-[11px] font-semibold leading-tight text-foreground sm:text-xs">
                {card.title}
              </span>
              <span className="block truncate text-[9px] leading-tight text-muted-foreground opacity-75 transition-opacity duration-300 group-hover:opacity-100 sm:text-[10px]">
                {card.subtitle}
              </span>
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
