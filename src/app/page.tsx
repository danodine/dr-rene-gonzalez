import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimoniosSection from "@/components/TestimoniosSection";
import {
  clinicAddress,
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

const description =
  "Dr. René González Dávila, cirujano estético en Loja, Ecuador. Especialista en rinoplastia, Botox, liposucción y ácido hialurónico con atención personalizada y resultados naturales.";

export const metadata: Metadata = {
  title: "Cirujano estético en Loja",
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Dónde atiende el Dr. René González Dávila?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Atiende en ${clinicAddress}.`,
      },
    },
    {
      "@type": "Question",
      name: "¿Qué procedimientos estéticos ofrece?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ofrece cirugía estética facial y corporal, además de tratamientos de medicina estética como rinoplastia, Botox, liposucción, ácido hialurónico, blefaroplastia, láser CO2 fraccionado y bioestimuladores.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo puedo solicitar una valoración?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Puedes solicitar una valoración por WhatsApp o teléfono al ${primaryPhone}, o escribir al correo ${email}.`,
      },
    },
  ],
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
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }}
      />
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimoniosSection />
      <section
        id="faq"
        className="bg-black px-6 py-20 text-white sm:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
            Información para pacientes
          </p>
          <h2 className="mt-5 max-w-4xl text-3xl font-light uppercase tracking-[0.14em] text-white sm:text-5xl">
            Cirugía estética y medicina estética en Loja
          </h2>
          <div className="mt-10 grid gap-8 text-sm leading-7 text-white/62 md:grid-cols-3">
            <article>
              <h3 className="text-base font-normal uppercase tracking-[0.16em] text-white">
                Ubicación
              </h3>
              <p className="mt-4">{clinicAddress}.</p>
            </article>
            <article>
              <h3 className="text-base font-normal uppercase tracking-[0.16em] text-white">
                Procedimientos
              </h3>
              <p className="mt-4">
                Rinoplastia, Botox, liposucción, ácido hialurónico,
                blefaroplastia, abdominoplastia, láser CO2 fraccionado y
                bioestimuladores.
              </p>
            </article>
            <article>
              <h3 className="text-base font-normal uppercase tracking-[0.16em] text-white">
                Valoración
              </h3>
              <p className="mt-4">
                Agenda una valoración médica para definir el tratamiento más
                adecuado según tu anatomía, objetivos y estado de salud.
              </p>
              <a
                href="/cirujano-estetico-loja"
                className="mt-5 inline-block text-xs uppercase tracking-[0.24em] text-[#d4af37] transition-colors hover:text-[#f1d37a]"
              >
                Ver guía para pacientes en Loja
              </a>
            </article>
          </div>
        </div>
      </section>
      <div className="sr-only">
        {siteName} atiende en {clinicAddress}. Especialidades prioritarias:
        rinoplastia, Botox, liposucción y ácido hialurónico.
      </div>
    </main>
  );
}
