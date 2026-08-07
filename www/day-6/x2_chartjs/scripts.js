// ============================================================
// Extra x2 – Chart.js (exploration libre)
// Le tronc commun de la formation reste vanilla.
// Objectif : faire apparaître un graphique avec un CDN.
// ============================================================

const ctx = document.getElementById("myChart");

// Données de démonstration (vous pouvez les changer)
const labels = ["Jan", "Fév", "Mar", "Avr", "Mai"];
const values = [12, 19, 8, 15, 22];

// Variable qui gardera l’instance du graphique
let chart = null;

// 1. Écrivez une fonction createChart(type)
//    - si un graphique existe déjà, détruisez-le avec chart.destroy()
//    - créez un nouveau Chart avec :
//        type: type (reçu en argument)
//        data.labels = labels
//        data.datasets = [{ label: "Experts autoproclamés se vantant de l’IA sur LinkedIn", data: values }]
//    - stockez l’instance dans la variable chart
//
// 2. Sur le clic de #btn-bar → createChart("bar")
// 3. Sur le clic de #btn-line → createChart("line")
//
// 4. Appelez createChart("bar") une fois au démarrage
