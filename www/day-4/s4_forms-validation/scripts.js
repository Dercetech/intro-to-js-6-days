// ============================================================
// Section 04 – Forms : validation & FormData
// Travaillez directement dans ce fichier.
// Sauvegardez → rafraîchissez → observez Console + Sources.
// Activez Event Listener Breakpoints : Control → submit
// ============================================================

const form = document.querySelector("#signup-form");
const resultEl = document.querySelector("#result");

function showResult(msg) {
  console.log(msg);
  resultEl.textContent = msg;
}

// 1. Écouter la soumission
//    Attachez un écouteur "submit" sur #signup-form.
//    Appelez immédiatement event.preventDefault().
//    Loguez "submit intercepté".
//    (Sans preventDefault le navigateur rechargerait la page.)


// 2. Validation native
//    Dans le même handler, testez form.checkValidity().
//    Si le formulaire est invalide :
//      - appelez form.reportValidity()
//      - loguez "formulaire invalide"
//      - faites return
//    Testez en laissant des champs vides ou avec un email incorrect.


// 3. FormData – lecture des valeurs
//    Quand le formulaire est valide, créez un FormData à partir du form.
//    Loguez data.get("firstName"), data.get("email"), data.get("level").
//    Affichez aussi un résumé dans #result.


// 4. Parcourir toutes les entrées
//    Utilisez une boucle for…of sur data.entries().
//    Loguez chaque paire clé / valeur.
//    Observez ce qui se passe avec la checkbox (présente seulement si cochée)
//    et avec le champ age quand il est vide.


// 5. Petite validation JS supplémentaire (optionnelle mais utile)
//    Si l’âge est renseigné et < 18, refusez un message dans #result
//    et empêchez la “réussite” (même si checkValidity est passé).
//    Sinon, affichez “Inscription acceptée” + les valeurs principales.


// 6. (Bonus) reset
//    Après une soumission réussie, vous pouvez appeler form.reset()
//    pour vider les champs.
