export type ServicePage = {
  slug: string;
  label: string;
  category: string;
  description: string;
  subitems: string[];
  image: string;
  seoKeywords: string[];
  alternateNames: string[];
  legacyPaths: string[];
};

const slugifyService = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const serviceCatalog = [
  {
    category: "Medicina Estética Facial",
    items: [
      {
        label: "Botox",
        description:
          "Tratamiento con toxina botulínica para suavizar líneas de expresión y valorar usos funcionales como bruxismo o hiperhidrosis según indicación médica.",
        subitems: [
          "Botox (hiperhidrosis)",
          "Botox (bruxismo)",
          "Botox (movimientos clónicos)",
          "Botox (ptosis palpebral)",
        ],
        image: "/images/servicesHero/botox.webp",
      },
      {
        label: "Ácido hialurónico",
        description:
          "Relleno facial con ácido hialurónico para hidratación, perfilado, soporte y armonización de zonas seleccionadas del rostro.",
        subitems: [],
        image: "/images/servicesHero/acido-hialuronico.webp",
      },
      {
        label: "Láser CO2 fraccionado",
        description:
          "Procedimiento dermatológico y estético orientado al rejuvenecimiento cutáneo, textura de piel, cicatrices y líneas finas.",
        subitems: [],
        image: "/images/servicesHero/laser-co2-fraccionado.webp",
      },
      {
        label: "Terapia fotodinámica",
        description:
          "Tratamiento médico que combina un agente fotosensibilizante con luz específica para mejorar condiciones seleccionadas de la piel.",
        subitems: [],
        image: "/images/servicesHero/terapia-fotodinamica.webp",
      },
      {
        label: "NCTF",
        description:
          "Mesoterapia facial revitalizante enfocada en luminosidad, hidratación y calidad de piel mediante activos aplicados de forma superficial.",
        subitems: [],
        image: "/images/servicesHero/nctf.webp",
      },
      {
        label: "Bioestimuladores",
        description:
          "Aplicación de sustancias bioestimuladoras para favorecer la producción de colágeno y mejorar firmeza y calidad de piel.",
        subitems: [],
        image: "/images/servicesHero/bioestimuladores.webp",
      },
      {
        label: "Marcación mandibular",
        description:
          "Procedimiento de armonización facial no quirúrgica para definir el contorno mandibular según anatomía y objetivos del paciente.",
        subitems: [],
        image: "/images/servicesHero/marcacion-mandibular.webp",
      },
      {
        label: "Vitaminización facial",
        description:
          "Aplicación de vitaminas, minerales y activos hidratantes para apoyar la luminosidad, textura y vitalidad de la piel facial.",
        subitems: [],
        image: "/images/servicesHero/vitaminizacion-facial.webp",
      },
    ],
  },
  {
    category: "Medicina Estética Corporal",
    items: [
      {
        label: "Remoción de tatuajes",
        description:
          "Tratamiento con tecnología láser orientado a fragmentar pigmentos de tinta en la piel mediante sesiones planificadas.",
        subitems: [],
        image: "/images/servicesHero/remocion-de-tatuajes.webp",
      },
      {
        label: "Radiocavitación y radiofrecuencia",
        description:
          "Tecnologías estéticas no invasivas utilizadas para modelado corporal, textura de piel y apoyo en protocolos personalizados.",
        subitems: [],
        image: "/images/servicesHero/radiocavitacion-y-radiofrecuencia.webp",
      },
    ],
  },
  {
    category: "Cirugía Estética Facial",
    items: [
      {
        label: "Rinoplastia Mujer",
        description:
          "Cirugía de nariz orientada a mejorar forma, proporción y armonía facial en pacientes mujeres, con planificación individualizada.",
        subitems: [],
        image: "/images/servicesHero/rinoplastia-mujer.webp",
      },
      {
        label: "Rinoplastia Hombre",
        description:
          "Cirugía de nariz para pacientes hombres, cuidando proporción, estructura facial y un resultado acorde a rasgos masculinos.",
        subitems: [],
        image: "/images/servicesHero/rinoplastia-hombre.webp",
      },
      {
        label: "Mentoplastia",
        description:
          "Procedimiento para valorar la forma y proyección del mentón dentro de un plan de armonización facial quirúrgico.",
        subitems: [],
        image: "/images/servicesHero/mentoplastia.webp",
      },
      {
        label: "Bichectomía",
        description:
          "Procedimiento quirúrgico ambulatorio para retirar bolsas de Bichat en pacientes seleccionados y afinar el contorno facial.",
        subitems: [],
        image: "/images/servicesHero/bichectomia.webp",
      },
      {
        label: "Otoplastia",
        description:
          "Cirugía estética de orejas para modificar forma, tamaño o posición, buscando mayor armonía con el rostro.",
        subitems: [],
        image: "/images/servicesHero/otoplastia.webp",
      },
      {
        label: "Párpados (blefaroplastia)",
        description:
          "Cirugía de párpados para retirar exceso de piel o grasa y lograr una mirada más fresca, evaluando siempre la función palpebral.",
        subitems: [],
        image: "/images/servicesHero/parpados-blefaroplastia.webp",
      },
      {
        label: "Ritidoplastia",
        description:
          "Lifting facial quirúrgico orientado a rejuvenecer rostro y cuello mediante reposicionamiento de tejidos y retiro de excedente cutáneo.",
        subitems: [],
        image: "/images/servicesHero/ritidoplastia.webp",
      },
      {
        label: "Lipo papada",
        description:
          "Procedimiento para tratar grasa localizada bajo el mentón y mejorar la definición del cuello y el contorno mandibular.",
        subitems: [],
        image: "/images/servicesHero/lipo-papada.webp",
      },
    ],
  },
  {
    category: "Cirugía Estética Corporal",
    items: [
      {
        label: "Liposucción",
        description:
          "Cirugía de modelado corporal para retirar depósitos de grasa localizada mediante una planificación quirúrgica personalizada.",
        subitems: ["Láser", "Microaire", "Tradicional"],
        image: "/images/servicesHero/liposuccion.webp",
      },
      {
        label: "Mini lipo",
        description:
          "Procedimiento de menor alcance para pequeñas acumulaciones de grasa localizada en pacientes adecuadamente seleccionados.",
        subitems: [],
        image: "/images/servicesHero/mini-lipo.webp",
      },
      {
        label: "Abdominoplastia",
        description:
          "Cirugía para retirar exceso de piel y grasa abdominal y valorar reparación de la pared muscular cuando el caso lo requiere.",
        subitems: [],
        image: "/images/servicesHero/abdominoplastia.webp",
      },
      {
        label: "Aumento de mamas",
        description:
          "Cirugía mamaria para incrementar volumen o mejorar forma y proyección, con elección individualizada de técnica e implante.",
        subitems: [],
        image: "/images/servicesHero/aumento-de-mamas.webp",
      },
    ],
  },
  {
    category: "Hidratación y Calidad de la Piel",
    items: [
      {
        label: "IPL",
        description:
          "Tratamiento con luz pulsada intensa para protocolos de calidad de piel, manchas, melasma o depilación según valoración médica.",
        subitems: ["Melasma", "Manchas de piel", "Depilación"],
        image: "/images/servicesHero/ipl.webp",
      },
      {
        label: "Hidratación con ácido hialurónico",
        description:
          "Procedimiento mínimamente invasivo para aportar hidratación, soporte y calidad de piel mediante ácido hialurónico.",
        subitems: [],
        image: "/images/servicesHero/hidratacion-con-acido-hialuronico.webp",
      },
    ],
  },
] as const;

