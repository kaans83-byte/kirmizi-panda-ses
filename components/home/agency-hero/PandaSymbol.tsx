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

          {/* kulaklar (yumuşak, krem içli) */}
          <circle cx="56" cy="56" r="22" fill="url(#panda-face)" />
          <circle cx="144" cy="56" r="22" fill="url(#panda-face)" />
          <circle cx="56" cy="58" r="11" fill="#fbe9dc" />
          <circle cx="144" cy="58" r="11" fill="#fbe9dc" />

          {/* yüz — yumuşak yuvarlak */}
          <path
            d="M100 50 C66 50 48 74 48 104 C48 136 72 158 100 158 C128 158 152 136 152 104 C152 74 134 50 100 50 Z"
            fill="url(#panda-face)"
            stroke="hsl(0 90% 72%)"
            strokeWidth="1.5"
          />

          {/* yanak allığı */}
          <circle cx="69" cy="123" r="7" fill="hsl(0 95% 72%)" opacity="0.55" />
          <circle cx="131" cy="123" r="7" fill="hsl(0 95% 72%)" opacity="0.55" />

          {/* göz çevresi — krem */}
          <ellipse cx="80" cy="106" rx="15" ry="17" fill="#fbe9dc" />
          <ellipse cx="120" cy="106" rx="15" ry="17" fill="#fbe9dc" />

          {/* büyük, sevimli gözler */}
          <circle cx="81" cy="107" r="8.5" fill="#0a0a0a" />
          <circle cx="119" cy="107" r="8.5" fill="#0a0a0a" />
          <circle cx="84" cy="104" r="3" fill="#fff" />
          <circle cx="122" cy="104" r="3" fill="#fff" />
          <circle cx="78.5" cy="110.5" r="1.4" fill="#fff" opacity="0.7" />
          <circle cx="116.5" cy="110.5" r="1.4" fill="#fff" opacity="0.7" />

          {/* burun + gülümseme */}
          <path d="M100 121c4 0 6.5 2.4 6.5 5 0 3-3 5-6.5 5s-6.5-2-6.5-5c0-2.6 2.5-5 6.5-5Z" fill="#0a0a0a" />
          <path d="M100 132C97 138 90 139 86 133" fill="none" stroke="#0a0a0a" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M100 132C103 138 110 139 114 133" fill="none" stroke="#0a0a0a" strokeWidth="2.4" strokeLinecap="round" />
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
