'use client';

import NextImage from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const logoColor = "#49506a";

export default function Header() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLDivElement | null>(null);
  const portraitRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const logo = logoRef.current;
    const name = nameRef.current;
    const portrait = portraitRef.current;

    if (!section || !logo || !name || !portrait) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(logo, {
        autoAlpha: 1,
        scale: 1,
        y: 0,
      });

      gsap.set([name, portrait], {
        autoAlpha: 0,
        y: 34,
        filter: "blur(10px)",
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
        .to(
          logo,
          {
            scale: 1.08,
            y: -16,
            duration: 0.72,
          },
          0,
        )
        .to(
          name,
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.5,
          },
          0.36,
        )
        .fromTo(
          portrait,
          {
            autoAlpha: 0,
            x: 46,
            y: 24,
            scale: 0.985,
            filter: "blur(12px)",
          },
          {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.7,
          },
          0.48,
        );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative h-[260vh] bg-white"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-white">
        <div
          ref={logoRef}
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
        >
          <div className="relative h-[clamp(8rem,24vw,18rem)] w-[clamp(8rem,24vw,18rem)]">
            <NextImage
              src="/images/Logo.png"
              alt="RG"
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
          <div className="absolute left-1/2 top-[66%] z-20 flex w-[min(54rem,62vw)] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center max-md:top-[65%] max-md:w-[88vw]">
            <div ref={nameRef}>
              <h1
                className="text-[clamp(1.05rem,1.75vw,1.9rem)] font-light tracking-[0.08em]"
                style={{ color: logoColor }}
              >
                René González Dávila
              </h1>
              <h2
                className="mt-1 text-[0.58rem] uppercase tracking-[0.58em] sm:text-xs"
                style={{ color: logoColor }}
              >
                Cirugía Estética
              </h2>
            </div>
          </div>

          <div
            ref={portraitRef}
            className="absolute bottom-0 right-[5vw] z-10 h-[86vh] w-[min(34rem,32vw)] max-md:hidden"
          >
            <NextImage
              src="/images/Dr-Rene-Gonzales-Bl.png"
              alt="Dr. René González Dávila"
              fill
              priority
              sizes="32vw"
              className="object-contain object-bottom drop-shadow-[0_28px_60px_rgba(0,0,0,0.16)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
