import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  clinicAddress,
  doctorImage,
  email,
  jsonLd,
  primaryPhone,
  secondaryPhone,
  seoKeywords,
  serviceNames,
  siteName,
  siteUrl,
  socialImage,
  socialProfiles,
  targetSearchQueries,
} from "@/lib/seo";

const pageUrl = `${siteUrl}/cirujano-estetico-loja`;
const pageTitle = "Cirujano estético en Loja, Ecuador";
const pageDescription =
  "Conoce al Dr. René González Dávila, cirujano estético en Loja, Ecuador. Valoración médica para rinoplastia, Botox, liposucción, ácido hialurónico, cirugía facial y corporal.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...seoKeywords,
    "cirujano estético Loja Ecuador",
    "cirujano plastico estetico Loja",
    "doctor cirugía estética Loja",
    "mejor cirujano estético en Loja",
  ],
  alternates: {
    canonical: "/cirujano-estetico-loja",
  },
  openGraph: {
    type: "profile",
    locale: "es_EC",
    url: pageUrl,
    siteName,
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | ${siteName}`,
    description: pageDescription,
    images: [socialImage.url],
  },
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${pageUrl}#webpage`,
  url: pageUrl,
  name: `${pageTitle} | ${siteName}`,
  description: pageDescription,
  inLanguage: "es-EC",
  mainEntity: {
    "@id": `${siteUrl}/#physician`,
  },
  about: [
    {
      "@type": "MedicalSpecialty",
      name: "Cirugía estética",
    },
    {
      "@type": "Place",
      name: "Loja, Ecuador",
    },
  ],
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": `${siteUrl}/#physician`,
  name: siteName,
  url: siteUrl,
  image: `${siteUrl}${doctorImage}`,
  description:
    "Médico cirujano dedicado a cirugía estética y medicina estética en Loja, Ecuador, con atención personalizada, planificación médica y enfoque en resultados naturales.",
  medicalSpecialty: ["PlasticSurgery", "CosmeticSurgery"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Clínica Santa María, Av. Cuxibamba entre Latacunga y Riobamba",
    addressLocality: "Loja",
    addressRegion: "Loja",
    addressCountry: "EC",
  },
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
  telephone: [primaryPhone, secondaryPhone],
  email,
  sameAs: socialProfiles,
  knowsAbout: [
    ...targetSearchQueries,
    "rinoplastia",
    "botox",
    "liposucción",
    "ácido hialurónico",
    "armonización facial",
    "medicina estética facial",
  ],
  availableService: serviceNames.map((name) => ({
    "@type": "MedicalProcedure",
    name,
    provider: {
      "@id": `${siteUrl}/#physician`,
    },
    areaServed: {
      "@type": "City",
      name: "Loja",
    },
  })),
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  "@id": `${siteUrl}/#clinic`,
  name: siteName,
  url: siteUrl,
  image: `${siteUrl}${socialImage.url}`,
  description:
    "Consulta de cirugía estética y medicina estética en Loja, Ecuador, para pacientes que buscan valoración profesional, seguridad médica y resultados naturales.",
  telephone: [primaryPhone, secondaryPhone],
  email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Clínica Santa María, Av. Cuxibamba entre Latacunga y Riobamba",
    addressLocality: "Loja",
    addressRegion: "Loja",
    addressCountry: "EC",
  },
  areaServed: {
    "@type": "City",
    name: "Loja",
  },
  priceRange: "$$",
  sameAs: socialProfiles,
  makesOffer: serviceNames.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "MedicalProcedure",
      name: service,
    },
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${pageUrl}#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Quién es el cirujano estético en Loja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Dr. René González Dávila es médico cirujano dedicado a cirugía estética y medicina estética en Loja, Ecuador.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué procedimientos ofrece en Loja?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ofrece valoración para rinoplastia, Botox, liposucción, ácido hialurónico, blefaroplastia, abdominoplastia, láser CO2 fraccionado, bioestimuladores y otros procedimientos faciales y corporales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Dónde está ubicado el consultorio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `La atención se realiza en ${clinicAddress}.`,
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
      name: "Cirujano estético en Loja",
      item: pageUrl,
    },
  ],
};

