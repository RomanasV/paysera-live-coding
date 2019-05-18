const BIRTH_PER_YEAR = 1;
const YEARS_TILL_BIRTH = 4;

countCows = years => {
  isNaN(years) ? console.log("Please enter a number.") : getTotalCows(years);
};

getTotalCows = years => {
  let cowsAgeArray = [0];
  for (let i = 0; i <= years; i++) {
    for (let j = 0; j < cowsAgeArray.length; j++) {
      cowsAgeArray[j] += BIRTH_PER_YEAR;
      cowsAgeArray[j] >= YEARS_TILL_BIRTH && cowsAgeArray.push(0);
    }
  }
  console.log(cowsAgeArray.length);
};