const servicesBySlug = new Map<string, ServicePage>();

const serviceSeoKeywordsBySlug: Record<string, string[]> = {
  "rinoplastia-mujer": [
    "rinoplastia mujer Loja",
    "rinoplastia femenina Loja",
    "rinosplastia mujer Loja",
    "rinosplastia femenina Loja",
    "rinoseptoplastia mujer Loja",
    "cirugía de nariz mujer Loja",
    "cirugia de nariz mujer Loja",
  ],
  "rinoplastia-hombre": [
    "rinoplastia hombre Loja",
    "rinoplastia masculina Loja",
    "rinosplastia hombre Loja",
    "rinosplastia masculina Loja",
    "rinoseptoplastia hombre Loja",
    "cirugía de nariz hombre Loja",
    "cirugia de nariz hombre Loja",
  ],
  botox: [
    "botox en Loja",
    "toxina botulínica Loja",
    "toxina botulinica Loja",
    "botox bruxismo Loja",
    "botox hiperhidrosis Loja",
  ],
  "acido-hialuronico": [
    "ácido hialurónico Loja",
    "acido hialuronico Loja",
    "relleno facial Loja",
    "armonización facial Loja",
    "armonizacion facial Loja",
  ],
  liposuccion: [
    "liposucción Loja",
    "liposuccion Loja",
    "lipoescultura Loja",
    "cirugía corporal Loja",
    "cirugia corporal Loja",
  ],
  "lipo-papada": [
    "lipo papada Loja",
    "lipopapada Loja",
    "lipo de papada Loja",
    "papada Loja",
  ],
  "parpados-blefaroplastia": [
    "blefaroplastia Loja",
    "cirugía de párpados Loja",
    "cirugia de parpados Loja",
    "párpados caídos Loja",
    "parpados caidos Loja",
  ],
  ritidoplastia: [
    "ritidoplastia Loja",
    "lifting facial Loja",
    "rejuvenecimiento facial Loja",
  ],
  abdominoplastia: [
    "abdominoplastia Loja",
    "cirugía de abdomen Loja",
    "cirugia de abdomen Loja",
    "dermolipectomía Loja",
    "dermolipectomia Loja",
  ],
  "aumento-de-mamas": [
    "aumento de mamas Loja",
    "aumento mamario Loja",
    "implantes mamarios Loja",
  ],
};

