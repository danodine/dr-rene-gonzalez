export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/593992448076"
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp"
      className="fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af37]/35 bg-black/55 text-[#d4af37] shadow-[0_18px_40px_rgba(0,0,0,0.34),0_0_24px_rgba(212,175,55,0.08)] backdrop-blur-xl transition-all duration-300 hover:border-[#d4af37]/70 hover:bg-black/72 hover:text-[#f1d37a] sm:bottom-7 sm:right-7"
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
        <path d="M19.05 4.94A9.93 9.93 0 0 0 12.03 2a10 10 0 0 0-8.64 15.05L2 22l5.1-1.34A10 10 0 0 0 12.02 22h.01A10 10 0 0 0 22 12a9.95 9.95 0 0 0-2.95-7.06m-7.02 15.37h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.03.8.81-2.95-.2-.31a8.3 8.3 0 1 1 6.96 3.8m4.55-6.2c-.25-.12-1.47-.72-1.7-.8s-.4-.12-.56.12-.64.8-.79.96-.29.19-.54.06a6.8 6.8 0 0 1-2-1.23 7.4 7.4 0 0 1-1.38-1.72c-.14-.25-.02-.38.1-.5.12-.12.25-.3.37-.44s.16-.25.24-.42.04-.31-.02-.43-.56-1.35-.77-1.85c-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31s-.87.85-.87 2.07.89 2.41 1 2.57 1.76 2.68 4.26 3.76c.6.26 1.06.42 1.42.54.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18s.21-1.08.15-1.18-.22-.15-.47-.27" />
      </svg>
    </a>
  );
}
