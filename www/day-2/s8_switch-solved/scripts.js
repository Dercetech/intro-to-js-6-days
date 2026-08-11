// ============================================================
// Section 08 – switch · Corrigé
// ============================================================

const day = 3;

switch (day) {
  case 1:
    console.log("Lundi");
    break;
  case 2:
    console.log("Mardi");
    break;
  case 3:
    console.log("Mercredi");
    break;
  case 4:
    console.log("Jeudi");
    break;
  case 5:
    console.log("Vendredi");
    break;
  case 6:
  case 7:
    console.log("Week-end");
    break;
  default:
    console.log("Jour invalide");
}

// Démonstration fall-through
const value = 1;
switch (value) {
  case 1:
    console.log("un");
    // pas de break
  case 2:
    console.log("deux");
    break;
  default:
    console.log("autre");
}