const serviceAlternateNamesBySlug: Record<string, string[]> = {
  "rinoplastia-mujer": [
    "Rinosplastia mujer",
    "Rinoseptoplastia mujer",
    "Cirugía de nariz mujer",
  ],
  "rinoplastia-hombre": [
    "Rinosplastia hombre",
    "Rinoseptoplastia hombre",
    "Cirugía de nariz hombre",
  ],
  botox: ["Toxina botulínica", "Botox funcional"],
  "acido-hialuronico": ["Relleno facial", "Armonización facial"],
  liposuccion: ["Lipoescultura", "Cirugía de contorno corporal"],
  "parpados-blefaroplastia": ["Blefaroplastia", "Cirugía de párpados"],
  ritidoplastia: ["Lifting facial", "Rejuvenecimiento facial quirúrgico"],
  abdominoplastia: ["Dermolipectomía", "Cirugía de abdomen"],
  "aumento-de-mamas": ["Aumento mamario", "Implantes mamarios"],
};

const serviceLegacyPathsBySlug: Record<string, string[]> = {
  "rinoplastia-mujer": [
    "/rinoplastia-loja/",
    "/rinosplastia-loja/",
    "/rinoseptoplastia-loja/",
    "/servicios/rinosplastia-mujer/",
  ],
  "rinoplastia-hombre": [
    "/rinoplastia-hombre-loja/",
    "/rinosplastia-hombre-loja/",
    "/servicios/rinosplastia-hombre/",
  ],
  botox: ["/botox-loja/", "/toxina-botulinica-loja/"],
  "acido-hialuronico": [
    "/acido-hialuronico-loja/",
    "/relleno-facial-loja/",
  ],
  liposuccion: ["/liposuccion-loja/", "/lipoescultura-loja/"],
  "lipo-papada": ["/lipo-papada-loja/", "/lipopapada-loja/"],
  "parpados-blefaroplastia": [
    "/blefaroplastia-loja/",
    "/cirugia-de-parpados-loja/",
  ],
  ritidoplastia: ["/ritidoplastia-loja/", "/lifting-facial-loja/"],
  abdominoplastia: ["/abdominoplastia-loja/"],
  "aumento-de-mamas": ["/aumento-de-mamas-loja/", "/aumento-mamario-loja/"],
};

for (const group of serviceCatalog) {
  for (const item of group.items) {
    const slug = slugifyService(item.label);
    servicesBySlug.set(slug, {
      slug,
      label: item.label,
      category: group.category,
      description: item.description,
      subitems: [...item.subitems],
      image: item.image,
      seoKeywords: serviceSeoKeywordsBySlug[slug] ?? [],
      alternateNames: serviceAlternateNamesBySlug[slug] ?? [],
      legacyPaths: serviceLegacyPathsBySlug[slug] ?? [],
    });
  }
}

export const servicePages = [...servicesBySlug.values()];

export function getServiceSlug(label: string) {
  return slugifyService(label);
}

export function getServiceHref(label: string) {
  return `/servicios/${getServiceSlug(label)}`;
}

export function getServiceBySlug(slug: string) {
  return servicesBySlug.get(slug);
}
