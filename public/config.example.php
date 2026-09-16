<?php
/**
 * Copia este archivo como config.php (en la misma carpeta, dentro de
 * public_html en Hostinger) y complétalo con los datos reales del buzón
 * de correo del dominio. config.php NUNCA debe subirse al repositorio;
 * está excluido en .gitignore a propósito.
 *
 * Crea el buzón en hPanel de Hostinger: Correo → Cuentas de correo →
 * contacto@danielajaramilloabogada.com, y usa esas mismas credenciales
 * aquí (host y puerto SMTP están documentados en hPanel → Correo →
 * Configurar cliente de correo).
 */

return [
    // Servidor SMTP del correo del dominio (dato exacto en hPanel).
    'smtp_host' => 'smtp.hostinger.com',
    'smtp_port' => 465,
    'smtp_secure' => 'ssl', // 'ssl' para el puerto 465, 'tls' para el 587

    // Buzón que autentica y envía el correo.
    'smtp_user' => 'contacto@danielajaramilloabogada.com',
    'smtp_pass' => 'CAMBIA_ESTA_CONTRASEÑA',

    // Remitente que verá Daniela y a dónde llegan las solicitudes.
    'from_email' => 'contacto@danielajaramilloabogada.com',
    'from_name' => 'Sitio web — Formulario de contacto',
    'to_email' => 'contacto@danielajaramilloabogada.com',
    'to_name' => 'Daniela Jaramillo Herrera',

    // Dominio permitido para aceptar envíos (protección básica anti-abuso).
    'allowed_origin' => 'https://danielajaramilloabogada.com',
];
