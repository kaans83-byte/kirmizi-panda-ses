import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogAlt = "Kırmızı Panda — Reklam Müziği ve AI Ses Prodüksiyonu";

async function loadFont() {
  const res = await fetch(new URL("./noto-sans.ttf", import.meta.url));
  return res.arrayBuffer();
}

export async function renderOgImage() {
  const fontData = await loadFont();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#f5f5f5",
          padding: "72px 80px",
          fontFamily: "Noto Sans",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 56, height: 56, borderRadius: 16, background: "#ef4444", display: "flex" }} />
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: "0.02em" }}>
            KIRMIZI PANDA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 22, color: "#ef4444", letterSpacing: "0.2em", fontWeight: 600 }}>
            AI REKLAM AJANSI
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 18 }}>
            <div style={{ display: "flex", fontSize: 66, fontWeight: 700, lineHeight: 1.12 }}>
              <span>Yaratıcılık ve&nbsp;</span>
              <span style={{ color: "#ef4444" }}>Yapay Zekâ</span>
            </div>
            <div style={{ display: "flex", fontSize: 66, fontWeight: 700, lineHeight: 1.12 }}>
              ile Markanızı Büyütüyoruz
            </div>
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#9a9a9a" }}>
          Strateji · Yapay Zekâ · Prodüksiyon · Ses · Web · Büyüme
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [{ name: "Noto Sans", data: fontData, style: "normal", weight: 400 }],
    }
  );
}
