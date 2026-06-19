import type { MetadataRoute } from "next";
import { getAllPosts } from "@/app/lib/blog";
import { siteUrl } from "@/lib/seo";

const lastModified = new Date("2026-06-19T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.isoDate ? new Date(post.isoDate) : lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
