"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  pickRandomVideos,
  toEmbedUrl,
  toThumbnailUrl,
  type TestimonialVideo,
} from "@/lib/testimonialVideos";

const CARD_COUNT = 4;

export default function TestimoniosSection() {
  const [videos, setVideos] = useState<TestimonialVideo[]>([]);
  const [activeVideo, setActiveVideo] = useState<TestimonialVideo | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setVideos(pickRandomVideos(CARD_COUNT));
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!activeVideo) {
      return;
    }

    const handleScrollClose = () => {
      setActiveVideo(null);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveVideo(null);
      }
    };

    window.addEventListener("wheel", handleScrollClose, { passive: true });
    window.addEventListener("touchmove", handleScrollClose, { passive: true });
    window.addEventListener("scroll", handleScrollClose, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("wheel", handleScrollClose);
      window.removeEventListener("touchmove", handleScrollClose);
      window.removeEventListener("scroll", handleScrollClose);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

  const cards = useMemo(() => videos.slice(0, CARD_COUNT), [videos]);

  return (
    <section
      id="testimonios"
      className="relative overflow-hidden bg-black px-4 py-24 text-white sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(212,175,55,0.06),transparent_22%),radial-gradient(circle_at_80%_78%,rgba(255,255,255,0.05),transparent_24%)]" />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="mx-auto mb-12 max-w-4xl text-center lg:mb-16">
          <p className="text-[0.72rem] uppercase tracking-[0.42em] text-[#d4af37]/80 lg:text-[0.9rem] lg:tracking-[0.5em]">
            Testimonios
          </p>
          <h2 className="mt-5 text-[clamp(2rem,4.6vw,4.4rem)] font-light uppercase leading-[1.04] tracking-[0.14em] text-white">
            Historias Reales
          </h2>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-4 shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-6 lg:rounded-[2.4rem] lg:p-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
            {cards.map((video) => (
              <button
                key={video.id}
                type="button"
                onClick={() => setActiveVideo(video)}
                className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] text-left shadow-[0_18px_50px_rgba(0,0,0,0.34)] transition-all duration-300 hover:border-[#d4af37]/35 hover:shadow-[0_22px_60px_rgba(0,0,0,0.42),0_0_24px_rgba(212,175,55,0.08)]"
              >
                <div className="relative aspect-[9/14] overflow-hidden sm:aspect-[9/16]">
                  <Image
                    src={toThumbnailUrl(video.youtubeUrl)}
                    alt={video.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.58))]" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/45 text-xl text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md">
                      ▶
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 p-3 sm:space-y-2 sm:p-4">
                  <p className="text-[0.64rem] uppercase tracking-[0.38em] text-[#d4af37]/80">
                    {video.treatment}
                  </p>
                  <h3 className="text-sm font-light leading-[1.15] text-white sm:text-xl">
                    {video.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {activeVideo ? (
        <div
          className="fixed inset-0 z-[90] bg-black/82 backdrop-blur-xl"
          onClick={() => setActiveVideo(null)}
        >
          <div className="absolute inset-0 flex items-center justify-center p-0 sm:p-6">
            <div
              className="relative z-10 h-screen w-screen overflow-hidden bg-black sm:h-[92vh] sm:w-[min(28rem,90vw)] sm:rounded-[2rem] sm:border sm:border-white/10 sm:bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] sm:p-3 sm:shadow-[0_30px_90px_rgba(0,0,0,0.45)] sm:backdrop-blur-xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Cerrar video"
                onClick={() => setActiveVideo(null)}
                className="absolute left-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af37]/35 bg-black/45 text-xl text-[#d4af37] shadow-[0_18px_40px_rgba(0,0,0,0.32)] transition-colors duration-300 hover:border-[#d4af37]/70 hover:bg-black/55 sm:left-6 sm:top-6"
              >
                ×
              </button>
              <div className="h-full w-full overflow-hidden bg-black sm:rounded-[1.4rem]">
                <iframe
                  className="h-full w-full"
                  src={toEmbedUrl(activeVideo.youtubeUrl)}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
