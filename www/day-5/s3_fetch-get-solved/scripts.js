// ============================================================
// Section 03 – fetch GET + panneau Network (SOLUTION)
// ============================================================

const statusEl = document.querySelector("#status");
const listEl = document.querySelector("#project-list");
const btnLoad = document.querySelector("#btn-load");
const btnClear = document.querySelector("#btn-clear");

const API_URL = "https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-5/api/projects.php";

btnClear.addEventListener("click", () => {
  listEl.innerHTML = "";
  statusEl.textContent = "";
});

btnLoad.addEventListener("click", async () => {
  listEl.innerHTML = "";
  statusEl.textContent = "Chargement…";

  try {
    const response = await fetch(API_URL);
    console.log(response);
    console.log("ok:", response.ok);
    console.log("status:", response.status);
    console.log("statusText:", response.statusText);

    if (!response.ok) {
      statusEl.textContent = "Erreur HTTP " + response.status;
      return;
    }

    const data = await response.json();
    console.log(data);

    data.forEach((project) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = project.url;
      a.textContent = project.title;
      a.target = "_blank";
      li.append(a);
      listEl.append(li);
    });

    statusEl.textContent = data.length + " projets chargés";
  } catch (error) {
    console.error(error);
    statusEl.textContent = "Erreur réseau : " + error.message;
  }
});
