---
version: 2
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

## Scope

Home (`/`), Persuade. Cuarta vuelta: revierte "cero texto en el hero" solo en desktop —instrucción explícita del cliente, confirmada tras preguntarlo directamente por lo vinculante que era el registro anterior—. El hero desktop pasa a llevar título y descripción visibles, con la placa de retrato movida a la derecha. Móvil no se toca más allá de acortar el copy de los botones.

## Audience, job, action, proof, constraints

Persona en Medellín/Antioquia enfrentando una situación penal, en alto estrés, decidiendo rápido a quién escribir. El texto nuevo es deliberadamente corto (un título de posicionamiento + una frase de descripción) para no volver a caer en el tono de venta agresivo que el sistema visual rechaza; los dos accesos de contacto siguen siendo la acción principal.

## Direction contract

**THESIS:** el hero desktop ahora nombra explícitamente lo que ofrece ("Defensa penal estratégica") en vez de dejar que la sola composición cargue con ese trabajo. El resto del sistema —marfil dominante, oro como material, negro solo en texto, Playfair Display + Montserrat— no cambia.

**OWN-WORLD:** el sistema de DESIGN.md sin cambios de paleta/tipografía. El hero desktop pasa de "placa centro-derecha + columna de botones" a dos columnas clásicas: texto a la izquierda (filete de oro, `<h2>` visual "Defensa penal estratégica", párrafo lead, dos botones en fila), placa enmarcada a la derecha — la placa conserva su tratamiento exclusivo de home (passe-partout desplazado, ahora hacia arriba-derecha en vez de arriba-izquierda, siguiendo el lado hacia donde se movió la foto). El H1 real sigue `sr-only`, alojado en el bloque `lg:hidden` de móvil, así que sigue habiendo un único H1 expuesto por viewport.

**STORY:** el visitante ve, en desktop, un título y una frase de posicionamiento a la izquierda con los dos accesos de contacto en fila justo debajo, y la placa de retrato a la derecha; en móvil sigue viendo solo la foto a pantalla completa con los mismos dos accesos abajo (copy acortado: "Agenda tu cita" / "Cuéntanos"). El resto de la página (¿Qué te está pasando? y Áreas de práctica) no cambia.

**FIRST VIEWPORT:** en desktop, grid de 12 columnas: columna de texto (col-span-6) con filete + `<h2>` + párrafo + dos botones en fila (`!px-6`, `flex-nowrap`, para que no se apilen); placa enmarcada (`daniela-hero-plate.webp`, `aspect-[2/3]`) en col-start-7 col-span-6. Móvil sin cambios de composición respecto a la vuelta anterior, solo copy de botones acortado.

**FORM:** "Texto izquierda + placa derecha" — reutiliza el vocabulario de placa ya aprobado (mismo marco, mismo passe-partout, solo el lado cambia) en vez de introducir un tratamiento fotográfico nuevo.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved decisions

Ninguna. El usuario confirmó explícitamente revertir "cero texto en el hero" solo para desktop, dio el título/descripción/copy de botones literal, y pidió los dos botones en una fila (no en bloque apilado) tras ver la primera versión.
