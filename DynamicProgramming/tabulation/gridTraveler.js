/* 
Say that you are a traveler on a 2D grid.
You begin in the top-left corner and your goal is to travel to the bottom-right corner.
You may only move down or right.

In how many ways can you travel to the goal on a grid with dimensions m*n?

Write a function that calculates this.
*/

const gridTraveler = (rows, cols) => {
  const table = Array(rows+1)
    .fill()
    .map(() => Array(cols+1).fill(0));
  table[1][1] = 1;

  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= cols; j++) {
      const current = table[i][j];
      
      //add current number to the right only if it is inbound
      if (j+1 <= cols) table[i][j+1] += current;
      
      //add current number to the the bottom neighbor only if inbound
      if (i+1 <= rows) table[i+1][j] += current;
    }
  }
  // console.log(table);
  return table[rows][cols];
}

console.log(gridTraveler(1,1))
console.log(gridTraveler(2,3))
console.log(gridTraveler(3,2))
console.log(gridTraveler(3,3))
console.log(gridTraveler(18,18))