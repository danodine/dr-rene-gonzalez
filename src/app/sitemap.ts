import type { MetadataRoute } from "next";
import { getAllPosts } from "@/app/lib/blog";
import { siteUrl } from "@/lib/seo";
import { servicePages } from "@/lib/services";

export const dynamic = "force-static";

const lastModified = new Date("2026-06-29T00:00:00.000Z");
const withTrailingSlash = (url: string) => (url.endsWith("/") ? url : `${url}/`);

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  return [
    {
      url: withTrailingSlash(siteUrl),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...(posts.length > 0
      ? [
          {
            url: `${siteUrl}/blog/`,
            lastModified,
            changeFrequency: "weekly" as const,
            priority: 0.8,
          },
        ]
      : []),
    {
      url: `${siteUrl}/cirujano-estetico-loja/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    ...servicePages.map((service) => ({
      url: `${siteUrl}/servicios/${service.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}/`,
      lastModified: post.isoDate ? new Date(post.isoDate) : lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
