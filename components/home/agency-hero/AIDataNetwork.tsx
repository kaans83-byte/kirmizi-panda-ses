"use client";

import { motion, useReducedMotion } from "framer-motion";

const NODES = [
  { x: 12, y: 18 },
  { x: 30, y: 40 },
  { x: 18, y: 68 },
  { x: 46, y: 82 },
  { x: 70, y: 70 },
  { x: 84, y: 44 },
  { x: 66, y: 24 },
  { x: 88, y: 14 },
  { x: 50, y: 12 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 8],
  [8, 0],
  [5, 7],
  [1, 6],
];

// Dekoratif yapay zekâ ağı — düşük opaklık, seyrek çizgiler.
export function AIDataNetwork() {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      {EDGES.map(([a, b], i) => (
        <motion.line
          key={`e-${i}`}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
          stroke="hsl(0 84% 60%)"
          strokeWidth="0.25"
          initial={{ opacity: 0.1 }}
          animate={reduce ? { opacity: 0.12 } : { opacity: [0.04, 0.28, 0.04] }}
          transition={
            reduce ? undefined : { duration: 5 + (i % 4), repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
          }
        />
      ))}
      {NODES.map((n, i) => (
        <motion.circle
          key={`n-${i}`}
          cx={n.x}
          cy={n.y}
          r="0.7"
          fill="hsl(0 84% 62%)"
          initial={{ opacity: 0.3 }}
          animate={
            reduce
              ? { opacity: 0.3 }
              : { opacity: [0.2, 0.6, 0.2], cx: [n.x, n.x + (i % 2 ? 1.2 : -1.2), n.x] }
          }
          transition={
            reduce ? undefined : { duration: 6 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }
          }
        />
      ))}
    </svg>
  );
}
