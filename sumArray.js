/*
Description:
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

FUNDAMENTALSARRAYSNUMBERS


*/

const positiveSum = (arr) => {
  var sum = 0;
  var negativeNums = [];
  for (let arrs of arr) {
    if (arrs < 0) {
      negativeNums.push(arrs);
    } else {
      sum += arrs;
    }
  }
  return sum;
};
