function fun1() {
  let rng = document.getElementById("loanTerm-range");
  let i1 = document.getElementById("loan-term");
  i1.value = rng.value;
}
function getPayment(sum, period, rate) {
  const i = rate / 12 / 100;
  const coefficient =
    (i * Math.pow(1 + i, period * 12)) / (Math.pow(1 + i, period * 12) - 1);
  const result = sum * coefficient;
  totalRecommendedIncome.innerHTML = Math.round(result);

  totalMonthlyPayment.innerHTML = rate;
  return Number(result.toFixed());
}

const totalAmountOfCredit = document.getElementById("amount-of-credit");
const totalMonthlyPayment = document.getElementById("monthly-payment");
const totalRecommendedIncome = document.getElementById("recommended-income");

const btn = document.getElementById("btn");

const inputs = document.querySelectorAll("input");

btn.addEventListener("click", () => {
  let propertyPrice = Number(document.querySelector(".property-price").value);
  let downPayment = Number(document.querySelector(".down-payment").value);
  let loanTerm = Number(document.querySelector(".loan-term").value);

  let totalSum = propertyPrice - downPayment;
  totalAmountOfCredit.innerHTML = totalSum;

  getPayment(totalSum, loanTerm, 6.9);

  if (downPayment > 50000) {
    totalRecommendedIncome.classList.add("redClass");
  } else {
    totalRecommendedIncome.classList.remove("redClass");
  }
});

// 3500000 700000 30;
