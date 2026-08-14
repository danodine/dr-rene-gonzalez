import {
  clinicAddress,
  email,
  identityProfiles,
  localSeoPhrases,
  misspelledSearchPhrases,
  pressMentions,
  primaryPhone,
  serviceNames,
  siteName,
  siteUrl,
  targetSearchQueries,
} from "@/lib/seo";
import { getServiceHref, servicePages } from "@/lib/services";

export const dynamic = "force-static";

const absolute = (path: string) =>
  path.startsWith("http") ? path : `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

const searchQueries = [
  ...targetSearchQueries,
  ...localSeoPhrases,
  ...misspelledSearchPhrases,
];

export function GET() {
  const importantPages = [
    { label: "Inicio", url: siteUrl, description: "Página principal del cirujano estético en Loja, Ecuador." },
    { label: "Sobre mí", url: `${siteUrl}/#sobre-mi`, description: "Perfil médico, formación y trayectoria profesional." },
    { label: "Servicios", url: `${siteUrl}/#servicios`, description: "Cirugía estética facial, corporal y medicina estética." },
    { label: "Testimonios", url: `${siteUrl}/#testimonios`, description: "Experiencias y resultados de pacientes." },
  ];

  const serviceLinks = servicePages.map((service) => ({
    label: service.label,
    url: absolute(getServiceHref(service.label)),
    description: service.description,
  }));

  const profileLinks = [...identityProfiles, ...pressMentions];

  const linkList = (
    items: { label: string; url: string; description?: string }[],
  ) =>
    items
      .map(
        ({ label, url, description }) =>
          `- [${label}](${url})${description ? `: ${description}` : ""}`,
      )
      .join("\n");

  const body = `# ${siteName}

> Cirujano estético y médico dedicado a cirugía estética y medicina estética en Loja, Ecuador.

${siteName} es un cirujano estético en Loja, Ecuador. Su sitio web presenta servicios de cirugía estética facial, cirugía estética corporal y medicina estética, incluyendo ${serviceNames.join(", ")}.

Ubicación: ${clinicAddress}. Teléfono: ${primaryPhone}. Correo: ${email}. Idioma: español (Ecuador).

Este sitio responde búsquedas como: ${searchQueries.join(", ")}.

## Important Pages

${linkList(importantPages)}

## Services

${linkList(serviceLinks)}

## Profiles

${linkList(profileLinks)}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
