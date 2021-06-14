const nextNumber = (num) => {
  const numArray = num.toString().split("").map(Number);

  if (numArray.length <= 1) return -1;

  let pointer = 0;
  let smallestToSwap;

  for (let i = numArray.length; i >= 0; i--) {
    if (numArray[i] > numArray[i - 1]) {
      pointer = i - 1;
      //first candidate to swap with
      smallestToSwap = i;
      break;
    }

    //edge case: element in num is in descending order, hence return -1
    if (i == 0) return -1;
  }

  //check whether there are candidate with smaller value
  for (let i = pointer; i < numArray.length; i++) {
    if (
      numArray[smallestToSwap] > numArray[i] &&
      numArray[i] > numArray[pointer] &&
      numArray[i] != numArray[smallestToSwap]
    ) {
      smallestToSwap = i;
    }
  }

  //swap the last increase element with the smallest to swap from the right
  [numArray[pointer], numArray[smallestToSwap]] = [
    numArray[smallestToSwap],
    numArray[pointer],
  ];

  //split the array into sorted(elements before the pointer) and unsorted(elements after the pointer)
  const sorted = numArray.slice(0, pointer + 1);
  const unsorted = numArray.slice(pointer + 1, numArray.length).sort();

  //put the sorted and unsorted array together and convert it to number string using .join("")
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
