// ============================================================
// Section 04 – États UI, erreurs & Network approfondi (SOLUTION)
// ============================================================

const statusEl = document.querySelector("#status");
const listEl = document.querySelector("#project-list");
const btnLoad = document.querySelector("#btn-load");
const btnClear = document.querySelector("#btn-clear");

const API_URL = "https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-5/api/projects.php";

function setStatus(state, message) {
  statusEl.dataset.state = state;
  statusEl.textContent = message;
}

function renderList(data) {
  listEl.innerHTML = "";
  data.forEach((project) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = project.url;
    a.textContent = project.title;
    a.target = "_blank";
    li.append(a);
    listEl.append(li);
  });
}

async function loadProjects() {
  setStatus("loading", "Chargement…");
  listEl.innerHTML = "";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }

    const data = await response.json();
    renderList(data);
    setStatus("success", data.length + " projets chargés");
  } catch (error) {
    console.error(error);
    setStatus("error", "Échec : " + error.message);
  }
}

btnLoad.addEventListener("click", loadProjects);

btnClear.addEventListener("click", () => {
  listEl.innerHTML = "";
  setStatus("", "Prêt");
});
