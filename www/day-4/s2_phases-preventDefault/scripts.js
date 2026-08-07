// ============================================================
// Section 02 – Phases, preventDefault, stopPropagation
// Travaillez directement dans ce fichier.
// Sauvegardez → rafraîchissez → observez Console + Sources.
// Activez Event Listener Breakpoints : Mouse → click
// ============================================================

const logEl = document.querySelector("#log");
function writeLog(msg) {
  console.log(msg);
  logEl.textContent += msg + "\n";
}

// 1. preventDefault sur un lien
//    Sélectionnez #external-link.
//    Attachez un écouteur "click".
//    Appelez event.preventDefault().
//    Loguez "navigation bloquée".
//    Vérifiez que le navigateur ne quitte pas la page.


// 2. preventDefault sur un formulaire
//    Sélectionnez #demo-form.
//    Attachez un écouteur "submit".
//    Empêchez la soumission avec preventDefault().
//    Loguez "soumission bloquée".
//    (Le navigateur ne doit pas recharger la page.)


// 3. stopPropagation – démonstration
//    Attachez un écouteur "click" sur #outer qui logue "clic sur OUTER".
//    Attachez un écouteur "click" sur #inner qui logue "clic sur INNER".
//    Attachez un écouteur "click" sur #btn-inner qui :
//      - logue "clic sur BOUTON"
//      - appelle event.stopPropagation()
//    Cliquez sur le bouton. Seul le message du bouton doit apparaître.
//    Cliquez ensuite dans la zone interne (pas sur le bouton).
//    Vous devez voir INNER puis OUTER.


// 4. preventDefault + stopPropagation ensemble
//    Sur #btn-inner, en plus de stopPropagation, ajoutez un preventDefault
//    (même si un bouton n’a pas d’action par défaut spectaculaire).
//    L’objectif est de voir que les deux appels sont indépendants et peuvent cohabiter.


// 5. preventDefault sur une touche (aperçu clavier)
//    Sélectionnez #key-field.
//    Attachez un écouteur "keydown".
//    Si la touche est "Enter" (event.key === "Enter"), appelez preventDefault()
//    et loguez "Enter bloqué".
//    Les autres touches doivent fonctionner normalement.


// 6. (Optionnel) Observer la phase de capture
//    Attachez un écouteur "click" sur #outer avec le 3e argument true (capture).
//    Loguez "CAPTURE sur OUTER".
//    Cliquez sur le bouton et observez l’ordre des messages dans le log.
//    Remettez ensuite le 3e argument à false (ou supprimez-le) pour revenir au comportement normal.
