import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { blogDb } from "./firebaseClient";
import { normalizePost } from "./normalizePost";

// One-time fetch — safe to call at build time (Next.js Server Components,
// generateStaticParams, etc.) or anywhere server-side. No credentials
// needed: clients/{clientId} and published posts are both public reads
// per firestore.rules, same as the live client hook uses.
//
// Pair this with useBlogPosts's hydration option so the static export has
// real content for crawlers, while real visitors get it refreshed live:
//
//   const initial = await getBlogPosts(clientId);        // Server Component
//   const { posts, blogConfig } = useBlogPosts(clientId, initial); // Client Component
export async function getBlogPosts(clientId) {
  const clientSnap = await getDoc(doc(blogDb, "clients", clientId));
  const blogConfig = clientSnap.exists() ? clientSnap.data().blogConfig || null : null;

  const postsQuery = query(
    collection(blogDb, "clients", clientId, "posts"),
    where("status", "==", "published"),
  );
  const postsSnap = await getDocs(postsQuery);
  const posts = postsSnap.docs
    .map((d) => normalizePost({ id: d.id, ...d.data() }))
    .sort((a, b) => (b.publishedAt || 0) - (a.publishedAt || 0));

  return { blogConfig, posts };
}
