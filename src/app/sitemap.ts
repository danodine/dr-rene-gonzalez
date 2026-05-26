import type { MetadataRoute } from "next";
import { getAllPosts } from "@/app/lib/blog";

const siteUrl = "https://pagina-rene-gonzalez.vercel.app";
const lastModified = new Date();

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
