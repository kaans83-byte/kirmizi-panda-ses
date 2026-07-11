"use client";

import { motion, useReducedMotion } from "framer-motion";

// Soyut, geometrik kırmızı panda sembolü (gerçek logo değil).
export function PandaSymbol() {
  const reduce = useReducedMotion();

  const particles = [
    { x: 6, y: 20, d: 6 },
    { x: 90, y: 14, d: 7.5 },
    { x: 96, y: 60, d: 6.5 },
    { x: 10, y: 74, d: 8 },
    { x: 78, y: 88, d: 7 },
    { x: 30, y: 6, d: 6.8 },
  ];

  return (
    <div className="relative grid aspect-square w-full max-w-[190px] place-items-center" aria-hidden="true">
      {/* Dönen ışık halkası */}
      <motion.div
        className="absolute inset-2"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={reduce ? undefined : { duration: 22, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 200 200" className="h-full w-full">
          <defs>
            <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(0 84% 60%)" stopOpacity="0.9" />
              <stop offset="55%" stopColor="hsl(0 84% 60%)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="hsl(0 84% 60%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle
            cx="100"
            cy="100"
            r="92"
            fill="none"
            stroke="url(#ring-grad)"
            strokeWidth="2"
            strokeDasharray="4 10"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* İç ince halka (ters yön) */}
      <motion.div
        className="absolute inset-6 rounded-full border border-primary/15"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={reduce ? undefined : { duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Nefes alan panda */}
      <motion.div
        className="relative w-[62%]"
        animate={reduce ? undefined : { scale: [1, 1.045, 1], y: [0, -4, 0] }}
        transition={reduce ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 200 200" className="h-full w-full drop-shadow-[0_8px_24px_rgba(239,68,68,0.35)]">
          <defs>
            <linearGradient id="panda-face" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(0 90% 63%)" />
              <stop offset="100%" stopColor="hsl(0 80% 42%)" />
            </linearGradient>
          </defs>

          {/* kulaklar */}
          <circle cx="52" cy="52" r="24" fill="url(#panda-face)" />
          <circle cx="148" cy="52" r="24" fill="url(#panda-face)" />
          <circle cx="52" cy="54" r="12" fill="#0a0a0a" opacity="0.85" />
          <circle cx="148" cy="54" r="12" fill="#0a0a0a" opacity="0.85" />

          {/* yüz — geometrik yuvarlatılmış altıgen */}
          <path
            d="M100 44 L150 70 L150 122 L100 156 L50 122 L50 70 Z"
            fill="url(#panda-face)"
            stroke="hsl(0 90% 70%)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* göz maskeleri */}
          <path d="M74 92 l16 6 -4 20 -16 -4 z" fill="#0a0a0a" opacity="0.9" />
          <path d="M126 92 l-16 6 4 20 16 -4 z" fill="#0a0a0a" opacity="0.9" />

          {/* gözler */}
          <circle cx="80" cy="104" r="5" fill="#fff" />
          <circle cx="120" cy="104" r="5" fill="#fff" />
          <circle cx="80" cy="104" r="2.2" fill="#0a0a0a" />
          <circle cx="120" cy="104" r="2.2" fill="#0a0a0a" />

          {/* burun (geometrik) */}
          <path d="M100 118 l8 10 -8 8 -8 -8 z" fill="#0a0a0a" />
        </svg>
      </motion.div>

      {/* Parçacıklar */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-primary"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={
            reduce
              ? { opacity: 0.5 }
              : { opacity: [0.15, 0.85, 0.15], scale: [0.8, 1.3, 0.8], y: [0, -6, 0] }
          }
          transition={
            reduce ? undefined : { duration: p.d, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }
          }
        />
      ))}
    </div>
  );
}
