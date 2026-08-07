// ============================================================
// Section 02 – Tableaux & méthodes essentielles · Corrigé
// ============================================================

const numbers = [4, 8, 15, 16, 23, 42, 7, 11];

// 1. map
const doubled = numbers.map(n => n * 2);
console.log("doubled →", doubled);

// 2. filter
const evens = numbers.filter(n => n % 2 === 0);
console.log("evens →", evens);

// 3. find
const firstBig = numbers.find(n => n > 20);
console.log("first > 20 →", firstBig);

// 4. some / every
console.log("au moins un > 40 →", numbers.some(n => n > 40));
console.log("tous positifs →", numbers.every(n => n > 0));

// 5. Statistiques réécrites
function sum(arr) {
  return arr.reduce((acc, n) => acc + n, 0);
}
function average(arr) {
  if (arr.length === 0) return 0;
  return sum(arr) / arr.length;
}
function min(arr) {
  return Math.min(...arr);
}
function max(arr) {
  return Math.max(...arr);
}
console.log("sum →", sum(numbers));
console.log("average →", average(numbers));
console.log("min →", min(numbers));
console.log("max →", max(numbers));

// 6. Stretch
const sorted = [...numbers].sort((a, b) => a - b);
console.log("sorted →", sorted);
