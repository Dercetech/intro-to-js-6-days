// ============================================================
// Day 3 – Section 2 – Lire et écrire le DOM (solution)
// ============================================================

// 1. Lire du texte
const statusEl = document.querySelector('#reactor-status');
console.log(statusEl.textContent); // "NOMINAL"

// 2. Écrire du texte
statusEl.textContent = 'SURVEILLANCE';
document.querySelector('#power-mw').textContent = '2800';

// 3. textContent vs innerHTML (observation)
// textContent traite la chaîne comme du texte brut (sûr)
document.querySelector('#log-1').textContent = '<b>ALERTE</b>';
// innerHTML interprète les balises HTML (risqué si la source n’est pas fiable)
document.querySelector('#log-2').innerHTML = '<b>ALERTE</b>';
// On préfère textContent par défaut.

// 4. Attributs
const firstRod = document.querySelector('.control-rod');
console.log(firstRod.getAttribute('data-rod')); // "1"

const rod3 = document.querySelector('[data-rod="3"]');
rod3.setAttribute('title', 'Barre de contrôle 3');

const rod5 = document.querySelector('[data-rod="5"]');
rod5.removeAttribute('data-rod');

// 5. dataset
const modeEl = document.querySelector('#operation-mode');
console.log(modeEl.dataset.mode); // "normal"
modeEl.dataset.mode = 'test';
console.log(modeEl.dataset.mode); // "test"

// 6. Propriétés directes
const scramBtn = document.querySelector('#scram');
scramBtn.disabled = true;
// Vérifier dans Elements : l’attribut disabled est maintenant présent.

// 7. classList
statusEl.classList.remove('status-ok');
statusEl.classList.add('status-warning');

const pressureAlarm = document.querySelector('#alarm-pressure');
pressureAlarm.classList.toggle('inactive');

const az5 = document.querySelector('#alarm-az5');
console.log(az5.classList.contains('inactive')); // true

// 8. style (inline) – à utiliser avec parcimonie
const tempValue = document.querySelector('#temp-value');
tempValue.style.color = 'red';
// Puis on annule :
tempValue.style.color = '';
// Préférez toujours classList quand c’est possible.
