// ============================================================
// Section 03 – Event delegation (SOLUTION)
// ============================================================

const logEl = document.querySelector("#log");
function writeLog(msg) {
  console.log(msg);
  logEl.textContent += msg + "\n";
}

const list = document.querySelector("#task-list");
const addBtn = document.querySelector("#add-btn");

// --- PARTIE A (naïve) – laissée en commentaire pour référence ---
/*
document.querySelectorAll("button.delete").forEach(function (btn) {
  btn.addEventListener("click", function () {
    writeLog("suppression naïve");
    btn.closest("li").remove();
  });
});
*/

// --- PARTIE B – Délégation ---

list.addEventListener("click", function (event) {
  const btn = event.target.closest("button.delete");
  if (!btn) return;

  const item = btn.closest("li");
  const id = item.dataset.id;
  writeLog("suppression déléguée – id=" + id);
  item.remove();
});

// Ajout de nouvelles tâches
let nextId = 4;
addBtn.addEventListener("click", function () {
  const li = document.createElement("li");
  li.dataset.id = String(nextId++);
  li.innerHTML = "<span>Nouvelle tâche " + li.dataset.id + "</span> <button class=\"delete\" type=\"button\">Supprimer</button>";
  list.append(li);
  writeLog("tâche ajoutée – id=" + li.dataset.id);
});
