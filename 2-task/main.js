let textField = document.querySelector("h5");
let input = document.querySelector("input");
let btn = document.querySelector("button.counter-btn");
let arrayStr = document.querySelector("p.card-text");

let landFields = ["XOOXO", "XOOXO", "OOOXO", "XXOXO", "OXOOO"];
let transformedFields = [];

init();

input.addEventListener("keypress", event => {
  let enteredStr = input.value;
  event.keyCode === 13 && updateArr(enteredStr);
});

btn.addEventListener("click", () => {
  let enteredStr = input.value;
  updateArr(enteredStr);
});

function updateArr(str) {
  landFields = str
    .toUpperCase()
    .split("")
    .filter(symbol => symbol === "X" || symbol === "O" || symbol === ",")
    .join("")
    .split(",");

  init();
}

function init() {
  transformFields(landFields);
  landPerimeter(transformedFields);
  arrayStr.innerHTML = `YOUR ARRAY: [${landFields.map(
    field => ` "${field}"`
  )}]`;
}

function transformFields(arr) {
  let newArr = [];
  arr.map(field => {
    return newArr.push(field.split(""));
  });
  transformedFields = newArr;
}

function landPerimeter(arr) {
  const MAX_PERIMETER = 4;
  let perimeterSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let fieldPerimeter = MAX_PERIMETER;

      if (arr[i][j] === "X") {
        i > 0 && arr[i - 1][j] === "X" && fieldPerimeter--;
        i < arr.length - 1 && arr[i + 1][j] === "X" && fieldPerimeter--;
        j > 0 && arr[i][j - 1] === "X" && fieldPerimeter--;
        j < arr[i].length - 1 && arr[i][j + 1] === "X" && fieldPerimeter--;
      } else {
        fieldPerimeter = 0;
      }

      perimeterSum += fieldPerimeter;
    }
  }
  textField.innerHTML = `Total land perimeter: ${perimeterSum}`;
}
