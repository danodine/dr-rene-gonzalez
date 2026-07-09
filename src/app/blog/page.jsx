import Image from "next/image";
import Link from "next/link";
import BlogHeroAnimation from "@/components/BlogHeroAnimation";
import BlogGoldDust from "@/components/BlogGoldDust";
import { getBlogPosts } from "@/client-sdk/getBlogPosts";
import { BLOG_CLIENT_ID } from "@/lib/blogClient";

export const dynamic = "force-static";

function formatDate(millis) {
  if (!millis) return "";
  return new Date(millis).toLocaleDateString("es-EC", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const { blogConfig, posts: rawPosts } = await getBlogPosts(BLOG_CLIENT_ID);
  const fields = blogConfig?.fields || [];
  const posts = blogConfig?.enabled ? rawPosts : [];

  return (
    <main className="blog-future-page">
      <BlogGoldDust />
      <div className="future-grid-bg" />
      <div className="future-orb one" />
      <div className="future-orb two" />
      <div className="future-orb three" />
      <BlogHeroAnimation />

      <section className="future-hero">
        <div className="container future-hero-shell">
          <p className="future-eyebrow">Archivo editorial</p>
          <h1 className="future-title">
            Medicina que <span>se entiende</span>
          </h1>
          <p className="future-subtitle">
            Una revista digital diseñada como una experiencia editorial
            inmersiva: información clara sobre estética, procedimientos y
            recuperación con Dr. René González Dávila, cirujano estético en
            Loja, Ecuador.
          </p>
        </div>
      </section>

      <section style={{ padding: "0px 0 100px" }}>
        <div className="container">
          {posts.length === 0 ? (
            <div
              className="future-hover-card"
              style={{ maxWidth: "760px", margin: "0 auto" }}
            >
              <h2
                style={{
                  margin: 0,
                  color: "#fff",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  lineHeight: "1.15",
                }}
              >
                Aún no hay publicaciones
              </h2>
              <p
                style={{
                  margin: "16px 0 0",
                  color: "var(--muted)",
                  fontSize: "1rem",
                  lineHeight: "1.8",
                }}
              >
                La revista digital todavía no tiene artículos publicados. Pronto
                compartiremos contenido sobre cirugía estética, procedimientos,
                recuperación y novedades del Dr. René González Dávila.
              </p>
            </div>
          ) : (
            <div
              className="future-card-grid"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "30px",
              }}
            >
              {posts.map((post, index) => (
                <article
                  key={post.id || `${post.slug}-${index}`}
                  className="future-hover-card"
                >
                  {fields.includes("coverImage") && post.coverImage && (
                    <div
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: "18px",
                        marginBottom: "20px",
                      }}
                    >
                      <Image
                        src={post.coverImage}
                        alt={post.title || ""}
                        width={1200}
                        height={675}
                        style={{
                          width: "100%",
                          aspectRatio: "16/9",
                          objectFit: "cover",
                        }}
                      />
                      {fields.includes("tags") && post.tags?.[0] && (
                        <div
                          style={{
                            position: "absolute",
                            top: "15px",
                            left: "15px",
                            background: "rgba(7, 18, 33, 0.8)",
                            backdropFilter: "blur(5px)",
                            padding: "4px 12px",
                            borderRadius: "99px",
                            fontSize: "0.7rem",
                            color: "var(--cyan)",
                            border: "1px solid rgba(124, 234, 255, 0.2)",
                          }}
                        >
                          {post.tags[0]}
                        </div>
                      )}
                    </div>
                  )}

                  {post.publishedAt && (
                    <small
                      style={{ color: "var(--muted)", letterSpacing: "0.1em" }}
                    >
                      {formatDate(post.publishedAt)}
                    </small>
                  )}
                  {fields.includes("title") && post.title && (
                    <h3
                      style={{
                        marginTop: "12px",
                        color: "#fff",
                        fontSize: "1.4rem",
                        lineHeight: "1.3",
                      }}
                    >
                      {post.title}
                    </h3>
                  )}
                  {fields.includes("excerpt") && post.excerpt && (
                    <p
                      style={{
                        color: "var(--muted)",
                        fontSize: "0.95rem",
                        margin: "15px 0",
                      }}
                    >
                      {post.excerpt}
                    </p>
                  )}

                  <div style={{ marginTop: "auto" }}>
                    <Link
                      href={`/blog/${post.slug || post.id}`}
                      prefetch={false}
                      className="future-link"
                      style={{ width: "100%" }}
                    >
                      Leer artículo
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
