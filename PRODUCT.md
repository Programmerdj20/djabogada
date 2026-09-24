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
- Activos disponibles: una foto de perfil de estudio (`img/fotoperfil.png`), cuatro imágenes de trabajo aportadas por el cliente para el sitio (`src/assets/images/daniela-escritorio.webp`, `daniela-expediente.webp`, `daniela-juicio.webp`, `daniela-juntas.webp`) y su hoja de vida en PDF. No hay casos, ni reseñas, ni contenido digital previo: todo el copy y contenido inicial debe ser autorado a nivel de producción por el equipo de desarrollo, marcado internamente como reemplazable donde dependa de material real futuro (sesión fotográfica, dirección, reseñas). Las cuatro imágenes de trabajo son material ilustrativo: no documentan casos ni diligencias concretas, y cualquier rótulo legible que traigan incrustado se excluye del encuadre (ver `DESIGN.md`).
- Datos que nunca deben publicarse: cédula, fecha de nacimiento, dirección residencial, celulares de referencias personales, e imágenes de la tarjeta profesional o la cédula. El número de tarjeta profesional ([reservado]) sí es publicable y verificable en el Registro Nacional de Abogados.
- Alcance del sitio: multipágina completo (home, perfil, áreas de práctica, guía de proceso penal, blog jurídico, contacto, legales), no una landing de una sola página.
- Hosting: Hostinger (shared, con PHP disponible), dominio `danielajaramilloabogada.com` ya comprado allí.

## Brand Commitments

- Nombre y marca: Dra. Daniela Jaramillo — wordmark de marca personal, sin apellido. Reemplaza "Daniela Jaramillo Herrera" en todo el sitio (título, footer, JSON-LD, avisos legales) por decisión explícita del cliente; el nombre legal completo sigue siendo el registrado ante el Consejo Seccional de la Judicatura de Antioquia para la tarjeta profesional. Excepción puntual: el monograma de iniciales "DJ" aportado por la clienta (`img/favi.svg`) sí se usa, pero únicamente como favicon — nunca como wordmark de header ni en el cuerpo del sitio, donde sigue rigiendo "sin monograma de iniciales".
- Tono: de alto nivel y explícitamente costoso — "que muestre que contratar a la doctora Daniela cuesta, no es barato, pero resuelve tu situación" (instrucción literal del cliente). No es un tono de urgencia agresiva ni "abogado 24/7" genérico; es glamour y presencia deliberados, no ansiedad.
- Referencia de nivel aportada por el cliente: sharoncastilloabogados.com, como nivel de pulido y fotografía humana a igualar — no como techo de ambición; el cliente pidió explícitamente ir más lejos en lujo/glamour que esa referencia.
- **Dirección visual de lujo — marfil dominante, oro como material, negro solo en texto (reemplaza dos direcciones anteriores tras dos rechazos explícitos):** el sistema "grafito institucional" (fondo navy-charcoal, oro reservado solo a verificación/enlaces, Newsreader + IBM Plex) fue rechazado por el cliente al verlo construido: "es oscura, no tiene presencia, no hay glamour, no es luxury". El cliente aportó un board de identidad de marca propio (paleta negro `#0F0F10` / oro `#C9A96A` / marfil `#EDE8E1` exacta, tipografías Playfair Display + Montserrat, con el propio board etiquetando negro como "principal/texto" y beige como "fondos/soportes"). Una primera implementación de ese board invirtió esos roles — negro como fondo dominante de sección — y el cliente la rechazó de nuevo, de forma enfática: "no quiero negro [...] es UNA MUJER [...] debiste usar los colores claros". La dirección vigente lee el board literalmente: **marfil es el fondo de toda sección del sitio, sin excepción; negro nunca es color de fondo, solo texto y detalle fino**; oro es el material de marca (filetes, bordes, relleno del botón primario). Ver `DESIGN.md` para el sistema resultante. Esta dirección es vinculante para cualquier trabajo visual futuro en el sitio — en particular, ningún fondo de sección negro, sin excepción, salvo que el cliente lo pida explícitamente en una instrucción futura.

## Evidence on Hand

- Hoja de vida completa (`assets/HOJA DE VIDA DANIELA JARAMILLO HERRERA .pdf`): perfil, experiencia laboral con fechas y funciones detalladas, formación académica, idiomas, referencias profesionales (no publicables como contacto directo, solo como texto de referencia si se decide incluir), diplomas (Magíster UNAULA 2026, Especialización UNAULA 2024, título de Abogada EAFIT 2023, diplomados EAFIT y ENCCF), tarjeta profesional y cédula (esta última nunca se publica).
- Una foto de perfil profesional (`img/fotoperfil.png`, retrato de estudio, fondo blanco) — no se usa en el sitio tras el cambio de hero; se conserva como activo.
- Cuatro imágenes de trabajo aportadas por el cliente, ya integradas vía `src/assets/images/` (optimizadas con sharp): `daniela-escritorio` (hero de home, contacto, víctimas), `daniela-expediente` (asimetría del home, áreas, artículos), `daniela-juicio` (proceso penal, defensa penal) y `daniela-juntas` (perfil, criminalidad organizada). Son ilustrativas; los rótulos incrustados ("CASO: ESTADO vs. RAMIREZ…", escudo del Congreso) se recortan fuera de cuadro.
- Ausencia confirmada: no hay reseñas de clientes, no hay casos propios publicables, no hay prensa, no hay contenido digital previo, no hay dirección de oficina confirmada. Ninguno de estos debe fabricarse; el sitio se construye sin ellos y queda listo para incorporarlos.

## Product Principles

1. **La asimetría de información es la única ventaja no copiable.** Todo el sitio se organiza alrededor de "construyó acusaciones, ahora las desarma" — nunca alrededor de años de litigio o casos ganados que no existen.
2. **Honestidad cronológica y de reserva sumarial ante todo.** Ningún dato, cifra o testimonio se inventa; ninguna alusión a casos concretos de su paso por la Fiscalía.
3. **El sitio gana por tesis y oficio, no por volumen de prueba social todavía inexistente**, y queda arquitectónicamente listo para absorberla (reseñas, prensa, oficina) sin rediseño.
4. **La persona que llega está asustada y decide rápido.** Cada página resuelve primero "¿qué me está pasando y qué puedo hacer ya?" antes de vender autoridad.
5. **Contenido propio (blog jurídico) es el motor real de posicionamiento**, tanto en buscadores tradicionales como en motores de IA, no un adorno.

## Accessibility & Inclusion

WCAG 2.2 AA como estándar mínimo, explícitamente por ser un servicio profesional/legal donde la claridad y el acceso equitativo importan (formularios con labels y errores asociados, contraste verificado, navegación por teclado, `prefers-reduced-motion`).
