<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

$file = __DIR__ . '/chat-data.json';

function readMessages($file) {
  if (!file_exists($file)) {
    return [];
  }
  $raw = file_get_contents($file);
  $data = json_decode($raw, true);
  return is_array($data) ? $data : [];
}

function writeMessages($file, $messages) {
  // keep only the 30 most recent
  if (count($messages) > 30) {
    $messages = array_slice($messages, -30);
  }
  file_put_contents($file, json_encode($messages, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT), LOCK_EX);
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
  echo json_encode(readMessages($file), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
  exit;
}

if ($method === 'POST') {
  $input = json_decode(file_get_contents('php://input'), true);
  if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON']);
    exit;
  }

  // Clear action
  if (isset($input['action']) && $input['action'] === 'clear') {
    writeMessages($file, []);
    echo json_encode(['ok' => true, 'cleared' => true]);
    exit;
  }

  // New message
  $user = isset($input['user']) ? trim(substr($input['user'], 0, 40)) : 'anonyme';
  $message = isset($input['message']) ? trim(substr($input['message'], 0, 300)) : '';

  if ($message === '') {
    http_response_code(400);
    echo json_encode(['error' => 'Empty message']);
    exit;
  }

  $messages = readMessages($file);
  $messages[] = [
    'user' => $user === '' ? 'anonyme' : $user,
    'message' => $message,
    'ts' => date('c')
  ];
  writeMessages($file, $messages);

  echo json_encode(['ok' => true]);
  exit;
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed']);
