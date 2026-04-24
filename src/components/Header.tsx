'use client';

import NextImage from "next/image";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 192;

const currentFrame = (index: number) =>
  `/images/headerAnimationImages/frame_${index.toString().padStart(4, "0")}.png`;

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
  const finalSceneRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLDivElement | null>(null);
  const portraitRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const activeFrameRef = useRef(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const finalScene = finalSceneRef.current;
    const name = nameRef.current;
    const portrait = portraitRef.current;
    const context = canvas?.getContext("2d");

    if (!section || !canvas || !context || !finalScene || !name || !portrait) {
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

      gsap.set(finalScene, {
        autoAlpha: 0,
      });

      gsap.set([name, portrait], {
        autoAlpha: 0,
        filter: "blur(10px) brightness(0.82)",
        y: 34,
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
            duration: 1.7,
            onUpdate: () => {
              activeFrameRef.current = Math.round(scrollState.frame);
              renderFrame(activeFrameRef.current);
            },
          },
          0,
        )
        .to(
          finalScene,
          {
            autoAlpha: 1,
            duration: 0.24,
          },
          1.1,
        )
        .to(
          name,
          {
            autoAlpha: 1,
            filter: "blur(0px) brightness(1.1)",
            y: 0,
            duration: 0.7,
          },
          1.22,
        )
        .fromTo(
          portrait,
          {
            autoAlpha: 0,
            filter: "blur(12px) brightness(0.74)",
            x: 46,
            y: 24,
            scale: 0.985,
          },
          {
            autoAlpha: 1,
            filter: "blur(0px) brightness(0.94)",
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.78,
          },
          1.32,
        )
        .to(
          finalScene,
          {
            autoAlpha: 1,
            duration: 0.45,
          },
          2.24,
        );
    }, section);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-black">
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
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.12),rgba(0,0,0,0.08)_42%,rgba(0,0,0,0.54)_100%)]" />

        <div
          ref={finalSceneRef}
          className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
        >
          <div className="absolute left-1/2 top-[68%] z-20 flex w-[min(54rem,62vw)] -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center max-md:top-[66%] max-md:w-[88vw]">
            <div ref={nameRef}>
              <h1 className="text-[clamp(1.05rem,1.75vw,1.9rem)] font-light tracking-[0.08em] text-white">
                Ren&eacute; Gonz&aacute;lez D&aacute;vila
              </h1>
              <h2 className="mt-1 text-[0.58rem] uppercase tracking-[0.58em] text-white/54 sm:text-xs">
                Cirug&iacute;a Est&eacute;tica
              </h2>
            </div>
          </div>

          <div
            ref={portraitRef}
            className="absolute bottom-0 right-[5vw] z-10 h-[86vh] w-[min(34rem,32vw)] max-md:hidden"
          >
            <NextImage
              src="/images/Dr-Rene-Gonzales-2.png"
              alt="Dr. Rene Gonzalez"
              fill
              priority
              sizes="32vw"
              className="object-contain object-bottom drop-shadow-[0_38px_90px_rgba(0,0,0,0.72)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
