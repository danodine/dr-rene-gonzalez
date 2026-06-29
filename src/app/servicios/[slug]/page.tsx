import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  clinicAddress,
  doctorName,
  jsonLd,
  primaryPhone,
  siteName,
  siteUrl,
  socialImage,
} from "@/lib/seo";
import {
  getServiceBySlug,
  servicePages,
  type ServicePage,
} from "@/lib/services";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type ServiceContentSection = {
  title: string;
  paragraphs: string[];
};

const surgicalSlugs = new Set([
  "rinoplastia-mujer",
  "rinoplastia-hombre",
  "mentoplastia",
  "bichectomia",
  "otoplastia",
  "parpados-blefaroplastia",
  "ritidoplastia",
  "lipo-papada",
  "liposuccion",
  "mini-lipo",
  "abdominoplastia",
  "aumento-de-mamas",
]);

const injectableSlugs = new Set([
  "botox",
  "acido-hialuronico",
  "bioestimuladores",
  "marcacion-mandibular",
  "hidratacion-con-acido-hialuronico",
]);

const energySlugs = new Set([
  "laser-co2-fraccionado",
  "terapia-fotodinamica",
  "remocion-de-tatuajes",
  "radiocavitacion-y-radiofrecuencia",
  "ipl",
]);

const skinQualitySlugs = new Set(["nctf", "vitaminizacion-facial"]);

