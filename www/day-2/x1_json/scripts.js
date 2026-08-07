// ============================================================
// Extra 1 – JSON
// Exploration libre.
// ============================================================

// 1. stringify
//    Transformez l’objet ci-dessous en chaîne JSON.
const data = {
  name: "Alex",
  age: 28,
  skills: ["JS", "HTML"],
  active: true
};


// 2. parse
//    Repartez de la chaîne obtenue et reconstruisez l’objet.


// 3. Pièges à observer
//    Que devient une Date ?
//    Que se passe-t-il avec undefined, une fonction, un Symbol ?
const tricky = {
  date: new Date(),
  nothing: undefined,
  fn: function () {},
  id: Symbol("id")
};


// 4. Cas pratique
//    Créez un petit objet, stringifiez-le, puis parsez-le
//    et vérifiez que les données sont bien revenues.
