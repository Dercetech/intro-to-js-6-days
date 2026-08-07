// ============================================================
// Section 05 – localStorage / sessionStorage (SOLUTION)
// ============================================================

const filterEl = document.querySelector("#filter");
const notesEl = document.querySelector("#notes");
const statusEl = document.querySelector("#status");
const btnSave = document.querySelector("#btn-save");
const btnClear = document.querySelector("#btn-clear");

const STORAGE_KEY = "day5-prefs";
const SESSION_KEY = "day5-session-note";

function savePrefs() {
  const prefs = {
    filter: filterEl.value,
    notes: notesEl.value
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  statusEl.textContent = "Sauvegardé";
}

function loadPrefs() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try {
      const prefs = JSON.parse(raw);
      filterEl.value = prefs.filter || "all";
      notesEl.value = prefs.notes || "";
      statusEl.textContent = "Préférences restaurées";
    } catch (e) {
      statusEl.textContent = "Données corrompues – ignorees";
    }
  } else {
    // fallback sessionStorage pour la note
    const sessionNote = sessionStorage.getItem(SESSION_KEY);
    if (sessionNote) {
      notesEl.value = sessionNote;
      statusEl.textContent = "Note de session restaurée";
    } else {
      statusEl.textContent = "Aucune préférence enregistrée";
    }
  }
}

btnSave.addEventListener("click", savePrefs);

btnClear.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  sessionStorage.removeItem(SESSION_KEY);
  filterEl.value = "all";
  notesEl.value = "";
  statusEl.textContent = "Effacé";
});

// Sauvegarde live de la note dans sessionStorage
notesEl.addEventListener("input", () => {
  sessionStorage.setItem(SESSION_KEY, notesEl.value);
});

// Restauration au chargement
loadPrefs();
