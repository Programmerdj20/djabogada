---
version: 1
slug: "src-pages-perfil-astro"
primary_target: "src/pages/perfil.astro"
related_targets: []
---

# Surface brief — src/pages/perfil.astro

Scope: página completa `/perfil`. Modo: Persuade. Build: code-led (sin generación de imágenes en esta sesión).

Audiencia: persona en Medellín/Antioquia en un momento de urgencia penal, decidiendo a quién contactar. Tarea: convencerla de que Daniela combina criterio interno de la Fiscalía con voz propia y cercana. Contenido real: el texto de perfil entregado por la propia Daniela (primera persona), sin datos inventados. Restricción dura: reserva sumarial, sin cifras/casos, sin T.P., sin "Dra.", sin apellido repetido en badge.

## Direction contract

**THESIS:** el perfil no es una hoja de vida institucional en tercera persona — es la propia voz de Daniela, presentada como una carta editorial firmada, que refuta el registro genérico de "biografía de bufete" con lista de logros.

**OWN-WORLD:** el sistema ya construido (marfil `manila-50/100` como fondo, oro `sello` como material de filete/borde/botón, negro `ink` solo texto, Playfair Display para display, Montserrat para cuerpo/datos). Sin cambios de paleta ni tipografía. La cita destacada usa el mismo lenguaje que `.prose-editorial blockquote` pero como divisor de sección centrado, no como nota al margen.

**STORY:** la visitante llega, ve el hero (foto + nombre + títulos, igual que hoy), lee una frase suya que resume su método de trabajo como puente hacia la carta en primera persona, sigue la carta de tres párrafos, ve una ficha única y compacta de formación + trayectoria (sin cronología de un solo punto), y cierra con el CTA existente.

**FIRST VIEWPORT:** igual que el actual — placa de foto 2/3 con marco `sello-400`/`sello-300` y `shadow-gold` a la derecha en `lg` (arriba en móvil), H1 "Daniela Jaramillo" + filete vertical + "Abogada penalista", lead con su línea de títulos. Sin cambios aquí: solo se conserva.

**FORM:** "Cita que abre paso" — dealt lead, seed key `00d8b06d` (surface, mode persuade, dealt indices 6/2/7).

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Contenido fuente (texto literal de Daniela, estructurar sin reescribir)

Perfil profesional (3 párrafos, primera persona) — ver mensaje del usuario. Cita a destacar (frase más fuerte sobre método): "Mi ejercicio profesional se fundamenta en el estudio riguroso de cada asunto, la construcción de soluciones jurídicas sólidas y el acompañamiento cercano y personalizado durante cada etapa del proceso."

Formación académica: Magíster en Derecho Procesal Penal y Teoría del Delito (UNAULA) · Especialista en Derecho Procesal Penal (UNAULA) · Abogada (Universidad EAFIT, título obtenido en marzo de 2023).

Trayectoria: Fiscalía General de la Nación (2018–2026), Dirección Especializada contra las Organizaciones Criminales (DECOC) — párrafo literal sobre investigaciones y actuaciones del proceso penal.

## Restricciones estrictas de contenido
No incluir: años de los posgrados, T.P. (número ni línea de "vigente"), idiomas, cargo "Asistente de Fiscal", funciones (SPOA, preacuerdos, interrogatorios), Sabaneta, diplomados, la frase-tesis anterior ("Antes de defender, construyó acusaciones…"). El H1/lead del hero y el JSON-LD siguen en tercera persona; el cuerpo (carta + cita) en primera persona, tal cual lo escribió.
