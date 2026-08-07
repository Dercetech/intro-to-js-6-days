<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

$pagesByCategory = [
  'weird_dreamcore_analog_horror_liminal' => [
    'thearchiveinbetween',
    'anotherworldcore',
    'weirdcoreig',
    'gorgon_soup',
    'darkcandyhorror',
    'chernobylzone',
    'mysteriesoftheabandoned',
    'unsettling_content',
    'tatahorrordovnar',
    'lost_archive_ru',
    'unearthly.hub'
  ],
  'fun_crap' => [
    'daily.dark.laughs',
    'dadsaysjokes',
    'uploads_of_fun',
    'spicefiesta2.0',
    'memezdreamin'
  ]
];

$choices = [];
foreach ($pagesByCategory as $category => $handles) {
  foreach ($handles as $handle) {
    $choices[] = [
      'url' => 'https://www.instagram.com/' . $handle . '/',
      'category' => $category
    ];
  }
}

$choice = $choices[array_rand($choices)];
echo json_encode($choice, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
