// ============================================================
// Section 05 – this : règles claires · Corrigé
// ============================================================

// 1. Appel simple
function showThis() {
  console.log("showThis →", this);
}
showThis(); // window (ou undefined en strict mode)


// 2. Méthode d’objet
const user = {
  name: "Alex",
  greet() {
    console.log("Bonjour, je suis", this.name);
  }
};
user.greet(); // Alex


// 3. Perte de this – corrigé avec bind
const greetFn = user.greet.bind(user);
greetFn(); // Alex


// 4. Arrow vs classique
const counter = {
  count: 0,
  incrementClassic: function () {
    this.count++;
    console.log("classic →", this.count);
  },
  incrementArrow: () => {
    // this n’est pas counter ici
    console.log("arrow this →", this);
  }
};
counter.incrementClassic(); // 1
counter.incrementArrow();   // this = window / undefined


// 5. call / bind
function present(city) {
  console.log(`${this.name} habite à ${city}`);
}
const person = { name: "Sam" };
present.call(person, "Lyon");
const presentSam = present.bind(person);
presentSam("Paris");
