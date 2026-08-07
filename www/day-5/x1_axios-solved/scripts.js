// ============================================================
// Extra x1 – axios (SOLUTION)
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
    const response = await axios.get(API_URL);
    renderList(response.data);
    setStatus("success", response.data.length + " projets chargés");
  } catch (error) {
    console.error(error);
    const msg = error.response
      ? "HTTP " + error.response.status
      : error.message;
    setStatus("error", "Échec : " + msg);
  }
}

btnLoad.addEventListener("click", loadProjects);

btnClear.addEventListener("click", () => {
  listEl.innerHTML = "";
  setStatus("", "Prêt");
});
