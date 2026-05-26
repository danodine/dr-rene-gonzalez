export const metadata = {
  title: "Revista Digital de Cirugía Estética en Loja",
  description:
    "Artículos sobre cirugía estética, armonización facial, rejuvenecimiento, recuperación y procedimientos del Dr. René González Dávila en Loja, Ecuador.",
  keywords: [
    "revista digital cirugía estética",
    "blog cirugía estética en Loja",
    "rinoplastia Loja",
    "botox Loja",
    "liposucción Loja",
    "ácido hialurónico Loja",
    "Dr. René González Dávila",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Revista Digital de Cirugía Estética | Dr. René González Dávila",
    description:
      "Contenido editorial sobre cirugía estética, armonización facial y recuperación en Loja, Ecuador.",
  },
};

export default function BlogLayout({ children }) {
  return children;
}
