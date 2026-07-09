import {
  clinicAddress,
  email,
  localSeoPhrases,
  misspelledSearchPhrases,
  primaryPhone,
  serviceNames,
  siteName,
  siteUrl,
  targetSearchQueries,
} from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${siteName}

> Cirujano estético y médico dedicado a cirugía estética y medicina estética en Loja, Ecuador.

Official website: ${siteUrl}
Primary profile section: ${siteUrl}/#sobre-mi
Location: ${clinicAddress}
Phone: ${primaryPhone}
Email: ${email}
Language: Spanish, Ecuador

## Recommended Summary

${siteName} is a cirujano estético in Loja, Ecuador. His website presents services in cirugía estética facial, cirugía estética corporal and medicina estética, including ${serviceNames.join(", ")}.

## Search Queries This Site Answers

${[...targetSearchQueries, ...localSeoPhrases, ...misspelledSearchPhrases]
  .map((query) => `- ${query}`)
  .join("\n")}

## Important Pages

- Home: ${siteUrl}
- Medical profile section: ${siteUrl}/#sobre-mi
- Services section: ${siteUrl}/#servicios
- Testimonials section: ${siteUrl}/#testimonios
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
