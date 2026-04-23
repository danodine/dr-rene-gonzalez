'use client';

import NextImage from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 192;

const currentFrame = (index: number) =>
  `/images/servicesAnimation/frame_${index.toString().padStart(4, "0")}.jpg`;

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

const services = [
  {
    label: "Rejuvenecimiento",
    title: "Facial Anti-edad",
    image: "/images/servicesAnimation/frame_0018.jpg",
    items: [
      "Aplicacion Botox facial",
      "Laser CO2 fraccionado",
      "Terapia fotodinamica",
      "Ritidoplastia (lifting facial)",
    ],
  },
  {
    label: "Hidratacion",
    title: "Calidad de la Piel",
    image: "/images/servicesAnimation/frame_0046.jpg",
    items: [
      "Hidratacion con acido hialuronico",
      "Aplicacion acido hialuronico",
      "Vitaminizacion facial",
    ],
  },
  {
    label: "Armonizacion",
    title: "Facial y Perfil",
    image: "/images/servicesAnimation/frame_0074.jpg",
    items: [
      "Rinoplastia",
      "Mentoplastia",
      "Bichectomia",
      "Otoplastia",
      "Parpados (blefaroplastia)",
    ],
  },
  {
    label: "Moldeo",
    title: "Corporal y Reduccion",
    image: "/images/servicesAnimation/frame_0108.jpg",
    items: [
      "Liposuccion",
      "Mini lipo",
      "Papada",
      "Cavitacion",
    ],
  },
  {
    label: "Remodelacion",
    title: "Corporal",
    image: "/images/servicesAnimation/frame_0142.jpg",
    items: ["Aumento de mamas"],
  },
  {
    label: "Medico Estetico",
    title: "Tratamientos Funcionales",
    image: "/images/servicesAnimation/frame_0176.jpg",
    items: [
      "Botox (hiperhidrosis)",
      "Depilacion definitiva (IPL)",
    ],
  },
] as const;

const desktopPositions = [
  { top: "16%", side: "left" as const },
  { top: "40%", side: "left" as const },
  { top: "64%", side: "left" as const },
  { top: "16%", side: "right" as const },
  { top: "40%", side: "right" as const },
  { top: "64%", side: "right" as const },
];

type ServiceNodeProps = {
  active: boolean;
  image: string;
  label: string;
  title: string;
  onClick: () => void;
  className?: string;
  style?: CSSProperties;
};

function ServiceNode({
  active,
  image,
  label,
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
          className="object-cover object-center opacity-80 transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.16),transparent_34%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.48))]" />
      </span>
      <span className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.02)_26%,rgba(255,255,255,0.02)_74%,rgba(0,0,0,0.26))]" />
      <span className="absolute inset-x-[18%] bottom-[18%] z-10 text-center">
        <span className="block text-[0.58rem] uppercase tracking-[0.32em] text-[#d4af37]/80">
          {label}
        </span>
        <span className="mt-2 block text-xs font-light uppercase tracking-[0.16em] text-white sm:text-sm">
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

      const floatTweens = nodes.map((node, index) =>
        gsap.to(node, {
          y: index % 2 === 0 ? "-=12" : "+=12",
          x: index % 3 === 0 ? "-=6" : "+=6",
          duration: 2.8 + index * 0.22,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.08,
        }),
      );

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

      return () => {
        floatTweens.forEach((tween) => tween.kill());
      };
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
          <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
            Servicios
          </p>
          <h2 className="mt-4 text-3xl font-light uppercase tracking-[0.16em] text-white sm:text-5xl">
            Procedimientos
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
            Seis especialidades dispuestas como una constelacion de tratamientos.
            Toca cada circulo para descubrir sus procedimientos.
          </p>
        </div>

        <div className="absolute inset-0 z-20 hidden lg:block">
          {services.map((service, index) => {
            const position = desktopPositions[index];
            return (
              <ServiceNode
                key={service.title}
                active={activeService === index}
                image={service.image}
                label={service.label}
                title={service.title}
                onClick={() => {
                  setActiveService(index);
                  setDetailVisible(true);
                }}
                className="absolute h-[11.5rem] w-[11.5rem] xl:h-[13rem] xl:w-[13rem]"
                style={
                  position.side === "left"
                    ? { top: position.top, left: "3.5vw" }
                    : { top: position.top, right: "3.5vw" }
                }
              />
            );
          })}
        </div>

        <div className="absolute inset-x-4 bottom-6 z-20 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
          {services.map((service, index) => (
            <ServiceNode
              key={service.title}
              active={activeService === index}
              image={service.image}
              label={service.label}
              title={service.title}
              onClick={() => {
                setActiveService(index);
                setDetailVisible(true);
              }}
              className="aspect-square w-full min-w-0"
            />
          ))}
        </div>

        <div
          className={`absolute left-1/2 top-1/2 z-20 w-[min(34rem,calc(100vw-2.5rem))] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] border border-white/10 bg-black/58 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.48)] backdrop-blur-xl transition-all duration-300 sm:p-8 lg:left-auto lg:right-[8vw] lg:-translate-x-0 ${
            detailVisible
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <p className="text-[0.68rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
            {active.label}
          </p>
          <h3 className="mt-4 text-2xl font-light uppercase tracking-[0.16em] text-white sm:text-4xl">
            {active.title}
          </h3>
          <ul className="mt-6 space-y-3 text-sm leading-6 text-white/76 sm:text-base sm:leading-7">
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
    </section>
  );
}
