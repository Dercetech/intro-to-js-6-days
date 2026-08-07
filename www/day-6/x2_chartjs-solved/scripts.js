// ============================================================
// Extra x2 – Chart.js (solution)
// ============================================================

const ctx = document.getElementById("myChart");

const labels = ["Jan", "Fév", "Mar", "Avr", "Mai"];
const values = [12, 19, 8, 15, 22];

let chart = null;

function createChart(type) {
  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: [{
        label: "Experts autoproclamés se vantant de l’IA sur LinkedIn",
        data: values
      }]
    }
  });
}

document.getElementById("btn-bar").addEventListener("click", () => {
  createChart("bar");
});

document.getElementById("btn-line").addEventListener("click", () => {
  createChart("line");
});

createChart("bar");
