import type { Metadata, Viewport } from "next";
import CursorSparkle from "@/components/CursorSparkle";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageLoader from "@/components/PageLoader";
import ScrollTriggerRefresh from "@/components/ScrollTriggerRefresh";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  doctorName,
  seoKeywords,
  siteDescription,
  siteName,
  siteUrl,
  socialImage,
} from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cirujano estético en Loja | Dr. René González Dávila",
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: seoKeywords,
  applicationName: siteName,
  authors: [{ name: doctorName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "healthcare",
  classification: "Medical practice",
  alternates: {
    canonical: "/",
    languages: {
      "es-EC": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: siteUrl,
    siteName,
    title: "Cirujano estético en Loja | Dr. René González Dávila",
    description:
      "Rinoplastia, Botox, liposucción, ácido hialurónico y cirugía estética en Loja, Ecuador, con una visión médica enfocada en naturalidad, proporción y seguridad.",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cirujano estético en Loja | Dr. René González Dávila",
    description:
      "Cirugía estética facial y corporal en Loja, Ecuador, con resultados naturales, precisión quirúrgica y atención personalizada.",
    images: [socialImage.url],
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
  other: {
    "geo.region": "EC-L",
    "geo.placename": "Loja",
    "medical-specialty": "Cirugía estética",
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
        <noscript>
          <style>{".js-page-loader{display:none!important}"}</style>
        </noscript>
        <PageLoader />
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
