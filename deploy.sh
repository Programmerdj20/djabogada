#!/usr/bin/env bash
# Construye el sitio y prepara dist/ para subir a Hostinger (public_html).
#
# Uso:
#   ./deploy.sh              # solo construye, deja dist/ listo
#   ./deploy.sh --ftp        # además sube dist/ por FTP (requiere lftp y variables de entorno)
#
# Variables de entorno para --ftp:
#   HOSTINGER_FTP_HOST, HOSTINGER_FTP_USER, HOSTINGER_FTP_PASS
#   HOSTINGER_FTP_REMOTE_DIR (por defecto: /public_html)

set -euo pipefail
cd "$(dirname "$0")"

echo "→ Instalando dependencias..."
npm ci

echo "→ Construyendo el sitio (npm run build)..."
npm run build

if [ ! -f "dist/config.php" ] && [ -f "public/config.php" ]; then
  cp public/config.php dist/config.php
fi

if [ ! -f "dist/config.php" ]; then
  echo ""
  echo "⚠️  ADVERTENCIA: no existe public/config.php (credenciales SMTP)."
  echo "   El formulario de contacto no podrá enviar correos hasta que"
  echo "   copies public/config.example.php a public/config.php (o"
  echo "   directamente a dist/config.php) y completes los datos reales."
  echo ""
fi

echo "✓ Build lista en ./dist"

if [ "${1:-}" = "--ftp" ]; then
  : "${HOSTINGER_FTP_HOST:?Falta HOSTINGER_FTP_HOST}"
  : "${HOSTINGER_FTP_USER:?Falta HOSTINGER_FTP_USER}"
  : "${HOSTINGER_FTP_PASS:?Falta HOSTINGER_FTP_PASS}"
  REMOTE_DIR="${HOSTINGER_FTP_REMOTE_DIR:-/public_html}"

  if ! command -v lftp >/dev/null 2>&1; then
    echo "✗ lftp no está instalado. Instálalo (ej. 'sudo dnf install lftp') o sube dist/ manualmente por FTP/hPanel." >&2
    exit 1
  fi

  echo "→ Subiendo dist/ a $HOSTINGER_FTP_HOST:$REMOTE_DIR ..."
  lftp -u "$HOSTINGER_FTP_USER,$HOSTINGER_FTP_PASS" "$HOSTINGER_FTP_HOST" <<EOF
set ftp:ssl-allow true
mirror -R --delete --verbose dist "$REMOTE_DIR"
bye
EOF
  echo "✓ Publicado en Hostinger."
else
  echo "  (sube el contenido de ./dist a public_html manualmente, o vuelve a ejecutar con --ftp)"
fi
