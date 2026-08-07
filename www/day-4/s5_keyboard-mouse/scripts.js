// ============================================================
// Section 05 – Keyboard & mouse essentials
// Travaillez directement dans ce fichier.
// Sauvegardez → rafraîchissez → observez la Console.
// ============================================================

const logEl = document.querySelector("#log");
function writeLog(msg) {
  console.log(msg);
  logEl.textContent += msg + "\n";
}

// 1. keydown – lire la touche
//    Attachez un écouteur "keydown" sur document (ou sur #key-field).
//    Loguez event.key à chaque pression.
//    Observez la différence entre une lettre, "Enter", "Escape", "Shift", etc.


// 2. preventDefault sur une touche
//    Dans le même handler (ou un nouveau sur #key-field) :
//    si event.key === "Enter", appelez preventDefault() et loguez "Enter bloqué".
//    Les autres touches doivent continuer de fonctionner.


// 3. keyup (optionnel mais utile)
//    Attachez aussi un écouteur "keyup" et loguez "relâché : " + event.key.
//    Comparez le comportement avec keydown (surtout si vous maintenez une touche).


// 4. click vs mousedown / mouseup
//    Sur #click-zone :
//      - attachez un écouteur "mousedown" qui logue "mousedown"
//      - attachez un écouteur "mouseup" qui logue "mouseup"
//      - attachez un écouteur "click" qui logue "click"
//    Cliquez normalement et observez l’ordre.
//    Appuyez sans relâcher, puis relâchez hors de la zone : que se passe-t-il pour click ?


// 5. Position du pointeur
//    Sur #draw-area, attachez un écouteur "click".
//    Loguez event.clientX / event.clientY et event.offsetX / event.offsetY.
//    Cliquez à différents endroits et comparez les valeurs.


// 6. (Bonus) mousemove léger
//    Sur #draw-area, attachez un écouteur "mousemove".
//    Affichez en continu offsetX / offsetY dans #log (ou seulement dans la Console
//    pour ne pas saturer l’affichage).
//    Utile pour comprendre la fréquence de l’événement.
