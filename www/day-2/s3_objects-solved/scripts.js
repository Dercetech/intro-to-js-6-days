// ============================================================
// Section 03 – Objets, destructuring, spread/rest · Corrigé
// ============================================================

// 1. Création et accès
const user = {
  name: "Alex",
  age: 28,
  city: "Lyon"
};
console.log(user.name);
console.log(user["age"]);
console.log(user.city);

// 2. Raccourci de propriété
const firstName = "Sam";
const lastName = "Martin";
const person = { firstName, lastName };
console.log(person);

// 3. Destructuring d’objet
const { name, age, country = "France" } = user;
console.log(name, age, country);

// 4. Destructuring de tableau
const colors = ["rouge", "vert", "bleu"];
const [primary, secondary] = colors;
console.log(primary, secondary);

// 5. Spread
const newUser = { ...user, country: "Belgique" };
console.log(newUser);

const settings = { theme: "dark", lang: "fr" };
const overrides = { lang: "en", fontSize: 16 };
const finalSettings = { ...settings, ...overrides };
console.log(finalSettings);

// 6. Rest
function showFirstAndRest(first, ...rest) {
  console.log("first →", first);
  console.log("rest →", rest);
}
showFirstAndRest(10, 20, 30, 40);
