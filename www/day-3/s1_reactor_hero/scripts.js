"use strict";

const TICK_MS = 500;
const TICK_SECONDS = TICK_MS / 1000;
const ROD_COUNT = 6;
const NOMINAL_POWER = 3200;

const elements = {
  body: document.body,
  simulationClock: document.querySelector("#simulation-clock"),
  stabilityLabel: document.querySelector("#stability-label"),
  neutronTrack: document.querySelector("#neutron-track"),
  neutronBar: document.querySelector("#neutron-bar"),
  neutronStream: document.querySelector("#neutron-stream"),
  criticality: document.querySelector("#criticality"),
  thermalPower: document.querySelector("#thermal-power"),
  electricPower: document.querySelector("#electric-power"),
  reactorTemperature: document.querySelector("#reactor-temperature"),
  xenonLevel: document.querySelector("#xenon-level"),
  waterFlow: document.querySelector("#water-flow"),
  waterFlowOutput: document.querySelector("#water-flow-output"),
  primaryTemperature: document.querySelector("#primary-temperature"),
  secondaryTemperature: document.querySelector("#secondary-temperature"),
  steamBubbles: document.querySelector("#steam-bubbles"),
  dieselStart: document.querySelector("#diesel-start"),
  dieselStatus: document.querySelector("#diesel-status"),
  dieselSpinup: document.querySelector("#diesel-spinup"),
  reactorLid: document.querySelector("#reactor-lid"),
  buildingHealth: document.querySelector("#building-health"),
  buildingHealthBar: document.querySelector("#building-health-bar"),
  radiationMeter: document.querySelector("#radiation-meter"),
  radiationActual: document.querySelector("#radiation-actual"),
  rodControls: document.querySelector("#rod-controls"),
  scram: document.querySelector("#scram"),
  reset: document.querySelector("#reset-simulation"),
  alarmList: document.querySelector("#alarm-list"),
  alarmCount: document.querySelector("#alarm-count"),
  eventLog: document.querySelector("#event-log")
};

function createInitialState() {
  return {
    elapsedMs: 0,
    tick: 0,
    criticality: 1,
    thermalPower: NOMINAL_POWER,
    previousPower: NOMINAL_POWER,
    neutronFlux: 100,
    waterFlow: 100,
    reactorTemperature: 284,
    primaryTemperature: 284,
    secondaryTemperature: 260,
    steamBubbles: 0,
    xenonLevel: 0.18,
    rods: Array.from({ length: ROD_COUNT }, function () { return 60; }),
    electricPower: 1000,
    radiationActual: 0.2,
    lidIntact: true,
    buildingHealth: 100,
    hydrogenExposure: 0,
    hydrogenBlast: false,
    diesel: {
      mode: "stopped",
      remaining: 35,
      online: false
    },
    scram: {
      active: false,
      elapsed: 0,
      boost: 0,
      peakLogged: false
    },
    activeAlarms: new Map(),
    destroyed: false
  };
}

let state = createInitialState();

function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

function approach(current, target, rate) {
  return current + (target - current) * clamp(rate, 0, 1);
}

function formatNumber(value, maximumFractionDigits) {
  return new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: maximumFractionDigits
  }).format(value);
}

function formatClock(milliseconds) {
  const totalSeconds = milliseconds / 1000;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const tenths = Math.floor((totalSeconds % 1) * 10);
  return String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0") + "." + tenths;
}

function logEvent(message, level) {
  const entry = document.createElement("div");
  entry.className = "log-entry " + (level || "info");

  const time = document.createElement("span");
  time.className = "log-time";
  time.textContent = "[" + formatClock(state.elapsedMs) + "]";

  const text = document.createElement("span");
  text.className = "log-message";
  text.textContent = message;

  entry.append(time, text);
  elements.eventLog.append(entry);

  while (elements.eventLog.children.length > 180) {
    elements.eventLog.firstElementChild.remove();
  }

  elements.eventLog.scrollTop = elements.eventLog.scrollHeight;
}

function createNeutronParticles() {
  elements.neutronTrack.replaceChildren();
  for (let index = 0; index < 18; index += 1) {
    const particle = document.createElement("span");
    particle.className = "neutron-particle";
    particle.style.setProperty("--delay", String(index * -0.13) + "s");
    particle.style.top = String(15 + (index * 37) % 70) + "%";
    elements.neutronTrack.append(particle);
  }
}

