'use client';

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const ambientGlowRef = useRef<HTMLDivElement | null>(null);
  const leftLineRef = useRef<HTMLDivElement | null>(null);
  const rightLineRef = useRef<HTMLDivElement | null>(null);
  const coreRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const ambientGlow = ambientGlowRef.current;
    const leftLine = leftLineRef.current;
    const rightLine = rightLineRef.current;
    const core = coreRef.current;
    const text = textRef.current;

    if (!section || !ambientGlow || !leftLine || !rightLine || !core || !text) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(ambientGlow, {
        opacity: 0.18,
      });

      gsap.set([leftLine, rightLine], {
        boxShadow: "0 0 14px rgba(255,255,255,0.18), 0 0 0 rgba(212,175,55,0)",
        filter: "brightness(0.78)",
      });

      gsap.set(core, {
        backgroundColor: "#ffffff",
        boxShadow: "0 0 10px rgba(255,255,255,0.35), 0 0 0 rgba(212,175,55,0)",
        scale: 0.8,
      });

      gsap.set(text, {
        autoAlpha: 0,
        y: 28,
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.15,
        },
      });

      timeline
        .to(leftLine, {
          xPercent: -18,
          yPercent: -80,
          rotate: -8,
        })
        .to(
          rightLine,
          {
            xPercent: 18,
            yPercent: 80,
            rotate: 8,
          },
          0,
        )
        .to(
          ambientGlow,
          {
            opacity: 1,
          },
          0.14,
        )
        .to(
          [leftLine, rightLine],
          {
            boxShadow:
              "0 0 22px rgba(255,255,255,0.4), 0 0 48px rgba(212,175,55,0.26)",
            filter: "brightness(1.15)",
          },
          0.18,
        )
        .to(
          core,
          {
            backgroundColor: "#f3d48b",
            boxShadow:
              "0 0 18px rgba(255,255,255,0.7), 0 0 36px rgba(212,175,55,0.5)",
            scale: 1,
          },
          0.18,
        )
        .to(
          text,
          {
            autoAlpha: 1,
            y: 0,
          },
          0.5,
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[220vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div
          ref={ambientGlowRef}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_30%),radial-gradient(circle_at_center,rgba(212,175,55,0.14),transparent_54%)]"
        />

        <div className="relative flex w-[min(88vw,72rem)] -rotate-[28deg] items-center justify-center">
          <div
            ref={leftLineRef}
            className="h-px flex-1 origin-right bg-gradient-to-r from-transparent via-white/75 to-[#f3d48b]"
          />
          <div
            ref={coreRef}
            className="h-2 w-2 rounded-full"
          />
          <div
            ref={rightLineRef}
            className="h-px flex-1 origin-left bg-gradient-to-l from-transparent via-white/75 to-[#f3d48b]"
          />
        </div>

        <div
          ref={textRef}
          className="relative z-10 flex max-w-3xl flex-col items-center gap-4 px-6 text-center"
        >
          <p className="text-[0.68rem] uppercase tracking-[0.5em] text-[#d8bc7d]/80 sm:text-xs">
            Aesthetic Surgery
          </p>
          <h1 className="text-4xl font-light uppercase tracking-[0.24em] text-white sm:text-6xl lg:text-7xl">
            DR Rene Gonzalez
          </h1>
          <p className="text-sm font-light uppercase tracking-[0.42em] text-white/60 sm:text-base">
            Cirujano estético
          </p>
        </div>
      </div>
    </section>
  );
}
