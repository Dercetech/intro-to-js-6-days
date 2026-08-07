// ============================================================
// Section 02 – async / await (SOLUTION)
// ============================================================

const logEl = document.querySelector("#log");

function writeLog(msg) {
  console.log(msg);
  logEl.textContent += msg + "\n";
}

document.querySelector("#btn-clear").addEventListener("click", () => {
  logEl.textContent = "";
});

function delay(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

function delayReject(ms, message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(message)), ms);
  });
}

async function sayHello() {
  const value = await delay(800, "hello async");
  writeLog("1. " + value);
}

async function mayFail() {
  try {
    await delayReject(600, "boom");
  } catch (error) {
    writeLog("2. erreur : " + error.message);
  } finally {
    writeLog("2. fin de mayFail");
  }
}

async function sequential() {
  const a = await delay(400, 10);
  const b = await delay(400, 20);
  writeLog("3. somme séquentielle : " + (a + b));
}

function runAll() {
  writeLog("--- début ---");
  sayHello();
  mayFail();
  sequential();
}

document.querySelector("#btn-run").addEventListener("click", runAll);

// Lancement automatique au chargement pour le formateur
runAll();
