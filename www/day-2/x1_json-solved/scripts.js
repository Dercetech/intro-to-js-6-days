// ============================================================
// Extra 1 – JSON · Corrigé
// ============================================================

// 1. stringify
const data = {
  name: "Alex",
  age: 28,
  skills: ["JS", "HTML"],
  active: true
};
const json = JSON.stringify(data);
console.log(json);

// 2. parse
const restored = JSON.parse(json);
console.log(restored);

// 3. Pièges
const tricky = {
  date: new Date(),
  nothing: undefined,
  fn: function () {},
  id: Symbol("id")
};
console.log(JSON.stringify(tricky));
// date → chaîne ISO
// undefined, fn, Symbol → absents

// 4. Cas pratique
const settings = { theme: "dark", lang: "fr" };
const asText = JSON.stringify(settings);
const back = JSON.parse(asText);
console.log(back);
console.log(back.theme === "dark");
