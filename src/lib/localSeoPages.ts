import { siteUrl } from "@/lib/seo";

export type LocalSeoPage = {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  image: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  sections: {
    title: string;
    paragraphs: string[];
  }[];
  serviceLinks: {
    label: string;
    href: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const localSeoPages: LocalSeoPage[] = [
  {
    slug: "cirujano-estetico-loja",
    eyebrow: "Dr. René González Dávila",
    title: "Cirujano estético en Loja",
    shortTitle: "Cirujano estético Loja",
    description:
      "Dr. René González Dávila, cirujano estético en Loja, Ecuador. Valoración médica para rinoplastia, liposucción, blefaroplastia, botox, ácido hialurónico y procedimientos estéticos con resultados naturales.",
    intro:
      "Valoración médica para cirugía estética facial, cirugía estética corporal y medicina estética en Loja, Ecuador, con un enfoque prudente, personalizado y orientado a resultados naturales.",
    image: "/images/headerBackgroundDesktopC.webp",
    primaryKeyword: "cirujano estetico en Loja",
    secondaryKeywords: [
      "cirujano estetico Loja",
      "cirujano estetico Loja Ecuador",
      "cirujano estético Loja Ecuador",
      "consulta de cirugia estetica Loja",
      "consulta de cirugía estética Loja",
      "clinica estetica Loja",
      "clínica estética Loja",
      "cirujano plastico Loja",
      "cirujano plástico Loja",
      "cirugia estetica facial Loja",
      "cirugia estetica corporal Loja",
    ],
    sections: [
      {
        title: "Atención estética médica en Loja",
        paragraphs: [
          "El Dr. René González Dávila atiende en Loja a pacientes que buscan mejorar rasgos faciales, armonía corporal o calidad de piel mediante procedimientos estéticos indicados después de una valoración médica. La consulta revisa antecedentes, anatomía, expectativas, riesgos, tiempo de recuperación y alternativas antes de proponer un plan.",
          "El objetivo no es ofrecer una solución igual para todos. Una indicación responsable distingue entre lo que puede resolverse con cirugía estética, lo que puede tratarse con medicina estética y los casos en los que conviene esperar, preparar la piel, estabilizar el peso o elegir un procedimiento menos invasivo.",
        ],
      },
      {
        title: "Cirugía estética facial y corporal",
        paragraphs: [
          "Entre los procedimientos quirúrgicos que los pacientes suelen consultar están rinoplastia, mentoplastia, blefaroplastia, otoplastia, ritidoplastia, lipo de papada, liposucción, abdominoplastia y aumento de mamas. Cada cirugía requiere una planificación individual porque la seguridad depende de la historia clínica, la técnica, la anestesia, el lugar de realización y el seguimiento.",
          "La naturalidad es una decisión técnica, no solo estética. En rostro se evalúa proporción entre nariz, mentón, párpados, cuello y mandíbula. En cuerpo se revisa calidad de piel, distribución de grasa, cicatrices previas, peso estable y expectativas realistas sobre recuperación y resultado.",
        ],
      },
      {
        title: "Medicina estética y calidad de piel",
        paragraphs: [
          "La medicina estética puede incluir botox, ácido hialurónico, bioestimuladores, láser CO2 fraccionado, IPL, NCTF, vitaminización facial, marcación mandibular, terapia fotodinámica y otros protocolos seleccionados. Aunque algunos son procedimientos de consulta, siguen necesitando criterio médico, productos adecuados, asepsia y seguimiento.",
          "Para Google y para los pacientes, una página médica debe ser clara sobre beneficios y límites. Por eso este sitio prioriza información orientativa, lenguaje prudente y llamados a valoración presencial antes de prometer resultados.",
        ],
      },
    ],
    serviceLinks: [
      {
        label: "Rinoplastia en Loja",
        href: "/servicios/rinoplastia-mujer/",
        description: "Cirugía de nariz con planificación facial individual.",
      },
      {
        label: "Liposucción en Loja",
        href: "/servicios/liposuccion/",
        description: "Modelado corporal para grasa localizada seleccionada.",
      },
      {
        label: "Blefaroplastia en Loja",
        href: "/servicios/parpados-blefaroplastia/",
        description: "Valoración de párpados, bolsas y función ocular.",
      },
      {
        label: "Botox en Loja",
        href: "/servicios/botox/",
        description: "Toxina botulínica para indicaciones estéticas y funcionales.",
      },
    ],
    faqs: [
      {
        question: "¿Dónde atiende el Dr. René González Dávila?",
        answer:
          "Atiende en Clínica Santa María, tercer piso, Av. Cuxibamba entre Latacunga y Riobamba, Loja, Ecuador.",
      },
      {
        question: "¿Qué procedimientos estéticos se pueden consultar?",
        answer:
          "Se puede consultar por cirugía estética facial y corporal, rinoplastia, liposucción, blefaroplastia, abdominoplastia, aumento de mamas, botox, ácido hialurónico, láser CO2, IPL y otros tratamientos según valoración.",
      },
      {
        question: "Si busco cirujano plástico en Loja, ¿esta página me sirve?",
        answer:
          "Si tu intención es encontrar valoración para procedimientos estéticos en Loja, esta página te orienta. El sitio mantiene la denominación profesional de cirujano estético y la indicación concreta se aclara en consulta médica.",
      },
      {
        question: "¿Cómo se agenda una valoración?",
        answer:
          "Puedes agendar por WhatsApp o teléfono con los números publicados en el sitio. La valoración permite revisar antecedentes, anatomía, expectativas, riesgos y alternativas.",
      },
    ],
  },
  {
    slug: "cirugia-estetica-loja",
    eyebrow: "Cirugía estética facial y corporal",
    title: "Cirugía estética en Loja",
    shortTitle: "Cirugía estética Loja",
    description:
      "Cirugía estética en Loja con el Dr. René González Dávila. Información para pacientes sobre rinoplastia, blefaroplastia, liposucción, abdominoplastia, aumento de mamas y medicina estética.",
    intro:
      "Guía local para pacientes que investigan cirugía estética en Loja y necesitan entender opciones, seguridad, recuperación y criterios de valoración antes de tomar una decisión.",
    image: "/images/section-2-image-2.webp",
    primaryKeyword: "cirugia estetica en Loja",
    secondaryKeywords: [
      "cirugía estética Loja",
      "cirugia estetica Loja",
      "cirugía estética Loja Ecuador",
      "cirugia estetica Loja Ecuador",
      "cirugía estética facial Loja",
      "cirugia estetica facial Loja",
      "cirugía estética corporal Loja",
      "cirugia estetica corporal Loja",
      "medicina estética Loja",
      "medicina estetica Loja",
      "procedimientos estéticos Loja",
      "procedimientos esteticos Loja",
    ],
    sections: [
      {
        title: "Cómo se decide un procedimiento estético",
        paragraphs: [
          "La elección de un procedimiento estético empieza con diagnóstico, no con una lista de precios. En consulta se revisa qué desea cambiar el paciente, qué procedimientos previos tuvo, cuánto tiempo puede dedicar a recuperación y qué riesgos acepta. Esa conversación permite decidir si conviene cirugía, medicina estética, tecnología para piel o una combinación gradual.",
          "Un plan serio también incluye explicar límites. La piel, la cicatrización, la edad, el peso, el tabaquismo, las enfermedades, los medicamentos y la anatomía previa influyen en el resultado. Por eso las fotos de referencia sirven para conversar, pero no reemplazan la evaluación presencial.",
        ],
      },
      {
        title: "Procedimientos frecuentes",
        paragraphs: [
          "En cirugía estética facial destacan rinoplastia, blefaroplastia, mentoplastia, otoplastia, ritidoplastia, bichectomía y lipo de papada. En cirugía estética corporal suelen consultarse liposucción, mini lipo, abdominoplastia y aumento de mamas. Cada página de servicio del sitio desarrolla indicaciones, seguridad y expectativas de forma más específica.",
          "También existen tratamientos no quirúrgicos como botox, ácido hialurónico, bioestimuladores, IPL, láser CO2 fraccionado, hidratación con ácido hialurónico y protocolos de calidad de piel. Estos procedimientos pueden ayudar cuando la indicación es correcta, pero no sustituyen una cirugía cuando hay exceso importante de piel, estructura o flacidez.",
        ],
      },
      {
        title: "Seguridad y seguimiento",
        paragraphs: [
          "Antes de cualquier procedimiento se deben conversar preparación, anestesia, exámenes, cuidados posteriores, signos de alarma y controles. En cirugía estética, el seguimiento importa tanto como la técnica: permite acompañar la inflamación, resolver dudas, detectar complicaciones temprano y proteger el resultado.",
          "Esta página está pensada para orientar a pacientes de Loja y del sur de Ecuador que comparan opciones de cirugía estética. La información no reemplaza una consulta ni promete resultados idénticos para todos; ayuda a llegar mejor preparado a la valoración médica.",
        ],
      },
    ],
    serviceLinks: [
      {
        label: "Abdominoplastia en Loja",
        href: "/servicios/abdominoplastia/",
        description: "Cirugía para exceso de piel abdominal y pared muscular.",
      },
      {
        label: "Aumento de mamas en Loja",
        href: "/servicios/aumento-de-mamas/",
        description: "Valoración de implantes, volumen y proporción corporal.",
      },
      {
        label: "Lipo papada en Loja",
        href: "/servicios/lipo-papada/",
        description: "Definición del ángulo cuello-mandíbula en casos indicados.",
      },
      {
        label: "Ácido hialurónico en Loja",
        href: "/servicios/acido-hialuronico/",
        description: "Relleno e hidratación facial con criterio médico.",
      },
    ],
    faqs: [
      {
        question: "¿Qué diferencia hay entre cirugía estética y medicina estética?",
        answer:
          "La cirugía estética modifica estructuras mediante un procedimiento quirúrgico. La medicina estética suele trabajar con inyectables, tecnología o protocolos menos invasivos. La elección depende de anatomía, objetivos, riesgos y tiempo de recuperación.",
      },
      {
        question: "¿La consulta garantiza un resultado?",
        answer:
          "No. La consulta permite estimar posibilidades y límites, pero ningún procedimiento médico o quirúrgico puede garantizar resultados idénticos en todos los pacientes.",
      },
      {
        question: "¿Qué se revisa antes de una cirugía estética?",
        answer:
          "Se revisan antecedentes médicos, medicamentos, alergias, cirugías previas, hábitos, exámenes, anatomía, fotografías clínicas, expectativas, riesgos, preparación y recuperación.",
      },
      {
        question: "¿Puedo combinar procedimientos?",
        answer:
          "A veces sí, pero depende de seguridad, tiempo quirúrgico, anestesia, recuperación y prioridad médica. La combinación debe decidirse en valoración, no solo por conveniencia.",
      },
    ],
  },
];

export function getLocalSeoPageBySlug(slug: string) {
  return localSeoPages.find((page) => page.slug === slug);
}

export function getLocalSeoPageUrl(page: LocalSeoPage) {
  return `${siteUrl}/${page.slug}/`;
}
