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

    const aboutPanels = gsap.utils.toArray<HTMLElement>(
      "[data-about-panel]",
      secondText,
    );

    if (aboutPanels.length === 0) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set([rightText, leftText, secondText], {
        autoAlpha: 0,
        y: 18,
      });

      gsap.set(aboutPanels, {
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
            duration: 1.95,
          },
          0.34,
        )
        .to(
          rightText,
          {
            autoAlpha: 0,
            y: -10,
            duration: 0.26,
          },
          0.78,
        )
        .to(
          leftText,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.36,
          },
          2.34,
        )
        .to(
          [leftText, rightText],
          {
            autoAlpha: 0,
            y: -10,
            duration: 0.26,
          },
          2.76,
        )
        .to(
          rightWash,
          {
            autoAlpha: 1,
            duration: 0.48,
          },
          2.86,
        )
        .to(
          ripStage,
          {
            autoAlpha: 1,
            duration: 0.02,
          },
          3.24,
        )
        .to(
          leftPanel,
          {
            xPercent: -108,
            rotate: -2.8,
            duration: 1.18,
          },
          3.42,
        )
        .to(
          rightPanel,
          {
            xPercent: 108,
            rotate: 2.8,
            duration: 1.18,
          },
          3.42,
        )
        .to(
          secondImage,
          {
            scale: 1,
            duration: 1.2,
          },
          3.48,
        )
        .to(
          secondText,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.24,
          },
          4.2,
        );

      aboutPanels.forEach((panel, index) => {
        const start = 4.42 + index * 1.05;

        timeline
          .to(
            panel,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.22,
            },
            start,
          )
          .to(
            panel,
            {
              autoAlpha: 0,
              y: -16,
              duration: 0.22,
            },
            start + 0.82,
          );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[760vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          className="absolute inset-0 scale-[1.02] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/images/section_1_image.png")' }}
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
            <div
              ref={rightTextRef}
              className="max-w-sm rounded-3xl border border-white/10 bg-black/62 p-5 text-left shadow-[0_18px_60px_rgba(0,0,0,0.36)] backdrop-blur-md sm:rounded-none sm:border-transparent sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-0"
            >
              <p className="mb-5 text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/75">
                Visi&oacute;n
              </p>
              <h2 className="text-2xl font-light uppercase tracking-[0.16em] text-white sm:text-4xl sm:tracking-[0.18em]">
                Belleza con Prop&oacute;sito
              </h2>
              <p className="mt-5 text-xs leading-6 text-white/78 sm:mt-6 sm:text-base sm:leading-7 sm:text-white/58">
                Convertirme en un referente en cirugía estética, reconocido por resultados elegantes, naturales y consistentes, así como por una atención humana y personalizada de alto nivel. Aspiramos a consolidar un consultorio de prestigio, donde la innovación, la ética y el detalle marquen la diferencia, creando experiencias que inspiren confianza y transformen positivamente la vida de nuestros pacientes.
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-1 sm:grid-cols-2">
          <div className="flex items-center justify-center px-8 sm:px-12 lg:px-16">
            <div
              ref={leftTextRef}
              className="max-w-sm rounded-3xl border border-white/10 bg-black/62 p-5 text-left shadow-[0_18px_60px_rgba(0,0,0,0.36)] backdrop-blur-md sm:rounded-none sm:border-transparent sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-0"
            >
              <p className="mb-5 text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/75">
                Misi&oacute;n
              </p>
              <h2 className="text-2xl font-light uppercase tracking-[0.16em] text-white sm:text-4xl sm:tracking-[0.18em]">
                Confianza en Cada Detalle
              </h2>
              <p className="mt-5 text-xs leading-6 text-white/78 sm:mt-6 sm:text-base sm:leading-7 sm:text-white/58">
                Brindar una experiencia médica estética de excelencia, combinando precisión quirúrgica, sensibilidad artística y un profundo respeto por la individualidad de cada paciente. Mi compromiso es realzar la belleza natural de forma armónica y segura, generando confianza, bienestar y resultados que no solo transformen la imagen, sino también la seguridad y calidad de vida de quienes confían en mí.
              </p>
            </div>
          </div>

          <div className="hidden sm:block" />
        </div>

        <div ref={ripStageRef} className="absolute inset-0 z-30">
          <div
            ref={secondImageRef}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/images/section_2_image.png")' }}
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

          <div className="absolute inset-0 z-20 flex items-end justify-start p-6 pb-16 sm:p-12 lg:p-20">
            <div ref={secondTextRef} className="relative h-[25rem] w-full max-w-2xl sm:h-[24rem]">
              <div data-about-panel className="absolute inset-x-0 bottom-0">
                <p className="mb-5 text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
                  Sobre el Doctor
                </p>
                <h2 className="text-3xl font-light uppercase tracking-[0.16em] text-white sm:text-5xl">
                  Formaci&oacute;n Acad&eacute;mica
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                  M&eacute;dico cirujano con s&oacute;lida formaci&oacute;n acad&eacute;mica y
                  un firme compromiso con la excelencia profesional. Realiz&oacute;
                  sus estudios de Medicina en la Pontificia Universidad
                  Cat&oacute;lica del Ecuador, donde consolid&oacute; una base
                  cient&iacute;fica rigurosa y competencias cl&iacute;nicas
                  fundamentales.
                </p>
              </div>

              <div data-about-panel className="absolute inset-x-0 bottom-0">
                <p className="mb-5 text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
                  Visi&oacute;n Integral
                </p>
                <h2 className="text-3xl font-light uppercase tracking-[0.16em] text-white sm:text-5xl">
                  Gerencia en Salud
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                  Ampli&oacute; su preparaci&oacute;n con estudios de posgrado y
                  cuarto nivel en la Universidad de las Am&eacute;ricas, en el
                  &aacute;rea de Gerencia en Salud, integrando calidad,
                  gesti&oacute;n y una atenci&oacute;n centrada en el paciente.
                </p>
              </div>

              <div data-about-panel className="absolute inset-x-0 bottom-0">
                <p className="mb-5 text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
                  Actualizaci&oacute;n Continua
                </p>
                <h2 className="text-3xl font-light uppercase tracking-[0.16em] text-white sm:text-5xl">
                  Cirug&iacute;a Est&eacute;tica
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                  Ha fortalecido su formaci&oacute;n mediante estudios de cuarto
                  nivel, capacitaciones especializadas y actualizaci&oacute;n
                  continua en instituciones como la Universidad del Conde,
                  M&eacute;xico, y el IESM Instituto de Estudios Superiores en
                  Medicina S. C.
                </p>
              </div>

              <div data-about-panel className="absolute inset-x-0 bottom-0">
                <p className="mb-5 text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80">
                  Excelencia Profesional
                </p>
                <h2 className="text-3xl font-light uppercase tracking-[0.16em] text-white sm:text-5xl">
                  Seguridad y Naturalidad
                </h2>
                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                  Su trayectoria se distingue por la formaci&oacute;n continua,
                  la innovaci&oacute;n y el perfeccionamiento profesional, con el
                  objetivo de ofrecer procedimientos basados en evidencia y
                  desarrollados bajo altos est&aacute;ndares de calidad y
                  seguridad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
