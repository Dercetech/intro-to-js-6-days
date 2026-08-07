// ============================================================
// Extra 1 – Le bouton qui fuit (SOLUTION)
// ============================================================

const btn = document.querySelector("#fugitive");
const stage = document.querySelector("#stage");

const ZONES = [
  { left: 5,  top: 5  },
  { left: 45, top: 5  },
  { left: 80, top: 5  },
  { left: 5,  top: 45 },
  { left: 45, top: 45 },
  { left: 80, top: 45 },
  { left: 5,  top: 80 },
  { left: 45, top: 80 },
  { left: 80, top: 80 }
];

let currentZone = 0;
let canFlee = true;
let caught = false;

function placeInZone(index) {
  currentZone = index;
  const zone = ZONES[index];
  btn.style.left = zone.left + "%";
  btn.style.top = zone.top + "%";
}

function randomZoneExcept(except) {
  let next;
  do {
    next = Math.floor(Math.random() * ZONES.length);
  } while (next === except);
  return next;
}

// Position de départ
placeInZone(randomZoneExcept(-1));

document.addEventListener("mousemove", function (event) {
  if (caught || !canFlee) return;

  const rect = btn.getBoundingClientRect();
  const btnCenterX = rect.left + rect.width / 2;
  const btnCenterY = rect.top + rect.height / 2;

  const dx = event.clientX - btnCenterX;
  const dy = event.clientY - btnCenterY;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 120) {
    placeInZone(randomZoneExcept(currentZone));
    canFlee = false;
    setTimeout(function () {
      canFlee = true;
    }, 250);
  }
});

btn.addEventListener("click", function () {
  if (caught) return;
  caught = true;
  btn.textContent = "bravo.";
  btn.style.background = "#2ecc71";
  btn.style.color = "#fff";
});
