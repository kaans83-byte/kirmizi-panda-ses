import { renderOgImage, ogSize, ogAlt } from "./og-render";

export const runtime = "edge";
export const alt = ogAlt;
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage();
}
