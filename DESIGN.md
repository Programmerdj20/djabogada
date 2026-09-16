# Design — Dra. Daniela Jaramillo

<!-- impeccable:design-schema 1 -->

Sistema visual del sitio de Dra. Daniela Jaramillo. Registrado desde el mundo construido.

## Dirección

**Tesis:** contratar a Dra. Daniela Jaramillo es una decisión de alto nivel. El sitio se presenta
como una maison de servicios legales de élite para una mujer al máximo nivel de su profesión —
marfil luminoso como fondo dominante, oro como material de marca, negro reservado a texto y
detalle fino. No es un despacho institucional oscuro, ni un sitio "dark luxury": es claro, cálido
y de alta gama.

**Origen y revisión:** este sistema pasó por dos correcciones sobre la misma dirección de marca.

1. El registro original del sitio ("grafito institucional": fondo navy-charcoal, oro reservado
   exclusivamente a verificación y enlaces, Newsreader + IBM Plex) fue rechazado por el usuario:
   "es oscura, no tiene presencia, no hay glamour, no es luxury" — el sitio debía mostrar que
   contratar a la doctora Daniela cuesta, no es barato, pero resuelve la situación del visitante.
   El usuario aportó un board de identidad de marca (paleta negro/oro/marfil exacta, Playfair
   Display + Montserrat) y sharoncastilloabogados.com como referencia de nivel de pulido, con una
   instrucción explícita: eliminar el monograma "DJ" del board y usar el nombre completo como
   wordmark, "Dra. Daniela Jaramillo" (reemplazando "Daniela Jaramillo Herrera" en todo el sitio,
   incluido el pie legal).
2. La primera implementación de ese board invirtió sus propios roles de color: usó negro como
   fondo dominante de sección y marfil como superficie secundaria. El board, leído con cuidado,
   dice lo contrario: "negro profundo → principal/texto" y "beige claro → fondos/soportes". El
   usuario lo rechazó de inmediato y con firmeza: nada de negro, es una mujer, usar los colores
   claros. Esta versión corrige esa lectura invertida — literalmente, no como un ajuste de gusto —
   y hace del marfil el fondo de **toda** sección del sitio, sin excepción; el negro no vuelve a
   aparecer como color de fondo en ninguna parte.

Dirección pinneada por el brief del cliente (paleta exacta, tipografías, wordmark sin monograma).
El concept-seed de la skill se ejecutó y quedó registrado (seed key `a7bf7aa9`, modo persuade),
pero el board de marca del cliente prevalece sobre el resultado del roll, conforme a la regla de
la propia skill. Build code-led (sin generación de imágenes disponible en la sesión); el contrato
de dirección completo vive en el comentario HTML de apertura de `Layout.astro`.

## Paleta

Estrategia: paleta completa de 3 roles nombrados (apropiado para una superficie Persuade), con dos
pares semánticos adicionales de un solo uso (éxito/error de formulario). Los nombres de token se
conservan (`ink`, `manila`, `sello`) pero sus roles se leen literalmente del board del cliente.

| Rol | Token | Uso |
|---|---|---|
| **Manila** (marfil/crema) | `--color-manila-50` … `--color-manila-900` | **Fondo de toda sección del sitio, sin excepción.** `manila-50` y `manila-100` alternan como ritmo de página muy sutil (nunca negro). `manila-100` es el `#EDE8E1` exacto del board ("fondos/soportes"). |
| **Ink** (negro profundo) | `--color-ink-950` … `--color-ink-50` | Reservado a texto y detalle fino — nunca fondo de sección. `ink-950` es el `#0F0F10` exacto del board, ahí literalmente etiquetado "principal/texto". Titulares, cuerpo, bordes finos. |
| **Sello** (oro) | `--color-sello-100` … `--color-sello-800` | Material de marca: filetes (`.rule-gold`), bordes, verificación, y el relleno del botón primario (`.btn-gold`). `sello-400` es el `#C9A96A` exacto del board. Negro-sobre-oro es el par de mayor contraste de la paleta, usado deliberadamente para el CTA principal. |
| **Success / Danger** (estados de formulario) | `--color-success-*`, `--color-danger-*` | Únicamente para `ContactForm.astro`. El verde de éxito reutiliza el verde profundo opcional del board (`#1B2E2A`). |

Todos los tokens viven en `src/styles/global.css` bajo `@theme`. Ningún color hexadecimal suelto
fuera de ese bloque. `html { color-scheme: light }` a nivel global, consistente con que el sitio
no tiene ninguna sección oscura.

**Convención de botones:** el botón primario (`.btn-gold`) es siempre relleno oro con texto negro,
mayúsculas trackeadas — funciona igual de bien sobre `manila-50` o `manila-100`, porque el oro es
background-agnostic por diseño. El secundario (`.btn-outline-gold`) es contorno oro que se rellena
de oro al hover.

## Tipografía

| Rol | Familia | Razón |
|---|---|---|
| Display (H1–H3, wordmark, nombre) | Playfair Display Variable | Pinneada por el board de marca del cliente. Serif de alto contraste, terminaciones finas — el registro que el board asocia a "títulos/nombre". |
| Cuerpo / UI / datos reales | Montserrat Variable | Pinneada por el board ("textos/información"). Un sistema de dos familias, no tres: los datos reales (fechas, T.P., numeración) usan Montserrat en mayúsculas trackeadas (`.folio-kicker`) en vez de una fuente monoespaciada. |

