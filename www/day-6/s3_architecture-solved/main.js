// ============================================================
// Section 03 – Architecture légère (solution)
// ============================================================

import { state } from './state.js';
import { increment, decrement, reset } from './logic.js';

function render() {
  document.querySelector('#value').textContent = state.value;
  document.querySelector('#history').textContent = state.history.join(' → ');
}

document.querySelector('#btn-inc').addEventListener('click', () => {
  Object.assign(state, increment(state));
  render();
});

document.querySelector('#btn-dec').addEventListener('click', () => {
  Object.assign(state, decrement(state));
  render();
});

document.querySelector('#btn-reset').addEventListener('click', () => {
  Object.assign(state, reset());
  render();
});

render();