function createRodControls() {
  elements.rodControls.replaceChildren();

  state.rods.forEach(function (_, index) {
    const controller = document.createElement("div");
    controller.className = "rod-controller";

    const name = document.createElement("span");
    name.className = "rod-name";
    name.textContent = "R" + String(index + 1);

    const withdraw = document.createElement("button");
    withdraw.className = "rod-button";
    withdraw.type = "button";
    withdraw.textContent = "+";
    withdraw.dataset.rod = String(index);
    withdraw.dataset.action = "withdraw";
    withdraw.setAttribute("aria-label", "Retirer la barre R" + String(index + 1));

    const channel = document.createElement("div");
    channel.className = "rod-channel";
    channel.setAttribute("aria-hidden", "true");

    const depth = document.createElement("div");
    depth.className = "rod-depth";
    depth.dataset.rodVisual = String(index);

    const graphite = document.createElement("span");
    graphite.className = "graphite-tip";
    depth.append(graphite);
    channel.append(depth);

    const output = document.createElement("output");
    output.className = "rod-output";
    output.dataset.rodOutput = String(index);

    const insert = document.createElement("button");
    insert.className = "rod-button";
    insert.type = "button";
    insert.textContent = "−";
    insert.dataset.rod = String(index);
    insert.dataset.action = "insert";
    insert.setAttribute("aria-label", "Insérer la barre R" + String(index + 1));

    controller.append(name, withdraw, channel, output, insert);
    elements.rodControls.append(controller);
  });
}

function setAlarm(key, active, message, severity) {
  const wasActive = state.activeAlarms.has(key);

  if (active && !wasActive) {
    state.activeAlarms.set(key, { message: message, severity: severity || "danger" });
    logEvent("ALARME · " + message, severity === "warning" ? "warning" : "danger");
  } else if (!active && wasActive) {
    state.activeAlarms.delete(key);
    logEvent("Alarme acquittée · " + message, "info");
  }
}

function averageRodInsertion() {
  return state.rods.reduce(function (sum, value) { return sum + value; }, 0) / state.rods.length;
}

function updateScram() {
  if (!state.scram.active) {
    state.scram.boost = 0;
    return;
  }

  state.scram.elapsed += TICK_SECONDS;

  if (state.scram.elapsed <= 2.5) {
    const remainingFraction = 1 - state.scram.elapsed / 2.5;
    state.scram.boost = 0.055 + 0.19 * remainingFraction;
    state.rods = state.rods.map(function (value) { return clamp(value + 4, 0, 100); });

    if (!state.scram.peakLogged && state.scram.elapsed >= 1) {
      state.scram.peakLogged = true;
      logEvent("Pointes en graphite : déplacement d’eau, modération momentanément accrue.", "danger");
    }
  } else {
    state.scram.boost = 0;
    state.rods = state.rods.map(function (value) { return clamp(value + 18, 0, 100); });
  }

  if (state.rods.every(function (value) { return value >= 100; })) {
    state.scram.active = false;
    state.scram.boost = 0;
    logEvent("AZ-5 terminé : partie absorbante entièrement insérée.", "warning");
  }
}

function updateDiesel() {
  if (state.diesel.mode !== "starting") return;

  state.diesel.remaining = Math.max(0, state.diesel.remaining - TICK_SECONDS);
  if (state.diesel.remaining === 0) {
    state.diesel.mode = "online";
    state.diesel.online = true;
    logEvent("Diesel generators synchronisés et disponibles.", "info");
  }
}

function calculateCriticality() {
  const rodsContribution = (60 - averageRodInsertion()) * 0.004;
  const xenonContribution = (0.18 - state.xenonLevel) * 0.24;
  const temperatureFeedback = (284 - state.reactorTemperature) * 0.00018;
  const positiveVoidCoefficient = state.steamBubbles * 0.0019;

  return clamp(
    1 + rodsContribution + xenonContribution + temperatureFeedback + positiveVoidCoefficient + state.scram.boost,
    0.55,
    1.65
  );
}