export default function CirujanoEsteticoLojaPage() {
  return (
    <main className="bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(physicianSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }}
      />

      <section className="relative min-h-[82vh] overflow-hidden">
        <Image
          src="/images/headerBackgroundDesktopC.webp"
          alt="Consulta de cirugía estética en Loja con Dr. René González Dávila"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.9),rgba(0,0,0,0.64)_42%,rgba(0,0,0,0.18))]" />
        <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-center px-6 py-28 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]">
              Loja, Ecuador
            </p>
            <h1 className="mt-6 text-4xl font-light uppercase leading-[1.04] tracking-[0.08em] text-white sm:text-6xl lg:text-7xl">
              Cirujano estético en Loja
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
              El Dr. René González Dávila brinda valoración médica para cirugía
              estética y medicina estética en Loja, Ecuador, con planificación
              personalizada, criterio clínico y enfoque en resultados naturales.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={`https://wa.me/${primaryPhone.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center border border-[#d4af37]/55 px-6 text-xs uppercase tracking-[0.24em] text-[#d4af37] transition-colors hover:border-[#f1d37a] hover:text-[#f1d37a]"
              >
                Agendar valoración
              </a>
              <Link
                href="/#servicios"
                className="inline-flex min-h-12 items-center justify-center border border-white/20 px-6 text-xs uppercase tracking-[0.24em] text-white/78 transition-colors hover:border-white/50 hover:text-white"
              >
                Ver procedimientos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
              Respuesta rápida
            </p>
            <h2 className="mt-5 text-3xl font-light uppercase tracking-[0.12em] text-white sm:text-5xl">
              Para quienes buscan un cirujano estético en Ecuador
            </h2>
          </div>
          <div className="space-y-6 text-sm leading-8 text-white/66 sm:text-base">
            <p>
              Si buscas “cirujano estético Loja”, “cirujano estético Ecuador” o
              “cirujano estetico” sin tilde, esta página resume la información
              clave del Dr. René González Dávila: ubicación, especialidad,
              procedimientos y canales de contacto.
            </p>
            <p>
              La consulta está orientada a pacientes que desean una valoración
              profesional antes de decidir un procedimiento facial o corporal.
              Cada plan se define según la anatomía, el estado de salud y los
              objetivos personales del paciente.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
            Procedimientos destacados
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceNames.slice(0, 8).map((service) => (
              <div
                key={service}
                className="border border-white/10 bg-black/40 p-5 text-sm uppercase tracking-[0.16em] text-white/76"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
            Preguntas frecuentes
          </p>
          <div className="mt-10 space-y-8">
            <article>
              <h2 className="text-2xl font-light uppercase tracking-[0.12em] text-white">
                ¿Dónde atiende?
              </h2>
              <p className="mt-4 text-sm leading-8 text-white/66 sm:text-base">
                {clinicAddress}.
              </p>
            </article>
            <article>
              <h2 className="text-2xl font-light uppercase tracking-[0.12em] text-white">
                ¿Qué procedimientos puedo consultar?
              </h2>
              <p className="mt-4 text-sm leading-8 text-white/66 sm:text-base">
                Puedes consultar procedimientos de cirugía estética facial,
                cirugía estética corporal y medicina estética, incluyendo
                rinoplastia, Botox, liposucción, ácido hialurónico,
                blefaroplastia, abdominoplastia y bioestimuladores.
              </p>
            </article>
            <article>
              <h2 className="text-2xl font-light uppercase tracking-[0.12em] text-white">
                ¿Cómo agendar?
              </h2>
              <p className="mt-4 text-sm leading-8 text-white/66 sm:text-base">
                Puedes escribir por WhatsApp al {primaryPhone}, llamar al{" "}
                {secondaryPhone} o enviar un correo a {email}.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
