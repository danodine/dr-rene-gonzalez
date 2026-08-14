import type { Metadata } from "next";
import Link from "next/link";
import {
  clinicAddress,
  email,
  primaryPhone,
  secondaryPhone,
  siteName,
  siteUrl,
} from "@/lib/seo";

export const dynamic = "force-static";

const lastUpdated = "14 de agosto de 2026";

export const metadata: Metadata = {
  title: {
    absolute: `Política de privacidad | ${siteName}`,
  },
  description:
    "Política de privacidad y tratamiento de datos personales del sitio web de Dr. René González Dávila, cirujano estético en Loja, Ecuador.",
  alternates: {
    canonical: "/politica-de-privacidad/",
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: `${siteUrl}/politica-de-privacidad/`,
    siteName,
    title: `Política de privacidad | ${siteName}`,
    description:
      "Cómo tratamos los datos personales en el sitio web de Dr. René González Dávila.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12">
      <h2 className="text-xl font-light uppercase tracking-[0.18em] text-white sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-white/60 sm:text-base">
        {children}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="relative bg-black text-white">
      <div className="mx-auto w-full max-w-3xl px-6 pb-24 pt-32 sm:px-10 sm:pt-40 lg:px-0">
        <p className="text-[0.68rem] uppercase tracking-[0.5em] text-[#d4af37]/75">
          {siteName}
        </p>
        <h1 className="mt-5 text-3xl font-light uppercase tracking-[0.16em] text-white sm:text-5xl">
          Política de privacidad
        </h1>
        <p className="mt-6 text-sm leading-7 text-white/50">
          Última actualización: {lastUpdated}
        </p>

        <Section title="1. Responsable del tratamiento">
          <p>
            El responsable del tratamiento de los datos personales recabados a
            través de este sitio web es el <strong>{siteName}</strong>, con
            consultorio en {clinicAddress}. El responsable decide las
            finalidades y los medios del tratamiento.
          </p>
          <p>
            Este sitio web es desarrollado, alojado y mantenido en nombre del
            responsable por <strong>HeiLabs</strong> (Luruper Hauptstraße 85,
            22507 Hamburgo, Alemania), que actúa como{" "}
            <strong>encargado del tratamiento</strong>: trata los datos
            personales únicamente siguiendo las instrucciones del responsable y
            en el marco de un acuerdo de tratamiento de datos, y no los utiliza
            para fines propios.
          </p>
          <p>
            Puede contactarnos para cualquier asunto relacionado con la
            protección de sus datos personales a través de:
          </p>
          <ul className="list-inside list-disc space-y-1">
            <li>
              Correo electrónico:{" "}
              <a
                href={`mailto:${email}`}
                className="text-[#d4af37] transition-colors hover:text-[#d4af37]/80"
              >
                {email}
              </a>
            </li>
            <li>
              Teléfono: {primaryPhone} / {secondaryPhone}
            </li>
          </ul>
        </Section>

        <Section title="2. Qué datos tratamos">
          <p>
            Este sitio web es principalmente informativo y{" "}
            <strong>no dispone de formularios de registro ni de contacto</strong>{" "}
            que recojan datos personales de forma automática. Los datos que
            tratamos se limitan a:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Datos de navegación.</strong> Cuando visita el sitio,
              nuestro proveedor de alojamiento e infraestructura (Cloudflare)
              registra de forma automática datos técnicos como la dirección IP,
              el tipo de navegador y dispositivo, la fecha y hora de acceso y
              las páginas visitadas. Estos datos se utilizan únicamente para
              garantizar el funcionamiento, la seguridad y la estabilidad del
              sitio.
            </li>
            <li>
              <strong>Comunicaciones voluntarias.</strong> Si usted decide
              contactarnos por WhatsApp, correo electrónico o teléfono,
              trataremos los datos que voluntariamente nos facilite (por
              ejemplo, su nombre, número de teléfono y el contenido de su
              consulta) con la única finalidad de atender su solicitud.
            </li>
          </ul>
          <p>
            No solicitamos ni recabamos datos de salud a través de este sitio
            web. Cualquier información clínica se gestiona de forma
            confidencial en el marco de la relación médico-paciente, fuera de
            este sitio.
          </p>
        </Section>

        <Section title="3. Finalidad y base legal">
          <p>Tratamos sus datos con las siguientes finalidades y bases legales:</p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              Mantener y proteger el sitio web (datos de navegación), sobre la
              base del <strong>interés legítimo</strong> en asegurar su correcto
              funcionamiento y seguridad.
            </li>
            <li>
              Responder a las consultas que usted nos remita, sobre la base de
              su <strong>consentimiento</strong> y del interés en dar respuesta
              a su solicitud.
            </li>
          </ul>
        </Section>

        <Section title="4. Cookies">
          <p>
            Este sitio <strong>no utiliza cookies de seguimiento, de
            publicidad ni de analítica</strong>, ni herramientas de perfilado
            de usuarios. Por ello no se muestra un banner de consentimiento de
            cookies. Únicamente pueden emplearse, en su caso, cookies o
            almacenamiento estrictamente necesarios para el funcionamiento
            técnico de la página.
          </p>
        </Section>

        <Section title="5. Destinatarios y terceros">
          <p>
            No vendemos ni cedemos sus datos personales. Para el funcionamiento
            del sitio intervienen los siguientes proveedores. HeiLabs actúa como
            encargado del tratamiento del responsable, y los demás proveedores
            actúan como subencargados que HeiLabs contrata para prestar el
            servicio:
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>HeiLabs</strong>, que desarrolla, aloja y mantiene el
              sitio web en nombre del responsable.
            </li>
            <li>
              <strong>Cloudflare</strong>, proveedor de alojamiento, red de
              distribución de contenido (CDN) y seguridad del sitio, que procesa
              los registros técnicos descritos en el apartado 2.
            </li>
            <li>
              <strong>Google (Firebase / Firestore)</strong>, utilizado para
              almacenar y servir el contenido del blog, cuando dicha sección se
              encuentra activa.
            </li>
          </ul>
          <p>
            El sitio incluye además enlaces a plataformas de terceros (Facebook
            e Instagram de Meta Platforms, TikTok, WhatsApp y Google Maps). Al
            hacer clic en dichos enlaces abandonará este sitio y sus datos
            pasarán a regirse por las políticas de privacidad de esas
            plataformas, sobre las que no tenemos control.
          </p>
        </Section>

        <Section title="6. Transferencias internacionales">
          <p>
            Algunos de los proveedores mencionados pueden almacenar o procesar
            datos en servidores ubicados fuera de Ecuador o de la Unión Europea.
            En esos casos, dichos proveedores aplican garantías adecuadas de
            protección conforme a la normativa aplicable.
          </p>
        </Section>

        <Section title="7. Conservación de los datos">
          <p>
            Los datos de navegación se conservan durante el tiempo estrictamente
            necesario para las finalidades técnicas y de seguridad descritas.
            Los datos de las comunicaciones voluntarias se conservan durante el
            tiempo necesario para atender su consulta y, posteriormente, durante
            los plazos legales que resulten aplicables.
          </p>
        </Section>

        <Section title="8. Sus derechos">
          <p>
            Usted puede ejercer en cualquier momento sus derechos de acceso,
            rectificación, actualización, eliminación, oposición, limitación y
            portabilidad de sus datos personales, así como retirar el
            consentimiento prestado. Para ello, puede escribirnos a{" "}
            <a
              href={`mailto:${email}`}
              className="text-[#d4af37] transition-colors hover:text-[#d4af37]/80"
            >
              {email}
            </a>
            .
          </p>
          <p>
            Si considera que sus derechos no han sido debidamente atendidos,
            puede presentar una reclamación ante la autoridad de control
            competente. En Ecuador, dicha autoridad es la{" "}
            <strong>
              Superintendencia de Protección de Datos Personales
            </strong>
            , conforme a la Ley Orgánica de Protección de Datos Personales
            (LOPDP). Si usted reside en la Unión Europea, puede dirigirse a la
            autoridad de control de su país conforme al Reglamento General de
            Protección de Datos (RGPD).
          </p>
        </Section>

        <Section title="9. Menores de edad">
          <p>
            Este sitio se dirige a personas mayores de edad. No recabamos de
            forma consciente datos de menores a través de la web. Los
            procedimientos que impliquen a menores se tratan directamente en
            consulta, con la autorización de su representante legal.
          </p>
        </Section>

        <Section title="10. Cambios en esta política">
          <p>
            Podemos actualizar esta política de privacidad para reflejar
            cambios legales o en el funcionamiento del sitio. La versión vigente
            será siempre la publicada en esta página, con su fecha de última
            actualización.
          </p>
        </Section>

        <div className="mt-16 border-t border-white/10 pt-8">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.28em] text-white/40 transition-colors hover:text-[#d4af37]"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
