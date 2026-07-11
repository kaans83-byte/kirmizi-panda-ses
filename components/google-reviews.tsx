import { Star, MessageSquare } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { company } from "@/data/company";

// ---------------------------------------------------------------------------
// GoogleReviews — GELECEK HAZIRLIĞI (şimdilik AKTİF DEĞİL).
//
// Bu bileşen henüz hiçbir sayfada render edilmez. İleride Google Business
// Profile API'si veya üçüncü taraf bir servisle (ör. review aggregator)
// beslenebilecek şekilde tasarlanmıştır.
//
// Aktifleştirmek için:
//   1) `reviews` verisini bir sunucu fonksiyonundan / API'den doldurun.
//   2) Bu bileşeni ana sayfada <Contact /> yakınına ekleyin.
//   3) İsteğe bağlı: AggregateRating schema'sını layout.tsx'e ekleyin.
//      (Yalnızca GERÇEK, doğrulanmış puanlarla — uydurma puan eklemeyin.)
// ---------------------------------------------------------------------------

export type GoogleReview = {
  author: string;
  rating: number; // 1..5
  text: string;
  relativeTime?: string;
};

type Props = {
  reviews?: GoogleReview[];
  averageRating?: number;
  totalReviews?: number;
};

export function GoogleReviews({ reviews = [], averageRating, totalReviews }: Props) {
  const hasData = reviews.length > 0;

  return (
    <section className="scroll-mt-24 py-24 sm:py-32" aria-labelledby="yorumlar-title">
      <div className="container">
        <SectionHeading
          eyebrow="Google Yorumları"
          title={<span id="yorumlar-title">Müşterilerimiz ne diyor?</span>}
          description="Google Business Profile üzerindeki gerçek müşteri değerlendirmeleri."
        />

        {!hasData ? (
          // Placeholder — gerçek yorumlar bağlanana kadar gösterilir.
          <div className="mx-auto mt-14 flex max-w-xl flex-col items-center rounded-2xl border border-dashed border-border bg-card p-10 text-center">
            <MessageSquare className="h-10 w-10 text-primary" aria-hidden="true" />
            <p className="mt-4 text-sm text-muted-foreground">
              Google yorumları yakında bu alanda otomatik olarak listelenecek.
            </p>
            {company.googleBusinessUrl && (
              <a
                href={company.googleBusinessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm font-semibold text-primary hover:underline"
              >
                Google’da yorum bırakın →
              </a>
            )}
          </div>
        ) : (
          <>
            {typeof averageRating === "number" && (
              <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-0.5 text-primary" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={i < Math.round(averageRating) ? "h-4 w-4 fill-current" : "h-4 w-4"} />
                  ))}
                </span>
                <span>
                  {averageRating.toFixed(1)} / 5
                  {typeof totalReviews === "number" ? ` · ${totalReviews} değerlendirme` : ""}
                </span>
              </div>
            )}
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
              {reviews.map((r, i) => (
                <figure key={i} className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-0.5 text-primary" aria-label={`${r.rating} / 5`}>
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className={s < r.rating ? "h-4 w-4 fill-current" : "h-4 w-4 opacity-30"} aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-sm leading-relaxed text-foreground/85">{r.text}</blockquote>
                  <figcaption className="mt-4 text-sm font-semibold">
                    {r.author}
                    {r.relativeTime ? (
                      <span className="ml-2 font-normal text-muted-foreground">{r.relativeTime}</span>
                    ) : null}
                  </figcaption>
                </figure>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
