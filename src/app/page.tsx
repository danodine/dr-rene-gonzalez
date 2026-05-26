import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimoniosSection from "@/components/TestimoniosSection";

const siteUrl = "https://pagina-rene-gonzalez.vercel.app";
const siteName = "Dr. René González Dávila";
const mapUrl =
  "https://www.google.com/maps/place//data=!4m2!3m1!1s0x91cb49113de9be7b:0x3ab4219d42a27722?sa=X&ved=1t:8290&ictx=111";
const clinicAddress =
  "Clínica Santa María, Av. Cuxibamba entre Latacunga y Riobamba, Loja, Ecuador";
const description =
  "Dr. René González Dávila, cirujano estético en Loja, Ecuador. Especialista en rinoplastia, Botox, liposucción y ácido hialurónico con atención personalizada y resultados naturales.";

export const metadata: Metadata = {
  title: "Cirujano estético en Loja",
  description,
  keywords: [
    "cirujano estético en Loja",
    "rinoplastia en Loja",
    "botox en Loja",
    "liposucción en Loja",
    "ácido hialurónico en Loja",
    "cirugía estética en Loja Ecuador",
    "Dr. René González Dávila",
    "clínica estética en Loja",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cirujano estético en Loja | Dr. René González Dávila",
    description:
      "Especialista en rinoplastia, Botox, liposucción y ácido hialurónico en Loja, Ecuador, con un enfoque médico, seguro y personalizado.",
    url: siteUrl,
  },
  twitter: {
    title: "Cirujano estético en Loja | Dr. René González Dávila",
    description:
      "Rinoplastia, Botox, liposucción y ácido hialurónico en Loja, Ecuador, con resultados naturales y atención médica de alto nivel.",
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
  image: `${siteUrl}/images/Dr-Rene-Gonzales-Bl.png`,
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
  telephone: "+593992448076",
  email: "renegonzalezdav@hotmail.com",
  sameAs: [
    "https://www.facebook.com/dr.renegonzalezdav",
    "https://www.instagram.com/dr.renegonzalezdav/",
    "https://www.tiktok.com/@dr.renegonzalezdav?_r=1&_t=ZS-95oZtyoRWlh",
    mapUrl,
  ],
  availableService: [
    { "@type": "MedicalProcedure", name: "Rinoplastia" },
    { "@type": "MedicalProcedure", name: "Botox facial" },
    { "@type": "MedicalProcedure", name: "Liposucción" },
    { "@type": "MedicalProcedure", name: "Ácido hialurónico" },
  ],
};

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": `${siteUrl}/#clinic`,
  name: siteName,
  description:
    "Consultorio de cirugía estética en Loja, Ecuador, enfocado en rinoplastia, Botox, liposucción, ácido hialurónico y procedimientos estéticos con resultados naturales, seguros y personalizados.",
  url: siteUrl,
  image: `${siteUrl}/images/Dr-Rene-Gonzales-Bl.png`,
  telephone: "+593992448076",
  email: "renegonzalezdav@hotmail.com",
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
  sameAs: [
    "https://www.facebook.com/dr.renegonzalezdav",
    "https://www.instagram.com/dr.renegonzalezdav/",
    "https://www.tiktok.com/@dr.renegonzalezdav?_r=1&_t=ZS-95oZtyoRWlh",
  ],
  priceRange: "$$",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimoniosSection />
      <div className="sr-only">
        {siteName} atiende en {clinicAddress}. Especialidades prioritarias:
        rinoplastia, Botox, liposucción y ácido hialurónico.
      </div>
    </main>
  );
}
