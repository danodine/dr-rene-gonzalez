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
  // If Firebase isn't configured (e.g. NEXT_PUBLIC_FIREBASE_* env vars
  // aren't set in the build environment) or is unreachable, don't crash
  // the whole static export. A blog with no posts is a valid state — the
  // page renders empty / the [slug] route 404s. Missing projectId is the
  // usual cause of a build-time "INVALID_ARGUMENT: Invalid resource field
  // value" from Firestore, so guard against it explicitly.
  if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
    console.warn(
      "[getBlogPosts] NEXT_PUBLIC_FIREBASE_PROJECT_ID is not set — " +
        "skipping Firestore fetch and building the blog with no posts.",
    );
    return { blogConfig: null, posts: [] };
  }

  try {
    const clientSnap = await getDoc(doc(blogDb, "clients", clientId));
    const blogConfig = clientSnap.exists()
      ? clientSnap.data().blogConfig || null
      : null;

    const postsQuery = query(
      collection(blogDb, "clients", clientId, "posts"),
      where("status", "==", "published"),
    );
    const postsSnap = await getDocs(postsQuery);
    const posts = postsSnap.docs
      .map((d) => normalizePost({ id: d.id, ...d.data() }))
      .sort((a, b) => (b.publishedAt || 0) - (a.publishedAt || 0));

    return { blogConfig, posts };
  } catch (error) {
    console.warn(
      "[getBlogPosts] Firestore fetch failed — building the blog with no " +
        "posts. Error:",
      error?.message || error,
    );
    return { blogConfig: null, posts: [] };
  }
}