const serviceSpecificNotes: Record<string, string> = {
  botox:
    "La toxina botulínica se utiliza para modular de forma temporal la actividad de músculos seleccionados. En estética se indica con frecuencia en líneas dinámicas, como entrecejo, frente o patas de gallo; en medicina también puede valorarse para sudoración excesiva, bruxismo u otros patrones musculares cuando existe una indicación clara.",
  "acido-hialuronico":
    "El ácido hialurónico es un relleno reabsorbible usado para restaurar soporte, proyectar zonas específicas o suavizar pliegues. La seguridad depende de conocer la anatomía vascular, elegir el producto correcto y aplicar la cantidad necesaria en el plano adecuado; por eso la valoración médica es más importante que perseguir volumen de forma aislada.",
  "laser-co2-fraccionado":
    "El láser CO2 fraccionado crea columnas microscópicas de energía en la piel para estimular remodelación de colágeno y renovación superficial. Puede mejorar textura, cicatrices y líneas finas, pero exige preparación, fotoprotección estricta y seguimiento, especialmente en pieles con tendencia a manchas o cicatrización alterada.",
  "terapia-fotodinamica":
    "La terapia fotodinámica combina un agente fotosensibilizante con una fuente de luz específica. En dermatología se usa en protocolos seleccionados porque la luz activa el compuesto aplicado, generando una reacción localizada. La indicación, el tiempo de incubación, la intensidad de la luz y los cuidados posteriores deben adaptarse al diagnóstico.",
  nctf:
    "NCTF pertenece a los protocolos de mesoterapia orientados a calidad de piel. Su propósito no es cambiar rasgos faciales, sino apoyar hidratación, luminosidad y textura mediante microaplicaciones superficiales. La selección del paciente, la técnica aséptica y la expectativa realista son esenciales para evitar resultados artificiales.",
  bioestimuladores:
    "Los bioestimuladores se utilizan para favorecer una respuesta progresiva de colágeno y mejorar firmeza o calidad de piel. A diferencia de un relleno de efecto inmediato, suelen buscar cambios graduales, por lo que la planificación considera sesiones, tiempos biológicos y zonas donde el producto puede aportar beneficio sin sobrecorregir.",
  "marcacion-mandibular":
    "La marcación mandibular busca definir el tercio inferior del rostro respetando proporciones faciales, mordida, tejido blando y estructura ósea. Puede emplear rellenos o bioestimulación según el caso, pero requiere prudencia: una mandíbula más marcada no siempre significa un rostro más armónico si no se evalúa el conjunto.",
  "vitaminizacion-facial":
    "La vitaminización facial se plantea como un apoyo para piel opaca, deshidratada o con textura irregular. No reemplaza tratamientos médicos para manchas, acné o rosácea, pero puede complementar una rutina dermatológica cuando se realiza con productos adecuados, técnica limpia y objetivos medibles.",
  "remocion-de-tatuajes":
    "La remoción de tatuajes con láser fragmenta pigmentos para que el organismo los procese de manera gradual. El número de sesiones depende de color, profundidad, antigüedad, densidad de tinta y respuesta de la piel. La evaluación debe revisar cicatrices, lunares cercanos, fototipo y antecedentes de mala cicatrización.",
  "radiocavitacion-y-radiofrecuencia":
    "La radiocavitación y la radiofrecuencia se emplean en protocolos no invasivos de modelado corporal y firmeza cutánea. Son procedimientos médicos o estéticos con beneficios y riesgos, no sustitutos de pérdida de peso. La indicación debe considerar grasa localizada, calidad de piel, sensibilidad, dispositivos utilizados y contraindicaciones.",
  "rinoplastia-mujer":
    "La rinoplastia en mujeres se planifica alrededor de respiración, estructura nasal y proporciones faciales. No se trata de copiar una forma de nariz, sino de decidir cambios milimétricos en dorso, punta, base o tabique que mantengan naturalidad y equilibrio con pómulos, labios y mentón.",
  "rinoplastia-hombre":
    "La rinoplastia masculina requiere conservar soporte y rasgos que mantengan fuerza facial cuando ese es el objetivo del paciente. La evaluación incluye piel, cartílagos, huesos nasales, vía aérea y proporción con frente y mentón; pequeños excesos en reducción pueden feminizar o debilitar el perfil.",
  mentoplastia:
    "La mentoplastia o cirugía del mentón puede realizarse con implante o con modificación ósea en casos seleccionados. Su finalidad es mejorar la relación entre nariz, labios, cuello y mandíbula. Antes de proponerla conviene revisar mordida, proyección, asimetrías y si el cambio debe ser quirúrgico o no quirúrgico.",
  bichectomia:
    "La bichectomía retira parte de la grasa bucal profunda para afinar mejillas en pacientes seleccionados. No es ideal para todos: rostros delgados o con envejecimiento temprano pueden verse demasiado hundidos con el tiempo. La indicación debe valorar edad, volumen facial, simetría y expectativas.",
  otoplastia:
    "La otoplastia corrige forma, posición o proporción de las orejas. Puede tratar orejas prominentes, asimetrías o pliegues poco definidos, buscando que el resultado sea discreto y estable. La consulta revisa cartílago, distancia al cráneo, cicatrices esperadas y cuidados con vendaje durante recuperación.",
  "parpados-blefaroplastia":
    "La blefaroplastia evalúa exceso de piel, bolsas grasas, caída de ceja y función del párpado. En algunos pacientes el problema no está solo en el párpado, sino en la ceja o en la laxitud del tejido. Por eso la valoración debe proteger la salud ocular además del resultado estético.",
  ritidoplastia:
    "La ritidoplastia o lifting facial reposiciona tejidos del rostro y cuello para tratar flacidez visible. Un buen plan diferencia piel sobrante, descenso de tejidos profundos, bandas cervicales y volumen perdido. El objetivo no es tensar la cara, sino restaurar soporte con una apariencia descansada.",
  "lipo-papada":
    "La lipo de papada trata grasa localizada bajo el mentón para mejorar el ángulo cuello-mandíbula. No todos los cuellos se benefician igual: la piel laxa, el músculo platisma, la posición del mentón y las glándulas salivales pueden influir en el resultado y en la necesidad de alternativas.",
  liposuccion:
    "La liposucción retira grasa localizada mediante cánulas para mejorar contornos corporales. No es un tratamiento para obesidad ni reemplaza hábitos saludables. Las zonas, el volumen, la técnica y la seguridad anestésica se definen tras revisar peso estable, elasticidad de piel, antecedentes y expectativas.",
  "mini-lipo":
    "La mini lipo aplica el mismo principio de modelado que la liposucción, pero en áreas pequeñas y con objetivos más limitados. Puede ser útil cuando existe una acumulación puntual de grasa resistente, siempre que la piel tenga buena retracción y el paciente entienda el alcance real del cambio.",
  abdominoplastia:
    "La abdominoplastia trata exceso de piel y grasa abdominal, y en muchos casos permite reparar separación muscular. Es diferente de la liposucción porque aborda laxitud cutánea y pared abdominal. La indicación considera embarazos previos, cambios de peso, cicatrices, hernias, calidad de piel y planes futuros.",
  "aumento-de-mamas":
    "El aumento de mamas puede realizarse con implantes o, en casos específicos, con transferencia grasa. La decisión incluye volumen deseado, forma del tórax, elasticidad de piel, tipo y plano del implante, cicatriz, lactancia futura, seguimiento a largo plazo y posibles complicaciones.",
  ipl:
    "La luz pulsada intensa, o IPL, emite luz de varios rangos para tratar pigmento, vasos superficiales, fotoenvejecimiento y depilación según filtros y parámetros. La respuesta depende del fototipo, color del vello o mancha, exposición solar reciente y diagnóstico preciso de lesiones pigmentadas.",
  "hidratacion-con-acido-hialuronico":
    "La hidratación con ácido hialurónico utiliza formulaciones orientadas a calidad de piel más que a cambios volumétricos marcados. Puede mejorar sensación de hidratación y textura, pero requiere diagnóstico de la causa de sequedad, selección del producto y cuidados posteriores para reducir inflamación o hematomas.",
};

