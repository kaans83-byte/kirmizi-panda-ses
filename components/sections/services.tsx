"use client";

import { motion, type Variants } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { ServiceCard } from "./service-card";
import { ConsultingFeatured } from "./consulting-featured";
import {
  services,
  serviceCategoryOrder,
  serviceCategoryDesc,
  serviceCategoryByTitle,
} from "@/lib/data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export function Services() {
  return (
    <section id="hizmetler" className="scroll-mt-24 py-24 sm:py-32" aria-labelledby="hizmetler-title">
      <div className="container">
        <SectionHeading
          eyebrow="Hizmetler"
          title={<span id="hizmetler-title">Fikirden yayına, uçtan uca üretim</span>}
          description="AI prodüksiyon, reklam filmi ve sinema FX’ten; reklam müziği, ses mühendisliği, web, SEO ve performans pazarlamasına kadar tüm disiplinler tek ekipte."
        />

        {/* Danışmanlık, ana hizmet kartlarından biri — grid'de tam satır, en üstte */}
        <div className="mt-16">
          <ConsultingFeatured />
        </div>

        {/* Hizmetler kategorilere göre gruplu */}
        <div className="mt-14 space-y-14">
          {serviceCategoryOrder.map((category) => {
            const catServices = services.filter(
              (s) => serviceCategoryByTitle[s.title] === category
            );
            if (catServices.length === 0) return null;

            return (
              <div key={category}>
                <Reveal>
                  <div className="flex flex-col gap-1 border-l-2 border-primary/50 pl-4">
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{category}</h3>
                    <p className="text-sm text-muted-foreground">
                      {serviceCategoryDesc[category]}
                    </p>
                  </div>
                </Reveal>

                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-60px" }}
                  className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
                >
                  {catServices.map((service) => (
                    <ServiceCard key={service.title} service={service} />
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