function updatePhysics() {
  state.previousPower = state.thermalPower;
  state.criticality = calculateCriticality();

  const growthRate = (state.criticality - 1) * 1.55;
  state.thermalPower = clamp(state.thermalPower * Math.exp(growthRate * TICK_SECONDS), 0.5, 120000);

  const powerRatio = state.thermalPower / NOMINAL_POWER;
  const flowPenalty = Math.max(0, 100 - state.waterFlow);
  const targetReactorTemperature = 260 + 24 * powerRatio + flowPenalty * (0.75 + powerRatio * 0.08);
  state.reactorTemperature = approach(state.reactorTemperature, targetReactorTemperature, 0.16);
  state.primaryTemperature = approach(state.primaryTemperature, state.reactorTemperature + flowPenalty * 0.08, 0.2);

  const targetSecondaryTemperature = 172 + 88 * Math.min(powerRatio, 7) + flowPenalty * 0.35;
  state.secondaryTemperature = approach(state.secondaryTemperature, targetSecondaryTemperature, 0.13);

  const boilingExcess = Math.max(0, state.primaryTemperature - 288);
  const lowFlowVoids = Math.max(0, 88 - state.waterFlow) * 0.82;
  const targetBubbles = clamp(boilingExcess * 1.7 + lowFlowVoids, 0, 100);
  state.steamBubbles = approach(state.steamBubbles, targetBubbles, 0.22);

  const postDropPoisoning = Math.max(0, state.previousPower - state.thermalPower) / NOMINAL_POWER * 0.006;
  const targetXenon = clamp(0.18 + (powerRatio - 1) * 0.035 + postDropPoisoning, 0.03, 0.95);
  state.xenonLevel = approach(state.xenonLevel, targetXenon, 0.004);

  state.neutronFlux = clamp(powerRatio * 100 * (1 + Math.max(0, state.criticality - 1) * 3), 0.02, 99999);

  const turbineEfficiency = clamp(state.waterFlow / 100, 0, 1.08) * clamp(state.buildingHealth / 100, 0.2, 1);
  state.electricPower = Math.max(0, state.thermalPower * 0.3125 * turbineEfficiency);

  const intactRadiation = 0.2 + Math.pow(Math.max(powerRatio, 1) - 1, 2.25) * 3.8;
  state.radiationActual = state.lidIntact ? intactRadiation : Math.max(1000, powerRatio * 1350);
}

function updateBuilding() {
  const blastConditions = state.reactorTemperature > 650 && state.steamBubbles > 55 && state.thermalPower > 9000;
  state.hydrogenExposure = blastConditions ? state.hydrogenExposure + TICK_SECONDS : Math.max(0, state.hydrogenExposure - TICK_SECONDS * 0.35);

  if (!state.hydrogenBlast && state.hydrogenExposure >= 3) {
    state.hydrogenBlast = true;
    state.lidIntact = false;
    state.buildingHealth = Math.max(0, state.buildingHealth - 58);
    logEvent("EXPLOSION HYDROGÈNE · couvercle déplacé, bâtiment endommagé.", "danger");
  }

  if (state.lidIntact && (state.thermalPower > 42000 || state.reactorTemperature > 1150)) {
    state.lidIntact = false;
    state.buildingHealth = Math.max(0, state.buildingHealth - 32);
    logEvent("Surpression du cœur · couvercle réacteur arraché.", "danger");
  }

  if (!state.lidIntact) {
    const damageRate = Math.max(0, state.thermalPower / 18000 - 0.4);
    state.buildingHealth = clamp(state.buildingHealth - damageRate * TICK_SECONDS, 0, 100);
  }

  if (state.buildingHealth <= 0 && !state.destroyed) {
    state.destroyed = true;
    logEvent("Bâtiment réacteur : intégrité structurelle perdue.", "danger");
  }
}

function updateAlarms() {
  setAlarm("criticality", Math.abs(state.criticality - 1) > 0.025, "Facteur de criticité hors bande stable", "danger");
  setAlarm("power", state.thermalPower > 4500, "Puissance réacteur élevée", "danger");
  setAlarm("temperature", state.reactorTemperature > 360, "Température réacteur élevée", "danger");
  setAlarm("flow", state.waterFlow < 70, "Débit d’eau insuffisant", "warning");
  setAlarm("voids", state.steamBubbles > 12, "Bulles de vapeur · coefficient de vide positif", "danger");
  setAlarm("diesel", state.diesel.mode === "starting", "Diesel generators en phase de spin-up", "warning");
  setAlarm("radiation", state.radiationActual > 3.6, "Radiamètre de salle saturé à 3.6 R/h", "danger");
  setAlarm("lid", !state.lidIntact, "Couvercle réacteur manquant", "danger");
  setAlarm("building", state.buildingHealth < 75, "Bâtiment réacteur endommagé", "danger");
  setAlarm("scram", state.scram.active && state.scram.elapsed <= 2.5, "Transient graphite-tip pendant SCRAM", "danger");
}