const getServiceMode = (slug: string) => {
  if (surgicalSlugs.has(slug)) return "quirúrgico";
  if (injectableSlugs.has(slug)) return "inyectable";
  if (energySlugs.has(slug)) return "tecnología";
  if (skinQualitySlugs.has(slug)) return "calidad-piel";

  return "médico";
};

const getTechniqueParagraphs = (service: ServicePage) => {
  const mode = getServiceMode(service.slug);
  const serviceName = service.label.toLowerCase();

  if (mode === "quirúrgico") {
    return [
      `En una valoración quirúrgica de ${serviceName}, la conversación inicia con antecedentes médicos, cirugías previas, alergias, medicamentos, hábitos, calidad de cicatrización y objetivos personales. También se revisan fotografías clínicas y examen físico porque la anatomía define límites reales: grosor de piel, proporciones, simetría, soporte de tejidos, elasticidad y función. En procedimientos como rinoplastia, párpados, mentón, orejas, abdomen, mamas o liposucción, el plan debe integrar estética y seguridad, no solo una imagen de referencia.`,
      `La planificación incluye explicar tipo de anestesia, lugar de realización, duración aproximada, preparación, exámenes, recuperación esperada y señales de alarma. En cirugía estética seria, el paciente debe conocer beneficios y riesgos antes de decidir: sangrado, infección, cicatrices, asimetrías, cambios de sensibilidad, necesidad de retoques o resultados diferentes a lo imaginado son posibilidades que se conversan de forma transparente. Una buena indicación también reconoce cuándo conviene esperar, bajar riesgos o elegir una alternativa menos invasiva.`,
    ];
  }

  if (mode === "inyectable") {
    return [
      `En tratamientos inyectables como ${serviceName}, la evaluación se concentra en anatomía facial, expresión muscular, calidad de piel, antecedentes de rellenos previos, tendencia a hematomas, medicamentos anticoagulantes, alergias, infecciones recientes y expectativas. La técnica cambia según producto, plano de aplicación y objetivo: relajar músculo, hidratar, restaurar soporte, estimular colágeno o definir contornos. La consulta evita tratar por moda; busca decidir si el procedimiento tiene sentido para ese rostro en ese momento.`,
      `La seguridad en inyectables depende de dosis, esterilidad, producto autorizado, conocimiento vascular y seguimiento. Es normal hablar de inflamación, sensibilidad, enrojecimiento o moretones temporales, pero también de riesgos menos frecuentes que requieren atención rápida. Por eso se documenta el plan, se indican cuidados posteriores y se evita mezclar procedimientos sin una razón médica. El resultado más elegante suele ser gradual, proporcional y revisable, especialmente cuando se trabaja con labios, mandíbula, surcos o zonas cercanas a ojos y nariz.`,
    ];
  }

  if (mode === "tecnología") {
    return [
      `En procedimientos con energía como ${serviceName}, la valoración médica define parámetros, número probable de sesiones y cuidados de piel antes de iniciar. La luz, el láser, la radiofrecuencia o las tecnologías corporales no funcionan igual en todos los fototipos ni en todos los diagnósticos. Manchas, melasma, tatuajes, cicatrices, flacidez, grasa localizada o depilación exigen criterios diferentes. También se revisa exposición solar reciente, medicamentos fotosensibilizantes, embarazo, lactancia, antecedentes de herpes, tendencia a hiperpigmentación y sensibilidad cutánea.`,
      `El objetivo es utilizar la tecnología correcta con intensidad suficiente para beneficiar, pero sin comprometer la barrera cutánea ni generar quemaduras, cambios de color o cicatrices. Muchos protocolos requieren varias sesiones y los cambios pueden ser progresivos. Después del procedimiento, la fotoprotección, la hidratación, la limpieza suave y evitar calor excesivo suelen ser parte del cuidado. Si hay dolor intenso, ampollas, secreción, fiebre o inflamación persistente, el seguimiento médico permite actuar temprano y proteger el resultado.`,
    ];
  }

  return [
    `En protocolos de ${serviceName}, la consulta identifica el estado real de la piel antes de aplicar activos o microinyecciones. Deshidratación, manchas, acné, rosácea, sensibilidad, daño solar, cicatrices o pérdida de firmeza pueden parecer similares a simple vista, pero requieren planes distintos. La valoración también revisa rutinas actuales, uso de retinoides, exfoliantes, tratamientos previos, exposición solar y eventos importantes cercanos para evitar irritación o resultados poco predecibles.`,
    `Estos procedimientos suelen buscar luminosidad, textura, hidratación o soporte cutáneo progresivo. No sustituyen diagnóstico dermatológico cuando existe una enfermedad de la piel, ni reemplazan cirugía cuando hay flacidez importante. Funcionan mejor cuando se integran a hábitos consistentes: protector solar, limpieza adecuada, hidratación, control de inflamación y seguimiento. En consulta se decide frecuencia, combinación con otros tratamientos y límites razonables para que el resultado se vea saludable, no sobretratado.`,
  ];
};

