import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ContactForm } from "@/components/contact-form";
import { getDiscipline } from "@/lib/consulting";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Teklif Al ve İletişim",
  description:
    "Kırmızı Panda AI Reklam Ajansı ile iletişime geçin: reklam müziği, ses prodüksiyonu ve strateji danışmanlığı için ücretsiz teklif alın.",
  alternates: { canonical: "/teklif" },
  // İnce/işlevsel sayfa: dizine ekleme, ama bağlantıları takip et.
  robots: { index: false, follow: true },
};

export default async function TeklifPage({
  searchParams,
}: {
  searchParams: Promise<{ konu?: string }>;
}) {
  const { konu = "" } = await searchParams;
  // ?konu= bir danışmanlık slug'ıysa "Danışmanlık" seçeneğine eşle; değilse olduğu gibi geç.
  const defaultKonu = getDiscipline(konu) ? "Danışmanlık" : konu;
  return (
    <>
      <Navbar />
      <main id="ana-icerik">
        <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-28">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-grid radial-fade opacity-70" />
          <div className="pointer-events-none absolute -top-40 right-0 -z-10 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[120px]" />

          <div className="container grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                İletişim
              </span>
              <h1 className="mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl">
                Markanızın sesini ve stratejisini birlikte planlayalım
              </h1>
              <p className="mt-5 max-w-md text-balance text-lg leading-relaxed text-muted-foreground">
                Reklam müziği, ses prodüksiyonu veya strateji danışmanlığı — ihtiyacınızı yazın,
                ücretsiz keşif görüşmesi ve teklif için en geç 1 iş günü içinde dönelim.
              </p>

              <dl className="mt-9 space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    E-posta
                  </dt>
                  <dd className="mt-1">
                    <a href={`mailto:${company.email}`} className="hover:text-primary">
                      {company.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    WhatsApp
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={company.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      {company.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Konum
                  </dt>
                  <dd className="mt-1">İstanbul · Uzaktan çalışma</dd>
                </div>
              </dl>
            </div>

            <ContactForm defaultKonu={defaultKonu} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
