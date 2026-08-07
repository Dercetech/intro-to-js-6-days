// ============================================================
// Section 04 – Closures (niveau pratique) · Corrigé
// ============================================================

// 1. Compteur privé
function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
    },
    getValue() {
      return count;
    }
  };
}
const counter = createCounter();
counter.increment();
counter.increment();
console.log("counter →", counter.getValue()); // 2
// console.log(counter.count); // undefined


// 2. Fonction factory
function createGreeter(greeting) {
  return function (name) {
    return `${greeting} ${name}`;
  };
}
const sayHello = createGreeter("Bonjour");
console.log(sayHello("Alex")); // Bonjour Alex


// 3. Piège corrigé (avec let)
function createFunctions() {
  const funcs = [];
  for (let i = 0; i < 3; i++) {
    funcs.push(function () {
      console.log(i);
    });
  }
  return funcs;
}
const functions = createFunctions();
functions[0](); // 0
functions[1](); // 1
functions[2](); // 2


// 4. Multiplication partielle
function multiplyBy(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = multiplyBy(2);
const triple = multiplyBy(3);
console.log(double(5));  // 10
console.log(triple(5));  // 15
