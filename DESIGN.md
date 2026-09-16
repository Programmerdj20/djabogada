# Design — El expediente

<!-- impeccable:design-schema 1 -->

Sistema visual del sitio de Daniela Jaramillo Herrera. Registrado desde el mundo construido, no
desde una intención previa a la build.

## Dirección

**Tesis:** el proceso penal de un visitante se convierte, desde el primer instante, en un
expediente — y este sitio está construido literalmente como uno. Rechaza deliberadamente el
lenguaje visual estándar del sector (azul marino, dorado, balanza, mazo, columnas) que comparten
Sharon Castillo Abogados y los seis bufetes penalistas de Medellín analizados como referencia
competitiva.

**Origen:** dirección derivada por concept-seed (seed key `4f44e464`, modo `persuade`). El dado
asignó "cadena de custodia" (notación forense); el usuario fijó en su lugar "El expediente"
(rango 1 de la lista derivada) como IMPECCABLE'S PICK — una elección de usuario siempre gana sobre
la tirada. Build code-led: no hubo generación de imágenes disponible en la sesión, por lo que no
existe comp aprobado; la ronda de dirección se resolvió con tarjetas de texto/ASCII en lugar de
una página de decisión visual.

## Paleta

Estrategia: paleta completa de 3 roles nombrados (apropiado para una superficie Persuade).

| Rol | Token | Uso |
|---|---|---|
| **Ink** (fondo dominante) | `--color-ink-950` … `--color-ink-50` | Fondo oscuro tipo tinta/expediente cerrado. Secciones alternas, navegación, footer. |
| **Manila** (superficie) | `--color-manila-50` … `--color-manila-900` | Paneles tipo carpeta de papel manila: tarjetas, formularios, secciones de lectura larga. |
| **Sello** (acento único) | `--color-sello-100` … `--color-sello-800` | Verificación y acción: CTA primario, sello T.P., estados activos, enlaces sobre fondo oscuro. Nunca decorativo, siempre semántico (verificar / actuar). |
| **Brass** (hardware, uso mínimo) | `--color-brass-400`, `--color-brass-600` | Detalle de "clip" metálico junto al logo y la foto. No un color de marca; un acento de herraje, deliberadamente escaso. |

Todos los tokens viven en `src/styles/global.css` bajo `@theme` (Tailwind v4, CSS-first). Ningún
color hexadecimal suelto fuera de ese bloque.

## Tipografía

| Rol | Familia | Razón |
|---|---|---|
| Display (H1–H3, nombre, títulos) | Newsreader Variable | Registro serif documental — autoridad sin caer en el editorial-crema genérico; se renderiza sobre fondo oscuro, no sobre papel crema, para evitar el "rendering" por defecto del género. |
| Cuerpo / UI | IBM Plex Sans Variable | Lectura larga (artículos, formularios) y navegación. |
| Folio / códigos / fechas | IBM Plex Mono | Kickers ("EXPEDIENTE N.° 001"), radicados, fechas, etiquetas — imita el monoespaciado de un sello o etiqueta de evidencia. Uso funcional, no decorativo. |

Autohospedadas vía `@fontsource(-variable)`, sin Google Fonts en runtime.

## Componentes y lenguaje de forma

- **Navegación como pestañas de carpeta** (`Header.astro`): cada ítem del menú se dibuja como una
  pestaña físicamente "levantada" cuando está activa, sobre una barra de fondo ink-950.
- **Kicker de folio** (`.folio-kicker`, mono, versalitas, tracking amplio): antecede casi todo
  título de sección — "EXPEDIENTE N.° 00X" — dispositivo recurrente que numera el sitio como si
  fueran folios de un mismo expediente.
- **Panel manila**: tarjetas, formularios y secciones de lectura larga usan `manila-100` sobre
  borde `manila-300` — la superficie de "papel" del sistema.
- **Sello de verificación** (`SealBadge.astro`): sello SVG circular con texto curvo (registro
  nacional de abogados, número de T.P., seccional) — todo dato real y verificable, nunca
  decorativo. Aparece junto a la foto de perfil.
- **Nota de margen** (`.prose-expediente blockquote`): caja con etiqueta mono "NOTA", bordeada en
  los cuatro lados — deliberadamente NO una barra de acento de color a un lado (antipatrón de IA
  detectado y corregido durante esta build).
- **Cronología foliada** (`Timeline.astro`): línea vertical con marcadores, usada en `/perfil`
  sobre fondo oscuro.
- **Diagrama de proceso** (`ProcessDiagram.astro`): las cuatro etapas del proceso penal como
  fichas numeradas en grilla.
- **FAQ como consulta numerada** (`FAQ.astro`): `<details>/<summary>` nativo, cada pregunta
  antecedida por "P.01", "P.02"…

## Variante clara/oscura por sección

El sitio alterna secciones `bg-ink-950/900` y `bg-manila-50/100` como ritmo de página, no como
modo de tema conmutable. La clase `.prose-expediente.on-dark` existe específicamente para el
contenido de lectura larga que cae dentro de una sección oscura (ver `/proceso-penal`) sin heredar
por error los colores pensados para la superficie manila clara — bug real encontrado y corregido
en esta build.

## Movimiento

Mínimo y utilitario: transición de color en enlaces/botones, traslación sutil en hover de
tarjetas, rotación del "+" en FAQ al abrir. Todo respeta `prefers-reduced-motion`. No hay motion
decorativo de relleno.

## Accesibilidad

WCAG 2.2 AA como piso. Skip link, landmarks semánticos, foco visible (`outline` sello sobre
cualquier fondo), formulario con labels asociados y mensajes de error visibles, contraste
verificado por inspección visual en cada combinación fondo/texto usada.

## Qué preserva un futuro cambio

- El acento sello-rojo es semántico (verificación/acción): no debe convertirse en decorativo ni
  duplicarse con un segundo color de acento.
- La numeración de folio (`EXPEDIENTE N.° 0X`) es un hilo conductor de todo el sitio — cualquier
  página nueva hereda un número de folio correlativo, no un breadcrumb genérico.
- Ningún dato, cifra o testimonio inventado. Ver `PRODUCT.md` → Evidence on Hand y Product
  Principles.
- El sello de verificación (`SealBadge.astro`) solo muestra datos reales y verificables (T.P.,
  consejo seccional). No se convierte en una insignia de "reseñas" o "casos ganados" fabricada.
