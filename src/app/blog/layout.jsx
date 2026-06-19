import { seoKeywords, siteName, socialImage } from "@/lib/seo";

export const metadata = {
  title: "Revista Digital de Cirugía Estética en Loja",
  description:
    "Artículos sobre cirugía estética, armonización facial, rejuvenecimiento, recuperación y procedimientos del Dr. René González Dávila en Loja, Ecuador.",
  keywords: [
    ...seoKeywords,
    "revista digital cirugía estética",
    "blog cirugía estética en Loja",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Revista Digital de Cirugía Estética | Dr. René González Dávila",
    description:
      "Explora artículos y contenidos sobre procedimientos estéticos, recuperación y bienestar con enfoque médico en Loja, Ecuador.",
    url: "/blog",
    type: "website",
    siteName,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revista Digital de Cirugía Estética | Dr. René González Dávila",
    description:
      "Contenido editorial sobre cirugía estética, armonización facial y recuperación en Loja, Ecuador.",
    images: [socialImage.url],
  },
};

export default function BlogLayout({ children }) {
  return children;
}