function renderAlarms() {
  elements.alarmList.replaceChildren();

  if (state.activeAlarms.size === 0) {
    const empty = document.createElement("li");
    empty.className = "alarm-empty";
    empty.textContent = "Aucune alarme active";
    elements.alarmList.append(empty);
  } else {
    state.activeAlarms.forEach(function (alarm) {
      const item = document.createElement("li");
      item.className = "alarm-item " + (alarm.severity === "warning" ? "warning" : "danger");

      const light = document.createElement("span");
      light.className = "alarm-light";
      light.setAttribute("aria-hidden", "true");

      const text = document.createElement("span");
      text.textContent = alarm.message;

      item.append(light, text);
      elements.alarmList.append(item);
    });
  }

  elements.alarmCount.textContent = String(state.activeAlarms.size) + (state.activeAlarms.size > 1 ? " actives" : " active");
}

function setMetricTone(element, tone) {
  element.classList.toggle("amber", tone === "amber");
  element.classList.toggle("red", tone === "red");
}

function renderRods() {
  state.rods.forEach(function (insertion, index) {
    const visual = document.querySelector('[data-rod-visual="' + String(index) + '"]');
    const output = document.querySelector('[data-rod-output="' + String(index) + '"]');
    visual.style.height = String(16 + insertion * 0.78) + "%";
    output.textContent = formatNumber(insertion, 0) + "%";
  });

  elements.rodControls.querySelectorAll("button").forEach(function (button) {
    button.disabled = state.scram.active || state.destroyed;
  });
}

function render() {
  const unstable = Math.abs(state.criticality - 1) > 0.025
    || state.thermalPower > 4500
    || state.reactorTemperature > 360
    || state.steamBubbles > 18
    || !state.lidIntact;

  elements.body.classList.toggle("unstable", unstable);
  elements.simulationClock.textContent = formatClock(state.elapsedMs);
  elements.stabilityLabel.innerHTML = "État <strong>" + (unstable ? "INSTABLE" : "NOMINAL") + "</strong>";

  elements.neutronStream.textContent = formatNumber(state.neutronFlux, state.neutronFlux < 1000 ? 0 : 0) + " %";
  elements.criticality.textContent = state.criticality.toFixed(3);
  elements.thermalPower.textContent = formatNumber(state.thermalPower, 0) + " MWth";
  elements.electricPower.textContent = formatNumber(state.electricPower, 0) + " MWe";
  elements.reactorTemperature.textContent = formatNumber(state.reactorTemperature, 0) + " °C";
  elements.xenonLevel.textContent = formatNumber(state.xenonLevel * 100, 1) + " %";
  elements.waterFlowOutput.textContent = formatNumber(state.waterFlow, 0) + " %";
  elements.primaryTemperature.textContent = formatNumber(state.primaryTemperature, 0) + " °C";
  elements.secondaryTemperature.textContent = formatNumber(state.secondaryTemperature, 0) + " °C";
  elements.steamBubbles.textContent = formatNumber(state.steamBubbles, 1) + " %";

  const barWidth = clamp(Math.log10(Math.max(state.neutronFlux, 1)) / 4 * 100, 2, 100);
  elements.neutronBar.style.width = String(barWidth) + "%";
  const particleDuration = clamp(3.2 - Math.log10(Math.max(state.neutronFlux, 1)) * 0.65, 0.22, 3.2);
  elements.neutronTrack.querySelectorAll(".neutron-particle").forEach(function (particle) {
    particle.style.animationDuration = String(particleDuration) + "s";
  });

  setMetricTone(elements.criticality, Math.abs(state.criticality - 1) > 0.07 ? "red" : Math.abs(state.criticality - 1) > 0.02 ? "amber" : "green");
  setMetricTone(elements.thermalPower, state.thermalPower > 9000 ? "red" : state.thermalPower > 4500 ? "amber" : "green");
  setMetricTone(elements.reactorTemperature, state.reactorTemperature > 650 ? "red" : state.reactorTemperature > 360 ? "amber" : "green");
  setMetricTone(elements.steamBubbles, state.steamBubbles > 35 ? "red" : state.steamBubbles > 12 ? "amber" : "green");

  if (state.diesel.mode === "stopped") {
    elements.dieselStatus.textContent = "ARRÊT";
    elements.dieselSpinup.textContent = "Spin-up : 35.0 s";
    elements.dieselStart.disabled = false;
  } else if (state.diesel.mode === "starting") {
    elements.dieselStatus.textContent = "SPIN-UP";
    elements.dieselSpinup.textContent = "Disponible dans " + state.diesel.remaining.toFixed(1) + " s";
    elements.dieselStart.disabled = true;
  } else {
    elements.dieselStatus.textContent = "EN LIGNE";
    elements.dieselSpinup.textContent = "Générateurs synchronisés";
    elements.dieselStart.disabled = true;
  }

  elements.reactorLid.textContent = state.lidIntact ? "INTACT" : "MANQUANT";
  elements.buildingHealth.textContent = formatNumber(state.buildingHealth, 0) + " %";
  elements.buildingHealthBar.style.width = String(state.buildingHealth) + "%";
  setMetricTone(elements.reactorLid, state.lidIntact ? "green" : "red");
  setMetricTone(elements.buildingHealth, state.buildingHealth < 45 ? "red" : state.buildingHealth < 75 ? "amber" : "green");

  const displayedRadiation = Math.min(3.6, state.radiationActual);
  elements.radiationMeter.textContent = displayedRadiation.toFixed(1) + " R/h" + (state.radiationActual > 3.6 ? " · MAX" : "");
  elements.radiationActual.textContent = state.radiationActual >= 1000
    ? "≈ " + formatNumber(state.radiationActual, 0) + " R/h"
    : state.radiationActual.toFixed(1) + " R/h";
  setMetricTone(elements.radiationMeter, state.radiationActual > 3.6 ? "red" : "green");

  elements.scram.disabled = state.scram.active || state.destroyed;
  renderRods();
  renderAlarms();
}

