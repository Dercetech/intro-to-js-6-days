// ============================================================
// Section 03 – fetch GET + panneau Network
// Travaillez directement dans ce fichier.
// Sauvegardez → rafraîchissez → ouvrez Network AVANT de cliquer.
// ============================================================

const statusEl = document.querySelector("#status");
const listEl = document.querySelector("#project-list");
const btnLoad = document.querySelector("#btn-load");
const btnClear = document.querySelector("#btn-clear");

const API_URL = "https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-5/api/projects.php";

btnClear.addEventListener("click", () => {
  listEl.innerHTML = "";
  statusEl.textContent = "";
});

// ------------------------------------------------------------
// 1. Premier fetch
//    Au clic sur #btn-load :
//    - Affichez "Chargement…" dans #status
//    - Lancez fetch(API_URL)
//    - Loguez l’objet response complet dans la Console
//    - Loguez response.ok, response.status, response.statusText
//    Observez la requête dans Network (statut, headers, timing).
// ------------------------------------------------------------


// ------------------------------------------------------------
// 2. Lire le JSON
//    Après le fetch réussi, faites response.json()
//    Loguez le tableau reçu.
//    Vérifiez dans Network → onglet Preview / Response que le JSON
//    correspond exactement à ce que vous voyez dans la Console.
// ------------------------------------------------------------


// ------------------------------------------------------------
// 3. Afficher la liste
//    Pour chaque projet du tableau :
//      - créez un <li>
//      - créez un <a> avec href = project.url et textContent = project.title
//      - target = "_blank"
//      - ajoutez le <a> dans le <li>, puis le <li> dans #project-list
//    Remplacez le texte de #status par "X projets chargés".
// ------------------------------------------------------------


// ------------------------------------------------------------
// 4. Gestion d’erreur minimale
//    Si response.ok est false, affichez dans #status :
//    "Erreur HTTP " + response.status
//    Ne tentez pas de lire le JSON dans ce cas.
//    Testez en changeant temporairement l’URL pour provoquer un 404.
// ------------------------------------------------------------

