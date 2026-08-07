// ============================================================
// Section 01 – Promesses
// Travaillez directement dans ce fichier.
// Sauvegardez → rafraîchissez la page → observez Console + Sources.
// ============================================================

const logEl = document.querySelector("#log");
const API_URL = "https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-5/api/random-insta-page-I-like.php";

function writeLog(msg) {
  console.log(msg);
  logEl.textContent += msg + "\n";
}

document.querySelector("#btn-clear").addEventListener("click", () => {
  logEl.textContent = "";
});

// ------------------------------------------------------------
// 0. Erreur classique avec fetch
//    Créez const randomEntry = fetch(API_URL).
//    Affichez randomEntry dans la Console.
//    Essayez ensuite d’afficher randomEntry.url et randomEntry.category.
//    Vous obtenez undefined : randomEntry est encore une Promise.
//    Ajoutez .then(response => response.json()), puis un deuxième .then
//    pour afficher enfin l’URL et la catégorie via writeLog.
//    Observez aussi la requête dans Network.
// ------------------------------------------------------------

// ------------------------------------------------------------
// 1. Première Promise qui se résout après 1 seconde
//    Créez une Promise qui attend 1000 ms puis appelle resolve("bonjour").
//    Consommez-la avec .then et affichez la valeur via writeLog.
//    Observez dans la Console l’objet Promise pendant qu’il est pending.
// ------------------------------------------------------------


// ------------------------------------------------------------
// 2. Promise qui échoue
//    Créez une Promise qui, après 500 ms, appelle reject(new Error("échec volontaire")).
//    Ajoutez .catch pour afficher le message d’erreur via writeLog.
// ------------------------------------------------------------


// ------------------------------------------------------------
// 3. finally
//    Reprenez la Promise du point 1.
//    Ajoutez un .finally qui affiche "nettoyage terminé" quel que soit le résultat.
// ------------------------------------------------------------


// ------------------------------------------------------------
// 4. Chaînage simple
//    Partez de Promise.resolve(5).
//    Enchaînez deux .then :
//      - multiplie par 2
//      - ajoute 3
//    Affichez le résultat final (doit être 13).
// ------------------------------------------------------------


// ------------------------------------------------------------
// 5. Bouton pour tout relancer
//    Attachez un écouteur "click" sur #btn-run.
//    Dans le handler, relancez les quatre exercices précédents
//    (ou au minimum les points 1 et 2) pour pouvoir retester facilement.
// ------------------------------------------------------------
