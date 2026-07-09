"use client";

import { useEffect, useState } from "react";
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import { blogDb } from "./firebaseClient";
import { normalizePost } from "./normalizePost";

// Subscribes to a client's blogConfig + published posts in real time and
// hands back raw data — no rendering, no styling. blogConfig.fields is the
// same source of truth used by the admin panel and widget: check it
// yourself before rendering a field, e.g. blogConfig.fields.includes("title").
//
// blogConfig.enabled is NOT enforced here (Firestore rules make published
// posts public regardless) — check it in your own component if you want
// to hide the blog entirely when a client's blogConfig.enabled is false.
//
// Pass `hydrate` (from getBlogPosts, fetched server-side at build time) to
// paint real content immediately on first render instead of a loading
// flicker — the live subscription below still takes over right after.
export function useBlogPosts(clientId, hydrate) {
  const [state, setState] = useState({
    posts: hydrate?.posts || [],
    blogConfig: hydrate?.blogConfig ?? null,
    loading: !hydrate,
    error: null,
  });

  useEffect(() => {
    if (!clientId) return;

    const unsubClient = onSnapshot(
      doc(blogDb, "clients", clientId),
      (snap) => {
        setState((s) => ({ ...s, blogConfig: snap.exists() ? snap.data().blogConfig || null : null }));
      },
      (error) => setState((s) => ({ ...s, error, loading: false })),
    );

    const postsQuery = query(
      collection(blogDb, "clients", clientId, "posts"),
      where("status", "==", "published"),
    );

    const unsubPosts = onSnapshot(
      postsQuery,
      (snap) => {
        const posts = snap.docs
          .map((d) => normalizePost({ id: d.id, ...d.data() }))
          .sort((a, b) => (b.publishedAt || 0) - (a.publishedAt || 0));
        setState((s) => ({ ...s, posts, loading: false }));
      },
      (error) => setState((s) => ({ ...s, error, loading: false })),
    );

    return () => {
      unsubClient();
      unsubPosts();
    };
  }, [clientId]);

  return state;
}
