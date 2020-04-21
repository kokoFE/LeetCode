// Source : https://leetcode-cn.com/problems/surface-area-of-3d-shapes/
// Author : kokoFE
// Date   : 2020-03-25

/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
  if (grid && grid.length === 0) return 0
  let sum = 0;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      let cell = row[j]
      if (cell !== 0) {
        let area = cell * 4 + 2
        console.log(1, area)
        if (i > 0) {
          // let topPart = grid[i - 1][j]
          let p = grid[i - 1][j] > grid[i][j] ? grid[i][j] : grid[i - 1][j]
          area -= p * 2
          console.log(2, area)
        }
        if (j > 0) {
          // let leftPart = grid[i][j - 1]
          let p = grid[i][j - 1] > grid[i][j] ? grid[i][j] : grid[i][j - 1]
          area -= p * 2
          console.log(3, area)
        }
        sum += area
      }
    }
  }
  return sum
};

const sum = surfaceArea([[1,2], [3,4]])
console.log(sum)