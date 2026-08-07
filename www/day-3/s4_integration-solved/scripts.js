// ============================================================
// Day 3 – Section 4 – Intégration pratique (solution)
// ============================================================

// SCÉNARIO 1 – Mise en surveillance
const statusEl = document.querySelector('#reactor-status');
statusEl.textContent = 'SURVEILLANCE';
statusEl.classList.remove('status-ok');
statusEl.classList.add('status-warning');

const light = document.querySelector('#status-light');
light.classList.add('warning');

document.querySelector('#power-mw').textContent = '2950';

// SCÉNARIO 2 – Nouvelle alarme + journal
const tempAlarm = document.createElement('div');
tempAlarm.className = 'alarm';
tempAlarm.textContent = 'Température sortie élevée';
document.querySelector('#alarms-container').append(tempAlarm);

const logEntry = document.createElement('div');
logEntry.className = 'log-entry';
logEntry.textContent = '[09:12:44] Alarme température créée';
document.querySelector('#log-container').append(logEntry);

// SCÉNARIO 3 – Nettoyage
document.querySelector('#alarm-az5').remove();

const scramBtn = document.querySelector('#scram');
scramBtn.disabled = true;
scramBtn.setAttribute('title', 'SCRAM verrouillé – procédure en cours');

// SCÉNARIO 4 – Barres de contrôle (données → DOM)
const extraRods = [
  { id: 5, inserted: false },
  { id: 6, inserted: true }
];

const rodsContainer = document.querySelector('#rods-container');

extraRods.forEach(data => {
  const rod = document.createElement('div');
  rod.classList.add('control-rod');
  if (data.inserted) {
    rod.classList.add('inserted');
  }
  rod.dataset.rod = data.id;

  const label = document.createElement('span');
  label.textContent = data.id;
  rod.append(label);

  rodsContainer.append(rod);
});

// SCÉNARIO 5 – Lecture de contrôle (DevTools)
// À exécuter aussi manuellement dans la Console pour vérification
const alarms = document.querySelectorAll('.alarm');
alarms.forEach(a => console.log(a.textContent));

console.log('Nombre de barres :', document.querySelectorAll('.control-rod').length);

const mode = document.querySelector('#operation-mode');
console.log('Mode :', mode.dataset.mode);
