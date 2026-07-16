import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "kirmizipanda.com";

// SEO: tek kanonik host. www.* isteklerini apex'e kalıcı (308) yönlendir.
// Firebase App Hosting isteği proxy'lediği için gerçek host `x-forwarded-host`
// başlığında gelir; ikisini de kontrol ediyoruz.
export function middleware(request: NextRequest) {
  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "";

  // Yalnızca "www." ile başlayan gerçek alan adında yönlendir.
  // (Dahili/hosted.app adreslerinde eşleşmez → döngü riski yok.)
  if (host.toLowerCase().startsWith(`www.${CANONICAL_HOST}`)) {
    const { pathname, search } = request.nextUrl;
    return NextResponse.redirect(`https://${CANONICAL_HOST}${pathname}${search}`, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Statik dosyalar ve Next dahili yolları hariç.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
