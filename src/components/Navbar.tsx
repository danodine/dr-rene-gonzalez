'use client';

import { useState } from "react";

const navItems = [
  "Inicio",
  "Procedimientos",
  "Resultados",
  "Contacto",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed right-5 top-5 z-50 sm:right-8 sm:top-8">
      <button
        type="button"
        aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="group flex h-12 w-12 items-center justify-center rounded-full border border-black/35 bg-black/55 shadow-[0_12px_40px_rgba(0,0,0,0.22),0_0_34px_rgba(212,175,55,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-[#d4af37]/60 hover:bg-black/70 hover:shadow-[0_12px_44px_rgba(0,0,0,0.3),0_0_46px_rgba(212,175,55,0.18)]"
      >
        <span className="flex w-5 flex-col gap-1.5">
          <span
            className={`h-px w-full bg-[#d4af37] transition-transform duration-300 ${
              isOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-full bg-[#d4af37] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-px w-full bg-[#d4af37] transition-transform duration-300 ${
              isOpen ? "-translate-y-[8.5px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`absolute right-0 mt-4 w-64 overflow-hidden rounded-3xl border border-white/10 bg-black/35 p-2 shadow-[0_24px_90px_rgba(0,0,0,0.55),0_0_50px_rgba(212,175,55,0.08)] backdrop-blur-2xl transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="rounded-[1.25rem] border border-white/5 bg-white/[0.03] p-3">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block rounded-2xl px-4 py-3 text-xs uppercase tracking-[0.28em] text-white/65 transition-colors duration-300 hover:bg-white/[0.04] hover:text-[#d4af37]"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
