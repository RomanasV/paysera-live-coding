const landFields = ["XOOXO", "XOOXO", "OOOXO", "XXOXO", "OXOOO"];

transformFields = arr => {
  let newArr = [];
  arr.map(field => {
    return newArr.push(field.split(""));
  });
  return newArr;
};

const transformedFields = transformFields(landFields);

landPerimeter = arr => {
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
  return console.log(`Total land perimeter: ${perimeterSum}`);
};

landPerimeter(transformedFields);
