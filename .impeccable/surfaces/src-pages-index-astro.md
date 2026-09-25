---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

## Scope

Home (`/`), Persuade. Tercera vuelta: eleva la presencia del hero (sin agregar texto) y reemplaza el cierre «Recorre el sitio» —que el usuario describió como "un plan turístico, no una abogada penalista"— por una presentación de las áreas de práctica reales.

## Audience, job, action, proof, constraints

Persona en Medellín/Antioquia enfrentando una situación penal, en alto estrés, decidiendo rápido a quién escribir. El usuario aportó dos referencias visuales (plantilla "Clario", legal) explícitamente como referencia de nivel de oficio, no para replicar: sin fondo navy/oscuro (viola la regla vinculante de marfil-como-fondo-de-toda-sección), sin el badge/titular de la referencia, sin su grafismo decorativo de balanza. El hero sigue sin ningún texto —instrucción reiterada dos veces por la clienta—; la mejora es enteramente de composición.

## Direction contract

**THESIS:** la autoridad se construye con composición y contenido real, no con texto de venta. El hero gana presencia por escala y asimetría deliberada, nunca por una palabra nueva; el cierre de página deja de ser un índice de páginas del sitio y pasa a ser una presentación seria de las áreas de práctica de Daniela.

**OWN-WORLD:** el sistema de DESIGN.md sin cambios — marfil dominante, oro como material, negro solo en texto, Playfair Display + Montserrat. El hero conserva la placa enmarcada con passe-partout ya aprobada, pero con una composición asimétrica de 12 columnas: la placa ocupa columnas 3–9 (más grande que antes), los dos accesos de contacto bajan en columna en las columnas 10–12, con un margen izquierdo deliberado (columnas 1–2) como el único vacío de la composición — no vacíos dispersos en varios lugares. El cierre reutiliza el lenguaje de esquineras doradas ya establecido en `AreaCard.astro` (opacity-0 → opacity-100 del corner bracket), aplicado a filas `<details>/<summary>` en vez de tarjetas en grilla — mismo vocabulario, nueva composición de lista editorial.

**STORY:** el visitante ve la placa enmarcada, más grande y desplazada, con los accesos de contacto como un bloque propio junto al marco; baja por «¿Qué te está pasando?» (sin cambios); llega a «Áreas de práctica», un índice de cuatro filas con el nombre de cada área en Playfair grande — al abrir una fila (clic o teclado, `<details>` nativo, funciona sin JS) se revela una descripción corta y el enlace al servicio completo, con las esquineras doradas de marca apareciendo como confirmación; cierra con contacto.

**FIRST VIEWPORT:** en desktop, grid de 12 columnas: placa enmarcada (`daniela-hero-plate.webp`, `aspect-[2/3]`) en columnas 3–9, filete de oro + dos botones en columna en las columnas 10–12, alineados verticalmente al centro de la placa. Sin texto nuevo. Móvil sin cambios respecto a la vuelta anterior (foto a pantalla completa + velo + botones).

**FORM:** "Placa asimétrica + índice expandible" — elegida en una ronda de composición de superficie (seed key `90cd6fd3`, tirada `assigned`, índices dealt 4,2,1). Ajustada tras una primera implementación que dejaba demasiado vacío sin resolver a la derecha: se movió la placa y los botones hacia la derecha del contenedor (columnas 3–12 llenas, solo el margen izquierdo vacío) para que la asimetría se sienta deliberada, no incompleta.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved decisions

Ninguna. El usuario confirmó ambas decisiones (cero texto en el hero, cierre reemplazado por áreas de práctica aunque repita contenido de /servicios) y eligió la composición en la página de decisión. Build code-led (sin generación de imágenes disponible en la sesión).
