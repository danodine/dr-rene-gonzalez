import type { Metadata, Viewport } from "next";
import CursorSparkle from "@/components/CursorSparkle";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollTriggerRefresh from "@/components/ScrollTriggerRefresh";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const siteUrl = "https://pagina-rene-gonzalez.vercel.app";
const siteName = "Dr. René González Dávila";
const siteDescription =
  "Dr. René González Dávila, cirujano estético en Loja, Ecuador. Rinoplastia, Botox, liposucción, ácido hialurónico y procedimientos estéticos con resultados naturales, seguros y personalizados.";
const ogImage = "/images/Dr-Rene-Gonzales-Bl.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cirujano estético en Loja | Dr. René González Dávila",
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "cirujano estético en Loja",
    "cirugía estética en Loja",
    "Dr. René González Dávila",
    "rinoplastia en Loja",
    "botox en Loja",
    "liposucción en Loja",
    "ácido hialurónico en Loja",
    "armonización facial en Loja",
    "rejuvenecimiento facial en Loja",
    "cirujano estético en Ecuador",
  ],
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "healthcare",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: siteUrl,
    siteName,
    title: "Cirujano estético en Loja | Dr. René González Dávila",
    description:
      "Rinoplastia, Botox, liposucción, ácido hialurónico y cirugía estética en Loja, Ecuador, con una visión médica enfocada en naturalidad, proporción y seguridad.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 1200,
        alt: "Dr. René González Dávila, cirujano estético en Loja, Ecuador",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cirujano estético en Loja | Dr. René González Dávila",
    description:
      "Cirugía estética facial y corporal en Loja, Ecuador, con resultados naturales, precisión quirúrgica y atención personalizada.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "dark light",
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
        <ScrollTriggerRefresh />
        <Navbar />
        <WhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
