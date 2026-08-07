// ============================================================
// Extra 1 – Le bouton qui fuit
// Travaillez dans ce fichier.
// ============================================================

// Idée :
// - 9 positions prédéfinies (grille 3×3) en pourcentage de la fenêtre
// - le bouton est placé en absolute (left / top)
// - dès que la souris s’approche trop, on le déplace vers une autre case

const btn = document.querySelector("#fugitive");
const stage = document.querySelector("#stage");

// Les 9 zones (pourcentages)
const ZONES = [
  { left: 5,  top: 5  },
  { left: 45, top: 5  },
  { left: 80, top: 5  },
  { left: 5,  top: 45 },
  { left: 45, top: 45 },
  { left: 80, top: 45 },
  { left: 5,  top: 80 },
  { left: 45, top: 80 },
  { left: 80, top: 80 }
];

// 1. Fonction placeInZone(index)
//    Place le bouton dans la zone d’index donné
//    (utilise style.left et style.top avec les % de ZONES).
//    Gardez une variable currentZone pour savoir où il est.


// 2. Au chargement
//    Placez le bouton dans une zone au hasard (sauf éventuellement le centre).


// 3. Distance souris → bouton
//    Écoutez "mousemove" sur document (ou stage).
//    Calculez la distance entre le pointeur (event.clientX/Y)
//    et le centre du bouton (getBoundingClientRect).
//    Si la distance < 120 px (seuil à ajuster), le bouton fuit.


// 4. Fuite
//    Quand le seuil est franchi, choisissez une nouvelle zone
//    différente de la zone actuelle, et appelez placeInZone.
//    Évitez de sauter trop souvent (petit cooldown de 200–300 ms
//    si nécessaire pour que ce reste jouable).


// 5. (Bonus) Attraper le bouton
//    Si l’utilisateur arrive quand même à cliquer :
//    changez le texte du bouton en "bravo." et arrêtez de le faire fuir.
