// ============================================================
// Section 6 – Pièges classiques · Corrigé
// ============================================================

// 1. var vs let dans une boucle + setTimeout
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var", i), 50);
}
// → 3, 3, 3

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let", j), 50);
}
// → 0, 1, 2


// 2. Temporal Dead Zone
// console.log(a); // ReferenceError si décommenté
let a = 10;
console.log("a après déclaration →", a);


// 3. Fonctions créées dans une boucle
const funcsVar = [];
for (var k = 0; k < 3; k++) {
  funcsVar.push(function () {
    console.log("var k →", k);
  });
}
funcsVar[0](); // 3
funcsVar[1](); // 3
funcsVar[2](); // 3

const funcsLet = [];
for (let k = 0; k < 3; k++) {
  funcsLet.push(function () {
    console.log("let k →", k);
  });
}
funcsLet[0](); // 0
funcsLet[1](); // 1
funcsLet[2](); // 2


// 4. Shadowing
let x = "extérieur";

function test() {
  let x = "intérieur";
  console.log("dans la fonction →", x);
}
test();
console.log("à l’extérieur →", x);
