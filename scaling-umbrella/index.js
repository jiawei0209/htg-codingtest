const arrange = (array) => {
  const res = [];
  let i = 0;

  if (array.length <= 0 || array[0].length <= 0) return res;

  // 1) initialise pointer
  let left = 0;
  let right = array[0].length;
  let top = 0;
  let bottom = array.length;

  // 2) check is the row or column is it visited
  while (left < right && top < bottom) {
    // 3) get every element in the top row
    for (i = 0; i < right - left; i++) {
      res.push(array[top][left + i]);
    }
    top += 1;

    // 4) get element from the right column
    for (i = 0; i < bottom - top; i++) {
      res.push(array[top + i][right - 1]);
    }
    right -= 1;

    if (!(left < right && top < bottom)) break;

    // 5) get every element from the bottom row
    for (i = 0; i < right - left; i++) {
      res.push(array[bottom - 1][right - i - 1]);
    }
    bottom -= 1;

    // 6) get every element from the left column
    for (i = 0; i < bottom - top; i++) {
      res.push(array[bottom - i - 1][left]);
    }
    left += 1;
  }
  return res;
};

const test = () => {
  //test case
  let array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];

  const result = arrange(array);
  console.log(result);
};

test();
