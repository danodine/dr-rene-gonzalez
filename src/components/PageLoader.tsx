"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const FADE_DURATION_MS = 520;
const MIN_VISIBLE_MS = 900;

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const startedAt = Date.now();

    html.classList.add("page-loading");
    body.classList.add("page-loading");

    let fadeTimer: number | null = null;
    let removeTimer: number | null = null;

    const finishLoading = () => {
      const elapsed = Date.now() - startedAt;
      const delay = Math.max(MIN_VISIBLE_MS - elapsed, 0);

      fadeTimer = window.setTimeout(() => {
        setIsLeaving(true);

        removeTimer = window.setTimeout(() => {
          html.classList.remove("page-loading");
          body.classList.remove("page-loading");
          setIsVisible(false);
        }, FADE_DURATION_MS);
      }, delay);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.removeEventListener("load", finishLoading);
      if (fadeTimer) {
        window.clearTimeout(fadeTimer);
      }
      if (removeTimer) {
        window.clearTimeout(removeTimer);
      }
      html.classList.remove("page-loading");
      body.classList.remove("page-loading");
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[200] flex items-center justify-center bg-black px-6 transition-all duration-500 ${
        isLeaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.1),transparent_24%),radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.03),transparent_26%)]" />

      <div className="relative flex w-full max-w-sm flex-col items-center text-center">
        <div className="relative h-28 w-28 sm:h-32 sm:w-32">
          <Image
            src="/images/LogoNB.png"
            alt="RG"
            fill
            priority
            className="object-contain"
          />
        </div>

        <p className="mt-7 text-[0.68rem] uppercase tracking-[0.48em] text-[#d4af37]/80">
          Cargando experiencia
        </p>
        <p className="mt-4 text-[0.84rem] uppercase tracking-[0.24em] text-white/72 sm:text-[0.92rem]">
          Dr. René González Dávila
        </p>

        <div className="mt-8 h-px w-full overflow-hidden rounded-full bg-white/8">
          <div className="page-loader-bar h-full w-1/2 rounded-full bg-[linear-gradient(90deg,transparent,#d4af37,rgba(255,245,201,0.92),#d4af37,transparent)]" />
        </div>
      </div>
    </div>
  );
}
