import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogGoldDust from "@/components/BlogGoldDust";
import { getBlogPosts } from "@/client-sdk/getBlogPosts";
import { safeUrl } from "@/client-sdk/safeUrl";
import { BLOG_CLIENT_ID } from "@/lib/blogClient";

export const dynamic = "force-static";
export const dynamicParams = false;

type BlogPost = {
  id?: string;
  slug?: string;
  title?: string;
  excerpt?: string;
  intro?: string;
  quote?: string;
  pullQuote?: string;
  pullquote?: string;
  coverImage?: string;
  image?: string;
  images?: string[];
  publishedAt?: number;
  author?: string;
  tags?: string[];
  [key: string]: string | number | string[] | undefined;
};

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type BlogSection = {
  index: number;
  subtitle?: string;
  text?: string;
};

const defaultFields = [
  "title",
  "excerpt",
  "intro",
  "quote",
  "pullQuote",
  "coverImage",
  "image",
  "subtitle1",
  "subtitle2",
  "subtitle3",
  "text1",
  "text2",
  "text3",
];

function formatDate(millis?: number) {
  if (!millis) return "";
  return new Date(millis).toLocaleDateString("es-EC", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function fieldIsEnabled(fields: string[], field: string) {
  return fields.length === 0 || fields.includes(field);
}

function textValue(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : "";
}

function getEnabledText(post: BlogPost, fields: string[], field: string) {
  return fieldIsEnabled(fields, field) ? textValue(post[field]) : "";
}

function getPostSlug(post: BlogPost) {
  return post.slug || post.id || "";
}

function getPostImage(post: BlogPost, fields: string[]) {
  const candidates = [
    fieldIsEnabled(fields, "coverImage") ? post.coverImage : "",
    fieldIsEnabled(fields, "image") ? post.image : "",
    fieldIsEnabled(fields, "images") && Array.isArray(post.images)
      ? post.images[0]
      : "",
  ];

  for (const candidate of candidates) {
    const src = safeUrl(textValue(candidate));
    if (src) return src;
  }

  return "";
}

function getPullQuote(post: BlogPost, fields: string[]) {
  return (
    getEnabledText(post, fields, "pullQuote") ||
    getEnabledText(post, fields, "pullquote") ||
    getEnabledText(post, fields, "quote")
  );
}

function getSections(post: BlogPost, fields: string[]) {
  const sections: BlogSection[] = [];

  for (let index = 1; index <= 3; index += 1) {
    const subtitle = getEnabledText(post, fields, `subtitle${index}`);
    const text = getEnabledText(post, fields, `text${index}`);

    if (subtitle || text) {
      sections.push({ index, subtitle, text });
    }
  }

  return sections;
}

async function getPublishedPosts() {
  const { blogConfig, posts } = await getBlogPosts(BLOG_CLIENT_ID);
  const fields =
    Array.isArray(blogConfig?.fields) && blogConfig.fields.length > 0
      ? blogConfig.fields
      : defaultFields;

  return {
    blogConfig,
    fields,
    posts: blogConfig?.enabled ? (posts as BlogPost[]) : [],
  };
}

export async function generateStaticParams() {
  const { posts } = await getPublishedPosts();

  return posts
    .map((post) => ({ slug: getPostSlug(post) }))
    .filter((params) => params.slug);
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { fields, posts } = await getPublishedPosts();
  const post = posts.find((item) => getPostSlug(item) === slug);

  if (!post) {
    return {
      title: "Artículo no encontrado",
    };
  }

  const title = getEnabledText(post, fields, "title") || "Artículo médico";
  const description =
    getEnabledText(post, fields, "excerpt") ||
    getEnabledText(post, fields, "intro") ||
    "Artículo del Dr. René González Dávila sobre cirugía estética y medicina estética en Loja, Ecuador.";
  const image = getPostImage(post, fields);

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${getPostSlug(post)}`,
    },
    openGraph: {
      type: "article",
      locale: "es_EC",
      title,
      description,
      images: image ? [{ url: image, alt: title }] : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const { blogConfig, fields, posts } = await getPublishedPosts();

  if (!blogConfig?.enabled) notFound();

  const index = posts.findIndex((post) => getPostSlug(post) === slug);
  const post = posts[index];
  if (!post) notFound();

  const title = getEnabledText(post, fields, "title") || "Artículo médico";
  const excerpt = getEnabledText(post, fields, "excerpt");
  const intro = getEnabledText(post, fields, "intro");
  const pullQuote = getPullQuote(post, fields);
  const image = getPostImage(post, fields);
  const sections = getSections(post, fields);
  const date = formatDate(post.publishedAt);
  const primaryTag =
    fieldIsEnabled(fields, "tags") && Array.isArray(post.tags)
      ? post.tags[0]
      : "";
  const nextPost =
    posts.length > 1 ? posts[(index + 1) % posts.length] : undefined;

  return (
    <main className="blog-future-page blog-post-page-detail">
      <BlogGoldDust />
      <div className="future-grid-bg" />

      <article className="blog-story">
        <header className="blog-story-hero">
          <div className="container blog-story-hero-grid">
            <div className="blog-story-heading">
              {primaryTag ? (
                <p className="future-eyebrow text-cyan">{primaryTag}</p>
              ) : null}
              <h1 className="future-title blog-main-title">{title}</h1>
              {excerpt ? <p className="blog-story-excerpt">{excerpt}</p> : null}
              {date ? <p className="blog-post-date">{date}</p> : null}
            </div>

            {image ? (
              <figure className="blog-story-image">
                <Image
                  src={image}
                  alt={title}
                  width={1200}
                  height={780}
                  priority
                  sizes="(max-width: 900px) 100vw, 44vw"
                />
              </figure>
            ) : null}
          </div>
        </header>

        <section className="container blog-story-body">
          <div className="blog-story-content">
            {intro ? <p className="blog-story-intro">{intro}</p> : null}

            {pullQuote ? (
              <blockquote className="blog-story-quote">
                <p>{pullQuote}</p>
              </blockquote>
            ) : null}

            {sections.map((section) => (
              <section key={section.index} className="blog-story-section">
                {section.subtitle ? <h2>{section.subtitle}</h2> : null}
                {section.text ? <p>{section.text}</p> : null}
              </section>
            ))}
          </div>

          <aside className="blog-story-aside">
            <div className="sidebar-reading-block">
              <p className="blog-story-aside-label">Revista digital</p>
              <h2>Cirugía estética en Loja</h2>
              <p>
                Información clara para pacientes que desean entender mejor un
                procedimiento antes de una valoración médica.
              </p>
            </div>
          </aside>
        </section>
      </article>

      <section className="container blog-story-footer">
        {nextPost ? (
          <Link
            href={`/blog/${getPostSlug(nextPost)}`}
            prefetch={false}
            className="next-article-card"
          >
            <span>Siguiente artículo</span>
            <h3>{getEnabledText(nextPost, fields, "title") || "Leer más"}</h3>
          </Link>
        ) : null}

        <Link href="/blog" prefetch={false} className="future-link">
          Volver a la revista
        </Link>
      </section>
    </main>
  );
}
