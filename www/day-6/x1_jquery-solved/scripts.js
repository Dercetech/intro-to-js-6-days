// ============================================================
// Extra x1 – jQuery (solution)
// ============================================================

function log(msg) {
  console.log(msg);
  $("#log").append(msg + "\n");
}

// 1. Sélection
const $btn = $("#my-btn");
const $items = $(".item");
log("Nombre d'items : " + $items.length);

// 2. Événement
$btn.on("click", function () {
  log("bouton cliqué (jQuery)");
});

// 3. Classes
$("#btn-toggle").on("click", function () {
  $items.toggleClass("active");
  log("classe active basculée");
});

// 4. Contenu
$("#title").text("Titre modifié avec jQuery");
