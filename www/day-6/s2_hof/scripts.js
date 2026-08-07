// ============================================================
// Section 02 – Fonctions d’ordre supérieur (pratique)
// Travaillez directement dans ce fichier.
// Sauvegardez → rafraîchissez → observez la Console + #output.
// ============================================================

const output = document.querySelector('#output');
const prices = [12.5, 30, 7.99, 45];

function show(msg) {
  console.log(msg);
  output.textContent += msg + '\n';
}

// ------------------------------------------------------------
// 1. process(list, fn) – une fonction qui reçoit une fonction
// ------------------------------------------------------------
// Écrivez la fonction process(list, fn) :
//   - elle parcourt list
//   - elle applique fn à chaque élément
//   - elle retourne un nouveau tableau avec les résultats
//
// Puis, sur le clic de #btn-process :
//   - appelez process(prices, (n) => n * 1.2)   // +20 %
//   - affichez le résultat avec show(...)


// ------------------------------------------------------------
// 2. makeMultiplier(factor) – une fonction qui retourne une fonction
// ------------------------------------------------------------
// Écrivez makeMultiplier(factor) qui retourne une nouvelle fonction.
// Cette nouvelle fonction multiplie son argument par factor.
//
// Sur le clic de #btn-multipliers :
//   - créez double = makeMultiplier(2)
//   - créez triple = makeMultiplier(3)
//   - testez double(10) et triple(10)
//   - affichez les résultats avec show(...)


// ------------------------------------------------------------
// 3. makeLogger(prefix) – pattern pratique
// ------------------------------------------------------------
// Écrivez makeLogger(prefix) qui retourne une fonction.
// Cette fonction affiche `[prefix] message` via show(...).
//
// Sur le clic de #btn-loggers :
//   - créez logInfo = makeLogger('INFO')
//   - créez logError = makeLogger('ERROR')
//   - appelez logInfo('Calcul terminé')
//   - appelez logError('Valeur invalide')
