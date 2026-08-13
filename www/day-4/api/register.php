<?php
header('Content-Type: application/json; charset=utf-8');

$email = isset($_POST['email']) ? trim($_POST['email']) : '';

if ($email === '') {
  http_response_code(400);
  echo json_encode([
    'ok' => false,
    'message' => 'A valid email is required.'
  ]);
  exit;
}

echo json_encode([
  'ok' => true,
  'message' => "Your email address {$email} has been registered to get more spam from us."
]);