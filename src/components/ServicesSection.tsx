'use client';

import NextImage from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 192;

const currentFrame = (index: number) =>
  `/images/servicesAnimationImages/frame_${index.toString().padStart(4, "0")}.jpg`;

const drawTopCoverImage = (
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
  const y = 0;

  context.clearRect(0, 0, width, height);
  context.drawImage(image, x, y, drawWidth, drawHeight);
};

const services = [
  {
    label: "Rejuvenecimiento Facial",
    title: "Rejuvenecimiento Facial",
    image: "/images/servicesAnimationImages/frame_0018.jpg",
    items: [
      "Aplicacion Botox facial",
      "Laser CO2 fraccionado",
      "Terapia fotodinamica",
      "Ritidoplastia (lifting facial)",
    ],
  },
  {
    label: "Hidratacion y Calidad de la Piel",
    title: "Hidratacion y Calidad de la Piel",
    image: "/images/servicesAnimationImages/frame_0046.jpg",
    items: [
      "Hidratacion con acido hialuronico",
      "Aplicacion acido hialuronico",
      "Vitaminizacion facial",
    ],
  },
  {
    label: "Armonizacion Facial",
    title: "Armonizacion Facial",
    image: "/images/servicesAnimationImages/frame_0074.jpg",
    items: [
      "Rinoplastia",
      "Mentoplastia",
      "Bichectomia",
      "Otoplastia",
      "Parpados (blefaroplastia)",
    ],
  },
  {
    label: "Reduccion de Grasa y Moldeo Corporal",
    title: "Reduccion de Grasa y Moldeo Corporal",
    image: "/images/servicesAnimationImages/frame_0108.jpg",
    items: [
      "Liposuccion",
      "Mini lipo",
      "Papada",
      "Cavitacion",
    ],
  },
  {
    label: "Aumento y Remodelacion Corporal",
    title: "Aumento y Remodelacion Corporal",
    image: "/images/servicesAnimationImages/frame_0142.jpg",
    items: ["Aumento de mamas"],
  },
  {
    label: "Tratamientos Funcionales / Medicos Esteticos",
    title: "Tratamientos Funcionales / Medicos Esteticos",
    image: "/images/servicesAnimationImages/frame_0176.jpg",
    items: [
      "Botox (hiperhidrosis)",
      "Depilacion definitiva (IPL)",
    ],
  },
] as const;

const desktopPositions = [
  { top: "clamp(7%, 10vh, 16%)", side: "left" as const },
  { top: "clamp(28%, 34vh, 40%)", side: "left" as const },
  { top: "clamp(56%, 60vh, 64%)", side: "left" as const },
  { top: "clamp(6%, 9vh, 15%)", side: "right" as const },
  { top: "clamp(23%, 29vh, 34%)", side: "right" as const },
  { top: "clamp(52%, 58vh, 61%)", side: "right" as const },
];

type ServiceNodeProps = {
  active: boolean;
  image: string;
  title: string;
  onClick: () => void;
  className?: string;
  style?: CSSProperties;
};

