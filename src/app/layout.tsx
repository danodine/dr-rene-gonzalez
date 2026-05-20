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
    default: "DR. René Gonzalez Dávila | Cirujano Estetico",
    template: "%s | DR. René Gonzalez Dávila",
  },
  description:
    "Cirujano estético enfocado en armonización facial, rejuvenecimiento y procedimientos corporales con resultados naturales, seguros y personalizados.",
  keywords: [
    "Dr René Gonzalez Dávila",
    "cirujano estetico",
    "cirugia estetica",
    "armonizacion facial",
    "rejuvenecimiento facial",
    "liposuccion",
    "botox",
    "rinoplastia",
    "cirugia plastica Ecuador",
  ],
  applicationName: "DR. René Gonzalez Dávila",
  authors: [{ name: "DR. René Gonzalez Dávila" }],
  creator: "DR. René Gonzalez Dávila",
  publisher: "DR. René Gonzalez Dávila",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: siteUrl,
    siteName: "DR. René Gonzalez Dávila",
    title: "DR. René Gonzalez Dávila | Cirujano Estetico",
    description:
      "Descubre procedimientos estéticos faciales y corporales con una visión médica enfocada en naturalidad, proporción y seguridad.",
    images: [
      {
        url: "/images/Dr-Rene-Gonzales-Bl.png",
        width: 1200,
        height: 1200,
        alt: "DR. René Gonzalez Dávila, Cirujano Estetico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DR. René Gonzalez Dávila | Cirujano Estetico",
    description:
      "Cirugía estética facial y corporal con resultados naturales, precisión quirúrgica y atención personalizada.",
    images: ["/images/Dr-Rene-Gonzales-Bl.png"],
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
