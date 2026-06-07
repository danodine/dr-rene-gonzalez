export const blogPosts = [
  /*  {
    slug: "dr-rene-gonzalez-experto-en-rejuvenecimiento-facial",
    title:
      "Arte y Precisión: El Dr. René González Dávila y las Últimas Tendencias en Botox y Fillers",
    type: "Estética Facial",
    date: "12 de marzo de 2026",
    isoDate: "2026-03-12",
    paragraph1:
      "El Dr. René González Dávila se consolida como un referente en la medicina estética tras su participación en el simposio internacional de rejuvenecimiento no invasivo. Con un enfoque centrado en la armonización facial, el Dr. González utiliza técnicas avanzadas de aplicación de toxina botulínica para lograr resultados naturales que preservan la expresión del paciente mientras atenúan las líneas de expresión.",
    paragraph2:
      "Su metodología no solo busca rellenar arrugas, sino restaurar los volúmenes perdidos mediante un análisis exhaustivo de la estructura ósea y muscular de cada rostro. Al integrar bioestimuladores y ácido hialurónico, el Dr. González logra un efecto de lifting líquido que redefine el contorno mandibular y los pómulos sin necesidad de pasar por el quirófano tradicional.",
    note: "La estética moderna no se trata de cambiar quién eres, sino de revelar tu mejor versión. Mi compromiso es utilizar la ciencia de los inyectables para crear una simetría armónica y una piel radiante.",
    noteTitle: "El arte del natural look",
    subtitle: "Innovación en aplicación de toxina botulínica",
    subparagraph1:
      "La técnica del Dr. González destaca por su precisión milimétrica. Al aplicar microdosis en puntos estratégicos, se logra relajar la musculatura de forma selectiva, evitando el efecto de rostro congelado y priorizando una apariencia fresca y descansada, sello distintivo de su consulta.",
    image: "/images/blog/reneBlog1.png",
    subparagraph2:
      "Además de la estética, el Dr. René González Dávila implementa protocolos de cuidado de la piel posteriores al procedimiento que potencian la duración de los resultados. Este enfoque integral asegura que cada paciente reciba no solo un tratamiento, sino un plan de mantenimiento a largo plazo para su salud dérmica.",
    list: [
      "Especialista en armonización facial y lifting líquido.",
      "Técnicas avanzadas de aplicación de Botox con resultados naturales.",
      "Protocolos personalizados de rejuvenecimiento sin tiempo de inactividad.",
    ],
  }, */
];

export function getAllPosts() {
  return blogPosts;
}

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
