import Image from "next/image";

const desktopTextColor = "#49506a";
const mobileTextColor = "#ffffff";

export default function Header() {
  return (
    <section id="inicio" className="relative h-screen bg-black">
      <div className="relative h-screen overflow-hidden bg-black safari-motion-layer">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/images/headerBackgroundDesktopC.webp"
            type="image/webp"
          />
          <source
            srcSet="/images/headerBackgroundMobile.webp"
            type="image/webp"
          />
          <img
            src="/images/headerBackgroundMobile.jpeg"
            alt=""
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center safari-motion-layer"
          />
        </picture>

        <div className="pointer-events-none absolute inset-0 z-20 md:hidden">
          <div className="absolute inset-x-0 top-6 flex justify-center px-6">
            <div className="relative h-[8rem] w-[8rem]">
              <Image
                src="/images/LogoNB.png"
                alt="RG"
                fill
                sizes="8rem"
                className="object-contain"
              />
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
            <div>
              <h1
                className="whitespace-nowrap text-[1.1rem] font-light uppercase tracking-[0.12em]"
                style={{ color: mobileTextColor }}
              >
                René González Dávila
              </h1>
              <h2
                className="mt-[12px] text-[0.62rem] uppercase tracking-[0.4em]"
                style={{ color: mobileTextColor }}
              >
                Cirugía Estética
              </h2>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-20 hidden items-start justify-end pl-6 pr-1 pt-24 sm:pl-5 sm:pr-0 sm:pt-28 md:flex lg:px-6 lg:pr-[calc(9%-100px)] lg:pt-16">
          <div className="flex w-full max-w-[18rem] flex-col items-center text-center sm:max-w-[20rem] lg:max-w-[24rem]">
            <div className="relative h-[8vw] w-[8vw]">
              <Image
                src="/images/LogoNB.png"
                alt="RG"
                fill
                sizes="8vw"
                className="object-contain"
              />
            </div>

            <div className="mt-[25px]">
              <h1
                className="whitespace-nowrap text-[1.25vw] font-light uppercase tracking-[0.12em]"
                style={{ color: desktopTextColor }}
              >
                René González Dávila
              </h1>
              <h2
                className="mt-[5px] text-[0.3rem] uppercase tracking-[0.2em] sm:text-xs"
                style={{ color: desktopTextColor }}
              >
                Cirugía Estética
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
