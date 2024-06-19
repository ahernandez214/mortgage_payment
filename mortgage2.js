const xBox = document.getElementById("x");
const yBox = document.getElementById("y");
const yearsBox = document.getElementById("years");
const answerSpan = document.getElementById("result");

function calcVelker() {
    const principal = Number(xBox.value);
    const yearlyRate = Number(yBox.value);
    const years = Number(yearsBox.value);


   
    const monthlyRate = yearlyRate / 1200;
    const numberOfPayments = years * 12;

    const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));

    answerSpan.textContent = `$${monthlyPayment.toFixed(2)}`;
}
