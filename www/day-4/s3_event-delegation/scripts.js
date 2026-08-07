// ============================================================
// Section 03 – Event delegation
// Travaillez directement dans ce fichier.
// Sauvegardez → rafraîchissez → observez Console + Elements.
// ============================================================

const logEl = document.querySelector("#log");
function writeLog(msg) {
  console.log(msg);
  logEl.textContent += msg + "\n";
}

// ------------------------------------------------------------
// PARTIE A – Version naïve (à faire en premier)
// ------------------------------------------------------------

// 1. Version naïve : un écouteur par bouton
//    Sélectionnez tous les boutons .delete actuellement présents.
//    Pour chaque bouton, attachez un écouteur "click" qui :
//      - logue "suppression naïve"
//      - supprime le <li> parent (btn.closest("li").remove())
//    Testez : les trois boutons fonctionnent.
//    Dans Elements → Event Listeners vous devez voir trois écouteurs.


// 2. Le piège apparaît
//    Cliquez sur "Ajouter une tâche".
//    Une nouvelle ligne apparaît… mais son bouton "Supprimer" ne fait rien.
//    C’est exactement le problème de la version naïve.


// ------------------------------------------------------------
// PARTIE B – Délégation (le pattern professionnel)
// ------------------------------------------------------------

// 3. Nettoyage
//    Commentez (ou supprimez) tout le code de la partie A.
//    On repart proprement.


// 4. Un seul écouteur sur le parent
//    Sélectionnez #task-list.
//    Attachez UN seul écouteur "click".
//    À l’intérieur :
//      - utilisez event.target.closest("button.delete")
//      - si le résultat est null, faites return (le clic n’était pas sur un bouton delete)
//      - sinon, loguez "suppression déléguée" et supprimez le <li> parent
//    Testez les boutons existants. Ils doivent fonctionner.


// 5. Vérification DevTools
//    Dans Elements, sélectionnez #task-list.
//    Ouvrez le panneau Event Listeners.
//    Vous ne devez voir qu’UN seul écouteur "click".


// 6. Les éléments futurs fonctionnent aussi
//    Le bouton #add-btn doit ajouter une nouvelle <li> dans la liste
//    (avec un texte quelconque + un bouton.delete).
//    Après ajout, le nouveau bouton "Supprimer" doit fonctionner
//    SANS avoir attaché de nouvel écouteur.
//    C’est la preuve que la délégation est la bonne approche.


// 7. (Bonus) Afficher l’id de la tâche
//    Chaque <li> a un data-id.
//    Dans le handler délégué, loguez aussi le data-id de la tâche supprimée.
