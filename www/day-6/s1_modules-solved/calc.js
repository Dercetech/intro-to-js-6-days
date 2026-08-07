// calc.js
export function calculateTTC(ht, rate = 0.2) {
  return ht * (1 + rate);
}

export const DEFAULT_RATE = 0.2;