function tick() {
  state.elapsedMs += TICK_MS;
  state.tick += 1;

  updateScram();
  updateDiesel();
  updatePhysics();
  updateBuilding();
  updateAlarms();

  if (state.waterFlow < 55 && state.diesel.mode === "stopped") {
    startDiesel(true);
  }

  render();
}

function adjustRod(index, direction) {
  if (state.scram.active || state.destroyed) return;

  const oldValue = state.rods[index];
  const change = direction === "withdraw" ? -5 : 5;
  state.rods[index] = clamp(oldValue + change, 0, 100);

  if (state.rods[index] !== oldValue) {
    const action = direction === "withdraw" ? "retirée" : "insérée";
    logEvent("Barre R" + String(index + 1) + " " + action + " à " + String(state.rods[index]) + "%.", "info");
  }

  render();
}

function activateScram() {
  if (state.scram.active || state.destroyed) return;

  state.scram.active = true;
  state.scram.elapsed = 0;
  state.scram.boost = 0.245;
  state.scram.peakLogged = false;
  logEvent("AZ-5 déclenché · descente d’urgence des barres.", "danger");
  render();
}

function startDiesel(automatic) {
  if (state.diesel.mode !== "stopped") return;

  state.diesel.mode = "starting";
  state.diesel.remaining = 35;
  logEvent((automatic ? "Démarrage automatique" : "Démarrage manuel") + " des diesel generators · spin-up 35.0 s.", "warning");
  render();
}

function resetSimulation() {
  state = createInitialState();
  elements.waterFlow.value = "100";
  elements.eventLog.replaceChildren();
  createRodControls();
  logEvent("Reactor 4 initialisé · puissance stable à 3 200 MWth.", "info");
  logEvent("Xénon suivi en interne. Valeur volontairement masquée du tableau.", "info");
  render();
}

elements.rodControls.addEventListener("click", function (event) {
  const button = event.target.closest("button[data-rod]");
  if (!button) return;
  adjustRod(Number(button.dataset.rod), button.dataset.action);
});

elements.waterFlow.addEventListener("input", function () {
  state.waterFlow = Number(elements.waterFlow.value);
  logEvent("Débit d’eau réglé à " + String(state.waterFlow) + "%.", state.waterFlow < 70 ? "warning" : "info");
  render();
});

elements.scram.addEventListener("click", activateScram);
elements.dieselStart.addEventListener("click", function () { startDiesel(false); });
elements.reset.addEventListener("click", resetSimulation);

Object.defineProperty(window, "__reactorDiagnostics", {
  configurable: false,
  enumerable: false,
  value: Object.freeze({
    get xenonLevel() { return state.xenonLevel; },
    get snapshot() {
      return Object.freeze({
        criticality: state.criticality,
        thermalPower: state.thermalPower,
        neutronFlux: state.neutronFlux,
        xenonLevel: state.xenonLevel,
        steamBubbles: state.steamBubbles,
        radiationActual: state.radiationActual
      });
    }
  })
});

createNeutronParticles();
createRodControls();
logEvent("Reactor 4 initialisé · puissance stable à 3 200 MWth.", "info");
logEvent("Xénon suivi en interne. Valeur volontairement masquée du tableau.", "info");
render();
window.setInterval(tick, TICK_MS);
