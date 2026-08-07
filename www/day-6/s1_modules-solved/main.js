// ============================================================
// Section 01 – Modules ES (solution)
// ============================================================

import { calculateTTC, DEFAULT_RATE } from './calc.js';
import formatPrice from './format.js';

const priceInput = document.querySelector('#price-ht');
const rateInput = document.querySelector('#rate');
const btn = document.querySelector('#btn-calc');
const result = document.querySelector('#result');

btn.addEventListener('click', () => {
  const ht = Number(priceInput.value);
  const rate = Number(rateInput.value) || DEFAULT_RATE;
  const ttc = calculateTTC(ht, rate);

  result.textContent = formatPrice(ttc);
  console.log('TTC brut :', ttc);
});
