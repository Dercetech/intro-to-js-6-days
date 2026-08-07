<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

$projects = [
  [
    "title" => "Blackthorn Winter",
    "url" => "https://store.steampowered.com/app/2378140/Blackthorn_Winter/",
    "studio" => "Dercetech"
  ],
  [
    "title" => "Sorry for Intruding",
    "url" => "https://store.steampowered.com/app/3597070/Sorry_for_Intruding/",
    "studio" => "Dercetech / DynoStorm"
  ],
  [
    "title" => "Arborea Games",
    "url" => "https://arborea.games/",
    "studio" => "Arborea Games"
  ],
  [
    "title" => "WESTMEN",
    "url" => "https://store.steampowered.com/app/2762720/WESTMEN/",
    "studio" => "Studio DynoStorm"
  ],
  [
    "title" => "Super DynoStory",
    "url" => "https://store.steampowered.com/app/2126620/Super_DynoStory/",
    "studio" => "Studio DynoStorm"
  ],
  [
    "title" => "Bad Sector / Reactor 4",
    "url" => "https://bad-sector.games/",
    "studio" => "Dercetech"
  ]
];

echo json_encode($projects, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
