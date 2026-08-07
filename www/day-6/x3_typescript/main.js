"use strict";
// Extra x3 – Aperçu TypeScript
// Une application complète. Pas de starter ni de solution séparée.
const squirrelImages = {
    stable: "./assets/reactor-squirrel-safe.png",
    meltdown: "./assets/reactor-squirrel-melted.png"
};
function requireElement(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        throw new Error(`Élément introuvable : ${selector}`);
    }
    return element;
}
const form = requireElement("#division-form");
const dividendInput = requireElement("#dividend");
const divisorInput = requireElement("#divisor");
const result = requireElement("#result");
const reactor = requireElement("#reactor");
const reactorStatus = requireElement("#reactor-status");
const squirrel = requireElement("#squirrel");
function divide(dividend, divisor) {
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
function render(resultToRender) {
    const isMeltdown = resultToRender.state === "meltdown";
    result.textContent = resultToRender.message;
    reactor.classList.toggle("meltdown", isMeltdown);
    reactorStatus.textContent = isMeltdown ? "Fusion radioactive" : "Stable";
    squirrel.src = squirrelImages[resultToRender.state];
    squirrel.alt = isMeltdown
        ? "L’écureuil vert du Réacteur 4 a fondu dans une flaque radioactive."
        : "L’écureuil vert du Réacteur 4 est sain et sauf.";
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const dividend = Number(dividendInput.value);
    const divisor = Number(divisorInput.value);
    render(divide(dividend, divisor));
});
//# sourceMappingURL=main.js.map