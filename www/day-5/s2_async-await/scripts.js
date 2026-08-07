// ============================================================
// Section 02 – async / await
// Travaillez directement dans ce fichier.
// Sauvegardez → rafraîchissez la page → observez Console + Sources.
// ============================================================

const logEl = document.querySelector("#log");

function writeLog(msg) {
  console.log(msg);
  logEl.textContent += msg + "\n";
}

document.querySelector("#btn-clear").addEventListener("click", () => {
  logEl.textContent = "";
});

// Petite fonction utilitaire qui retourne une Promise
// (vous pouvez vous en servir dans les exercices)
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

// ------------------------------------------------------------
// 1. Première fonction async
//    Écrivez une fonction async appelée sayHello.
//    À l’intérieur, await delay(800, "hello async").
//    Affichez la valeur reçue avec writeLog.
//    Appelez sayHello() (sans await au niveau supérieur).
// ------------------------------------------------------------


// ------------------------------------------------------------
// 2. try / catch
//    Écrivez une fonction async appelée mayFail.
//    À l’intérieur d’un try :
//      await delayReject(600, "boom");
//    Dans le catch : affichez error.message avec writeLog.
//    Ajoutez un finally qui affiche "fin de mayFail".
// ------------------------------------------------------------


// ------------------------------------------------------------
// 3. Deux await séquentiels
//    Écrivez une fonction async appelée sequential.
//    Await delay(400, 10) → stockez dans a
//    Await delay(400, 20) → stockez dans b
//    Affichez a + b (doit être 30)
//    Chronométrez approximativement : le total doit prendre ~800 ms.
// ------------------------------------------------------------


// ------------------------------------------------------------
// 4. Bouton pour tout relancer
//    Attachez un écouteur "click" sur #btn-run.
//    Dans le handler, appelez successivement sayHello, mayFail et sequential.
//    (Utilisez des appels séparés, pas besoin de les await les uns les autres.)
// ------------------------------------------------------------

