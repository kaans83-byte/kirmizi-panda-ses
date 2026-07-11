import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { DisciplineHero } from "@/components/consulting/discipline-hero";
import { ServiceScope } from "@/components/consulting/service-scope";
import { ConsultingWorkModel } from "@/components/consulting/work-model";
import { ConsultingPackages } from "@/components/consulting/packages";
import { OtherDisciplines } from "@/components/consulting/other-disciplines";
import { ConsultingCTA } from "@/components/consulting/consulting-cta";
import { disciplineSlugs, getDiscipline } from "@/lib/consulting";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kirmizipanda.com.tr";

export function generateStaticParams() {
  return disciplineSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = getDiscipline(slug);
  if (!d) return {};

  const url = `/hizmetler/${d.slug}`;
  return {
    title: { absolute: d.seoTitle },
    description: d.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: "tr_TR",
      url,
      siteName: "Kırmızı Panda AI Reklam Ajansı",
      title: d.seoTitle,
      description: d.seoDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: d.seoTitle,
      description: d.seoDescription,
    },
  };
}

export default async function ConsultingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const discipline = getDiscipline(slug);
  if (!discipline) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: discipline.title,
        serviceType: discipline.title,
        url: `${SITE_URL}/hizmetler/${discipline.slug}`,
        description: discipline.seoDescription,
        provider: { "@id": `${SITE_URL}/#org` },
        areaServed: "TR",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: discipline.title,
          itemListElement: discipline.services.map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Hizmetler", item: `${SITE_URL}/#hizmetler` },
          {
            "@type": "ListItem",
            position: 3,
            name: discipline.title,
            item: `${SITE_URL}/hizmetler/${discipline.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="ana-icerik">
        <DisciplineHero slug={discipline.slug} />
        <ServiceScope services={discipline.services} />
        <ConsultingWorkModel />
        <ConsultingPackages />
        <OtherDisciplines currentSlug={discipline.slug} />
        <ConsultingCTA />
      </main>
      <Footer />
    </>
  );
}

// Bilinmeyen slug'larda 404
export const dynamicParams = false;
