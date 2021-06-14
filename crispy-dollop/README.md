# crispy-dollop

## Description

The function are expected to return the next bigger element that are form using the numbers. The function will return -1 when there is no larger number can be form.

## Solution

### Edge case

- a) There are no larger number if the number is single digit.
- b) It will be not possible to find a larger number if the number is already in descending order or all the element is the same.
- c) If the number is in ascending order, the last 2 digit will swap.

### The approach

1. Convert the number into an array.
2. Traverse the array from right to find the first decreasing number (pointer). The pointer will swap with a smallest number that are from the right side of the pointer. The smallest number need to be larger than the value of the pointer.
3. Compare and find the smallest value that can be swap with the pointer value.
4. Swap the value.

```
  [numArray[pointer], numArray[smallestToSwap]] = [
    numArray[smallestToSwap],
    numArray[pointer],
  ];
```

5. Split the array into two (sorted and unsorted). The sequence of the value before the pointer will remain the same, hence we can assume that it is sorted. While the element after the pointer will need to sorted to make sure the result will be the next bigger number.
6. Put the sorted and unsorted array back together and convert them into numbers again using join("").

## Additional 
The current function did not handle negative number.
