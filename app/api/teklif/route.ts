import { NextResponse } from "next/server";

// Not: Gelen teklif/iletişim talepleri şu an yalnızca sunucu loglarına yazılır.
// Üretimde bir veritabanına (ör. Vercel Postgres/KV) veya e-posta servisine
// (ör. Resend) bağlanmalıdır.
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Geçersiz istek." }, { status: 400 });
  }

  const ad = String(data?.ad ?? "").trim();
  const email = String(data?.email ?? "").trim();

  if (!ad || !email) {
    return NextResponse.json(
      { ok: false, error: "Ad ve e-posta zorunludur." },
      { status: 400 }
    );
  }

  console.log("[Kırmızı Panda] Yeni teklif talebi:", {
    ad,
    firma: String(data?.firma ?? "-"),
    email,
    telefon: String(data?.telefon ?? "-"),
    konu: String(data?.konu ?? "-"),
    butce: String(data?.butce ?? "-"),
    mesaj: String(data?.mesaj ?? "-"),
    kvkk: Boolean(data?.kvkk),
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
