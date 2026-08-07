// ============================================================
// Section 4 – Boucles et fonctions · Corrigé
// ============================================================

// 1. Boucle for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 2. Boucle while
let n = 10;
while (n >= 1) {
  console.log(n);
  n--;
}

// 3. for...of et for...in
const colors = ["rouge", "vert", "bleu"];

for (const color of colors) {
  console.log("valeur :", color);
}

for (const index in colors) {
  console.log("index :", index, "→", colors[index]);
}

// 4. Fonction déclaration
function isEven(number) {
  return number % 2 === 0;
}
console.log("isEven(4) →", isEven(4));
console.log("isEven(7) →", isEven(7));

// 5. Fonction expression
const isOdd = function (number) {
  return number % 2 !== 0;
};
console.log("isOdd(4) →", isOdd(4));
console.log("isOdd(7) →", isOdd(7));

// 6. Arrow function
const calculateVAT = (price, rate = 0.20) => price * (1 + rate);
console.log("TTC 100 € →", calculateVAT(100));
console.log("TTC 100 € à 5,5 % →", calculateVAT(100, 0.055));

// 7. Paramètre par défaut + template literal
function formatName(firstName, lastName = "Doe") {
  return `${firstName} ${lastName}`;
}
console.log(formatName("Alex"));
console.log(formatName("Alex", "Martin"));

// 8. Petite validation
function isLongEnough(text, minLength = 8) {
  return text.length >= minLength;
}
console.log(isLongEnough("abcdef"));      // false
console.log(isLongEnough("abcdefgh"));    // true
console.log(isLongEnough("abc", 3));      // true

// 9. Boucle + fonction
function sumUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log("sumUpTo(5) →", sumUpTo(5));   // 15
console.log("sumUpTo(10) →", sumUpTo(10)); // 55
