// ============================================================
// Section 01 – addEventListener & l’objet event (SOLUTION)
// ============================================================

const logEl = document.querySelector("#log");

function writeLog(msg) {
  console.log(msg);
  logEl.textContent += msg + "\n";
}

// 1. Premier écouteur simple
const btnSimple = document.querySelector("#btn-simple");
btnSimple.addEventListener("click", function () {
  writeLog("bouton cliqué");
});

// 2. Inspecter l’objet event
btnSimple.addEventListener("click", function (event) {
  writeLog("type: " + event.type);
  writeLog("target: " + event.target.tagName + " #" + event.target.id);
  writeLog("currentTarget: " + event.currentTarget.tagName + " #" + event.currentTarget.id);
  writeLog("timeStamp: " + event.timeStamp);
});

// 3. target vs currentTarget
const parent = document.querySelector("#parent");
parent.addEventListener("click", function (event) {
  writeLog("--- clic dans #parent ---");
  writeLog("target: " + event.target.tagName + (event.target.id ? " #" + event.target.id : ""));
  writeLog("currentTarget: " + event.currentTarget.tagName + " #" + event.currentTarget.id);
});

// 4. Événement input
const field = document.querySelector("#field");
field.addEventListener("input", function (event) {
  writeLog("valeur du champ: " + event.target.value);
});

// 5. removeEventListener
const btnRemove = document.querySelector("#btn-remove");
function handleRemovable(event) {
  writeLog("écouteur exécuté – je me retire");
  btnRemove.removeEventListener("click", handleRemovable);
}
btnRemove.addEventListener("click", handleRemovable);