function ServiceNode({
  active,
  image,
  title,
  onClick,
  className = "",
  style,
}: ServiceNodeProps) {
  return (
    <button
      type="button"
      data-service-node
      onClick={onClick}
      style={style}
      className={`group relative overflow-hidden rounded-full border transition-all duration-300 ${
        active
          ? "border-[#d4af37]/70 shadow-[0_0_0_1px_rgba(212,175,55,0.2),0_26px_70px_rgba(0,0,0,0.42),0_0_34px_rgba(212,175,55,0.14)]"
          : "border-white/10 shadow-[0_22px_60px_rgba(0,0,0,0.34)] hover:border-[#d4af37]/40"
      } ${className}`}
    >
      <span className="absolute inset-[7%] overflow-hidden rounded-full">
        <NextImage
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 33vw, 14vw"
          className="hidden object-cover object-center opacity-80 transition-transform duration-500 group-hover:scale-105 lg:block"
        />
        <span className="absolute inset-0 hidden bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.16),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.48))] lg:block" />
        <span className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03)_22%,rgba(0,0,0,0.22)_100%)] lg:hidden" />
      </span>
      <span className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03)_26%,rgba(255,255,255,0.02)_74%,rgba(0,0,0,0.26))]" />
      <span className="absolute inset-[12%] z-10 flex items-center justify-center text-center">
        <span className="block max-w-full break-words text-[0.5rem] font-light uppercase leading-[1.14] tracking-[0.08em] text-white [overflow-wrap:anywhere] sm:text-[0.62rem] lg:text-[0.82rem]">
          {title}
        </span>
      </span>
    </button>
  );
}

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const activeFrameRef = useRef(0);
  const [activeService, setActiveService] = useState(0);
  const [detailVisible, setDetailVisible] = useState(false);

  useEffect(() => {
    if (!detailVisible) {
      return;
    }

    const hideDetails = () => {
      setDetailVisible(false);
    };

    window.addEventListener("wheel", hideDetails, { passive: true });
    window.addEventListener("touchmove", hideDetails, { passive: true });
    window.addEventListener("scroll", hideDetails, { passive: true });

    return () => {
      window.removeEventListener("wheel", hideDetails);
      window.removeEventListener("touchmove", hideDetails);
      window.removeEventListener("scroll", hideDetails);
    };
  }, [detailVisible]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!section || !canvas || !context) {
      return;
    }

    const renderFrame = (index: number) => {
      const image = imagesRef.current[index];

      if (!image || !image.complete || image.naturalWidth === 0) {
        return;
      }

      drawTopCoverImage(context, image, canvas.width, canvas.height);
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
      const scrollState = { frame: 0 };
      const nodes = gsap.utils.toArray<HTMLElement>("[data-service-node]", section);

      gsap.set(canvas, {
        autoAlpha: 1,
        filter: "contrast(1.02) brightness(0.82) saturate(0.94)",
      });

      gsap.set(nodes, {
        autoAlpha: 0,
        scale: 0.9,
        y: 24,
      });

      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.1,
        },
      });

      timeline
        .to(
          scrollState,
          {
            frame: frameCount - 1,
            snap: "frame",
            duration: 1.35,
            onUpdate: () => {
              activeFrameRef.current = Math.round(scrollState.frame);
              renderFrame(activeFrameRef.current);
            },
          },
          0,
        )
        .to(
          nodes,
          {
            autoAlpha: 1,
            scale: 1,
            y: 0,
            stagger: 0.06,
            duration: 0.36,
          },
          0.16,
        );

    }, section);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      ctx.revert();
    };
  }, []);

  const active = services[activeService];

  return (
    <section ref={sectionRef} className="relative h-[360vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.07),transparent_36%),linear-gradient(180deg,rgba(0,0,0,0.44),rgba(0,0,0,0.56))]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/82 via-black/38 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/88 via-black/44 to-transparent" />

        <div className="absolute inset-x-0 top-10 z-20 px-6 text-center sm:top-14 lg:left-auto lg:right-[6vw] lg:w-[min(40rem,38vw)] lg:px-0 lg:text-right">
          <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80 lg:text-[0.9rem] lg:tracking-[0.5em]">
            Servicios
          </p>
          <div
            className={`hidden transition-all duration-300 lg:block ${
              detailVisible
                ? "pointer-events-auto mt-4 opacity-100"
                : "pointer-events-none mt-2 opacity-0"
            }`}
          >
            <h2 className="text-[clamp(1.55rem,4.2vw,3.4rem)] font-light uppercase leading-[1.08] tracking-[0.13em] text-white">
              {active.title}
            </h2>
          </div>
        </div>

        <div className="absolute inset-0 z-20 hidden lg:block">
          {services.map((service, index) => {
            const position = desktopPositions[index];
            return (
              <ServiceNode
                key={service.title}
                active={activeService === index}
                image={service.image}
                title={service.title}
                onClick={() => {
                  setActiveService(index);
                  setDetailVisible(true);
                }}
                className="absolute"
                style={
                  position.side === "left"
                    ? {
                        top: position.top,
                        left: "3.5vw",
                        width: "clamp(7rem, 10vw, 11.5rem)",
                        height: "clamp(7rem, 10vw, 11.5rem)",
                      }
                    : {
                        top: position.top,
                        right: "3.5vw",
                        width: "clamp(7rem, 10vw, 11.5rem)",
                        height: "clamp(7rem, 10vw, 11.5rem)",
                      }
                }
              />
            );
          })}
        </div>

        <div className="absolute bottom-[6%] left-[0.125rem] top-[6%] z-20 flex flex-col justify-between lg:hidden">
          {services.map((service, index) => (
            <ServiceNode
              key={service.title}
              active={activeService === index}
              image={service.image}
              title={service.title}
              onClick={() => {
                setActiveService(index);
                setDetailVisible(true);
              }}
              className="h-[4.6rem] w-[7.9rem] sm:h-[5.1rem] sm:w-[8.9rem]"
            />
          ))}
        </div>

        <div
          className={`absolute right-[0.125rem] top-[54%] z-20 h-fit w-[min(18.625rem,calc(54vw+1.625rem))] -translate-y-1/2 rounded-[2rem] border border-white/10 bg-black/58 px-5 pb-5 pt-11 shadow-[0_28px_90px_rgba(0,0,0,0.48)] backdrop-blur-xl transition-all duration-300 sm:right-[0.125rem] sm:top-1/2 sm:h-auto sm:w-[min(21.125rem,calc(64vw+0.625rem))] sm:px-6 sm:pb-6 sm:pt-12 md:w-[min(24.125rem,calc(60vw+0.125rem))] md:px-8 md:pb-8 md:pt-14 lg:left-auto lg:right-[8vw] lg:w-auto lg:-translate-x-0 lg:px-[clamp(1.25rem,1.8vw,2rem)] lg:pb-[clamp(1.25rem,1.8vw,2rem)] lg:pt-[clamp(2.8rem,3.2vw,3.6rem)] 2xl:w-[min(30rem,46vw)] ${
            detailVisible
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <div className="flex h-full w-full min-w-0 flex-col lg:max-w-[clamp(16rem,22vw,24rem)]">
            <button
              type="button"
              aria-label="Cerrar detalles"
              onClick={() => setDetailVisible(false)}
              className="absolute right-4 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#d4af37]/35 bg-black/30 text-sm text-[#d4af37] transition-colors duration-300 hover:border-[#d4af37]/70 hover:bg-black/55 hover:text-[#f1d37a] sm:top-4"
            >
              ×
            </button>
            <h3 className="mt-2 max-w-full break-words text-[0.98rem] font-light uppercase leading-[1.18] tracking-[0.14em] text-[#d4af37] [overflow-wrap:anywhere] sm:text-[1.18rem] lg:text-[clamp(1.08rem,1.35vw,1.45rem)]">
              {active.title}
            </h3>
            <ul className="mt-4 flex-1 space-y-2 overflow-y-auto pr-1 text-[0.92rem] leading-6 text-white/76 sm:mt-6 sm:space-y-3 sm:text-base sm:leading-7 lg:mt-5 lg:space-y-2.5 lg:text-[clamp(0.9rem,1vw,1rem)] lg:leading-[1.65]">
              {active.items.map((item) => (
                <li
                  key={item}
                  className="border-b border-white/8 pb-3 last:border-b-0 last:pb-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
