import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
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
import { servicePages } from "@/lib/services";

const pageUrl = `${siteUrl}/cirujano-estetico-loja`;
const pageTitle = "Cirujano estético en Loja, Ecuador";
const pageDescription =
  "Conoce al Dr. René González Dávila, cirujano estético en Loja, Ecuador. Información para búsquedas como cirujano estetico, cirujano plastico Loja, rinoplastia, Botox, liposucción y ácido hialurónico.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...seoKeywords,
    "cirujano estético Loja Ecuador",
    "cirujano plastico estetico Loja",
    "cirujano plástico Loja",
    "cirujano plastico Loja",
    "Rene Gonzalez Davila",
    "Rene Gonzales Davila",
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

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
              Búsquedas locales
            </p>
            <h2 className="mt-5 text-3xl font-light uppercase tracking-[0.12em] text-white sm:text-5xl">
              Cómo encontrar la consulta del Dr. René González Dávila
            </h2>
          </div>
          <div className="space-y-10 text-sm leading-8 text-white/66 sm:text-base">
            <article>
              <h3 className="text-xl font-light uppercase tracking-[0.14em] text-white">
                Variantes con tilde y sin tilde
              </h3>
              <div className="mt-5 space-y-5">
                <p>
                  Muchas búsquedas locales se escriben sin acentos, por ejemplo
                  cirujano estetico Loja, cirugia estetica Loja, Rene Gonzalez
                  Davila o Dr Rene Gonzalez Davila. Esta página incluye esas
                  variantes de forma visible porque ayudan a conectar la forma
                  real en que los pacientes buscan con el nombre correcto del
                  profesional: Dr. René González Dávila, médico cirujano
                  dedicado a cirugía estética y medicina estética en Loja,
                  Ecuador.
                </p>
                <p>
                  También puede aparecer la variante Rene Gonzales Davila, con
                  “s”, cuando el usuario escribe el apellido de memoria. La
                  referencia clínica y de marca correcta es René González
                  Dávila, pero incluir una aclaración breve evita que esa
                  búsqueda común quede sin contexto. La prioridad sigue siendo
                  ofrecer información útil: ubicación, servicios, contacto y
                  criterios de valoración antes de un procedimiento.
                </p>
              </div>
            </article>

            <article>
              <h3 className="text-xl font-light uppercase tracking-[0.14em] text-white">
                Cirujano estético, cirujano plástico y medicina estética
              </h3>
              <div className="mt-5 space-y-5">
                <p>
                  Algunas personas buscan cirujano plástico Loja o cirujano
                  plastico Loja cuando desean información sobre procedimientos
                  de cirugía estética facial y corporal. En esta página usamos
                  esos términos como intención de búsqueda del paciente, no como
                  una promesa genérica ni como reemplazo de la valoración
                  médica. La consulta debe aclarar qué procedimiento corresponde
                  a cada caso, qué alternativas existen y qué riesgos conviene
                  revisar antes de decidir.
                </p>
                <p>
                  La cirugía estética puede incluir rinoplastia, blefaroplastia,
                  otoplastia, bichectomía, ritidoplastia, liposucción,
                  abdominoplastia, aumento de mamas y otros procedimientos que
                  requieren planificación, evaluación de salud, expectativa
                  realista y seguimiento. La medicina estética, por su parte,
                  puede incluir Botox, ácido hialurónico, bioestimuladores,
                  láser CO2 fraccionado, IPL y tratamientos de calidad de piel.
                </p>
              </div>
            </article>

            <article>
              <h3 className="text-xl font-light uppercase tracking-[0.14em] text-white">
                Qué debe resolver una valoración en Loja
              </h3>
              <div className="mt-5 space-y-5">
                <p>
                  Una búsqueda como mejor cirujano estético en Loja suele partir
                  de una necesidad concreta: mejorar la nariz, definir el rostro,
                  tratar grasa localizada, rejuvenecer la mirada o cuidar la
                  piel. La respuesta responsable no es elegir un tratamiento por
                  popularidad, sino revisar anatomía, antecedentes médicos,
                  medicamentos, cirugías previas, tipo de piel, tiempos de
                  recuperación y objetivos personales.
                </p>
                <p>
                  En la consulta se puede definir si conviene una cirugía, un
                  procedimiento mínimamente invasivo, un protocolo de piel o
                  esperar hasta preparar mejor el caso. También se explican
                  beneficios, límites, cuidados posteriores y señales de alarma.
                  Esa información ayuda a que el paciente tome una decisión
                  informada y evita que una búsqueda rápida se convierta en una
                  elección apresurada.
                </p>
              </div>
            </article>

            <article>
              <h3 className="text-xl font-light uppercase tracking-[0.14em] text-white">
                Señales locales que ayudan a Google y al paciente
              </h3>
              <div className="mt-5 space-y-5">
                <p>
                  Para búsquedas locales, Google necesita entender quién atiende,
                  dónde atiende y qué servicios ofrece. Por eso esta página
                  menciona de forma clara Loja, Ecuador, Clínica Santa María,
                  teléfonos de contacto, servicios principales y el nombre del
                  doctor. Esas señales se complementan con datos estructurados
                  de Physician, MedicalClinic, LocalBusiness y enlaces
                  internos hacia servicios individuales.
                </p>
                <p>
                  El objetivo no es repetir palabras clave sin sentido, sino
                  construir una página útil para pacientes que buscan cirujano
                  estético, cirujano estetico sin tilde, cirugía estética Loja,
                  medicina estética Loja o Dr. René González Dávila. Cuando el
                  contenido visible coincide con la intención de búsqueda, el
                  sitio tiene mejores bases para ser rastreado, entendido e
                  indexado correctamente.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
            Procedimientos destacados
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {servicePages.map((service) => (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}/`}
                className="border border-white/10 bg-black/40 p-5 text-sm uppercase tracking-[0.16em] text-white/76"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
