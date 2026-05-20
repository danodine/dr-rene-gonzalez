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
    default: "DR. René González Dávila | Cirujano Estético",
    template: "%s | DR. René González Dávila",
  },
  description:
    "Cirujano estético enfocado en armonización facial, rejuvenecimiento y procedimientos corporales con resultados naturales, seguros y personalizados.",
  keywords: [
    "Dr. René González Dávila",
    "cirujano estético",
    "cirugía estética",
    "armonización facial",
    "rejuvenecimiento facial",
    "liposucción",
    "Botox",
    "rinoplastia",
    "cirugía plástica Ecuador",
  ],
  applicationName: "DR. René González Dávila",
  authors: [{ name: "DR. René González Dávila" }],
  creator: "DR. René González Dávila",
  publisher: "DR. René González Dávila",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: siteUrl,
    siteName: "DR. René González Dávila",
    title: "DR. René González Dávila | Cirujano Estético",
    description:
      "Descubre procedimientos estéticos faciales y corporales con una visión médica enfocada en naturalidad, proporción y seguridad.",
    images: [
      {
        url: "/images/Dr-Rene-Gonzales-SN.png",
        width: 1200,
        height: 1200,
        alt: "DR. René González Dávila, cirujano estético",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DR. René González Dávila | Cirujano Estético",
    description:
      "Cirugía estética facial y corporal con resultados naturales, precisión quirúrgica y atención personalizada.",
    images: ["/images/Dr-Rene-Gonzales-SN.png"],
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
