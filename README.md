# danielajaramilloabogada.com

Sitio web de Daniela Jaramillo Herrera, abogada penalista en Medellín. Astro + Tailwind CSS,
salida 100% estática, con un endpoint PHP para el formulario de contacto pensado para hosting
compartido en Hostinger.

## Desarrollo local

```bash
npm install
npm run dev        # http://localhost:4321
```

```bash
npm run build      # genera ./dist
npm run preview    # sirve ./dist localmente para verificar la build final
```

## Estructura

```
src/
  components/     Piezas reutilizables (Header, AreaCard, Timeline, ContactForm, ...)
  layouts/        Layout.astro (raíz)
  lib/site.ts     Datos centrales del sitio (contacto, áreas, cronología, credenciales)
  pages/          Rutas del sitio
  styles/         Tokens de diseño y estilos base (Tailwind v4, @theme)
public/
  contacto.php        Endpoint del formulario (PHPMailer + SMTP propio)
  config.example.php  Plantilla de credenciales SMTP — copiar a config.php
  php/PHPMailer/      Librería PHPMailer vendorizada (sin Composer)
  .htaccess           Reglas de Apache para Hostinger
```

## Poner en marcha el formulario de contacto

1. En hPanel de Hostinger, crea el buzón `contacto@danielajaramilloabogada.com`
   (Correo → Cuentas de correo).
2. Copia `public/config.example.php` a `public/config.php` y completa host,
   usuario y contraseña SMTP reales (los datos exactos están en hPanel →
   Correo → Configurar cliente de correo). **`config.php` nunca se sube a
   git** — está en `.gitignore` a propósito.
3. Verifica que `public/.htaccess` bloquea el acceso directo a `config.php`
   (ya viene configurado).

## Desplegar a Hostinger

```bash
./deploy.sh              # instala, construye y deja todo listo en ./dist
./deploy.sh --ftp         # además sube por FTP (requiere lftp y variables de entorno)
```

Variables de entorno para `--ftp`:

```bash
export HOSTINGER_FTP_HOST=...
export HOSTINGER_FTP_USER=...
export HOSTINGER_FTP_PASS=...
# opcional, por defecto /public_html
export HOSTINGER_FTP_REMOTE_DIR=/public_html
```

Sin `--ftp`, sube manualmente el contenido de `./dist` a `public_html` desde
el Administrador de Archivos de hPanel o por FTP/SFTP con tu cliente
preferido. Recuerda subir también `config.php` (no viaja en `dist/` si no
existe localmente al momento del build — el script `deploy.sh` avisa si
falta).

## Pendientes antes de considerar el sitio "completo"

- [ ] Crear el buzón de correo y `config.php` con credenciales reales.
- [ ] Confirmar o descartar una dirección de oficina física; si existe,
      añadir `LocalBusiness` a los datos estructurados y a Google Business
      Profile (arquitectura ya preparada para esto en `src/lib/site.ts`).
- [ ] Sesión fotográfica profesional — hoy el sitio corre con una sola foto.
- [ ] Validación de los textos de Aviso legal, Política de privacidad y
      Política de cookies por la propia Daniela antes de publicar.
- [ ] Configurar Google Search Console y enviar `sitemap-index.xml`.
- [ ] Configurar Google Business Profile cuando exista dirección.

## Principios de contenido (no romper al editar)

- Ningún dato, cifra o testimonio inventado: cero "casos ganados", cero
  reseñas fabricadas, cero estadísticas de éxito.
- Nunca se hace referencia a casos concretos del paso de Daniela por la
  Fiscalía General de la Nación (reserva de la investigación).
- Nunca se publican datos personales sensibles: cédula, fecha de nacimiento,
  dirección residencial, ni las imágenes de la tarjeta profesional o la
  cédula. El número de T.P. [reservado] sí es público y verificable.

Ver `PRODUCT.md` para el resto del contexto de producto y `DESIGN.md` para
el sistema visual ("El expediente") una vez generado al cierre del proyecto.
