// Post fields (coverImage, images[], ctaUrl, video1-10) are raw client-
// entered strings. Using one directly as an <img src> is low-risk (browsers
// don't execute javascript: URIs from src), but an <a href> DOES execute
// javascript: URIs on click — run ctaUrl (or any link-like field) through
// this before rendering it as a link.
export function safeUrl(url) {
  if (!url) return undefined;
  const trimmed = String(url).trim();
  if (/^https?:\/\//i.test(trimmed) || /^mailto:/i.test(trimmed) || trimmed.startsWith("/")) {
    return trimmed;
  }
  return undefined;
}
