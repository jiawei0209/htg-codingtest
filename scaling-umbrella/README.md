# scaling-umbrella

## Description

The function should return an array which are arrange in spiral order starting from array[0][0] (top left position).

## Solution

Starting from top left position, traverse right to get all from top row, then traverse down to get all from right column, then traverse left to get all from bottom row, then traverse up to get all from left column.


<img src="https://user-images.githubusercontent.com/49709675/121921099-43f11580-cd6b-11eb-951d-d414f5819fe2.jpg" width="35%" height="35%">

Traverse the outer layer then only inner layer. The inner layer is also a n\*n block, hence the approach will be the same.

<img src="https://user-images.githubusercontent.com/49709675/121923414-7c91ee80-cd6d-11eb-814f-daf267aa3c8a.jpg" width="35%" height="35%">

The pointer top, bottom, left and right will be the indicator for the direction to traverse. After getting all the element in that row or column, the pointer should point to the inner layer. The process should stop after all element in the array is visited.

<img src="https://user-images.githubusercontent.com/49709675/121923705-c67ad480-cd6d-11eb-8797-e8b4290d805a.jpg" width="35%" height="35%">

### The approach

1. Initialise the pointers (top,bottom,left,right).

```
  let left = 0;
  let right = array[0].length;
  let top = 0;
  let bottom = array.length;
```

2. Add a condition to check that the particular row or column is not visited yet.

```
while (left < right && top < bottom)
```

3. Traverse right to get all from top row. Top is +1 to shift it to point to inner layer.
4. Traverse down to get all from right column. Right is -1 to shift it to point to inner layer.
5. Traverse left to get all from bottom row. Bottom is -1 to shift it to point to inner layer.
6. Traverse up to get all from left column. Left is +1 to shift it to point to inner layer.
