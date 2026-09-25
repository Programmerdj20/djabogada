<?php
/**
 * Endpoint del formulario de contacto — recibe el POST de /contacto,
 * valida, aplica un límite básico por IP, y envía el correo por SMTP
 * propio del dominio usando PHPMailer. Pensado para hosting compartido
 * de Hostinger, sin dependencias de Composer.
 *
 * Requiere config.php (ver config.example.php) en esta misma carpeta.
 */

declare(strict_types=1);

require __DIR__ . '/php/PHPMailer/Exception.php';
require __DIR__ . '/php/PHPMailer/PHPMailer.php';
require __DIR__ . '/php/PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

function redirect_con_error(string $motivo): never
{
    header('Location: /contacto?error=' . rawurlencode($motivo));
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /contacto');
    exit;
}

$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    exit('Falta configurar config.php a partir de config.example.php.');
}
/** @var array<string, mixed> $config */
$config = require $configPath;

// --- Protección básica anti-abuso -----------------------------------

// 1) Honeypot: un campo oculto que solo un bot llenaría.
if (!empty($_POST['sitio_web'])) {
    // Responder como si todo hubiera ido bien, sin enviar nada.
    header('Location: /contacto?enviado=1');
    exit;
}

// 2) Origen esperado (protección liviana contra envíos externos).
$origin = $_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '';
if (!empty($config['allowed_origin']) && $origin !== '' && !str_starts_with($origin, (string) $config['allowed_origin'])) {
    redirect_con_error('origen_no_valido');
}

// 3) Límite simple por IP: máximo un envío cada 30 segundos.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'desconocida';
$lockFile = sys_get_temp_dir() . '/contacto_' . md5($ip) . '.lock';
if (file_exists($lockFile) && (time() - filemtime($lockFile)) < 30) {
    redirect_con_error('demasiadas_solicitudes');
}
touch($lockFile);

// --- Validación de campos --------------------------------------------

$nombre = trim((string) ($_POST['nombre'] ?? ''));
$telefono = trim((string) ($_POST['telefono'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$area = trim((string) ($_POST['area'] ?? ''));
$mensaje = trim((string) ($_POST['mensaje'] ?? ''));
$autorizacion = isset($_POST['autorizacion_datos']);

if ($nombre === '' || $telefono === '' || $mensaje === '' || !$autorizacion) {
    redirect_con_error('campos_incompletos');
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    redirect_con_error('correo_invalido');
}

$areasValidas = [
    '' => 'No especificada',
    'defensa-penal' => 'Defensa penal',
    'representacion-de-victimas' => 'Representación de víctimas',
    'criminalidad-organizada' => 'Criminalidad organizada y delitos complejos',
    'asesoria-penal-estrategica' => 'Asesoría penal estratégica',
];
$areaLabel = $areasValidas[$area] ?? 'No especificada';

// --- Envío del correo ---------------------------------------------------

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = (string) $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = (string) $config['smtp_user'];
    $mail->Password = (string) $config['smtp_pass'];
    $mail->SMTPSecure = (string) $config['smtp_secure'];
    $mail->Port = (int) $config['smtp_port'];
    $mail->CharSet = 'UTF-8';

    $mail->setFrom((string) $config['from_email'], (string) $config['from_name']);
    $mail->addAddress((string) $config['to_email'], (string) $config['to_name']);
    $mail->addReplyTo($email, $nombre);

    $mail->isHTML(true);
    $mail->Subject = 'Nueva solicitud de consulta — ' . $nombre;
    $mail->Body = sprintf(
        '<h2>Nueva solicitud desde el sitio web</h2>
        <p><strong>Nombre:</strong> %s</p>
        <p><strong>Teléfono/WhatsApp:</strong> %s</p>
        <p><strong>Correo:</strong> %s</p>
        <p><strong>Área relacionada:</strong> %s</p>
        <p><strong>Mensaje:</strong><br>%s</p>
        <hr><p style="color:#888;font-size:12px;">Autorización de tratamiento de datos: aceptada. IP: %s</p>',
        htmlspecialchars($nombre, ENT_QUOTES, 'UTF-8'),
        htmlspecialchars($telefono, ENT_QUOTES, 'UTF-8'),
        htmlspecialchars($email, ENT_QUOTES, 'UTF-8'),
        htmlspecialchars($areaLabel, ENT_QUOTES, 'UTF-8'),
        nl2br(htmlspecialchars($mensaje, ENT_QUOTES, 'UTF-8')),
        htmlspecialchars($ip, ENT_QUOTES, 'UTF-8')
    );
    $mail->AltBody = "Nombre: $nombre\nTeléfono: $telefono\nCorreo: $email\nÁrea: $areaLabel\n\nMensaje:\n$mensaje";

    $mail->send();

    header('Location: /contacto?enviado=1');
    exit;
} catch (PHPMailerException $e) {
    error_log('Error enviando formulario de contacto: ' . $mail->ErrorInfo);
    redirect_con_error('error_envio');
}
