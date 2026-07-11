import { cn } from "@/lib/utils";

type Props = {
  src: string;
  title: string;
  className?: string;
};

// Google Haritalar — iframe native lazy-load ile yüklenir.
// Sabit en-boy oranlı kap sayesinde CLS oluşmaz.
export function GoogleMap({ src, title, className }: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border shadow-lg",
        className
      )}
    >
      <div className="aspect-[16/11] w-full sm:aspect-[16/9]">
        <iframe
          src={src}
          title={title}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-full w-full border-0 grayscale-[0.25] transition-[filter] duration-300 hover:grayscale-0"
        />
      </div>
    </div>
  );
}
