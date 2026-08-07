// ============================================================
// Extra x1 – axios (aperçu)
// Travaillez directement dans ce fichier.
// axios est déjà chargé via le CDN dans index.html.
// ============================================================

const statusEl = document.querySelector("#status");
const listEl = document.querySelector("#project-list");
const btnLoad = document.querySelector("#btn-load");
const btnClear = document.querySelector("#btn-clear");

const API_URL = "https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-5/api/projects.php";

// ------------------------------------------------------------
// 1. setStatus et renderList
//    Reprenez (ou réécrivez) les deux petites fonctions de la section 04 :
//    - setStatus(state, message)
//    - renderList(data)
// ------------------------------------------------------------


// ------------------------------------------------------------
// 2. loadProjects avec axios
//    Écrivez la fonction async loadProjects()
//    - setStatus("loading", "Chargement…")
//    - vider la liste
//    - try {
//        const response = await axios.get(API_URL);
//        // les données sont dans response.data
//        renderList(response.data);
//        setStatus("success", response.data.length + " projets chargés");
//      } catch (error) {
//        // axios place les erreurs HTTP ici aussi
//        console.error(error);
//        const msg = error.response
//          ? "HTTP " + error.response.status
//          : error.message;
//        setStatus("error", "Échec : " + msg);
//      }
// ------------------------------------------------------------


// ------------------------------------------------------------
// 3. Brancher les boutons
//    #btn-load → loadProjects
//    #btn-clear → vider + status "Prêt"
// ------------------------------------------------------------
