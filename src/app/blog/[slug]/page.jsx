import { notFound } from "next/navigation";
import BlogGoldDust from "@/components/BlogGoldDust";
import { getAllPosts, getPostBySlug } from "@lib/posts";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Articulo no encontrado",
    };
  }

  return {
    title: post.title,
    description: post.paragraph1,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.paragraph1,
      type: "article",
      url: `/blog/${post.slug}`,
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.paragraph1,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const allPosts = getAllPosts();

  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const nextPost = allPosts[currentIndex + 1] || allPosts[0];

  if (!post) notFound();

  return (
    <main className="blog-post-page-detail">
      <BlogGoldDust />
      <div className="future-grid-bg" />
      <div className="future-orb one" />
      <div className="future-orb two" />

      <div className="blog-editorial-container">
        <div style={{ paddingTop: "120px", marginBottom: "-100px" }}>
          <Link
            href="/blog"
            prefetch={false}
            className="future-link"
            style={{
              gap: "10px",
              padding: "0 20px",
              minHeight: "40px",
              fontSize: "0.8rem",
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>←</span> VOLVER
          </Link>
        </div>
        <header className="blog-header-section">
          <div className="blog-post-meta">
            <span
              className="blog-post-date"
              style={{
                color: "var(--cyan)",
                border: "1px solid var(--cyan)",
                padding: "4px 12px",
                borderRadius: "4px",
                fontSize: "0.7rem",
              }}
            >
              {post.type.toUpperCase()}
            </span>
            <span
              style={{
                color: "var(--muted)",
                fontSize: "0.8rem",
                marginLeft: "15px",
              }}
            >
              {post.date}
            </span>
          </div>

          <h1 className="blog-main-title">
            {post.title.split(".").map((part, i) => (
              <span key={i} className={i === 1 ? "text-cyan" : ""}>
                {part}
                {i === 0 ? "." : ""}
              </span>
            ))}
          </h1>
        </header>

        <div className="blog-article-grid">
          <div className="blog-main-content">
            <p
              style={{
                fontSize: "1.4rem",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.8)",
                marginBottom: "30px",
                lineHeight: "1.6",
              }}
            >
              {post.paragraph1}
            </p>

            <p style={{ marginBottom: "30px", color: "rgba(255,255,255,0.8)" }}>
              {post.paragraph2}
            </p>

            <div className="blog-note-box">
              <h4>
                <span style={{ color: "var(--cyan)" }}>✦</span>
                {post.noteTitle}
              </h4>
              <p>{post.note}</p>
            </div>

            <h2
              className="ph2"
              style={{
                color: "#fff",
                fontSize: "2.2rem",
                marginBottom: "20px",
              }}
            >
              {post.subtitle}
            </h2>

            <p style={{ color: "rgba(255,255,255,0.8)" }}>
              {post.subparagraph1}
            </p>

            <div
              className="blog-post-visual-wrap"
              style={{ margin: "40px 0", aspectRatio: "16/9" }}
            >
              <img
                src={post.image}
                alt={post.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <p style={{ color: "rgba(255,255,255,0.8)" }}>
              {post.subparagraph2}
            </p>

            <ul className="blog-check-list">
              {post.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <aside className="blog-sidebar">
            <div className="sidebar-reading-block">
              <div className="blog-author-strip">
                <img
                  src="/images/Dr-Rene-Gonzales.png"
                  className="author-mini-photo"
                  alt="DR. René Gonzalez Dávila"
                />
                <div className="author-mini-info">
                  <p className="name">DR. René Gonzalez Dávila</p>
                  <p className="role">Cirujano Estetico</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <section
          className="next-article-hero"
          style={{
            marginTop: "100px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "60px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <h2 style={{ color: "#fff", fontSize: "3.5rem", margin: 0 }}>
              Próximo Artículo.
            </h2>
            <Link
              href="/blog"
              prefetch={false}
              style={{
                color: "var(--muted)",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "0.8rem",
              }}
            >
              VER TODOS
            </Link>
          </div>

          <Link
            href={`/blog/${nextPost.slug}`}
            prefetch={false}
            style={{ textDecoration: "none" }}
          >
            <div className="next-article-card" style={{ height: "500px" }}>
              <img
                src={nextPost.image}
                className="next-article-image"
                alt="Próximo"
              />
              <div className="next-article-content" style={{ padding: "60px" }}>
                <span
                  style={{
                    color: "var(--muted)",
                    fontWeight: "700",
                    letterSpacing: "0.1em",
                    fontSize: "0.8rem",
                  }}
                >
                  SIGUIENTE EN LA SERIE
                </span>
                <h3
                  style={{
                    color: "#fff",
                    fontSize: "2.8rem",
                    margin: "15px 0 30px",
                    maxWidth: "700px",
                  }}
                >
                  {nextPost.title}
                </h3>
                <span className="future-link">Leer Ahora</span>
              </div>
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
