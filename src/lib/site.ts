// Central facts about the site and the person it represents.
// Every claim here must be verifiable against PRODUCT.md / the CV on file.
// Nothing here is invented: no case counts, no review scores, no press.

export const SITE = {
  name: "Daniela Jaramillo",
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
  { label: "Servicios", href: "/servicios" },
  { label: "Proceso penal", href: "/proceso-penal" },
  { label: "Contacto", href: "/contacto" },
];

export type TimelineEntry = {
  range: string;
  title: string;
  org: string;
  detail: string;
};

// Chronology as recorded on file, in Daniela's own words (perfil.astro). No
// case specifics are named (reserva sumarial), and nothing is claimed beyond
// what she wrote herself — no functions, no dates beyond the range, no
// SPOA/policía judicial detail.
export const TIMELINE: TimelineEntry[] = [
  {
    range: "2018 — 2026",
    title: "Fiscalía General de la Nación",
    org: "Dirección Especializada contra las Organizaciones Criminales (DECOC)",
    detail:
      "Experiencia en investigaciones y actuaciones propias del proceso penal relacionadas con fenómenos de criminalidad organizada, participando en el análisis jurídico de casos complejos y en diversas actuaciones asociadas a la investigación penal.",
  },
];

export type Credential = {
  title: string;
  org: string;
  detail?: string;
};

// As written by Daniela for perfil.astro. No years beyond what she gave
// (only the EAFIT title date), no T.P., no idiomas, no diplomados.
export const CREDENTIALS: Credential[] = [
  {
    title: "Magíster en Derecho Procesal Penal y Teoría del Delito",
    org: "Universidad Autónoma Latinoamericana — UNAULA",
  },
  {
    title: "Especialista en Derecho Procesal Penal",
    org: "Universidad Autónoma Latinoamericana — UNAULA",
  },
  {
    title: "Abogada",
    org: "Universidad EAFIT",
    detail: "Título profesional obtenido en marzo de 2023.",
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
      "La Fiscalía recibe la noticia criminal y adelanta actos de verificación para establecer si ocurrió un delito y quién podría ser responsable. Esta es una etapa clave para ejercer una defensa temprana.",
  },
  {
    number: "02",
    title: "Imputación",
    description:
      "La Fiscalía comunica formalmente los hechos atribuidos a una persona ante un juez de control de garantías. En esta etapa también pueden solicitarse medidas de aseguramiento.",
  },
  {
    number: "03",
    title: "Acusación",
    description:
      "Si existen elementos suficientes para sustentar la responsabilidad penal, la Fiscalía presenta el escrito de acusación y el proceso avanza hacia la fase de juzgamiento.",
  },
  {
    number: "04",
    title: "Juicio oral",
    description:
      "Las partes presentan y controvierten las pruebas ante un juez de conocimiento, quien finalmente decide mediante sentencia absolutoria o condenatoria.",
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
    title: "Defensa y litigio penal",
    short: "Defensa técnica en todas las etapas del proceso penal.",
    description:
      "Representación y defensa técnica en todas las etapas del proceso penal, comprendiendo actuaciones preliminares, audiencias de conocimiento, recursos y acciones constitucionales, con estrategias jurídicas diseñadas a partir del análisis integral del caso, la evidencia y los objetivos de defensa de cada cliente.",
    bullets: [
      "Actuaciones preliminares y audiencias de conocimiento",
      "Recursos y acciones constitucionales",
      "Estrategia diseñada a partir del análisis integral del caso y la evidencia",
      "Objetivos de defensa definidos para cada cliente",
    ],
  },
  {
    slug: "criminalidad-organizada",
    title: "Delitos de especial complejidad",
    short: "Investigaciones de alta complejidad frente a criminalidad organizada.",
    description:
      "Asesoría y representación jurídica en investigaciones y procesos penales de alta complejidad, que requieren un análisis estratégico de la evidencia, la estructura de la investigación y la construcción de una defensa técnica especializada frente a fenómenos de criminalidad organizada y otras conductas de especial relevancia jurídico-penal.",
    bullets: [
      "Análisis estratégico de la evidencia y de la estructura de la investigación",
      "Defensa técnica especializada frente a criminalidad organizada",
      "Atención a conductas de especial relevancia jurídico-penal",
    ],
  },
  {
    slug: "asesoria-penal-estrategica",
    title: "Asesoría penal estratégica",
    short: "Acompañamiento preventivo frente a situaciones con posibles implicaciones penales.",
    description:
      "Acompañamiento jurídico especializado para la prevención, análisis y gestión de situaciones con posibles implicaciones penales, orientado a la toma de decisiones informadas y a la protección de los derechos e intereses de cada cliente.",
    bullets: [
      "Prevención, análisis y gestión de situaciones con posibles implicaciones penales",
      "Acompañamiento para la toma de decisiones informadas",
      "Protección de los derechos e intereses del cliente",
    ],
  },
  {
    slug: "representacion-de-victimas",
    title: "Representación de víctimas",
    short: "Representación judicial de víctimas y sus familias.",
    description:
      "Acompañamiento y representación jurídica integral de víctimas de conductas punibles, orientado a la protección de sus derechos, su participación efectiva dentro del proceso penal y la búsqueda de verdad, justicia y reparación.",
    bullets: [
      "Protección de los derechos de las víctimas",
      "Participación efectiva dentro del proceso penal",
      "Búsqueda de verdad, justicia y reparación",
    ],
  },
];
