"use client";

import { useEffect } from "react";

export default function ScrollTriggerRefresh() {
  useEffect(() => {
    let isMounted = true;

    const refresh = () => {
      void import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        if (isMounted) {
          ScrollTrigger.refresh();
        }
      });
    };

    const timeoutId = window.setTimeout(refresh, 180);
    const rafId = window.requestAnimationFrame(refresh);

    if (document.fonts?.ready) {
      document.fonts.ready.then(refresh).catch(() => {});
    }

    window.addEventListener("load", refresh);
    window.addEventListener("pageshow", refresh);
    window.addEventListener("orientationchange", refresh);

    return () => {
      isMounted = false;
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("load", refresh);
      window.removeEventListener("pageshow", refresh);
      window.removeEventListener("orientationchange", refresh);
    };
  }, []);

  return null;
}
