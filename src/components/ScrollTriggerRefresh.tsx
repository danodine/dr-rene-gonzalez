"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollTriggerRefresh() {
  useEffect(() => {
    const refresh = () => {
      ScrollTrigger.refresh();
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
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("load", refresh);
      window.removeEventListener("pageshow", refresh);
      window.removeEventListener("orientationchange", refresh);
    };
  }, []);

  return null;
}
