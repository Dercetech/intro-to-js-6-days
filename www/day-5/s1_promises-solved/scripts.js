// ============================================================
// Section 01 – Promesses (SOLUTION)
// ============================================================

const logEl = document.querySelector("#log");
const API_URL = "https://training.dercetech.com/trainings/javascript-vanilla-devtools/day-5/api/random-insta-page-I-like.php";

function writeLog(msg) {
  console.log(msg);
  logEl.textContent += msg + "\n";
}

document.querySelector("#btn-clear").addEventListener("click", () => {
  logEl.textContent = "";
});

function runAll() {
  writeLog("--- début ---");

  // 0. Erreur classique avec fetch
  const randomEntry = fetch(API_URL);
  console.log("0. Promise retournée par fetch :", randomEntry);
  writeLog("0. trop tôt : " + randomEntry.url + " / " + randomEntry.category);

  randomEntry
    .then((response) => response.json())
    .then((entry) => {
      writeLog("0. plus tard : " + entry.url + " [" + entry.category + "]");
    })
    .catch((error) => {
      writeLog("0. erreur réseau : " + error.message);
    });

  // 1. Première Promise qui se résout après 1 seconde
  const p1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("bonjour");
    }, 1000);
  });

  p1.then((value) => {
    writeLog("1. succès : " + value);
  });

  // 2. Promise qui échoue
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("échec volontaire"));
    }, 500);
  });

  p2.catch((error) => {
    writeLog("2. erreur : " + error.message);
  });

  // 3. finally
  p1.finally(() => {
    writeLog("3. nettoyage terminé");
  });

  // 4. Chaînage simple
  Promise.resolve(5)
    .then((n) => n * 2)
    .then((n) => n + 3)
    .then((n) => {
      writeLog("4. résultat chaîné : " + n);
    });
}

document.querySelector("#btn-run").addEventListener("click", runAll);

// Lancement automatique au chargement pour le formateur
runAll();
