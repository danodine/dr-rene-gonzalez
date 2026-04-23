export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent" />

      <div className="relative mx-auto flex min-h-[22rem] w-full max-w-7xl flex-col justify-between gap-16 px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.5em] text-[#d4af37]/75">
              DR Rene Gonzalez
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-light uppercase tracking-[0.18em] text-white sm:text-5xl">
              Cirujano est&eacute;tico
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Tengo un dicho que es transformando vidas...
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.facebook.com/dr.renegonzalezdav"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/80 shadow-[0_14px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-300 hover:border-[#d4af37]/40 hover:text-[#d4af37]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4h1.5V5.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.1H8V14h2.5v7h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/dr.renegonzalezdav/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white/80 shadow-[0_14px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all duration-300 hover:border-[#d4af37]/40 hover:text-[#d4af37]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M7.8 3h8.4A4.8 4.8 0 0 1 21 7.8v8.4a4.8 4.8 0 0 1-4.8 4.8H7.8A4.8 4.8 0 0 1 3 16.2V7.8A4.8 4.8 0 0 1 7.8 3m0 1.7A3.1 3.1 0 0 0 4.7 7.8v8.4a3.1 3.1 0 0 0 3.1 3.1h8.4a3.1 3.1 0 0 0 3.1-3.1V7.8a3.1 3.1 0 0 0-3.1-3.1H7.8m8.8 1.3a1.1 1.1 0 1 1 0 2.3 1.1 1.1 0 0 1 0-2.3M12 7.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5m0 1.7A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2" />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid gap-6 lg:justify-self-end lg:text-right">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.42em] text-[#d4af37]/75">
                Contacto
              </p>
              <a
                href="mailto:renegonzalezdav@hotmail.com"
                className="mt-4 block text-sm leading-7 text-white/60 transition-colors duration-300 hover:text-[#d4af37] sm:text-base"
              >
                renegonzalezdav@hotmail.com
              </a>
              <a
                href="tel:0992448076"
                className="block text-sm leading-7 text-white/60 transition-colors duration-300 hover:text-[#d4af37] sm:text-base"
              >
                0992448076
              </a>
              <a
                href="tel:0992323575"
                className="block text-sm leading-7 text-white/60 transition-colors duration-300 hover:text-[#d4af37] sm:text-base"
              >
                0992323575
              </a>
            </div>

            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.42em] text-[#d4af37]/75">
                Direcci&oacute;n
              </p>
              <a
                href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=/maps/place//data%3D!4m2!3m1!1s0x91cb49113de9be7b:0x3ab4219d42a27722%3Fsa%3DX%26ved%3D1t:8290%26ictx%3D111&ved=2ahUKEwi398q3r4GUAxWycfEDHaPLKkUQ4kB6BAgmEAM&usg=AOvVaw2QU13P6DX4EZsGfjyT48NX"
                target="_blank"
                rel="noreferrer"
                className="mt-4 block max-w-md text-sm leading-7 text-white/60 transition-colors duration-300 hover:text-[#d4af37] sm:text-base"
              >
                Ver ubicaci&oacute;n de la cl&iacute;nica en Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.28em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} DR Rene Gonzalez</p>
          <p>
            Developed by <span className="text-[#d4af37]">HeiLabs</span>{" "}
            Germany
          </p>
        </div>
      </div>
    </footer>
  );
}
