# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro + Tailwind CSS, static output. Chosen by the user directly (not delegated); confirmed sufficient for this project's scope.

## Users

Personas en Medellín y Antioquia enfrentando una situación penal, en tres estados distintos:

1. **Investigado/procesado** — recién citado, capturado, o notificado de una investigación. Llega asustado, con urgencia, buscando entender qué le espera y a quién puede confiarle su libertad.
2. **Víctima o su familia** — busca representación dentro de un proceso penal ya en curso, o para iniciar uno.
3. **Persona o empresa expuesta a criminalidad organizada** — investigada o afectada por estructuras criminales (concierto para delinquir, lavado, extorsión), un terreno más técnico y de mayor exposición reputacional.

Todos llegan mayoritariamente por búsqueda en Google o referidos, en un momento de alto estrés, y deciden rápido a quién contactar.

## Product Purpose

Sitio web profesional para Daniela Jaramillo Herrera, abogada penalista, que la establece como opción seria y de alto nivel en Medellín, genera contactos calificados (consultas agendadas) y sostiene su reputación profesional a largo plazo mediante contenido jurídico propio. Es el punto de partida de su ejercicio privado: no hereda ninguna presencia digital previa.

## Positioning

Daniela pasó ocho años (2018–2026) como Asistente de Fiscal I y IV en la Fiscalía General de la Nación, adscrita a la Dirección Especializada Contra las Organizaciones Criminales (DECOC) de Medellín. En ese rol redactó escritos de acusación (directos y por aceptación de cargos/preacuerdos), acompañó audiencias, entrevistas, declaraciones, interrogatorios y actos urgentes, gestionó el sistema misional SPOA, y emitió órdenes a policía judicial.

Eso es lo que ningún competidor de Medellín puede copiar honestamente: conocimiento del proceso penal desde el lado que construye la acusación, no solo desde el lado que la enfrenta. La posición del sitio es esa asimetría de información, no el volumen de años litigando (que aún no tiene) ni casos ganados (que no puede publicar ni inventar).

## Operating Context

- Ejercicio privado, individual, recién iniciado (papeles de desvinculación de la Fiscalía firmados; tarjeta profesional vigente, T.P. [reservado], Consejo Seccional de la Judicatura de Antioquia).
- Primer contacto casi siempre por WhatsApp o formulario web, en momentos de urgencia (captura, citación, notificación).
- Sin oficina física confirmada aún; sin reseñas públicas, sin casos propios publicables, sin prensa ni testimonios.
- Nominación pendiente a un cargo de Fiscal, prevista para un momento posterior — no condiciona ni restringe este proyecto ni el contenido del sitio.
- Reserva de la investigación: no puede referirse a casos concretos de su paso por la Fiscalía, ni a expedientes o personas involucradas.

## Capabilities and Constraints

- Puede litigar privadamente sin restricción legal, incluyendo casos contra la Fiscalía General de la Nación (desvinculación en firme, sin incompatibilidad del Decreto 196 de 1971 / Ley 1123 de 2007 aplicable a un servidor activo).
- Áreas de práctica a mostrar: defensa penal, representación de víctimas, criminalidad organizada y delitos complejos.
- CTA principal: agendar una consulta, sin mencionar precio en el sitio.
- Contacto inicial: WhatsApp (322 655 5811) + formulario + un email nuevo del dominio propio (pendiente de crear en Hostinger).
- Sin dirección de oficina publicable todavía; la de la hoja de vida es residencial y no debe usarse. La arquitectura debe quedar lista para activar SEO local (Google Business, `LocalBusiness` JSON-LD) cuando exista una dirección real.
- Activos reales disponibles: una foto de perfil (`img/fotoperfil.png`) y su hoja de vida en PDF. No hay fotografía adicional, ni casos, ni reseñas, ni contenido previo: todo el copy y contenido inicial debe ser autorado a nivel de producción por el equipo de desarrollo, marcado internamente como reemplazable donde dependa de material real futuro (sesión fotográfica, dirección, reseñas).
- Datos que nunca deben publicarse: cédula, fecha de nacimiento, dirección residencial, celulares de referencias personales, e imágenes de la tarjeta profesional o la cédula. El número de tarjeta profesional ([reservado]) sí es publicable y verificable en el Registro Nacional de Abogados.
- Alcance del sitio: multipágina completo (home, perfil, áreas de práctica, guía de proceso penal, blog jurídico, contacto, legales), no una landing de una sola página.
- Hosting: Hostinger (shared, con PHP disponible), dominio `danielajaramilloabogada.com` ya comprado allí.

## Brand Commitments

- Nombre y marca: Daniela Jaramillo Herrera, marca personal (no nombre de firma).
- Tono: profesional, minimalista, que inspire jerarquía y confianza — explícitamente pedido por el cliente, sin lenguaje de urgencia agresiva ni "abogado 24/7" genérico.
- Referencia de nivel aportada por el cliente: sharoncastilloabogados.com (evaluada como fuerte por prueba social acumulada — reseñas, prensa, comunidad — que Daniela aún no tiene; no se copia su estructura literal por esa razón).

## Evidence on Hand

- Hoja de vida completa (`assets/HOJA DE VIDA DANIELA JARAMILLO HERRERA .pdf`): perfil, experiencia laboral con fechas y funciones detalladas, formación académica, idiomas, referencias profesionales (no publicables como contacto directo, solo como texto de referencia si se decide incluir), diplomas (Magíster UNAULA 2026, Especialización UNAULA 2024, título de Abogada EAFIT 2023, diplomados EAFIT y ENCCF), tarjeta profesional y cédula (esta última nunca se publica).
- Una foto de perfil profesional (`img/fotoperfil.png`, retrato de estudio, fondo blanco).
- Ausencia confirmada: no hay reseñas de clientes, no hay casos propios publicables, no hay prensa, no hay contenido digital previo, no hay dirección de oficina confirmada. Ninguno de estos debe fabricarse; el sitio se construye sin ellos y queda listo para incorporarlos.

## Product Principles

1. **La asimetría de información es la única ventaja no copiable.** Todo el sitio se organiza alrededor de "construyó acusaciones, ahora las desarma" — nunca alrededor de años de litigio o casos ganados que no existen.
2. **Honestidad cronológica y de reserva sumarial ante todo.** Ningún dato, cifra o testimonio se inventa; ninguna alusión a casos concretos de su paso por la Fiscalía.
3. **El sitio gana por tesis y oficio, no por volumen de prueba social todavía inexistente**, y queda arquitectónicamente listo para absorberla (reseñas, prensa, oficina) sin rediseño.
4. **La persona que llega está asustada y decide rápido.** Cada página resuelve primero "¿qué me está pasando y qué puedo hacer ya?" antes de vender autoridad.
5. **Contenido propio (blog jurídico) es el motor real de posicionamiento**, tanto en buscadores tradicionales como en motores de IA, no un adorno.

## Accessibility & Inclusion

WCAG 2.2 AA como estándar mínimo, explícitamente por ser un servicio profesional/legal donde la claridad y el acceso equitativo importan (formularios con labels y errores asociados, contraste verificado, navegación por teclado, `prefers-reduced-motion`).
