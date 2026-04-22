import type { Metadata } from "next";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import {
  SectionWrapper,
  SectionLabel,
  SectionHeading,
  SectionSubheading,
} from "@/components/common/section-wrapper";

export const metadata: Metadata = {
  title: "Política de Cookies | Umbral",
  description:
    "Conoce cómo Umbral utiliza cookies y tecnologías similares en su sitio web.",
};

const sections = [
  {
    title: "1. ¿Qué son las cookies?",
    content: (
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo
        cuando visitas un sitio web. Permiten al sitio recordar tus preferencias y
        mejorar tu experiencia de navegación.
      </p>
    ),
  },
  {
    title: "2. Cookies que utilizamos",
    content: (
      <>
        <p>En este sitio web utilizamos los siguientes tipos de cookies:</p>
        <div className="mt-4 space-y-4">
          <div>
            <p className="font-medium text-[#FAFAFA]">Cookies esenciales</p>
            <p className="mt-1">
              Necesarias para el funcionamiento básico del sitio. Sin ellas, el sitio
              no puede funcionar correctamente. No pueden desactivarse.
            </p>
          </div>
          <div>
            <p className="font-medium text-[#FAFAFA]">Cookies de rendimiento y analítica</p>
            <p className="mt-1">
              Nos permiten contar las visitas y fuentes de tráfico para medir y mejorar
              el rendimiento del sitio (por ejemplo, Google Analytics). Toda la
              información es agregada y anónima.
            </p>
          </div>
          <div>
            <p className="font-medium text-[#FAFAFA]">Cookies de preferencias</p>
            <p className="mt-1">
              Recuerdan tus ajustes y preferencias de navegación para ofrecerte una
              experiencia más personalizada.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    title: "3. Cookies de terceros",
    content: (
      <>
        <p>
          Algunas cookies son instaladas por servicios de terceros que aparecen en
          nuestras páginas, como herramientas de análisis o botones de redes sociales.
          Umbral no controla estas cookies.
        </p>
        <p className="mt-3">
          Te recomendamos revisar las políticas de privacidad de dichos terceros para
          obtener más información.
        </p>
      </>
    ),
  },
  {
    title: "4. Cómo controlar las cookies",
    content: (
      <>
        <p>Puedes controlar y/o eliminar las cookies según desees. Tienes las siguientes opciones:</p>
        <ul className="mt-3 space-y-1 list-disc list-inside">
          <li>
            Configurar tu navegador para que rechace todas o algunas cookies.
          </li>
          <li>
            Eliminar las cookies almacenadas en tu dispositivo desde la configuración
            de tu navegador.
          </li>
          <li>
            Usar el banner de cookies de nuestro sitio para gestionar tus preferencias.
          </li>
        </ul>
        <p className="mt-3">
          Ten en cuenta que deshabilitar ciertas cookies puede afectar la funcionalidad
          del sitio.
        </p>
      </>
    ),
  },
  {
    title: "5. Retención de datos de cookies",
    content: (
      <p>
        Las cookies de sesión se eliminan automáticamente al cerrar el navegador.
        Las cookies persistentes tienen una duración variable según su propósito,
        generalmente no superior a 12 meses.
      </p>
    ),
  },
  {
    title: "6. Actualizaciones de esta política",
    content: (
      <p>
        Podemos actualizar esta Política de Cookies en cualquier momento. Te
        notificaremos sobre cambios significativos mostrando un aviso en el sitio.
        La fecha de vigencia indica cuándo se aplicaron los últimos cambios.
      </p>
    ),
  },
  {
    title: "7. Contacto",
    content: (
      <p>
        Si tienes preguntas sobre el uso de cookies en este sitio, contáctanos en:{" "}
        <a
          href="mailto:umbralbrand1@gmail.com"
          className="text-[#00E5FF] hover:text-[#22D3EE] transition-colors"
        >
          umbralbrand1@gmail.com
        </a>
      </p>
    ),
  },
];

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <SectionWrapper
          className="pt-32 pb-10"
          aria-labelledby="cookies-heading"
          innerClassName="mx-auto max-w-3xl"
        >
          <SectionLabel>Legal</SectionLabel>
          <SectionHeading id="cookies-heading">
            Política de Cookies
          </SectionHeading>
          <SectionSubheading>Fecha de vigencia: Abril 2026</SectionSubheading>
        </SectionWrapper>

        {/* Sections */}
        <div className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div key={i} className="border-t border-[#1F1F23] pt-8">
                <h3 className="mb-4 text-lg font-semibold text-[#FAFAFA]">
                  {section.title}
                </h3>
                <div className="space-y-3 text-[#A1A1AA] leading-relaxed text-sm sm:text-base">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
