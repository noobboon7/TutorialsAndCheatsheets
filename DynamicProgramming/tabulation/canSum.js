/* 
Write a function that takes in a targetSum and an array of numbers as arguments.

The function should return a boolean indicating whether of not it is possible to generate the targetSum using from the array.

You may use an element of the array as many times as needed.

You may assume that all input numbers are non-negative.
*/

const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;
  
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] === true){
      for (const num of numbers) {
        table[i + num] = true;
      }
    }
  }
  // console.log(table)
  return table[targetSum];
}

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(7, [2, 3, 5]));
console.log(canSum(300, [7, 14]));