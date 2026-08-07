// ============================================================
// Section 05 – Keyboard & mouse essentials (SOLUTION)
// ============================================================

const logEl = document.querySelector("#log");
function writeLog(msg) {
  console.log(msg);
  logEl.textContent += msg + "\n";
}

const keyField = document.querySelector("#key-field");
const clickZone = document.querySelector("#click-zone");
const drawArea = document.querySelector("#draw-area");

// 1 + 2. keydown + preventDefault sur Enter
keyField.addEventListener("keydown", function (event) {
  writeLog("keydown : " + event.key);
  if (event.key === "Enter") {
    event.preventDefault();
    writeLog("Enter bloqué");
  }
});

// 3. keyup
keyField.addEventListener("keyup", function (event) {
  writeLog("relâché : " + event.key);
});

// 4. click vs mousedown / mouseup
clickZone.addEventListener("mousedown", function () {
  writeLog("mousedown");
});
clickZone.addEventListener("mouseup", function () {
  writeLog("mouseup");
});
clickZone.addEventListener("click", function () {
  writeLog("click");
});

// 5. Position du pointeur
drawArea.addEventListener("click", function (event) {
  writeLog(
    "click → client: " + event.clientX + "," + event.clientY +
    " | offset: " + event.offsetX + "," + event.offsetY
  );
});

// 6. (Bonus) mousemove – version sobre (Console seulement pour éviter le flood)
drawArea.addEventListener("mousemove", function (event) {
  console.log("mousemove offset:", event.offsetX, event.offsetY);
});
