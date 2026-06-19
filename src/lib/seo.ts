export const siteUrl = "https://pagina-rene-gonzalez.vercel.app";
export const siteHost = "pagina-rene-gonzalez.vercel.app";
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
  "cirugía estética en Loja",
  "Dr. René González Dávila",
  "rinoplastia en Loja",
  "botox en Loja",
  "liposucción en Loja",
  "ácido hialurónico en Loja",
  "armonización facial en Loja",
  "rejuvenecimiento facial en Loja",
  "cirujano estético en Ecuador",
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

export const socialProfiles = [
  "https://www.facebook.com/dr.renegonzalezdav",
  "https://www.instagram.com/dr.renegonzalezdav/",
  "https://www.tiktok.com/@dr.renegonzalezdav?_r=1&_t=ZS-95oZtyoRWlh",
];

export function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
