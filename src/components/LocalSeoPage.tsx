import Image from "next/image";
import Link from "next/link";
import {
  clinicAddress,
  email,
  identityProfileUrls,
  identityProfiles,
  jsonLd,
  mapUrl,
  pressMentionUrls,
  pressMentions,
  primaryPhone,
  secondaryPhone,
  siteName,
  siteUrl,
  socialProfiles,
} from "@/lib/seo";
import { getLocalSeoPageUrl, type LocalSeoPage } from "@/lib/localSeoPages";

type LocalSeoPageProps = {
  page: LocalSeoPage;
};

export default function LocalSeoPage({ page }: LocalSeoPageProps) {
  const pageUrl = getLocalSeoPageUrl(page);

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.title,
    description: page.description,
    inLanguage: "es-EC",
    about: {
      "@type": "Physician",
      "@id": `${siteUrl}/#physician`,
      name: siteName,
      alternateName: [
        "René Ricardo González Dávila",
        "Rene Ricardo Gonzalez Davila",
        "Dr. Rene Gonzalez Davila",
      ],
      medicalSpecialty: "Cirugía estética",
      url: siteUrl,
      telephone: [primaryPhone, secondaryPhone],
      email,
      address: {
        "@type": "PostalAddress",
        streetAddress: clinicAddress,
        addressLocality: "Loja",
        addressRegion: "Loja",
        addressCountry: "EC",
      },
      sameAs: [...new Set([...socialProfiles, ...identityProfileUrls, mapUrl])],
      subjectOf: pressMentionUrls.map((url) => ({
        "@type": "Article",
        url,
      })),
    },
    mainEntity: {
      "@type": "MedicalBusiness",
      name: siteName,
      url: siteUrl,
      address: clinicAddress,
      telephone: [primaryPhone, secondaryPhone],
      medicalSpecialty: "Cirugía estética",
    },
    keywords: [page.primaryKeyword, ...page.secondaryKeywords].join(", "),
    citation: pressMentionUrls,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
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
        name: page.shortTitle,
        item: pageUrl,
      },
    ],
  };

  return (
    <main className="bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }}
      />

      <section className="relative min-h-[86vh] overflow-hidden">
        <Image
          src={page.image}
          alt={`${page.title} con ${siteName}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94),rgba(0,0,0,0.76)_48%,rgba(0,0,0,0.36))]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/72 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[86vh] max-w-7xl items-center px-6 py-28 sm:px-10 lg:px-16">
          <div className="max-w-4xl">
            <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/85">
              {page.eyebrow}
            </p>
            <h1 className="mt-6 max-w-4xl text-4xl font-light uppercase leading-[1.04] tracking-[0.08em] text-white sm:text-6xl lg:text-7xl">
              {page.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
              {page.intro}
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
                href="/#servicios-final"
                className="inline-flex min-h-12 items-center justify-center border border-white/20 px-6 text-xs uppercase tracking-[0.24em] text-white/78 transition-colors hover:border-white/50 hover:text-white"
              >
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <aside className="lg:sticky lg:top-24">
            <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
              Loja, Ecuador
            </p>
            <h2 className="mt-5 text-3xl font-light uppercase tracking-[0.12em] text-white sm:text-5xl">
              Valoración estética personalizada
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/58">
              Información local para pacientes que comparan opciones médicas
              antes de decidir un procedimiento estético. La indicación final se
              define en consulta presencial.
            </p>
          </aside>

          <article className="space-y-12 text-sm leading-8 text-white/66 sm:text-base">
            {page.sections.map((section) => (
              <section
                key={section.title}
                className="border-b border-white/10 pb-10 last:border-b-0 last:pb-0"
              >
                <h2 className="text-xl font-light uppercase tracking-[0.14em] text-white sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-6 space-y-6">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
            Servicios principales
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {page.serviceLinks.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="border border-white/10 bg-black/40 p-5 transition-colors hover:border-[#d4af37]/45"
              >
                <span className="block text-sm uppercase tracking-[0.16em] text-white/82">
                  {service.label}
                </span>
                <span className="mt-4 block text-sm leading-6 text-white/52">
                  {service.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
              Perfiles y prensa
            </p>
            <h2 className="mt-5 text-3xl font-light uppercase tracking-[0.12em] text-white sm:text-5xl">
              Señales oficiales del doctor
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/58">
              Estos enlaces ayudan a verificar que el sitio, los perfiles
              sociales, el perfil local y la cobertura periodística describen a
              la misma persona y el mismo consultorio.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[...identityProfiles, ...pressMentions].map((profile) => (
              <a
                key={profile.url}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 bg-black/40 p-5 transition-colors hover:border-[#d4af37]/45"
              >
                <span className="block text-sm uppercase tracking-[0.16em] text-white/82">
                  {profile.label}
                </span>
                <span className="mt-4 block text-sm leading-6 text-white/52">
                  {profile.description}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
              Preguntas frecuentes
            </p>
            <h2 className="mt-5 text-3xl font-light uppercase tracking-[0.12em] text-white sm:text-5xl">
              Dudas antes de agendar
            </h2>
          </div>
          <div className="space-y-8">
            {page.faqs.map((faq) => (
              <section key={faq.question} className="border-b border-white/10 pb-8">
                <h3 className="text-base font-light uppercase tracking-[0.14em] text-white">
                  {faq.question}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/62 sm:text-base">
                  {faq.answer}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
