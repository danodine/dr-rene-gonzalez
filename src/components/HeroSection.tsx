'use client';

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const rightWashRef = useRef<HTMLDivElement | null>(null);
  const rightTextRef = useRef<HTMLDivElement | null>(null);
  const leftTextRef = useRef<HTMLDivElement | null>(null);
  const ripStageRef = useRef<HTMLDivElement | null>(null);
  const secondImageRef = useRef<HTMLDivElement | null>(null);
  const leftPanelRef = useRef<HTMLDivElement | null>(null);
  const rightPanelRef = useRef<HTMLDivElement | null>(null);
  const secondTextRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const overlay = overlayRef.current;
    const rightWash = rightWashRef.current;
    const rightText = rightTextRef.current;
    const leftText = leftTextRef.current;
    const ripStage = ripStageRef.current;
    const secondImage = secondImageRef.current;
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;
    const secondText = secondTextRef.current;

    if (
      !section ||
      !overlay ||
      !rightWash ||
      !rightText ||
      !leftText ||
      !ripStage ||
      !secondImage ||
      !leftPanel ||
      !rightPanel ||
      !secondText
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set([rightText, leftText, secondText], {
        autoAlpha: 0,
        y: 18,
      });

      gsap.set(rightWash, {
        autoAlpha: 0,
      });

      gsap.set(ripStage, {
        autoAlpha: 0,
      });

      gsap.set(secondImage, {
        scale: 1.08,
      });

      gsap.set([leftPanel, rightPanel], {
        xPercent: 0,
        rotate: 0,
      });

      const timeline = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });

      timeline
        .to(rightText, {
          autoAlpha: 1,
          y: 0,
          duration: 0.28,
        })
        .to(
          overlay,
          {
            xPercent: -100,
            duration: 1.5,
          },
          0.34,
        )
        .to(
          rightText,
          {
            autoAlpha: 0,
            y: -10,
            duration: 0.2,
          },
          0.54,
        )
        .to(
          leftText,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.28,
          },
          1.8,
        )
        .to(
          [leftText, rightText],
          {
            autoAlpha: 0,
            y: -10,
            duration: 0.2,
          },
          2.12,
        )
        .to(
          rightWash,
          {
            autoAlpha: 1,
            duration: 0.38,
          },
          2.16,
        )
        .to(
          ripStage,
          {
            autoAlpha: 1,
            duration: 0.02,
          },
          2.48,
        )
        .to(
          leftPanel,
          {
            xPercent: -108,
            rotate: -2.8,
            duration: 1.18,
          },
          2.64,
        )
        .to(
          rightPanel,
          {
            xPercent: 108,
            rotate: 2.8,
            duration: 1.18,
          },
          2.64,
        )
        .to(
          secondImage,
          {
            scale: 1,
            duration: 1.2,
          },
          2.68,
        )
        .to(
          secondText,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.3,
          },
          3.36,
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[360vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="absolute inset-0 scale-[1.02] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/Images/section_1_image.png")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/25" />

        <div
          ref={overlayRef}
          className="absolute inset-y-0 left-1/2 w-1/2 bg-black/95 shadow-[-28px_0_95px_rgba(212,175,55,0.28)]"
        >
          <div className="absolute inset-y-0 left-0 w-px bg-[#d4af37]/70 shadow-[0_0_30px_rgba(212,175,55,0.6),0_0_70px_rgba(212,175,55,0.3)]" />
        </div>

        <div
          ref={rightWashRef}
          className="absolute inset-y-0 right-0 z-20 w-1/2 bg-white"
        />

        <div className="absolute inset-0 z-10 grid grid-cols-1 sm:grid-cols-2">
          <div className="hidden sm:block" />

          <div className="flex items-center justify-center px-8 sm:px-12 lg:px-16">
            <div ref={rightTextRef} className="max-w-sm text-left">
              <p className="mb-5 text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/75">
                Precision
              </p>
              <h2 className="text-3xl font-light uppercase tracking-[0.18em] text-white sm:text-4xl">
                Refined Results
              </h2>
              <p className="mt-6 text-sm leading-7 text-white/58 sm:text-base">
                Subtle enhancement guided by proportion, calm detail, and a
                considered surgical eye.
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-1 sm:grid-cols-2">
          <div className="flex items-center justify-center px-8 sm:px-12 lg:px-16">
            <div ref={leftTextRef} className="max-w-sm text-left">
              <p className="mb-5 text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/75">
                Sculpture
              </p>
              <h2 className="text-3xl font-light uppercase tracking-[0.18em] text-white sm:text-4xl">
                Beauty In Balance
              </h2>
              <p className="mt-6 text-sm leading-7 text-white/58 sm:text-base">
                The composition shifts with the scroll, letting the message live
                only where shadow and focus meet.
              </p>
            </div>
          </div>

          <div className="hidden sm:block" />
        </div>

        <div ref={ripStageRef} className="absolute inset-0 z-30">
          <div
            ref={secondImageRef}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/Images/section_2_image.png")' }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_36%),linear-gradient(180deg,rgba(0,0,0,0.24),rgba(0,0,0,0.42))]" />

          <div className="absolute inset-0 z-10">
            <div
              ref={leftPanelRef}
              className="absolute inset-y-0 left-0 w-1/2 origin-right bg-black shadow-[20px_0_72px_rgba(0,0,0,0.6)]"
            />
            <div
              ref={rightPanelRef}
              className="absolute inset-y-0 right-0 w-1/2 origin-left bg-white shadow-[-20px_0_72px_rgba(255,255,255,0.18)]"
            />
          </div>

          <div className="absolute inset-0 z-20 flex items-end justify-start p-8 sm:p-12 lg:p-20">
            <div ref={secondTextRef} className="max-w-xl">
              <p className="mb-5 text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
                Signature Care
              </p>
              <h2 className="text-4xl font-light uppercase tracking-[0.16em] text-white sm:text-5xl lg:text-6xl">
                Precision Revealed
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
                The composition opens from the center, revealing a new image
                beneath it like a controlled cinematic tear.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
