// ============================================================
// Section 5 – Exercices pure JS · Corrigé
// ============================================================

// 1. Convertisseur de température
function celsiusToFahrenheit(c) {
  return c * 9 / 5 + 32;
}

function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}

console.log("25°C →", celsiusToFahrenheit(25), "°F");
console.log("77°F →", fahrenheitToCelsius(77), "°C");


// 2. Force d’un mot de passe
function checkPasswordStrength(password) {
  const result = {
    length: password.length >= 8,
    hasLower: /[a-z]/.test(password),
    hasUpper: /[A-Z]/.test(password),
    hasDigit: /[0-9]/.test(password),
    hasSpecial: /[^a-zA-Z0-9]/.test(password),
    score: 0
  };

  result.score =
    Number(result.length) +
    Number(result.hasLower) +
    Number(result.hasUpper) +
    Number(result.hasDigit) +
    Number(result.hasSpecial);

  return result;
}

console.log(checkPasswordStrength("abc"));
console.log(checkPasswordStrength("Abcdef1!"));


// 3. Statistiques sur un tableau
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

function average(numbers) {
  if (numbers.length === 0) return 0;
  return sum(numbers) / numbers.length;
}

function min(numbers) {
  let currentMin = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < currentMin) {
      currentMin = numbers[i];
    }
  }
  return currentMin;
}

function max(numbers) {
  let currentMax = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > currentMax) {
      currentMax = numbers[i];
    }
  }
  return currentMax;
}

const sample = [4, 8, 15, 16, 23, 42];
console.log("sum →", sum(sample));
console.log("average →", average(sample));
console.log("min →", min(sample));
console.log("max →", max(sample));


// 4. Utilitaires de chaînes
function capitalize(text) {
  if (text.length === 0) return text;
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

function reverseString(text) {
  let reversed = "";
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
}

function countVowels(text) {
  const vowels = "aeiouyAEIOUY";
  let count = 0;
  for (let i = 0; i < text.length; i++) {
    if (vowels.includes(text[i])) {
      count++;
    }
  }
  return count;
}

console.log(capitalize("hELLo"));           // Hello
console.log(reverseString("JavaScript"));   // tpircSavaJ
console.log(countVowels("JavaScript"));     // 3
