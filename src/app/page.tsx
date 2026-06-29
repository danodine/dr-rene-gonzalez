import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimoniosSection from "@/components/TestimoniosSection";
import {
  doctorImage,
  email,
  jsonLd,
  mapUrl,
  primaryPhone,
  secondaryPhone,
  seoKeywords,
  serviceNames,
  siteName,
  siteUrl,
  socialImage,
  socialProfiles,
} from "@/lib/seo";

export const dynamic = "force-static";

const description =
  "Dr. René González Dávila, cirujano estético en Loja, Ecuador. Especialista en rinoplastia, Botox, liposucción y ácido hialurónico con atención personalizada y resultados naturales.";

export const metadata: Metadata = {
  title: {
    absolute: "Cirujano estético en Loja | Dr. René González Dávila",
  },
  description,
  keywords: [...seoKeywords, "clínica estética en Loja"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cirujano estético en Loja | Dr. René González Dávila",
    description:
      "Especialista en rinoplastia, Botox, liposucción y ácido hialurónico en Loja, Ecuador, con un enfoque médico, seguro y personalizado.",
    url: siteUrl,
    images: [socialImage],
  },
  twitter: {
    title: "Cirujano estético en Loja | Dr. René González Dávila",
    description:
      "Rinoplastia, Botox, liposucción y ácido hialurónico en Loja, Ecuador, con resultados naturales y atención médica de alto nivel.",
    images: [socialImage.url],
  },
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": `${siteUrl}/#physician`,
  name: siteName,
  description:
    "Médico cirujano con sólida formación académica y un firme compromiso con la excelencia profesional. Realizó sus estudios de Medicina en la Pontificia Universidad Católica del Ecuador, donde consolidó una base científica rigurosa y competencias clínicas fundamentales.",
  url: siteUrl,
  image: `${siteUrl}${doctorImage}`,
  medicalSpecialty: "PlasticSurgery",
  areaServed: [
    {
      "@type": "City",
      name: "Loja",
    },
    {
      "@type": "Country",
      name: "Ecuador",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Clínica Santa María, Av. Cuxibamba entre Latacunga y Riobamba",
    addressLocality: "Loja",
    addressRegion: "Loja",
    addressCountry: "EC",
  },
  worksFor: {
    "@id": `${siteUrl}/#clinic`,
  },
  telephone: [primaryPhone, secondaryPhone],
  email,
  sameAs: [...socialProfiles, mapUrl],
  availableService: serviceNames.map((name) => ({
    "@type": "MedicalProcedure",
    name,
  })),
};

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${siteUrl}/#clinic`,
  name: siteName,
  description:
    "Consultorio de cirugía estética en Loja, Ecuador, enfocado en rinoplastia, Botox, liposucción, ácido hialurónico y procedimientos estéticos con resultados naturales, seguros y personalizados.",
  url: siteUrl,
  image: `${siteUrl}${socialImage.url}`,
  telephone: [primaryPhone, secondaryPhone],
  email,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Clínica Santa María, Av. Cuxibamba entre Latacunga y Riobamba",
    addressLocality: "Loja",
    addressRegion: "Loja",
    addressCountry: "EC",
  },
  areaServed: {
    "@type": "City",
    name: "Loja",
  },
  hasMap: mapUrl,
  sameAs: socialProfiles,
  priceRange: "$$",
  medicalSpecialty: "PlasticSurgery",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  description,
  inLanguage: "es-EC",
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/#services`,
  name: "Servicios de cirugía estética y medicina estética en Loja",
  itemListElement: serviceNames.map((name, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "MedicalProcedure",
      name,
      provider: {
        "@id": `${siteUrl}/#physician`,
      },
      areaServed: {
        "@type": "City",
        name: "Loja",
      },
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Visión y misión",
      item: `${siteUrl}/#vision-mision`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Sobre mí",
      item: `${siteUrl}/#sobre-mi`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Servicios",
      item: `${siteUrl}/#servicios`,
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Testimonios",
      item: `${siteUrl}/#testimonios`,
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Revista Digital",
      item: `${siteUrl}/blog`,
    },
  ],
};

export default function Home() {
  return (
    <main className="bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(clinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }}
      />
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimoniosSection />
    </main>
  );
}
