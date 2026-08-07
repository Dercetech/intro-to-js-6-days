// ============================================================
// Day 3 – Section 1 – Sélection d’éléments (solution)
// ============================================================
// 1. Sélection par id
const status = document.querySelector('#reactor-status');
console.log(status);
// 2. Sélection par classe (premier élément)
const firstRod = document.querySelector('.control-rod');
console.log(firstRod);
// 3. Sélection multiple
const rods = document.querySelectorAll('.control-rod');
console.log(rods);
console.log(rods.length);
// 4. Sélecteur d’attribut
const tempGauge = document.querySelector('.gauge[data-unit="C"]');
console.log(tempGauge);
// 5. Combinaisons
const scramBtn = document.querySelector('#scram');
console.log(scramBtn);
const activeAlarm = document.querySelector('.alarm:not(.inactive)');
console.log(activeAlarm);
const logEntries = document.querySelectorAll('.log-entry');
console.log(logEntries);
// 6. Exploration live avec $0
//    (à faire manuellement dans la Console)
// 7. Différence live vs statique
const rodsQS  = document.querySelectorAll('.control-rod');
const rodsOld = document.getElementsByClassName('control-rod');
console.log('querySelectorAll length:', rodsQS.length);
console.log('getElementsByClassName length:', rodsOld.length);
// Après suppression manuelle d’une barre dans Elements :
// rodsQS.length reste identique (statique)
// rodsOld.length diminue (live)
