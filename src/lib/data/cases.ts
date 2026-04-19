export const CASES = [
  {
    id: "ecommerce-leads",
    slug: "ecommerce-calificacion-leads",
    client: "E-commerce de moda", // PLACEHOLDER
    industry: "E-commerce",
    size: "15 empleados",
    tags: ["Agente de IA", "WhatsApp", "HubSpot"],
    problem: {
      title: "60 horas/semana respondiendo consultas repetitivas",
      description:
        "El equipo de ventas respondía manualmente las mismas 20 preguntas sobre tallas, envíos y descuentos. 3 personas, 60 horas semanales perdidas. Los leads calificados esperaban horas para ser atendidos.",
      metrics: ["60h/semana en soporte manual", "Tasa de conversión: 2.1%", "Tiempo respuesta promedio: 4.5 horas"],
    },
    solution: {
      title: "Agente de IA en WhatsApp + CRM automatizado",
      description:
        "Implementamos un agente de IA conectado a WhatsApp Business API que responde consultas en menos de 10 segundos, califica la intención de compra y pasa los leads calientes directamente a HubSpot con contexto completo.",
      stack: ["n8n", "OpenAI GPT-4o", "WhatsApp Business API", "HubSpot", "Supabase"],
    },
    results: {
      metrics: [
        { label: "Tiempo de respuesta", before: "4.5 horas", after: "< 10 segundos" },
        { label: "Horas de soporte manual/semana", before: "60h", after: "8h" },
        { label: "Tasa de conversión", before: "2.1%", after: "4.8%" },
        { label: "Leads procesados/mes", before: "120", after: "1,200" },
      ],
      quote:
        "El sistema paga su retainer mensual en los primeros 3 días de cada mes. El resto es pura utilidad.",
      quoteAuthor: "CEO, E-commerce de moda", // PLACEHOLDER
    },
  },
  {
    id: "clinica-seguimiento",
    slug: "clinica-seguimiento-pacientes",
    client: "Red de clínicas privadas", // PLACEHOLDER
    industry: "Salud",
    size: "45 empleados",
    tags: ["Automatización", "WhatsApp", "CRM Médico"],
    problem: {
      title: "35% de pacientes no regresaban para control",
      description:
        "Sin seguimiento post-consulta, los pacientes no agendaban controles. El personal administrativo no tenía capacidad para hacer seguimiento manual a 400+ pacientes activos.",
      metrics: ["35% tasa de abandono post-consulta", "0 sistema de seguimiento automatizado", "400+ pacientes sin seguimiento activo"],
    },
    solution: {
      title: "Sistema de seguimiento automatizado por WhatsApp",
      description:
        "Flujo automático que envía recordatorios personalizados a los 7, 15 y 30 días post-consulta. Si el paciente responde, el agente agenda directamente en el sistema de turnos. Si no responde, alerta al equipo para seguimiento manual.",
      stack: ["Make", "WhatsApp Business API", "Airtable", "Claude AI", "Zapier"],
    },
    results: {
      metrics: [
        { label: "Tasa de retención de pacientes", before: "65%", after: "87%" },
        { label: "Horas administrativas/semana", before: "25h", after: "4h" },
        { label: "Consultas de control agendadas/mes", before: "80", after: "220" },
        { label: "Revenue mensual recuperado", before: "—", after: "+$12,000 USD" },
      ],
      quote:
        "Pensé que la IA era para empresas grandes. Umbral me demostró que cualquier clínica puede implementarlo en semanas.",
      quoteAuthor: "Directora médica", // PLACEHOLDER
    },
  },
  {
    id: "agencia-reportes",
    slug: "agencia-reportes-automaticos",
    client: "Agencia de marketing digital", // PLACEHOLDER
    industry: "Agencias",
    size: "12 empleados",
    tags: ["Automatización", "Reportes", "APIs"],
    problem: {
      title: "3 días al mes armando reportes para 25 clientes",
      description:
        "Dos analistas dedicaban 3 días completos a extraer datos de Meta, Google Ads y Analytics para generar reportes PDF manuales. Trabajo repetitivo que consumía tiempo de talento caro.",
      metrics: ["3 días/mes de trabajo manual en reportes", "25 clientes activos con reportes distintos", "Errores en el 20% de reportes por fatiga"],
    },
    solution: {
      title: "Pipeline automático de reportes con IA",
      description:
        "Construimos un pipeline que extrae datos de todas las plataformas vía API, los consolida en Airtable, genera el análisis de rendimiento con IA y manda el PDF personalizado a cada cliente automáticamente cada lunes.",
      stack: ["n8n", "Meta API", "Google Ads API", "Airtable", "OpenAI", "Resend"],
    },
    results: {
      metrics: [
        { label: "Tiempo en reportes/mes", before: "3 días", after: "2 horas (revisión)" },
        { label: "Errores en reportes", before: "20%", after: "0%" },
        { label: "Clientes que pueden atender", before: "25", after: "80+" },
        { label: "Costo por reporte", before: "$85 USD", after: "$4 USD" },
      ],
      quote:
        "Escalamos de 25 a 60 clientes en 4 meses sin contratar a nadie. El sistema de reportes fue la clave.",
      quoteAuthor: "Fundador, Agencia de marketing", // PLACEHOLDER
    },
  },
];

export const INDUSTRIES = ["Todos", "E-commerce", "Salud", "Agencias", "SaaS", "Inmobiliaria", "Restaurantes"];
