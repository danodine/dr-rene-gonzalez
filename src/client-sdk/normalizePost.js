// Firestore Timestamp objects aren't plain serializable data — they can't
// cross the Server Component -> Client Component boundary in Next.js, and
// they'd make the build-time fetch's output a different shape than the
// live client hook's output. Convert to millis everywhere, consistently.
export function normalizePost(post) {
  const out = { ...post };
  for (const key of ["createdAt", "updatedAt", "publishedAt"]) {
    if (out[key]?.toMillis) out[key] = out[key].toMillis();
  }
  return out;
}
