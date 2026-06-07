'use client';

import Link from "next/link";
import { getAllPosts } from "@lib/posts";
import { useEffect, useRef, useState } from "react";

const hasBlogPosts = getAllPosts().length > 0;

const navItems = [
  {
    href: "/#inicio",
    label: "Inicio",
  },
  {
    href: "/#vision-mision",
    label: "Visión y misión",
  },
  {
    href: "/#sobre-mi",
    label: "Sobre mí",
  },
  {
    href: "/#servicios",
    label: "Servicios",
  },
  {
    href: "/#testimonios",
    label: "Testimonios",
  },
  {
    href: "/blog",
    label: "Revista Digital",
    hidden: !hasBlogPosts,
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
  }, [isOpen]);

  return (
    <nav ref={navRef} className="fixed right-5 top-5 z-50 sm:right-8 sm:top-8">
      <button
        type="button"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af37]/35 bg-black/55 text-[#d4af37] shadow-[0_18px_40px_rgba(0,0,0,0.34),0_0_24px_rgba(212,175,55,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-[#d4af37]/70 hover:bg-black/72 hover:text-[#f1d37a]"
      >
        <span className="flex w-5 flex-col gap-1.5">
          <span
            className={`h-px w-full bg-current shadow-[0_0_8px_rgba(212,175,55,0.35)] transition-transform duration-300 ${
              isOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-full bg-current shadow-[0_0_8px_rgba(212,175,55,0.35)] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-full bg-current shadow-[0_0_8px_rgba(212,175,55,0.35)] transition-transform duration-300 ${
              isOpen ? "-translate-y-[8.5px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`absolute right-0 mt-4 w-56 overflow-hidden rounded-[1.75rem] border border-white/25 bg-black/28 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.36),inset_0_-22px_50px_rgba(255,255,255,0.06)] backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="rounded-[1.25rem] bg-transparent p-2">
          {navItems.filter((item) => !item.hidden).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={false}
              className="block rounded-2xl px-4 py-3 text-xs uppercase tracking-[0.28em] text-white/70 transition-colors duration-300 hover:bg-white/10 hover:text-[#d4af37]"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
