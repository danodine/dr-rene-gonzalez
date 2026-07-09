import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/client-sdk/getBlogPosts";
import { safeUrl } from "@/client-sdk/safeUrl";
import { BLOG_CLIENT_ID } from "@/lib/blogClient";
import { doctorImage, siteUrl, socialImage } from "@/lib/seo";
import { servicePages } from "@/lib/services";

export const dynamic = "force-static";

const lastModified = new Date("2026-06-29T00:00:00.000Z");
const withTrailingSlash = (url: string) => (url.endsWith("/") ? url : `${url}/`);

type BlogPost = {
  id?: string;
  slug?: string;
  publishedAt?: number;
  coverImage?: string;
  image?: string;
  images?: string[];
};

function getPostSlug(post: BlogPost) {
  return post.slug || post.id || "";
}

function getPostImage(post: BlogPost) {
  const candidates = [
    post.coverImage,
    post.image,
    Array.isArray(post.images) ? post.images[0] : "",
  ];

  for (const candidate of candidates) {
    const src = safeUrl(candidate);
    if (src) return src;
  }

  return "";
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { blogConfig, posts: rawPosts } = await getBlogPosts(BLOG_CLIENT_ID);
  const posts = blogConfig?.enabled ? (rawPosts as BlogPost[]) : [];

  return [
    {
      url: withTrailingSlash(siteUrl),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteUrl}${socialImage.url}`, `${siteUrl}${doctorImage}`],
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
    ...servicePages.map((service) => ({
      url: `${siteUrl}/servicios/${service.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.82,
      images: [`${siteUrl}${service.image}`],
    })),
    ...posts
      .filter((post) => getPostSlug(post))
      .map((post) => {
        const image = getPostImage(post);

        return {
          url: `${siteUrl}/blog/${getPostSlug(post)}/`,
          lastModified: post.publishedAt
            ? new Date(post.publishedAt)
            : lastModified,
          changeFrequency: "monthly" as const,
          priority: 0.7,
          images: image ? [image] : undefined,
        };
      }),
  ];
}
