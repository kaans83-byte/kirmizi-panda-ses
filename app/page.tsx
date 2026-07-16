import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Workflow } from "@/components/sections/workflow";
import { References } from "@/components/sections/references";
import { Technologies } from "@/components/sections/technologies";
import { Stats } from "@/components/sections/stats";
import { Team } from "@/components/sections/team";
import { Faq } from "@/components/sections/faq";
import { Blog } from "@/components/sections/blog";
import { CTA } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { services } from "@/lib/data";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kirmizipanda.com";

// Hizmet kataloğu yalnızca ana sayfada (her sayfada tekrarlanmasın).
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#service`,
  name: "AI Reklam ve Prodüksiyon Hizmetleri",
  serviceType: "AI Reklam Ajansı Hizmetleri",
  provider: { "@id": `${SITE_URL}/#org` },
  areaServed: "TR",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Ajans Hizmetleri",
    // Tek kaynak: lib/data.ts services başlıklarından üretilir.
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title },
    })),
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />
      <main id="ana-icerik">
        <Hero />
        <Services />
        <WhyUs />
        <Workflow />
        <References />
        <Technologies />
        <Stats />
        <Team />
        <Faq />
        <Blog />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
