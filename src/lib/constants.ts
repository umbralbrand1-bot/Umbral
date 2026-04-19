export const SITE = {
  name: "Umbral",
  tagline: "Ingeniería de IA para negocios que quieren escalar.",
  taglineAlt: "El umbral hacia la automatización con IA.",
  description:
    "Diseñamos e implementamos agentes de IA y automatizaciones que eliminan el trabajo repetitivo en ventas, operaciones y atención al cliente. Sin equipo técnico interno. Sin meses de implementación.",
  email: "hola@umbral.studio",
  url: "https://umbral.studio",
  whatsapp: "5491100000000", // PLACEHOLDER: reemplazar con número real
  calLink: "https://cal.com/umbral/diagnostico", // PLACEHOLDER
};

export const NAV_LINKS = [
  { label: "Servicios", href: "/servicios" },
  { label: "Casos", href: "/casos" },
  { label: "Lab", href: "/lab" },
];

export const METRICS = [
  {
    value: 40,
    suffix: "+",
    unit: "horas",
    label: "ahorradas al mes por cliente",
    color: "text-[#00E5FF]",
  },
  {
    value: 87,
    suffix: "%",
    unit: "",
    label: "reducción en tiempos de respuesta",
    color: "text-cyan-400",
  },
  {
    value: 3.2,
    suffix: "x",
    unit: "",
    label: "ROI promedio en 90 días",
    color: "text-success",
    decimals: 1,
  },
];

export const HOW_WE_WORK = [
  {
    step: "01",
    title: "Diagnóstico",
    duration: "1 semana",
    description:
      "Auditamos tus procesos, identificamos los cuellos de botella de mayor costo y calculamos el ROI potencial de cada automatización.",
    icon: "Search",
  },
  {
    step: "02",
    title: "Diseño del sistema",
    duration: "1–2 semanas",
    description:
      "Diseñamos la arquitectura completa: flujos, integraciones, agentes y lógica de decisión. Te mostramos el plano antes de construir.",
    icon: "Layout",
  },
  {
    step: "03",
    title: "Implementación",
    duration: "2–4 semanas",
    description:
      "Construimos, probamos e integramos los sistemas en tu stack actual. Sin disrupciones a tu operación diaria.",
    icon: "Code2",
  },
  {
    step: "04",
    title: "Optimización continua",
    duration: "Mensual",
    description:
      "Monitoreamos, ajustamos y mejoramos los sistemas basándonos en datos reales de uso. Tu ROI aumenta con el tiempo.",
    icon: "TrendingUp",
  },
];

export const TECH_STACK = [
  { name: "n8n", category: "automation" },
  { name: "Make", category: "automation" },
  { name: "OpenAI", category: "ai" },
  { name: "Anthropic", category: "ai" },
  { name: "Zapier", category: "automation" },
  { name: "Airtable", category: "data" },
  { name: "HubSpot", category: "crm" },
  { name: "Notion", category: "productivity" },
  { name: "Slack", category: "communication" },
  { name: "WhatsApp API", category: "communication" },
  { name: "Supabase", category: "data" },
  { name: "Vercel", category: "infrastructure" },
];

export const SERVICES_PREVIEW = [
  {
    id: "agentes",
    icon: "Bot",
    title: "Agentes de IA",
    description:
      "Asistentes autónomos que calificán leads, responden consultas y ejecutan tareas complejas 24/7. Sin intervención humana para los casos rutinarios.",
    tags: ["Ventas", "Soporte", "Operaciones"],
    href: "/servicios#agentes",
  },
  {
    id: "automatizaciones",
    icon: "Workflow",
    title: "Automatizaciones",
    description:
      "Flujos end-to-end en n8n y Make que conectan tus herramientas y eliminan el trabajo manual. De la facturación al onboarding de clientes.",
    tags: ["n8n", "Make", "Zapier"],
    href: "/servicios#automatizaciones",
  },
  {
    id: "integraciones",
    icon: "Plug",
    title: "Integraciones",
    description:
      "Conectamos tu CRM, ERP, e-commerce y canales de comunicación en un sistema unificado con IA en cada punto de contacto.",
    tags: ["CRM", "ERP", "APIs"],
    href: "/servicios#integraciones",
  },
];

export const PROBLEMS = [
  {
    icon: "Clock",
    title: "Tiempo perdido en tareas repetitivas",
    description:
      "Tu equipo dedica horas cada semana a copiar datos, responder las mismas preguntas y ejecutar procesos manuales que debería hacer una máquina.",
  },
  {
    icon: "AlertTriangle",
    title: "Errores humanos que cuestan caro",
    description:
      "Datos duplicados, respuestas inconsistentes, seguimientos olvidados. Cada error manual es tiempo y dinero que se pierde en silencio.",
  },
  {
    icon: "TrendingDown",
    title: "Imposible escalar sin contratar más",
    description:
      "Cada nuevo cliente suma carga operativa. Sin sistemas automáticos, crecer significa contratar — y el margen se erosiona con cada nuevo empleado.",
  },
];

export const SOLUTIONS = [
  {
    icon: "Bot",
    title: "Agentes de IA que trabajan 24/7",
    description:
      "Sistemas autónomos que atienden, califican y ejecutan sin supervisión constante. Tu operación no para cuando tu equipo descansa.",
  },
  {
    icon: "Zap",
    title: "Flujos automatizados end-to-end",
    description:
      "Desde que entra un lead hasta que se cierra la venta o se resuelve el ticket: cada paso puede ser automático, trazable y medible.",
  },
  {
    icon: "Link",
    title: "Integraciones que conectan tu stack",
    description:
      "Tus herramientas ya existen. Las conectamos con IA para que compartan datos, se activen mutuamente y trabajen como un sistema cohesionado.",
  },
];
