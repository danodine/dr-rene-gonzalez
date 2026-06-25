"use client";

import { useEffect } from "react";

export default function BlogHeroAnimation() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".future-hero");

    if (!hero) {
      return;
    }

    let isMounted = true;
    let cleanup: (() => void) | undefined;

    void (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (!isMounted) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      const mm = gsap.matchMedia();

      mm.add("(min-width: 992px)", () => {
        const title = hero.querySelector(".future-title");
        const sub = hero.querySelector(".future-subtitle");
        const badge = hero.querySelector(".future-eyebrow");

        gsap.from([badge, title, sub], {
          y: 24,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
        });
      });

      cleanup = () => mm.revert();
    })();

    return () => {
      isMounted = false;
      cleanup?.();
    };
  }, []);

  return null;
}
