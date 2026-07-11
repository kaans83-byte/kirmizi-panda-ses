import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { faqItems } from "@/lib/faq";

// Native <details> — JS gerektirmez, klavye ve ekran okuyucu ile erişilebilir.
export function Faq() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="sss" className="scroll-mt-24 py-24 sm:py-32" aria-labelledby="sss-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container">
        <SectionHeading
          eyebrow="Sıkça Sorulan Sorular"
          title={<span id="sss-title">Aklınıza takılanlar</span>}
          description="Süreç, hizmetler ve yapay zekâ yaklaşımımıza dair en çok sorulanları derledik."
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {faqItems.map((f) => (
            <details
              key={f.q}
              name="sss"
              className="group rounded-2xl border border-border bg-card px-5 transition-colors duration-300 open:border-primary/40 sm:px-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-open:rotate-45">
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
