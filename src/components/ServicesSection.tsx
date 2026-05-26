"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 469;

const currentFrame = (index: number) =>
  `/images/servicesAnimationImages/frame_${index.toString().padStart(4, "0")}.png`;

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

type ServiceItemGroup = {
  label: string;
  subitems: string[];
};

const groupServiceItems = (items: readonly string[]): ServiceItemGroup[] => {
  return items.reduce<ServiceItemGroup[]>((groups, rawItem) => {
    const item = rawItem.trim();
    const isSubitem = item.startsWith("*");

    if (isSubitem) {
      const subitemLabel = item.replace(/^\*\s*/, "");
      const lastGroup = groups[groups.length - 1];

      if (lastGroup) {
        lastGroup.subitems.push(subitemLabel);
      } else {
        groups.push({
          label: subitemLabel,
          subitems: [],
        });
      }

      return groups;
    }

    groups.push({
      label: item,
      subitems: [],
    });

    return groups;
  }, []);
};

const services = [
  {
    label: "Medicina Estética Facial",
    title: "Medicina Estética Facial",
    items: [
      "Botox",
      "Ácido hialurónico",
      "Láser CO2 fraccionado",
      "Terapia fotodinámica",
      "NCTF",
      "Bioestimuladores",
      "Marcación mandibular",
      "Vitaminización facial",
    ],
  },
  {
    label: "Medicina Estética Corporal",
    title: "Medicina Estética Corporal",
    items: [
      "IPL (intensa luz pulsada)",
      "* Estrías y depilación",
      "* Remoción",
      "* Radiocavitación y radiofrecuencia",
    ],
  },
  {
    label: "Cirugía Estética Facial",
    title: "Cirugía Estética Facial",
    items: [
      "Rinoplastia",
      "Mentoplastia",
      "Bichectomía",
      "Otoplastia",
      "Párpados (blefaroplastia)",
      "Ritidoplastia",
      "Lipo papada",
    ],
  },
  {
    label: "Cirugía Estética Corporal",
    title: "Cirugía Estética Corporal",
    items: [
      "Liposucción",
      "* Láser",
      "* Microaire",
      "* Tradicional",
      "Mini lipo",
      "Abdominoplastia",
      "Aumento de mamas",
    ],
  },
  {
    label: "Hidratación y Calidad de la Piel",
    title: "Hidratación y Calidad de la Piel",
    items: [
      "IPL (intensa luz pulsada)",
      "* Melasma",
      "* Manchas de piel",
      "* Depilación",
      "Hidratación con ácido hialurónico",
    ],
  },
  {
    label: "Tratamientos Funcionales",
    title: "Tratamientos Funcionales",
    items: [
      "Botox (hiperhidrosis)",
      "Botox (bruxismo)",
      "Botox (movimientos clónicos)",
      "Botox (ptosis palpebral)",
    ],
  },
] as const;

type ServiceNodeProps = {
  active: boolean;
  title: string;
  onClick: () => void;
  className?: string;
  style?: CSSProperties;
};

function ServiceNode({
  active,
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
        <span className="absolute inset-0 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03)_22%,rgba(0,0,0,0.22)_100%)]" />
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
      const nodes = gsap.utils.toArray<HTMLElement>(
        "[data-service-node]",
        section,
      );

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
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });

      timeline
        .to(
          scrollState,
          {
            frame: frameCount - 1,
            snap: "frame",
            duration: 1.8,
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
  const activeItemGroups = groupServiceItems(active.items);

  return (
    <section
      id="servicios"
      ref={sectionRef}
      className="relative h-[420vh] bg-black"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-black safari-motion-layer">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover safari-motion-layer"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.07),transparent_36%),linear-gradient(180deg,rgba(0,0,0,0.44),rgba(0,0,0,0.56))]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/82 via-black/38 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/88 via-black/44 to-transparent" />

        <div className="absolute inset-x-0 top-10 z-20 px-6 text-center sm:top-14 lg:left-auto lg:right-[10vw] lg:w-[min(40rem,38vw)] lg:px-0 lg:text-right">
          <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80 lg:text-[0.9rem] lg:tracking-[0.5em]">
            Servicios
          </p>
        </div>

        <div className="absolute bottom-[10%] left-[3.5vw] top-[10%] z-20 hidden lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:content-between lg:gap-x-[clamp(1rem,1.8vw,1.9rem)]">
          {services.map((service, index) => (
            <ServiceNode
              key={service.title}
              active={activeService === index}
              title={service.title}
              onClick={() => {
                setActiveService(index);
                setDetailVisible(true);
              }}
              className="h-[clamp(6.6rem,9vw,8.6rem)] w-[clamp(11rem,15vw,14rem)]"
            />
          ))}
        </div>

        <div className="absolute bottom-[6%] left-[0.125rem] top-[6%] z-20 flex flex-col justify-between lg:hidden">
          {services.map((service, index) => (
            <ServiceNode
              key={service.title}
              active={activeService === index}
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
          className={`absolute bottom-[max(11.5rem,calc(env(safe-area-inset-bottom)+10rem))] right-[0.125rem] z-20 flex max-h-[min(52vh,28rem)] w-[min(18.625rem,calc(54vw+1.625rem))] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-black/58 px-5 pb-5 pt-11 shadow-[0_28px_90px_rgba(0,0,0,0.48)] backdrop-blur-xl transition-all duration-300 sm:right-[0.125rem] sm:max-h-[min(58vh,32rem)] sm:w-[min(21.125rem,calc(64vw+0.625rem))] sm:px-6 sm:pb-6 sm:pt-12 md:max-h-[min(62vh,36rem)] md:w-[min(24.125rem,calc(60vw+0.125rem))] md:px-8 md:pb-8 md:pt-14 lg:bottom-auto lg:left-auto lg:right-[8vw] lg:top-1/2 lg:max-h-none lg:w-auto lg:-translate-y-1/2 lg:px-[clamp(1.25rem,1.8vw,2rem)] lg:pb-[clamp(1.25rem,1.8vw,2rem)] lg:pt-[clamp(2.8rem,3.2vw,3.6rem)] 2xl:w-[min(30rem,46vw)] ${
            detailVisible
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <div className="flex h-full min-h-0 w-full min-w-0 flex-col lg:max-w-[clamp(16rem,22vw,24rem)]">
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
            <ul className="mt-4 min-h-0 flex-1 space-y-2 overflow-y-auto pr-1 text-[0.92rem] leading-6 text-white/76 sm:mt-6 sm:space-y-3 sm:text-base sm:leading-7 lg:mt-5 lg:space-y-2.5 lg:text-[clamp(0.9rem,1vw,1rem)] lg:leading-[1.65]">
              {activeItemGroups.map((itemGroup) => (
                <li
                  key={`${active.title}-${itemGroup.label}`}
                  className="border-b border-white/8 pb-3 last:border-b-0 last:pb-0"
                >
                  <span>{itemGroup.label}</span>
                  {itemGroup.subitems.length > 0 ? (
                    <ul className="mt-2 space-y-1.5 pl-4 text-[0.88em] leading-[1.55] text-white/52">
                      {itemGroup.subitems.map((subitem) => (
                        <li
                          key={`${itemGroup.label}-${subitem}`}
                          className="relative pl-3 before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-1.5 before:bg-[#d4af37]/45 before:content-['']"
                        >
                          {subitem}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
