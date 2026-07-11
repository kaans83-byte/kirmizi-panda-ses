"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

import { CreativeCore } from "./agency-hero/CreativeCore";
import { FloatingServiceCard } from "./agency-hero/FloatingServiceCard";
import { AudioWave } from "./agency-hero/AudioWave";
import { VideoTimeline } from "./agency-hero/VideoTimeline";
import { AIDataNetwork } from "./agency-hero/AIDataNetwork";
import { MiniBrowserCard } from "./agency-hero/MiniBrowserCard";
import { heroServiceCards } from "./agency-hero/heroVisualData";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Fareye göre çok hafif parallax uygulayan katman (maks ±depth px). */
function ParallaxLayer({
  mvX,
  mvY,
  depth,
  className,
  children,
}: {
  mvX: MotionValue<number>;
  mvY: MotionValue<number>;
  depth: number;
  className?: string;
  children: React.ReactNode;
}) {
  const x = useTransform(mvX, [-1, 1], [-depth, depth]);
  const y = useTransform(mvY, [-1, 1], [-depth, depth]);
  return (
    <motion.div className={className} style={{ x, y }}>
      {children}
    </motion.div>
  );
}

export function AgencyHeroVisual() {
  const reduce = useReducedMotion();
  const stageRef = React.useRef<HTMLDivElement>(null);
  const [parallaxOn, setParallaxOn] = React.useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 120, damping: 20, mass: 0.4 };
  const sx = useSpring(mx, spring);
  const sy = useSpring(my, spring);

  // Parallax yalnızca fare (fine pointer) olan cihazlarda ve reduced-motion kapalıysa
  React.useEffect(() => {
    if (reduce) return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setParallaxOn(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduce]);

  const handleMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!parallaxOn) return;
      const el = stageRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1;
      const ny = ((e.clientY - r.top) / r.height) * 2 - 1;
      mx.set(Math.max(-1, Math.min(1, nx)));
      my.set(Math.max(-1, Math.min(1, ny)));
    },
    [parallaxOn, mx, my]
  );

  const handleLeave = React.useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  const fade = (delay: number, scale = false) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, scale: scale ? 0.9 : 1 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: EASE, delay: reduce ? 0 : delay },
  });

  return (
    <div
      ref={stageRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative mx-auto aspect-square w-full max-w-[380px] overflow-hidden sm:max-w-[480px] lg:max-w-[560px]"
      role="img"
      aria-label="Kırmızı Panda Creative Engine: yapay zekâ, reklam filmi, sinema FX, reklam müziği, ses mühendisliği, web, SEO ve performans pazarlamasını temsil eden animasyonlu kompozisyon."
    >
      {/* Arka plan: grid + glow + AI ağı */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.15]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[90px]" aria-hidden="true" />

      <ParallaxLayer mvX={sx} mvY={sy} depth={10} className="absolute inset-0">
        <motion.div className="absolute inset-0" {...fade(0)}>
          <AIDataNetwork />
        </motion.div>
      </ParallaxLayer>

      {/* Merkez panel */}
      <ParallaxLayer mvX={sx} mvY={sy} depth={4} className="absolute inset-0">
        <div className="absolute left-1/2 top-[4%] w-[62%] -translate-x-1/2 sm:w-[54%] lg:w-[50%]">
          <motion.div {...fade(0.15, true)}>
            <CreativeCore />
          </motion.div>
        </div>
      </ParallaxLayer>

      {/* Mini tarayıcı (web) — mobilde gizli */}
      <ParallaxLayer mvX={sx} mvY={sy} depth={9} className="absolute inset-0 hidden sm:block">
        <div className="absolute left-1/2 top-[74%] -translate-x-1/2 -translate-y-1/2">
          <motion.div {...fade(0.6, true)}>
            <MiniBrowserCard />
          </motion.div>
        </div>
      </ParallaxLayer>

      {/* Yörünge kartları */}
      <ParallaxLayer mvX={sx} mvY={sy} depth={8} className="absolute inset-0">
        {heroServiceCards.map((card) => (
          <FloatingServiceCard key={card.id} card={card} />
        ))}
      </ParallaxLayer>

      {/* Alt konsol: timeline (sm+) + ses dalgası */}
      <ParallaxLayer mvX={sx} mvY={sy} depth={6} className="absolute inset-x-0 bottom-0">
        <motion.div className="px-2 pb-1" {...fade(0.78)}>
          <div className="mx-auto flex w-[94%] items-end justify-center gap-2">
            <div className="hidden min-w-0 flex-1 sm:block">
              <VideoTimeline />
            </div>
            <div className="h-9 w-[58%] shrink-0 sm:h-10 sm:w-[34%]">
              <AudioWave />
            </div>
          </div>
        </motion.div>
      </ParallaxLayer>
    </div>
  );
}