const getServiceContent = (service: ServicePage): ServiceContentSection[] => {
  const serviceName = service.label.toLowerCase();
  const subitemsText =
    service.subitems.length > 0
      ? `En esta página también se consideran variantes relacionadas como ${service.subitems.join(", ")}. Esas opciones no se tratan como servicios aislados porque forman parte de la indicación principal y se eligen según diagnóstico, tecnología disponible, anatomía, tolerancia al tiempo de recuperación y objetivos del paciente.`
      : `Aunque esta página se enfoca en ${serviceName}, la recomendación final puede combinar cuidados de piel, tratamientos complementarios o incluso indicar que no conviene intervenir todavía. Esa prudencia también forma parte de una medicina estética responsable.`;
  const [techniqueOne, techniqueTwo] = getTechniqueParagraphs(service);

  return [
    {
      title: `Qué es ${service.label} y qué busca mejorar`,
      paragraphs: [
        `${service.description} Esta información está escrita para pacientes que investigan ${serviceName} en Loja y necesitan entender el procedimiento antes de una consulta. El contenido resume criterios médicos generales revisados en fuentes reconocidas, pero no reemplaza una evaluación presencial ni promete resultados idénticos para todos. En estética facial y corporal, una indicación legítima considera salud, anatomía, expectativas, edad, calidad de tejidos, tiempos de recuperación y tolerancia al riesgo.`,
        serviceSpecificNotes[service.slug],
      ],
    },
    {
      title: "Candidatura y valoración médica",
      paragraphs: [
        techniqueOne,
        `Durante la consulta con ${siteName} se revisan prioridades reales del paciente: qué le incomoda, desde cuándo, qué tratamientos ha intentado, qué resultado considera natural y qué actividades necesita retomar pronto. También se explican alternativas, porque no siempre el procedimiento más conocido es el más adecuado. En algunos casos conviene preparar la piel, estabilizar el peso, controlar enfermedades, suspender ciertos medicamentos con autorización médica o ajustar expectativas antes de programar cualquier intervención.`,
      ],
    },
    {
      title: "Procedimiento, seguridad y recuperación",
      paragraphs: [
        techniqueTwo,
        `La recuperación se conversa antes de empezar, no al final. Cada paciente debe saber qué molestias son esperables, cuánto tiempo puede durar la inflamación, cuándo retomar ejercicio, maquillaje, trabajo o exposición solar, y qué cuidados ayudan a reducir complicaciones. En tratamientos médicos y quirúrgicos, las fotografías de evolución, las indicaciones por escrito y los controles programados ayudan a distinguir una recuperación normal de un problema que requiere revisión. La comunicación posterior al procedimiento es parte del tratamiento.`,
      ],
    },
    {
      title: "Expectativas realistas y resultados",
      paragraphs: [
        `Un resultado responsable en ${serviceName} debe verse coherente con el resto del cuerpo o del rostro. La planificación evita exagerar rasgos, borrar identidad o vender cambios imposibles. Algunos resultados se aprecian rápido; otros dependen de cicatrización, producción de colágeno, descenso de inflamación o varias sesiones. También puede haber límites por genética, edad, tipo de piel, peso, tabaquismo, exposición solar, cirugías previas o enfermedades. Por eso la promesa correcta no es perfección, sino un plan claro y médicamente defendible.`,
        subitemsText,
        `La decisión final debe tomarse después de resolver dudas sobre técnica, beneficios, riesgos, costos, controles y alternativas. Un paciente bien informado puede comparar opciones sin presión y reconocer señales de alerta: ofertas demasiado agresivas, ausencia de historia clínica, productos sin trazabilidad, poca explicación de riesgos o recomendaciones iguales para todos. El propósito de esta página es aportar contenido verificable para orientar la búsqueda; la indicación concreta se define únicamente tras valoración médica individual.`,
      ],
    },
  ];
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return servicePages.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Servicio no encontrado",
    };
  }

  const title = `${service.label} en Loja`;
  const description = `${service.description} Valoración con ${doctorName} en Loja, Ecuador.`;

  return {
    title,
    description,
    keywords: [
      `${service.label} en Loja`,
      `${service.label} Ecuador`,
      service.category,
      "cirugía estética en Loja",
      "medicina estética en Loja",
    ],
    alternates: {
      canonical: `/servicios/${service.slug}`,
    },
    openGraph: {
      type: "article",
      locale: "es_EC",
      url: `${siteUrl}/servicios/${service.slug}`,
      siteName,
      title: `${title} | ${siteName}`,
      description,
      images: [
        {
          ...socialImage,
          url: service.image,
          alt: `${service.label} con ${siteName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const pageUrl = `${siteUrl}/servicios/${service.slug}`;
  const relatedServices = servicePages
    .filter(
      (item) => item.category === service.category && item.slug !== service.slug,
    )
    .slice(0, 4);
  const contentSections = getServiceContent(service);

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${pageUrl}#procedure`,
    name: service.label,
    description: service.description,
    procedureType: service.category,
    provider: {
      "@id": `${siteUrl}/#physician`,
      name: siteName,
    },
    areaServed: {
      "@type": "City",
      name: "Loja",
    },
    availableAtOrFrom: {
      "@type": "MedicalClinic",
      name: siteName,
      address: clinicAddress,
    },
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
        name: "Servicios",
        item: `${siteUrl}/#servicios`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.label,
        item: pageUrl,
      },
    ],
  };

  return (
    <main className="bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(procedureSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema) }}
      />

      <section className="relative min-h-[82vh] overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.label} en Loja con ${siteName}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.7)_46%,rgba(0,0,0,0.28))]" />
        <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl items-center px-6 py-28 sm:px-10 lg:px-16">
          <div className="max-w-3xl">
            <Link
              href="/#servicios-final"
              className="inline-flex min-h-11 items-center border border-white/18 bg-black/24 px-5 text-[0.68rem] uppercase tracking-[0.28em] text-white/72 backdrop-blur-xl transition-colors hover:border-[#d4af37]/45 hover:text-[#d4af37]"
            >
              Volver a servicios
            </Link>
            <p className="mt-10 text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]">
              {service.category}
            </p>
            <h1 className="mt-6 text-4xl font-light uppercase leading-[1.04] tracking-[0.08em] text-white sm:text-6xl lg:text-7xl">
              {service.label}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
              {service.description}
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
                Ver todos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
              Información médica
            </p>
            <h2 className="mt-5 text-3xl font-light uppercase tracking-[0.12em] text-white sm:text-5xl">
              {service.label} con planificación personalizada
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/58">
              Contenido orientativo basado en fuentes médicas reconocidas. La
              indicación definitiva se define en consulta, después de revisar
              antecedentes, anatomía, expectativas y riesgos.
            </p>
          </div>
          <article className="space-y-12 text-sm leading-8 text-white/66 sm:text-base">
            {contentSections.map((section) => (
              <section
                key={section.title}
                className="border-b border-white/10 pb-10 last:border-b-0 last:pb-0"
              >
                <h3 className="text-xl font-light uppercase tracking-[0.14em] text-white sm:text-2xl">
                  {section.title}
                </h3>
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

      {service.subitems.length > 0 ? (
        <section className="border-y border-white/10 bg-white/[0.03] px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
              Incluye valoración para
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.subitems.map((subitem) => (
                <div
                  key={subitem}
                  className="border border-white/10 bg-black/40 p-5 text-sm uppercase tracking-[0.16em] text-white/76"
                >
                  {subitem}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {relatedServices.length > 0 ? (
        <section className="px-6 py-20 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
              Servicios relacionados
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedServices.map((item) => (
                <Link
                  key={item.slug}
                  href={`/servicios/${item.slug}`}
                  className="border border-white/10 bg-black/40 p-5 text-sm uppercase tracking-[0.16em] text-white/76 transition-colors hover:border-[#d4af37]/45 hover:text-[#d4af37]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
