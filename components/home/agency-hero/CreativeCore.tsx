"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PandaSymbol } from "./PandaSymbol";

export function CreativeCore() {
  const reduce = useReducedMotion();

  return (
    <div
      className="relative w-full"
      style={{ transform: "perspective(1100px) rotateX(6deg)", transformStyle: "preserve-3d" }}
    >
      {/* Kırmızı glow */}
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_50%_40%,hsl(var(--primary)/0.35),transparent_65%)] blur-xl" />

      {/* Kırmızı gradient kenarlık */}
      <div className="rounded-[26px] bg-gradient-to-br from-primary/70 via-primary/25 to-white/5 p-px shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.5)]">
        <div className="relative overflow-hidden rounded-[25px] bg-[#0b0b0d]/85 px-5 py-6 backdrop-blur-xl sm:px-6">
          {/* Çok hafif grid dokusu */}
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.12]" />

          {/* Akan kırmızı veri çizgileri */}
          <svg
            viewBox="0 0 200 60"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 top-0 h-16 w-full opacity-60"
            aria-hidden="true"
          >
            {[12, 26, 40].map((y, i) => (
              <motion.line
                key={i}
                x1="0"
                y1={y}
                x2="200"
                y2={y}
                stroke="hsl(0 84% 60%)"
                strokeWidth="1"
                strokeDasharray="6 14"
                initial={{ strokeDashoffset: 0, opacity: 0.25 }}
                animate={reduce ? { opacity: 0.2 } : { strokeDashoffset: [0, -80] }}
                transition={
                  reduce ? undefined : { duration: 3 + i, repeat: Infinity, ease: "linear" }
                }
              />
            ))}
          </svg>

          {/* Başlık */}
          <div className="relative text-center">
            <p className="text-[13px] font-semibold tracking-tight text-foreground sm:text-sm">
              Kırmızı Panda Creative Engine
            </p>
            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary/90">
              AI • Film • Sound • FX • Web • Growth
            </p>
          </div>

          {/* Panda sembolü */}
          <div className="relative mt-3 flex justify-center">
            <PandaSymbol />
          </div>
        </div>
      </div>
    </div>
  );
}
