"use client";

import { motion, useReducedMotion } from "framer-motion";

type Layer = { name: string; clips: { left: number; width: number }[] };

const LAYERS: Layer[] = [
  { name: "Video", clips: [{ left: 4, width: 40 }, { left: 52, width: 34 }] },
  { name: "Audio", clips: [{ left: 8, width: 70 }] },
  { name: "FX", clips: [{ left: 30, width: 22 }, { left: 66, width: 20 }] },
  { name: "AI", clips: [{ left: 12, width: 18 }, { left: 40, width: 30 }] },
];

export function VideoTimeline() {
  const reduce = useReducedMotion();

  return (
    <div
      className="w-full rounded-xl border border-white/10 bg-[#0c0c0e]/80 p-2.5 backdrop-blur-md"
      aria-hidden="true"
    >
      <div className="relative space-y-1">
        {LAYERS.map((layer) => (
          <div key={layer.name} className="flex items-center gap-2">
            <span className="w-8 shrink-0 text-[8px] font-medium uppercase tracking-wider text-muted-foreground">
              {layer.name}
            </span>
            <div className="relative h-2.5 flex-1 rounded bg-white/[0.04]">
              {layer.clips.map((c, i) => (
                <span
                  key={i}
                  className="absolute top-0 h-full rounded bg-primary/30"
                  style={{ left: `${c.left}%`, width: `${c.width}%` }}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Playhead — track alanını (etiketlerden sonra) kaplayan katman içinde */}
        <div className="pointer-events-none absolute inset-y-0 right-0" style={{ left: 40 }}>
          <motion.div
            className="absolute inset-y-0 w-px bg-primary shadow-[0_0_8px_hsl(var(--primary))]"
            initial={{ left: "0%" }}
            animate={reduce ? { left: "38%" } : { left: ["0%", "100%"] }}
            transition={reduce ? undefined : { duration: 7, repeat: Infinity, ease: "linear" }}
          >
            <span className="absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
