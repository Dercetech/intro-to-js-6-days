// ============================================================
// Section 04 – États UI, erreurs & Network approfondi
// Travaillez directement dans ce fichier.
// Sauvegardez → rafraîchissez → Network ouvert AVANT chaque clic.
// ============================================================

const statusEl = document.querySelector("#status");
const listEl = document.querySelector("#project-list");
const btnLoad = document.querySelector("#btn-load");
const btnClear = document.querySelector("#btn-clear");

const API_URL = "https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-5/api/projects.php";

// ------------------------------------------------------------
// 1. setStatus – la fonction unique de changement d’état
//    Écrivez la fonction setStatus(state, message)
//    - state : "loading" | "success" | "error"
//    - elle doit mettre statusEl.dataset.state = state
//    - et statusEl.textContent = message
// ------------------------------------------------------------


// ------------------------------------------------------------
// 2. renderList
//    Écrivez une fonction renderList(data)
//    Elle vide #project-list puis crée un <li><a> pour chaque projet
//    (même logique que la section précédente).
// ------------------------------------------------------------


// ------------------------------------------------------------
// 3. loadProjects – le cœur
//    Écrivez la fonction async loadProjects()
//    - setStatus("loading", "Chargement…")
//    - vider la liste
//    - try {
//        fetch → vérifier response.ok → sinon throw new Error("HTTP " + status)
//        data = await response.json()
//        renderList(data)
//        setStatus("success", data.length + " projets chargés")
//      } catch (error) {
//        console.error(error)
//        setStatus("error", "Échec : " + error.message)
//      }
// ------------------------------------------------------------


// ------------------------------------------------------------
// 4. Brancher les boutons
//    #btn-load → loadProjects
//    #btn-clear → vider la liste + remettre status à "Prêt" (data-state="")
// ------------------------------------------------------------


// ------------------------------------------------------------
// 5. Tests manuels obligatoires (à faire dans Network)
//    a. Cas normal – tout doit être vert
//    b. Changez temporairement API_URL pour une URL qui n’existe pas
//       → vous devez voir l’état error + 404 dans Network
//    c. Remettez la bonne URL, passez Network en Offline, relancez
//       → état error + message réseau
//    d. Remettez Online, choisissez Slow 3G, relancez
//       → observez le loading qui dure, regardez l’onglet Timing
//    e. Clic droit sur une requête réussie → Replay XHR
// ------------------------------------------------------------

