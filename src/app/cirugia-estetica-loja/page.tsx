import type { Metadata } from "next";
import LocalSeoPage from "@/components/LocalSeoPage";
import {
  getLocalSeoPageBySlug,
  getLocalSeoPageUrl,
} from "@/lib/localSeoPages";
import { siteName, socialImage } from "@/lib/seo";

export const dynamic = "force-static";

function getPage() {
  const page = getLocalSeoPageBySlug("cirugia-estetica-loja");

  if (!page) {
    throw new Error("Missing local SEO page: cirugia-estetica-loja");
  }

  return page;
}

const page = getPage();

export const metadata: Metadata = {
  title: {
    absolute: `${page.title} | ${siteName}`,
  },
  description: page.description,
  keywords: [page.primaryKeyword, ...page.secondaryKeywords],
  alternates: {
    canonical: `/${page.slug}/`,
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: getLocalSeoPageUrl(page),
    siteName,
    title: `${page.title} | ${siteName}`,
    description: page.description,
    images: [
      {
        ...socialImage,
        url: page.image,
        alt: `${page.title} con ${siteName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${page.title} | ${siteName}`,
    description: page.description,
    images: [page.image],
  },
  other: {
    "geo.region": "EC-L",
    "geo.placename": "Loja",
    "medical-specialty": "Cirugía estética",
  },
};

export default function Page() {
  return <LocalSeoPage page={page} />;
}
