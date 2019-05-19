const BIRTH_PER_YEAR = 1;
const YEARS_TILL_BIRTH = 4;
const YEARS_TILL_DEATH = 15;
const MAX_YEARS = 30;

let textField = document.querySelector("h5");
let input = document.querySelector("input");
let btn = document.querySelector("a");

init();

btn.addEventListener("click", () => {
  let enteredYears = isNaN(input.value) ? 0 : input.value;
  transformText(enteredYears);
});

function init() {
  textField.textContent =
    "You have 1 cow. Let's calculate how many will you have in the future!";
}

transformText = enteredYears => {
  isNaN(enteredYears) || enteredYears < 1
    ? (textField.textContent =
        "You have 1 cow. It does not have any child at the moment.")
    : enteredYears <= MAX_YEARS
    ? (textField.textContent = `${enteredYears} years have passed. And you now have ${getTotalCows(
        enteredYears
      )} cows.`)
    : (textField.textContent = `${enteredYears} years are too much for calculation. You will probably have bazillions cows at that point!`);
};

getTotalCows = years => {
  let cowsAgeArray = [0];
  for (let i = 0; i <= years; i++) {
    for (let j = 0; j < cowsAgeArray.length; j++) {
      cowsAgeArray[j] += BIRTH_PER_YEAR;
      cowsAgeArray[j] >= YEARS_TILL_BIRTH && cowsAgeArray.push(0);
    }
  }
  return cowsAgeArray.length;
};
