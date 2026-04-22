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
  title: "Política de Privacidad | Umbral",
  description:
    "Conoce cómo Umbral recopila, usa y protege tu información personal.",
};

const sections = [
  {
    title: "1. Responsable del tratamiento",
    content: (
      <>
        <p>
          Este sitio web es operado por <strong className="text-[#FAFAFA]">Umbral</strong>,
          ubicado en Miami, Florida, Estados Unidos.
        </p>
        <p>
          Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos en:{" "}
          <a
            href="mailto:umbralbrand1@gmail.com"
            className="text-[#00E5FF] hover:text-[#22D3EE] transition-colors"
          >
            umbralbrand1@gmail.com
          </a>
        </p>
        <p>Estamos comprometidos con la protección de tu información personal y tu privacidad.</p>
      </>
    ),
  },
  {
    title: "2. Información que recopilamos",
    content: (
      <>
        <p>Podemos recopilar la siguiente información personal:</p>
        <ul className="mt-3 space-y-1 list-disc list-inside">
          <li>Nombre completo</li>
          <li>Dirección de correo electrónico</li>
          <li>Número de teléfono</li>
        </ul>
        <p className="mt-4">Adicionalmente, podemos recopilar datos técnicos de forma automática, como:</p>
        <ul className="mt-3 space-y-1 list-disc list-inside">
          <li>Dirección IP</li>
          <li>Tipo de navegador</li>
          <li>Información del dispositivo</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Cómo usamos tu información",
    content: (
      <>
        <p>Utilizamos tus datos para:</p>
        <ul className="mt-3 space-y-1 list-disc list-inside">
          <li>Brindar información sobre nuestros servicios (automatización con IA, marketing, etc.)</li>
          <li>Responder consultas o solicitudes</li>
          <li>Enviar comunicaciones de marketing (solo si das tu consentimiento)</li>
          <li>Mejorar nuestro sitio web y servicios</li>
        </ul>
        <p className="mt-4 font-medium text-[#FAFAFA]">No vendemos tus datos personales.</p>
      </>
    ),
  },
  {
    title: "4. Base legal",
    content: (
      <p>
        Al usar este sitio web y enviar tu información, consientes la recopilación y el
        uso de tus datos tal como se describe en esta política.
      </p>
    ),
  },
  {
    title: "5. Retención de datos",
    content: (
      <>
        <p>Conservamos tu información únicamente durante el tiempo necesario para:</p>
        <ul className="mt-3 space-y-1 list-disc list-inside">
          <li>Prestar nuestros servicios</li>
          <li>Cumplir con obligaciones legales</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Tus derechos",
    content: (
      <>
        <p>
          Dependiendo de tu ubicación (por ejemplo, California), puedes tener derecho a:
        </p>
        <ul className="mt-3 space-y-1 list-disc list-inside">
          <li>Solicitar acceso a tus datos</li>
          <li>Solicitar la eliminación de tus datos</li>
          <li>Cancelar la suscripción a comunicaciones de marketing</li>
        </ul>
        <p className="mt-4">
          Para ejercer tus derechos, contáctanos en:{" "}
          <a
            href="mailto:umbralbrand1@gmail.com"
            className="text-[#00E5FF] hover:text-[#22D3EE] transition-colors"
          >
            umbralbrand1@gmail.com
          </a>
        </p>
      </>
    ),
  },
  {
    title: "7. Seguridad de los datos",
    content: (
      <>
        <p>Implementamos medidas de seguridad adecuadas para proteger tu información.</p>
        <p>
          Nuestro sitio web utiliza cifrado SSL para garantizar la transmisión segura de datos.
        </p>
      </>
    ),
  },
  {
    title: "8. Cookies",
    content: (
      <>
        <p>Utilizamos cookies para mejorar tu experiencia de navegación.</p>
        <p>Puedes controlar las cookies a través de la configuración de tu navegador.</p>
      </>
    ),
  },
  {
    title: "9. Cambios en esta política",
    content: (
      <p>
        Podemos actualizar esta Política de Privacidad en cualquier momento. Los cambios
        se publicarán en esta página.
      </p>
    ),
  },
  {
    title: "10. Contacto",
    content: (
      <p>
        Si tienes alguna pregunta, contáctanos en:{" "}
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

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {/* Hero */}
        <SectionWrapper
          className="pt-32 pb-10"
          aria-labelledby="privacidad-heading"
          innerClassName="mx-auto max-w-3xl"
        >
          <SectionLabel>Legal</SectionLabel>
          <SectionHeading id="privacidad-heading">
            Política de Privacidad
          </SectionHeading>
          <SectionSubheading>Fecha de vigencia: Abril 2026</SectionSubheading>
        </SectionWrapper>

        {/* Sections */}
        <div className="mx-auto max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <div
                key={i}
                className="border-t border-[#1F1F23] pt-8"
              >
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
