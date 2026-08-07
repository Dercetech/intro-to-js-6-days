// ============================================================
// Section 02 – Fonctions d’ordre supérieur (solution)
// ============================================================

const output = document.querySelector('#output');
const prices = [12.5, 30, 7.99, 45];

function show(msg) {
  console.log(msg);
  output.textContent += msg + '\n';
}

// 1. process(list, fn)
function process(list, fn) {
  const result = [];
  for (const item of list) {
    result.push(fn(item));
  }
  return result;
}

document.querySelector('#btn-process').addEventListener('click', () => {
  const increased = process(prices, (n) => n * 1.2);
  show('Prix +20 % : ' + increased.join(', '));
});

// 2. makeMultiplier(factor)
function makeMultiplier(factor) {
  return function (n) {
    return n * factor;
  };
}

document.querySelector('#btn-multipliers').addEventListener('click', () => {
  const double = makeMultiplier(2);
  const triple = makeMultiplier(3);
  show('double(10) = ' + double(10));
  show('triple(10) = ' + triple(10));
});

// 3. makeLogger(prefix)
function makeLogger(prefix) {
  return function (message) {
    show(`[${prefix}] ${message}`);
  };
}

document.querySelector('#btn-loggers').addEventListener('click', () => {
  const logInfo = makeLogger('INFO');
  const logError = makeLogger('ERROR');
  logInfo('Calcul terminé');
  logError('Valeur invalide');
});
