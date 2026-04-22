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
  title: "Aviso Legal | Umbral",
  description:
    "Información legal sobre el titular, condiciones de uso y responsabilidades del sitio web de Umbral.",
};

const sections = [
  {
    title: "1. Datos del titular",
    content: (
      <>
        <p>
          En cumplimiento de las obligaciones de transparencia e información, se
          identifican los datos del titular de este sitio web:
        </p>
        <ul className="mt-3 space-y-1 list-none">
          <li>
            <span className="text-[#FAFAFA] font-medium">Nombre de la empresa:</span> Umbral
          </li>
          <li>
            <span className="text-[#FAFAFA] font-medium">Domicilio:</span> Miami, Florida, Estados Unidos
          </li>
          <li>
            <span className="text-[#FAFAFA] font-medium">Correo electrónico:</span>{" "}
            <a
              href="mailto:umbralbrand1@gmail.com"
              className="text-[#00E5FF] hover:text-[#22D3EE] transition-colors"
            >
              umbralbrand1@gmail.com
            </a>
          </li>
          <li>
            <span className="text-[#FAFAFA] font-medium">Sitio web:</span> umbral.studio
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2. Objeto y ámbito de aplicación",
    content: (
      <p>
        El presente Aviso Legal regula el acceso, navegación y uso del sitio web
        de <strong className="text-[#FAFAFA]">Umbral</strong>. Al acceder y utilizar
        este sitio web, el usuario acepta las condiciones aquí establecidas. Si no
        estás de acuerdo con alguna de las condiciones, te rogamos que no utilices
        este sitio.
      </p>
    ),
  },
  {
    title: "3. Propiedad intelectual e industrial",
    content: (
      <>
        <p>
          Todos los contenidos de este sitio web — incluyendo, sin limitación, textos,
          imágenes, diseño, logotipos, marcas, código fuente y demás elementos — son
          propiedad de <strong className="text-[#FAFAFA]">Umbral</strong> o de terceros
          que han autorizado su uso.
        </p>
        <p className="mt-3">
          Queda expresamente prohibida la reproducción, distribución, comunicación
          pública o transformación de cualquier parte de este sitio sin la
          autorización expresa y por escrito de Umbral.
        </p>
      </>
    ),
  },
  {
    title: "4. Condiciones de uso",
    content: (
      <>
        <p>El usuario se compromete a usar el sitio web de forma lícita y a no:</p>
        <ul className="mt-3 space-y-1 list-disc list-inside">
          <li>Introducir o difundir contenidos ilícitos, dañinos o fraudulentos.</li>
          <li>Realizar acciones que puedan dañar, inutilizar o sobrecargar el sitio.</li>
          <li>Utilizar el sitio con fines publicitarios o comerciales no autorizados.</li>
          <li>Intentar acceder a áreas restringidas del sitio sin autorización.</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Exclusión de responsabilidad",
    content: (
      <>
        <p>
          Umbral no se hace responsable de los daños o perjuicios que pudieran
          derivarse del uso del sitio web, incluyendo:
        </p>
        <ul className="mt-3 space-y-1 list-disc list-inside">
          <li>Interrupciones, errores o fallos técnicos en el servicio.</li>
          <li>Contenidos de terceros enlazados desde este sitio.</li>
          <li>Daños causados por virus u otros elementos perjudiciales introducidos por terceros.</li>
        </ul>
        <p className="mt-3">
          Umbral se reserva el derecho de suspender, modificar o interrumpir el acceso
          al sitio en cualquier momento sin previo aviso.
        </p>
      </>
    ),
  },
  {
    title: "6. Política de enlaces",
    content: (
      <>
        <p>
          Este sitio puede contener enlaces a sitios web de terceros. Umbral no controla
          ni se hace responsable del contenido, políticas de privacidad o prácticas de
          dichos sitios.
        </p>
        <p className="mt-3">
          La inclusión de cualquier enlace no implica recomendación ni asociación con
          el sitio enlazado.
        </p>
      </>
    ),
  },
  {
    title: "7. Ley aplicable y jurisdicción",
    content: (
      <p>
        El presente Aviso Legal se rige por la legislación aplicable en el Estado de
        Florida, Estados Unidos. Para la resolución de cualquier disputa derivada del
        uso de este sitio, las partes se someten a los tribunales competentes de Miami,
        Florida.
      </p>
    ),
  },
  {
    title: "8. Modificaciones",
    content: (
      <p>
        Umbral se reserva el derecho de modificar el presente Aviso Legal en cualquier
        momento. Las modificaciones serán efectivas desde el momento de su publicación
        en este sitio. Se recomienda revisarlo periódicamente.
      </p>
    ),
  },
  {
    title: "9. Contacto",
    content: (
      <p>
        Para cualquier consulta relacionada con este Aviso Legal, puedes contactarnos en:{" "}
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

export default function AvisoLegalPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <SectionWrapper
          className="pt-32 pb-10"
          aria-labelledby="aviso-legal-heading"
          innerClassName="mx-auto max-w-3xl"
        >
          <SectionLabel>Legal</SectionLabel>
          <SectionHeading id="aviso-legal-heading">
            Aviso Legal
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
