'use client';

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 192;

const currentFrame = (index: number) =>
  `/images/HeaderAnimation/frame_${index.toString().padStart(4, "0")}.jpg`;

const drawCoverImage = (
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  width: number,
  height: number,
) => {
  const imageRatio = image.width / image.height;
  const canvasRatio = width / height;
  const drawWidth = imageRatio > canvasRatio ? height * imageRatio : width;
  const drawHeight = imageRatio > canvasRatio ? height : width / imageRatio;
  const x = (width - drawWidth) / 2;
  const y = (height - drawHeight) / 2;

  context.clearRect(0, 0, width, height);
  context.drawImage(image, x, y, drawWidth, drawHeight);
};

export default function Header() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const activeFrameRef = useRef(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const text = textRef.current;
    const context = canvas?.getContext("2d");

    if (!section || !canvas || !context || !text) {
      return;
    }

    const renderFrame = (index: number) => {
      const image = imagesRef.current[index];

      if (!image || !image.complete || image.naturalWidth === 0) {
        return;
      }

      drawCoverImage(context, image, canvas.width, canvas.height);
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      renderFrame(activeFrameRef.current);
    };

    imagesRef.current = [];

    for (let index = 1; index <= frameCount; index += 1) {
      const image = new Image();
      image.src = currentFrame(index);
      imagesRef.current.push(image);

      if (index === 1) {
        image.onload = () => {
          resizeCanvas();
          renderFrame(0);
        };
      }
    }

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const ctx = gsap.context(() => {
      const scrollState = {
        frame: 0,
      };

      gsap.set(canvas, {
        autoAlpha: 1,
        filter: "contrast(1.12) brightness(0.88)",
      });

      gsap.set(text, {
        autoAlpha: 0,
        filter: "brightness(0.58)",
        textShadow: "0 0 0 rgba(212,175,55,0)",
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
        .to(
          scrollState,
          {
            frame: frameCount - 1,
            snap: "frame",
            duration: 1.3,
            onUpdate: () => {
              activeFrameRef.current = Math.round(scrollState.frame);
              renderFrame(activeFrameRef.current);
            },
          },
          0,
        )
        .to(
          text,
          {
            autoAlpha: 1,
            filter: "brightness(1.18)",
            textShadow:
              "0 0 20px rgba(255,255,255,0.18), 0 0 46px rgba(212,175,55,0.18)",
            y: 0,
            duration: 0.5,
          },
          0.55,
        );
    }, section);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[220vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            mixBlendMode: "screen",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.025),transparent_62%)]" />

        <div
          ref={textRef}
          className="absolute right-[3vw] top-1/2 z-20 flex max-w-3xl -translate-y-1/2 flex-col items-center gap-4 px-6 text-center sm:right-[10vw] lg:right-[12vw]"
        >
          <p className="text-[0.68rem] uppercase tracking-[0.5em] text-[#d8bc7d]/80 sm:text-xs">
            Aesthetic Surgery
          </p>
          <h1 className="text-4xl font-light uppercase tracking-[0.24em] text-white sm:text-6xl lg:text-7xl">
            DR. Rene Gonzalez
          </h1>
          <p className="text-sm font-light uppercase tracking-[0.42em] text-white/60 sm:text-base">
            Cirujano est&eacute;tico
          </p>
        </div>
      </div>
    </section>
  );
}
