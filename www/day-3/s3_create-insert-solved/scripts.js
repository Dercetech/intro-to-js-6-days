// ============================================================
// Day 3 – Section 3 – Créer, insérer et supprimer (solution)
// ============================================================

// 1. Créer un élément
const newLog = document.createElement('div');
newLog.className = 'log-entry';
newLog.textContent = '[09:15:00] Test insertion manuelle';
// À ce stade l’élément existe seulement en mémoire.

// 2. L’erreur classique
console.log(newLog); // l’élément est bien là
// Mais il n’apparaît pas encore dans le panneau Elements.

// 3. Insérer avec append
const logContainer = document.querySelector('#log-container');
logContainer.append(newLog);

// 4. prepend
const earlyLog = document.createElement('div');
earlyLog.className = 'log-entry';
earlyLog.textContent = '[08:40:00] Pré-démarrage';
logContainer.prepend(earlyLog);

// 5. before / after
const newAlarm = document.createElement('div');
newAlarm.className = 'alarm';
newAlarm.textContent = 'Température secondaire';

const pressureAlarm = document.querySelector('#alarm-pressure');
pressureAlarm.after(newAlarm);

// 6. remove
const az5 = document.querySelector('#alarm-az5');
az5.remove();

// 7. replaceWith
const criticalAlarm = document.createElement('div');
criticalAlarm.className = 'alarm';
criticalAlarm.textContent = 'Pression critique – AZ-5 demandé';
pressureAlarm.replaceWith(criticalAlarm);

// 8. Création à partir de données
const newRods = [
  { id: 4, inserted: true },
  { id: 5, inserted: false },
  { id: 6, inserted: true }
];

const rodsContainer = document.querySelector('#rods-container');

newRods.forEach(rodData => {
  const rod = document.createElement('div');
  rod.classList.add('control-rod');
  if (rodData.inserted) {
    rod.classList.add('inserted');
  }
  rod.dataset.rod = rodData.id;

  const label = document.createElement('span');
  label.textContent = rodData.id;
  rod.append(label);

  rodsContainer.append(rod);
});
