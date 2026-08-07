// ============================================================
// Section 05 – localStorage / sessionStorage
// Travaillez directement dans ce fichier.
// Sauvegardez → rafraîchissez → inspectez Application → Local Storage.
// ============================================================

const filterEl = document.querySelector("#filter");
const notesEl = document.querySelector("#notes");
const statusEl = document.querySelector("#status");
const btnSave = document.querySelector("#btn-save");
const btnClear = document.querySelector("#btn-clear");

const STORAGE_KEY = "day5-prefs";

// ------------------------------------------------------------
// 1. savePrefs
//    Écrivez une fonction savePrefs()
//    Elle construit un objet { filter: filterEl.value, notes: notesEl.value }
//    Puis localStorage.setItem(STORAGE_KEY, JSON.stringify(...))
//    Affichez "Sauvegardé" dans #status.
// ------------------------------------------------------------


// ------------------------------------------------------------
// 2. loadPrefs
//    Écrivez une fonction loadPrefs()
//    Lisez localStorage.getItem(STORAGE_KEY)
//    Si la valeur existe :
//      - JSON.parse
//      - appliquez filter et notes sur les champs
//      - affichez "Préférences restaurées" dans #status
//    Sinon affichez "Aucune préférence enregistrée".
// ------------------------------------------------------------


// ------------------------------------------------------------
// 3. Brancher les événements
//    - Au clic sur #btn-save → savePrefs()
//    - Au clic sur #btn-clear → localStorage.removeItem(STORAGE_KEY)
//      + vider les champs + status = "Effacé"
//    - Au chargement de la page → appeler loadPrefs()
//      (vous pouvez le faire directement en bas du fichier)
// ------------------------------------------------------------


// ------------------------------------------------------------
// 4. Bonus – sessionStorage
//    Créez une deuxième clé (ex: "day5-session-note")
//    À chaque modification du champ notes, écrivez aussi dans sessionStorage.
//    Au chargement, si localStorage est vide mais sessionStorage a une valeur,
//    proposez de la restaurer (ou restaurez-la automatiquement).
//    Observez la différence : fermez l’onglet, rouvrez → sessionStorage a disparu.
// ------------------------------------------------------------
