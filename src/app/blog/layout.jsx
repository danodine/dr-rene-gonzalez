export const metadata = {
  title: "Blog de Cirugia Estetica",
  description:
    "Artículos sobre cirugía estética, armonización facial, rejuvenecimiento, recuperación y procedimientos del DR. Rene Gonzalez.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog de Cirugia Estetica | DR. Rene Gonzalez",
    description:
      "Explora artículos y contenidos sobre procedimientos estéticos, recuperación y bienestar con enfoque médico.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogLayout({ children }) {
  return children;
}
