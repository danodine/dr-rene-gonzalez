import { localSeoPhrases, seoKeywords, siteName, socialImage } from "@/lib/seo";
import { getBlogPosts } from "@/client-sdk/getBlogPosts";
import { BLOG_CLIENT_ID } from "@/lib/blogClient";

export async function generateMetadata() {
  const { blogConfig, posts } = await getBlogPosts(BLOG_CLIENT_ID);
  const hasPosts = Boolean(blogConfig?.enabled) && posts.length > 0;

  return {
    title: "Revista Digital de Cirugía Estética en Loja",
    description:
      "Artículos sobre cirugía estética, armonización facial, rejuvenecimiento, recuperación y procedimientos del Dr. René González Dávila en Loja, Ecuador.",
    keywords: [
      ...seoKeywords,
      ...localSeoPhrases,
      "revista digital cirugía estética",
      "blog cirugía estética en Loja",
    ],
    alternates: {
      canonical: "/blog/",
    },
    robots: hasPosts
      ? {
          index: true,
          follow: true,
        }
      : {
          index: false,
          follow: true,
        },
    openGraph: {
      title: "Revista Digital de Cirugía Estética | Dr. René González Dávila",
      description:
        "Explora artículos y contenidos sobre procedimientos estéticos, recuperación y bienestar con enfoque médico en Loja, Ecuador.",
      url: "/blog/",
      type: "website",
      siteName,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: "Revista Digital de Cirugía Estética | Dr. René González Dávila",
      description:
        "Contenido editorial sobre cirugía estética, armonización facial y recuperación en Loja, Ecuador.",
      images: [socialImage.url],
    },
  };
}

export default function BlogLayout({ children }) {
  return children;
}
