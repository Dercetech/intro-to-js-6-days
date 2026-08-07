// ============================================================
// Section 05 – this : règles claires
// Observez this dans le panneau Sources (Scope).
// ============================================================

// 1. Appel simple
//    Que vaut this ici ? (mode non-strict)
function showThis() {
  console.log("showThis →", this);
}
showThis();


// 2. Méthode d’objet
const user = {
  name: "Alex",
  greet() {
    console.log("Bonjour, je suis", this.name);
  }
};
user.greet();


// 3. Perte de this (piège classique)
const greetFn = user.greet;
// greetFn(); // que se passe-t-il ?
// Corrigez avec bind


// 4. Arrow function vs fonction classique
const counter = {
  count: 0,
  incrementClassic: function () {
    this.count++;
    console.log("classic →", this.count);
  },
  incrementArrow: () => {
    this.count++;
    console.log("arrow →", this.count);
  }
};
// Appelez les deux méthodes et observez la différence


// 5. call / apply / bind (aperçu)
function present(city) {
  console.log(`${this.name} habite à ${city}`);
}
const person = { name: "Sam" };
// Utilisez call ou bind pour que present utilise person comme this
