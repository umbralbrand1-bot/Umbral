import type { Metadata } from "next";
import { Navbar } from "@/components/common/navbar";
import { Footer } from "@/components/common/footer";
import { WhatsAppButton } from "@/components/common/whatsapp-button";
import { SectionWrapper, SectionLabel, SectionHeading, SectionSubheading } from "@/components/common/section-wrapper";
import { FinalCta } from "@/components/sections/home/final-cta";
import { ComparisonTable } from "@/components/sections/servicios/comparison-table";
import { ServiceDetail } from "@/components/sections/servicios/service-detail";

export const metadata: Metadata = {
  title: "Servicios — Automatización con IA para pymes",
  description:
    "Agentes de IA, automatizaciones de flujos e integraciones inteligentes. Soluciones medibles desde $1,500 USD setup + retainer mensual.",
};

const SERVICES_DETAIL = [
  {
    id: "agentes",
    iconName: "Bot",
    title: "Agentes de IA",
    tagline: "Asistentes autónomos que trabajan 24/7 sin intervención humana.",
    description:
      "Un agente de IA no es un chatbot simple. Es un sistema que razona, consulta bases de datos, toma decisiones y ejecuta acciones en tu nombre. Desde calificar leads hasta resolver tickets de soporte, sin que nadie tenga que estar al otro lado.",
    useCases: [
      {
        industry: "E-commerce",
        cases: [
          "Atención al cliente por WhatsApp con acceso a inventario en tiempo real",
          "Calificación automática de compradores recurrentes para upsell",
          "Procesamiento de devoluciones y cambios sin intervención humana",
        ],
      },
      {
        industry: "Clínicas",
        cases: [
          "Agendamiento y confirmación de turnos por WhatsApp",
          "Seguimiento post-consulta y recordatorio de medicamentos",
          "Triaje inicial de síntomas para derivar al especialista correcto",
        ],
      },
      {
        industry: "Agencias",
        cases: [
          "Calificación de leads entrantes y programación de demos automática",
          "Respuesta a consultas de precios y servicios 24/7",
          "Generación de propuestas base a partir de brief del cliente",
        ],
      },
      {
        industry: "SaaS",
        cases: [
          "Onboarding guiado de nuevos usuarios por chat",
          "Soporte técnico de primer nivel con escalada automática",
          "Detección proactiva de churn y retención automática",
        ],
      },
    ],
    deliverables: [
      "Agente de IA entrenado con el conocimiento de tu negocio",
      "Integración con WhatsApp Business API, Slack o web",
      "Panel de supervisión con historial de conversaciones",
      "Protocolo de escalada a humanos cuando sea necesario",
      "Documentación técnica y manual de operación",
    ],
    timeline: "3–5 semanas",
    priceAnchor: "Desde $2,500 USD setup · Retainer desde $800/mes",
  },
  {
    id: "automatizaciones",
    iconName: "Workflow",
    title: "Automatizaciones",
    tagline: "Flujos end-to-end que conectan tus herramientas y eliminan el trabajo manual.",
    description:
      "Usamos n8n y Make para construir flujos de trabajo que se ejecutan solos, sin errores y con total trazabilidad. Facturación automática, reportes programados, sincronización de CRM — cualquier proceso repetitivo que consume tiempo de tu equipo.",
    useCases: [
      {
        industry: "E-commerce",
        cases: [
          "Sincronización de pedidos entre tienda, bodega y courier",
          "Generación automática de facturas y envío al cliente",
          "Alertas de stock bajo con reorden automático al proveedor",
        ],
      },
      {
        industry: "Inmobiliarias",
        cases: [
          "Publicación automática de propiedades en múltiples portales",
          "Seguimiento de leads desde portal hasta CRM con tareas automáticas",
          "Reportes semanales de actividad de cartera para directivos",
        ],
      },
      {
        industry: "Restaurantes",
        cases: [
          "Procesamiento de pedidos online con actualización de inventario",
          "Programa de fidelización automático por volumen de compras",
          "Encuesta de satisfacción post-pedido con análisis de sentimiento",
        ],
      },
      {
        industry: "Agencias",
        cases: [
          "Pipeline de reportes automáticos para clientes (Meta, Google, Analytics)",
          "Facturación y seguimiento de cobros sin intervención manual",
          "Onboarding de nuevos clientes con creación de carpetas, accesos y briefing",
        ],
      },
    ],
    deliverables: [
      "Flujos n8n/Make completamente configurados y documentados",
      "Manejo de errores y alertas automáticas ante fallos",
      "Testing exhaustivo antes de ir a producción",
      "Capacitación al equipo en el uso y supervisión",
      "30 días de soporte post-entrega incluidos",
    ],
    timeline: "2–4 semanas",
    priceAnchor: "Desde $1,500 USD setup · Retainer desde $500/mes",
  },
  {
    id: "integraciones",
    iconName: "Plug",
    title: "Integraciones",
    tagline: "Conectamos tu stack existente con IA en cada punto de contacto.",
    description:
      "Tu negocio ya usa herramientas. El problema es que no se hablan entre sí y la IA no está en ninguna de ellas. Conectamos tu CRM, ERP, plataforma de e-commerce y canales de comunicación en un sistema unificado con IA donde importa.",
    useCases: [
      {
        industry: "SaaS",
        cases: [
          "Integración de datos de uso con CRM para identificar oportunidades de expansión",
          "Pipeline de datos de soporte → IA → categorización automática de tickets",
          "Webhooks inteligentes que disparan flujos de retención ante señales de churn",
        ],
      },
      {
        industry: "E-commerce",
        cases: [
          "Unificación de canales (tienda, WhatsApp, Instagram) en un solo inbox con IA",
          "Enriquecimiento automático de perfiles de clientes con datos de comportamiento",
          "Integración de reviews con análisis de sentimiento y respuesta automática",
        ],
      },
      {
        industry: "Clínicas",
        cases: [
          "Integración de sistema de turnos con WhatsApp y CRM médico",
          "Pipeline de historia clínica → resumen automático antes de cada consulta",
          "Conectar laboratorio → paciente → médico con notificaciones automáticas",
        ],
      },
      {
        industry: "Inmobiliarias",
        cases: [
          "Integración de portales inmobiliarios con CRM y pipeline de ventas",
          "Enriquecimiento de leads con datos públicos para priorización automática",
          "Reportes de mercado automáticos con datos de portales + IA de análisis",
        ],
      },
    ],
    deliverables: [
      "Mapa de integraciones y flujo de datos documentado",
      "APIs conectadas con autenticación y manejo de errores",
      "Dashboard unificado de estado de integraciones",
      "Documentación técnica de cada conexión",
      "SLA de tiempo de respuesta ante fallos de integración",
    ],
    timeline: "2–6 semanas",
    priceAnchor: "Desde $2,000 USD setup · Retainer desde $600/mes",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        {/* Header */}
        <SectionWrapper className="pt-32 pb-16 text-center" aria-labelledby="servicios-heading">
          <SectionLabel>Servicios</SectionLabel>
          <SectionHeading id="servicios-heading">
            Construimos el sistema de IA que tu negocio necesita.
          </SectionHeading>
          <SectionSubheading>
            Sin soluciones enlatadas. Cada proyecto parte del diagnóstico de tu operación, no de un template.
          </SectionSubheading>
        </SectionWrapper>

        {/* Service details */}
        {SERVICES_DETAIL.map((service, index) => (
          <ServiceDetail key={service.id} service={service} reversed={index % 2 !== 0} />
        ))}

        {/* Comparison table */}
        <ComparisonTable />

        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
