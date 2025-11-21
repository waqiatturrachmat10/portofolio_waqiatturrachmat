<?php
session_start();

function clean($s){ return trim(htmlspecialchars($s)); }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  exit('Method not allowed');
}

if (empty($_POST['csrf']) || $_POST['csrf'] !== ($_SESSION['csrf'] ?? '')) {
  http_response_code(403);
  exit('Invalid CSRF token');
}

$name = clean($_POST['name'] ?? '');
$email = filter_var($_POST['email'] ?? '', FILTER_VALIDATE_EMAIL);
$message = clean($_POST['message'] ?? '');

if (!$name || !$email || !$message) {
  $_SESSION['flash'] = 'Mohon isi semua field dengan benar.';
  header('Location: index.php#contact');
  exit;
}

// send mail (simple): ganti $to dengan email kamu
$to = 'your.email@example.com';
$subject = "Pesan dari portofolio: $name";
$body = "Nama: $name\nEmail: $email\n\nPesan:\n$message\n";
$headers = "From: $email\r\nReply-To: $email\r\n";

$sent = @mail($to, $subject, $body, $headers);

if ($sent) {
  $_SESSION['flash'] = 'Pesan terkirim, terima kasih!';
} else {
  $_SESSION['flash'] = 'Terjadi masalah saat mengirim pesan. (cek konfigurasi mail server)';
}

header('Location: index.php#contact');
exit;
