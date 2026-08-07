// ============================================================
// Section 01 – Sources & premier débogage · Corrigé
// ============================================================

// Bug 1 – corrigé (boucle de 1 à n inclus)
function sumUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log("sumUpTo(5) →", sumUpTo(5)); // 15


// Bug 2 – corrigé
function double(x) {
  let value = x * 2;
  return value;
}
console.log("double(7) →", double(7));


// Bug 3 – corrigé (== → === et return false)
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
console.log("isEven(4) →", isEven(4));
console.log("isEven(5) →", isEven(5));


// Bug 4 – corrigé (let à la place de var)
function createPrinters() {
  const printers = [];
  for (let i = 0; i < 3; i++) {
    printers.push(function () {
      console.log("index =", i);
    });
  }
  return printers;
}
const printers = createPrinters();
printers[0]();
printers[1]();
printers[2]();


// Bug 5 – corrigé (protection null/undefined)
function getUpperName(user) {
  if (!user || typeof user.name !== "string") {
    return "inconnu";
  }
  return user.name.toUpperCase();
}
console.log(getUpperName({ name: "Alex" }));
console.log(getUpperName({}));
console.log(getUpperName(null));


// Bug 6 – version propre
function calculate(a, b) {
  let result = a + b;
  result = result * 2;
  const tax = result * 0.2;
  return result + tax;
}
console.log("calculate(10, 5) →", calculate(10, 5));
