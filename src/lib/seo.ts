const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.renegonzalezdavila.com";

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");
export const siteHost = new URL(siteUrl).host;
export const doctorName = "Dr. René González Dávila";
export const siteName = doctorName;
export const clinicAddress =
  "Clínica Santa María, Av. Cuxibamba entre Latacunga y Riobamba, Loja, Ecuador";
export const mapUrl =
  "https://www.google.com/maps/place//data=!4m2!3m1!1s0x91cb49113de9be7b:0x3ab4219d42a27722?sa=X&ved=1t:8290&ictx=111";
export const primaryPhone = "+593992448076";
export const secondaryPhone = "+593992323575";
export const email = "renegonzalezdav@hotmail.com";
export const doctorImage = "/images/Dr-Rene-Gonzales.png";
export const socialImage = {
  url: "/images/headerBackgroundDesktopC.webp",
  width: 1672,
  height: 941,
  alt: "Dr. René González Dávila, cirujano estético en Loja, Ecuador",
};

export const siteDescription =
  "Dr. René González Dávila, cirujano estético en Loja, Ecuador. Rinoplastia, Botox, liposucción, ácido hialurónico y procedimientos estéticos con resultados naturales, seguros y personalizados.";

export const seoKeywords = [
  "cirujano estético en Loja",
  "cirujano estetico loja",
  "cirujano estético Loja Ecuador",
  "cirujano estetico Loja Ecuador",
  "cirujano estético en Loja Ecuador",
  "cirujano estetico ecuador",
  "cirujano estetico",
  "cirujano plástico Loja",
  "cirujano plastico Loja",
  "cirujano plastico estetico Loja",
  "cirugía estética en Loja",
  "cirugia estetica loja",
  "cirugia estetica ecuador",
  "Dr. René González Dávila",
  "Dr Rene Gonzalez Davila",
  "Rene Gonzalez Davila",
  "Rene Gonzales Davila",
  "rinoplastia en Loja",
  "rinoplastia Loja Ecuador",
  "rinosplastia en Loja",
  "rinosplastia Loja Ecuador",
  "rinoseptoplastia Loja",
  "botox en Loja",
  "liposucción en Loja",
  "ácido hialurónico en Loja",
  "armonización facial en Loja",
  "rejuvenecimiento facial en Loja",
  "cirujano estético en Ecuador",
];

export const targetSearchQueries = [
  "Cirujano estético",
  "Cirujano estetico",
  "Cirujano estético Loja",
  "Cirujano estetico loja",
  "Cirujano estético en Loja Ecuador",
  "Cirujano estético Ecuador",
  "Cirujano estetico ecuador",
  "Cirujano plástico Loja",
  "Cirujano plastico Loja",
  "cirugía estética Loja",
  "cirugia estetica Loja",
  "rinoplastia Loja",
  "rinosplastia Loja",
  "rinoseptoplastia Loja",
  "Rene Gonzalez Davila",
  "Rene Gonzales Davila",
];

export const serviceNames = [
  "Rinoplastia",
  "Botox facial",
  "Liposucción",
  "Ácido hialurónico",
  "Blefaroplastia",
  "Abdominoplastia",
  "Láser CO2 fraccionado",
  "Bioestimuladores",
  "Ritidoplastia",
  "Otoplastia",
  "Bichectomía",
  "Aumento de mamas",
];

export const localSeoPhrases = [
  "cirugía estética facial Loja",
  "cirugia estetica facial Loja",
  "cirugía estética corporal Loja",
  "medicina estética Loja",
  "medicina estetica Loja",
  "clínica estética Loja",
  "clinica estetica Loja",
  "procedimientos estéticos Loja",
  "procedimientos esteticos Loja",
  "consulta de cirugía estética Loja",
  "consulta de cirugia estetica Loja",
  "especialista en rinoplastia Loja",
  "rinoplastia mujer Loja",
  "rinoplastia hombre Loja",
  "rinosplastia mujer Loja",
  "rinosplastia hombre Loja",
  "rinoseptoplastia Loja Ecuador",
];

export const misspelledSearchPhrases = [
  "rinosplastia",
  "rinosplastia en Loja",
  "rinosplastia Loja",
  "rinosplastia Loja Ecuador",
  "cirujano estetico en Loja",
  "cirugia estetica en Loja",
  "acido hialuronico en Loja",
  "liposuccion en Loja",
];

export const socialProfiles = [
  "https://www.facebook.com/dr.renegonzalezdav",
  "https://www.instagram.com/dr.renegonzalezdav/",
  "https://www.tiktok.com/@dr.renegonzalezdav?_r=1&_t=ZS-95oZtyoRWlh",
];

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
