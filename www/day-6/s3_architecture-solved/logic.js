// logic.js
export function increment(current) {
  return {
    value: current.value + 1,
    history: [...current.history, current.value + 1]
  };
}

export function decrement(current) {
  return {
    value: current.value - 1,
    history: [...current.history, current.value - 1]
  };
}

export function reset() {
  return {
    value: 0,
    history: []
  };
}
