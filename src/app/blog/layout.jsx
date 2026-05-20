export const metadata = {
  title: "Revista Digital de Cirugía Estética",
  description:
    "Artículos sobre cirugía estética, armonización facial, rejuvenecimiento, recuperación y procedimientos del DR. René González.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Revista Digital de Cirugía Estética | DR. René González",
    description:
      "Explora artículos y contenidos sobre procedimientos estéticos, recuperación y bienestar con enfoque médico.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogLayout({ children }) {
  return children;
}
