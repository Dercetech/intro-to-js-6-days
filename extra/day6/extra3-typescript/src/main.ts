// Extra x3 – Aperçu TypeScript
// Une application complète. Pas de starter ni de solution séparée.

type ReactorState = "stable" | "meltdown";

interface DivisionResult {
  state: ReactorState;
  message: string;
}

const squirrelImages: Record<ReactorState, string> = {
  stable: "./assets/reactor-squirrel-safe.png",
  meltdown: "./assets/reactor-squirrel-melted.png"
};

function requireElement<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);

  if (!element) {
    throw new Error(`Élément introuvable : ${selector}`);
  }

  return element;
}

const form = requireElement<HTMLFormElement>("#division-form");
const dividendInput = requireElement<HTMLInputElement>("#dividend");
const divisorInput = requireElement<HTMLInputElement>("#divisor");
const result = requireElement<HTMLParagraphElement>("#result");
const reactor = requireElement<HTMLElement>("#reactor");
const reactorStatus = requireElement<HTMLParagraphElement>("#reactor-status");
const squirrel = requireElement<HTMLImageElement>("#squirrel");

function divide(dividend: number, divisor: number): DivisionResult {
  if (divisor === 0) {
    return {
      state: "meltdown",
      message: "Division par zéro. L’écureuil vient de fondre. Le compilateur ne pouvait pas tout empêcher."
    };
  }

  const value = dividend / divisor;

  return {
    state: "stable",
    message: `${dividend} ÷ ${divisor} = ${value}`
  };
}

function render(resultToRender: DivisionResult): void {
  const isMeltdown = resultToRender.state === "meltdown";

  result.textContent = resultToRender.message;
  reactor.classList.toggle("meltdown", isMeltdown);
  reactorStatus.textContent = isMeltdown ? "Fusion radioactive" : "Stable";
  squirrel.src = squirrelImages[resultToRender.state];
  squirrel.alt = isMeltdown
    ? "L’écureuil vert du Réacteur 4 a fondu dans une flaque radioactive."
    : "L’écureuil vert du Réacteur 4 est sain et sauf.";
}

form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  const dividend = Number(dividendInput.value);
  const divisor = Number(divisorInput.value);

  render(divide(dividend, divisor));
});
