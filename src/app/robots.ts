import type { MetadataRoute } from "next";
import { siteHost, siteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    host: siteHost,
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