Autohospedadas vía `@fontsource-variable`, sin Google Fonts en runtime.

## Componentes y lenguaje de forma

- **Wordmark, no monograma** (`Header.astro`): el nombre completo "Dra. Daniela Jaramillo" en
  Playfair Display junto a un ícono de balanza en línea fina dorada (SVG propio, un solo trazo),
  sobre header marfil. El monograma "DJ" con balanza del board fue explícitamente descartado a
  pedido del cliente. El mismo ícono de balanza, simplificado, es el favicon (`public/favicon.svg`).
- **Filete de oro** (`.rule-gold`, `.rule-gold-solid`): el motivo de marca — una línea fina de 1px,
  nunca un bloque. Aparece sobre el hero y como separador antes del footer. Reemplaza cualquier
  posible metáfora de carpeta o expediente: es puramente material, como el canto dorado de una
  tarjeta grabada.
- **Botón dorado** (`.btn-gold` / `.btn-outline-gold`, en `global.css`): usado en cada CTA del
  sitio (hero, CTAs finales, formulario, 404, WhatsApp flotante).
- **Medallón de verificación** (`SealBadge.astro`): disco marfil con doble anillo en oro y texto
  curvo en Montserrat sobre fondo claro — T.P., registro nacional de abogados, seccional: dato
  real y verificable, nunca decorativo. Los numerales del T.P. usan Playfair Display en negro
  sobre el disco marfil.
- **Tarjetas de área** (`AreaCard.astro`): panel `manila-100` con esquinas de marca (corner
  brackets en oro que aparecen al hover) sobre secciones `manila-50` — una referencia a las
  esquineras de empaque de lujo, no una card genérica de ícono+título+texto.
- **Etapas del proceso penal** (`ProcessDiagram.astro`): numerales grandes en Playfair Display
  sobre un filete superior dorado — el número es información real (orden del proceso), nunca
  decorativo.
- **Nota de margen** (`.prose-editorial blockquote`): caja bordeada en oro en los cuatro lados,
  texto en itálica de Playfair Display, etiqueta "Nota" en Montserrat — nunca una barra de acento
  lateral.
- **Cronología** (`Timeline.astro`): línea vertical en oro con marcadores, sobre fondo marfil.
- **FAQ numerada** (`FAQ.astro`): `<details>/<summary>` nativo, "P.01", "P.02"… — lista real de
  preguntas, el número no es decorativo.

## Ritmo de página

El sitio alterna `manila-50` y `manila-100` como ritmo de página — una variación muy sutil de
crema sobre crema, nunca negro. La escena elegida es deliberada: un estudio privado luminoso, de
día, no un despacho en penumbra. El filete dorado marca cada transición de sección. `on-dark`
sigue definido en `prose-editorial` por si una futura sección oscura puntual lo necesitara, pero
no se usa en ninguna página actual del sitio.

## Movimiento

`hero-rise` para el primer viewport, `[data-reveal]` para contenido bajo el pliegue, disparado al
cargar vía `requestAnimationFrame` — nunca atado a scroll. Hover: tarjetas de área revelan
esquineras doradas y se elevan; botones dorados se elevan y aclaran; enlaces cambian a oro. Todo
respeta `prefers-reduced-motion`.

## Accesibilidad

WCAG 2.2 AA como piso. Skip link, landmarks semánticos, foco visible (`outline` oro sobre
cualquier fondo), formulario con labels asociados, `color-scheme: light` global (consistente con
que no hay secciones oscuras — antes rompía el checkbox y el select nativos cuando el sitio tenía
secciones mixtas, ver historial de commits), estados de éxito/error con colores semánticos propios,
contraste verificado texto a texto: los tonos "silenciados" (`manila-400`) se reservan para bordes
y decoración, nunca para texto — se usa `manila-700` como piso de texto secundario porque
`manila-400` no alcanza 4.5:1 sobre `manila-50`/`manila-100`.

## Qué preserva un futuro cambio

- **El marfil es el fondo de toda sección, sin excepción.** El negro nunca vuelve a ser color de
  fondo — es la corrección más importante de esta revisión y la más vinculante: el usuario la
  pidió de forma explícita y enfática después de ver la versión oscura construida.
- El oro es el material de marca: filete, borde y relleno de botón primario. No introducir un
  segundo color de acento que le compita.
- No reintroducir el monograma "DJ" ni ningún ícono de iniciales — el wordmark completo "Dra.
  Daniela Jaramillo" es la marca.
- No reintroducir la metáfora de expediente/carpeta ni el rojo como acento.
- El movimiento de entrada nunca debe depender de scroll para que el contenido se vuelva visible.
- Ningún dato, cifra o testimonio inventado. Ver `PRODUCT.md` → Evidence on Hand y Product
  Principles.
- El medallón de verificación (`SealBadge.astro`) sólo muestra datos reales y verificables (T.P.,
  consejo seccional). No se convierte en una insignia de "reseñas" o "casos ganados" fabricada.
- Texto secundario/silenciado nunca usa `manila-400` (no cumple 4.5:1) — usar `manila-700` como
  piso mínimo para cualquier texto legible.
