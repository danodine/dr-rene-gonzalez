import type { Metadata } from "next";
import CursorSparkle from "@/components/CursorSparkle";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const siteUrl = "https://pagina-rene-gonzalez.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DR. Rene Gonzalez | Cirujano Estetico",
    template: "%s | DR. Rene Gonzalez",
  },
  description:
    "Cirujano estético enfocado en armonización facial, rejuvenecimiento y procedimientos corporales con resultados naturales, seguros y personalizados.",
  keywords: [
    "Dr Rene Gonzalez",
    "cirujano estetico",
    "cirugia estetica",
    "armonizacion facial",
    "rejuvenecimiento facial",
    "liposuccion",
    "botox",
    "rinoplastia",
    "cirugia plastica Ecuador",
  ],
  applicationName: "DR. Rene Gonzalez",
  authors: [{ name: "DR. Rene Gonzalez" }],
  creator: "DR. Rene Gonzalez",
  publisher: "DR. Rene Gonzalez",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: siteUrl,
    siteName: "DR. Rene Gonzalez",
    title: "DR. Rene Gonzalez | Cirujano Estetico",
    description:
      "Descubre procedimientos estéticos faciales y corporales con una visión médica enfocada en naturalidad, proporción y seguridad.",
    images: [
      {
        url: "/images/Dr-Rene-Gonzales-2.png",
        width: 1200,
        height: 1200,
        alt: "DR. Rene Gonzalez, Cirujano Estetico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DR. Rene Gonzalez | Cirujano Estetico",
    description:
      "Cirugía estética facial y corporal con resultados naturales, precisión quirúrgica y atención personalizada.",
    images: ["/images/Dr-Rene-Gonzales-2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "healthcare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <CursorSparkle />
        <Navbar />
        <WhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
