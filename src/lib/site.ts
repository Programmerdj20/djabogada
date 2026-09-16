// Central facts about the site and the person it represents.
// Every claim here must be verifiable against PRODUCT.md / the CV on file.
// Nothing here is invented: no case counts, no review scores, no press.

export const SITE = {
  name: "Dra. Daniela Jaramillo",
  role: "Abogada penalista",
  tagline: "Defensa penal, víctimas y criminalidad organizada en Medellín",
  domain: "danielajaramilloabogada.com",
  url: "https://danielajaramilloabogada.com",
  locale: "es-CO",
  city: "Medellín",
  region: "Antioquia",
  country: "Colombia",
  phoneDisplay: "+57 322 655 5811",
  phoneE164: "+573226555811",
  whatsappNumber: "573226555811",
  email: "contacto@danielajaramilloabogada.com",
  tarjetaProfesional: "429113",
  tarjetaProfesionalConsejo: "Consejo Seccional de la Judicatura de Antioquia",
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola Daniela, necesito orientación sobre un caso penal y quisiera agendar una consulta.";

export type NavItem = {
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Perfil", href: "/perfil" },
  { label: "Áreas", href: "/areas" },
  { label: "Proceso penal", href: "/proceso-penal" },
  { label: "Artículos", href: "/articulos" },
  { label: "Contacto", href: "/contacto" },
];

export type TimelineEntry = {
  range: string;
  title: string;
  org: string;
  detail: string;
};

// Chronology as recorded on file. Dates and roles are exact; no case
// specifics are named (reserva sumarial), and nothing is claimed beyond
// what the CV and titles support.
export const TIMELINE: TimelineEntry[] = [
  {
    range: "2026",
    title: "Magíster en Derecho Procesal Penal y Teoría del Delito",
    org: "Universidad Autónoma Latinoamericana — UNAULA",
    detail: "Título de posgrado obtenido en febrero de 2026.",
  },
  {
    range: "2018 — 2026",
    title: "Asistente de Fiscal I y IV",
    org: "Fiscalía General de la Nación — Dirección Especializada Contra las Organizaciones Criminales (DECOC), Medellín",
    detail:
      "Ocho años en la unidad que investiga estructuras criminales: proyección de escritos de acusación y preacuerdos, acompañamiento de audiencias e interrogatorios, órdenes a policía judicial y gestión del sistema misional SPOA.",
  },
  {
    range: "2024",
    title: "Especialista en Derecho Procesal Penal",
    org: "Universidad Autónoma Latinoamericana — UNAULA",
    detail: "Título de posgrado obtenido en diciembre de 2024.",
  },
  {
    range: "2024",
    title: "Tarjeta profesional de abogada",
    org: "Consejo Superior de la Judicatura, Seccional Antioquia",
    detail: `T.P. N.° ${SITE.tarjetaProfesional}, expedida en mayo de 2024.`,
  },
  {
    range: "2023",
    title: "Abogada",
    org: "Universidad EAFIT",
    detail: "Título profesional obtenido en marzo de 2023.",
  },
  {
    range: "2017 — 2018",
    title: "Apoyo a la gestión de trámites jurídicos",
    org: "Oficina Jurídica, Concejo Municipal de Sabaneta (Antioquia)",
    detail:
      "Proyección de actos administrativos, apoyo a los trámites jurídicos del Concejo y manejo de plataformas de contratación pública (SECOP, SIGEP).",
  },
];

export type Credential = {
  title: string;
  org: string;
  year: string;
};

export const CREDENTIALS: Credential[] = [
  { title: "Magíster en Derecho Procesal Penal y Teoría del Delito", org: "UNAULA", year: "2026" },
  { title: "Especialista en Derecho Procesal Penal", org: "UNAULA", year: "2024" },
  { title: "Abogada", org: "Universidad EAFIT", year: "2023" },
  { title: "Diplomado en Contratación Estatal", org: "Universidad EAFIT", year: "2018" },
  {
    title: "Diplomado en Policía Judicial y Criminalística",
    org: "Escuela Nacional de Criminalística y Ciencias Forenses",
    year: "2016",
  },
];

export type ProcessStage = {
  number: string;
  title: string;
  description: string;
};

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    title: "Indagación",
    description:
      "La Fiscalía recibe la noticia criminal y adelanta labores de verificación. Puede incluir capturas en flagrancia. Es la etapa donde más urgente es contar con defensa.",
  },
  {
    number: "02",
    title: "Imputación",
    description:
      "La Fiscalía comunica formalmente los cargos ante un juez de control de garantías. Aquí se decide también si hay medida de aseguramiento (posible privación de la libertad durante el proceso).",
  },
  {
    number: "03",
    title: "Investigación y acusación",
    description:
      "La Fiscalía recopila y organiza la evidencia. Si decide seguir adelante, presenta el escrito de acusación; en muchos casos surge la posibilidad de un preacuerdo.",
  },
  {
    number: "04",
    title: "Juicio oral",
    description:
      "Se practican las pruebas ante un juez de conocimiento y se debate la responsabilidad penal. Termina con sentencia absolutoria o condenatoria.",
  },
];

export type Area = {
  slug: string;
  title: string;
  short: string;
  description: string;
  bullets: string[];
};

export const AREAS: Area[] = [
  {
    slug: "defensa-penal",
    title: "Defensa penal",
    short: "Defensa técnica en todas las etapas del proceso penal.",
    description:
      "Representación del investigado o procesado desde la indagación hasta el juicio: control de garantías, audiencias de imputación y medida de aseguramiento, negociación de preacuerdos, y juicio oral cuando el caso lo exige.",
    bullets: [
      "Acompañamiento desde la captura o la primera citación",
      "Audiencias de legalización, imputación y medida de aseguramiento",
      "Análisis y negociación de preacuerdos y aceptación de cargos",
      "Representación en juicio oral",
    ],
  },
  {
    slug: "representacion-de-victimas",
    title: "Representación de víctimas",
    short: "Representación judicial de víctimas y sus familias.",
    description:
      "Constitución como víctima dentro del proceso penal, participación en audiencias, solicitud de medidas de protección y gestión del incidente de reparación integral.",
    bullets: [
      "Constitución como víctima y acceso al expediente",
      "Participación en audiencias e incidentes procesales",
      "Solicitud de medidas de protección",
      "Incidente de reparación integral",
    ],
  },
  {
    slug: "criminalidad-organizada",
    title: "Criminalidad organizada y delitos complejos",
    short: "Concierto para delinquir, lavado de activos y estructuras criminales.",
    description:
      "Defensa y asesoría en investigaciones de mayor complejidad técnica y probatoria — concierto para delinquir, lavado de activos, extorsión y delitos asociados a estructuras criminales — con conocimiento directo de cómo la Fiscalía construye estos casos.",
    bullets: [
      "Concierto para delinquir y estructuras criminales",
      "Lavado de activos y extinción de dominio",
      "Extorsión y delitos conexos",
      "Lectura técnica de la investigación desde la experiencia en la unidad especializada",
    ],
  },
];
