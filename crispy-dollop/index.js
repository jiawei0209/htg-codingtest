const nextNumber = (num) => {
  // 1) comvert num into array
  const numArray = num.toString().split("").map(Number);

  // edge case (a):  return -1 if it is single digit
  if (numArray.length <= 1) return -1;

  let pointer = 0;
  let smallestToSwap;

  // 2) find the pointer
  for (let i = numArray.length; i >= 0; i--) {
    if (numArray[i] > numArray[i - 1]) {
      pointer = i - 1;
      //first candidate that could be chosen to swap with
      smallestToSwap = i;
      break;
    }

    //edge case (b): element in num is in descending order, hence return -1
    if (i == 0) return -1;
  }

  // 3) check whether there are candidate with smaller value
  for (let i = pointer; i < numArray.length; i++) {
    if (
      numArray[smallestToSwap] > numArray[i] &&
      numArray[i] > numArray[pointer] &&
      numArray[i] != numArray[smallestToSwap]
    ) {
      smallestToSwap = i;
    }
  }

  // 4) swap the last increase element with the smallest to swap from the right
  [numArray[pointer], numArray[smallestToSwap]] = [
    numArray[smallestToSwap],
    numArray[pointer],
  ];

  // 5) split the array into sorted(elements before the pointer) and unsorted(elements after the pointer)
  const sorted = numArray.slice(0, pointer + 1);
  const unsorted = numArray.slice(pointer + 1, numArray.length).sort();

  // 6) put them back together and covert it back to Number
  const ans = [...sorted, ...unsorted].join("");

  return ans;
};

const test = () => {
  //test case
  let num = 112223333;

  const result = nextNumber(num);
  console.log(result);
};

test();
