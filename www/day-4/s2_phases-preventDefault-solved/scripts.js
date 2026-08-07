// ============================================================
// Section 02 – Phases, preventDefault, stopPropagation (SOLUTION)
// ============================================================

const logEl = document.querySelector("#log");
function writeLog(msg) {
  console.log(msg);
  logEl.textContent += msg + "\n";
}

// 1. preventDefault sur un lien
const link = document.querySelector("#external-link");
link.addEventListener("click", function (event) {
  event.preventDefault();
  writeLog("navigation bloquée");
});

// 2. preventDefault sur un formulaire
const form = document.querySelector("#demo-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  writeLog("soumission bloquée");
});

// 3. stopPropagation – démonstration
const outer = document.querySelector("#outer");
const inner = document.querySelector("#inner");
const btnInner = document.querySelector("#btn-inner");

outer.addEventListener("click", function () {
  writeLog("clic sur OUTER");
});

inner.addEventListener("click", function () {
  writeLog("clic sur INNER");
});

btnInner.addEventListener("click", function (event) {
  writeLog("clic sur BOUTON");
  event.stopPropagation();
});

// 4. preventDefault + stopPropagation ensemble
// (déjà combiné dans le handler du bouton ci-dessus si on ajoute preventDefault)
btnInner.addEventListener("click", function (event) {
  // on peut aussi le mettre dans le même handler
  // ici on montre qu’on peut appeler les deux
  event.preventDefault();
});

// 5. preventDefault sur une touche
const keyField = document.querySelector("#key-field");
keyField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    writeLog("Enter bloqué");
  }
});

// 6. (Optionnel) Observer la phase de capture
// Décommentez pour tester, puis remettez en commentaire.
// outer.addEventListener("click", function () {
//   writeLog("CAPTURE sur OUTER");
// }, true);
