const footerLinks = [
  "Consulta",
  "Procedimientos",
  "Resultados",
  "Contacto",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent" />
      <div className="absolute left-1/2 top-0 h-40 w-[34rem] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[22rem] w-full max-w-7xl flex-col justify-between gap-16 px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.5em] text-[#d4af37]/75">
              DR Rene Gonzalez
            </p>
            <h2 className="mt-5 max-w-3xl text-3xl font-light uppercase tracking-[0.18em] text-white sm:text-5xl">
              Cirujano est&eacute;tico
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              A refined surgical experience shaped by precision, proportion,
              and a calm attention to detail.
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-4 text-sm uppercase tracking-[0.22em] text-white/55 sm:flex sm:flex-wrap lg:justify-end"
          >
            {footerLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="transition-colors duration-300 hover:text-[#d4af37]"
              >
                {link}
              </a>
            ))}
          </nav>
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
