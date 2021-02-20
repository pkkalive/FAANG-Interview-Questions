/*
  You are given an array of positve integers where each integer represents the height og the vertical line on a chart.
  Find two lines which together with the x-axis forms a container that would hold the greatest ammount of water.
  Return the are of water it would hold.
*/

// Solution 1
const arr = [7, 1, 2, 3, 9];

function findMaxArea(heights) {
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++){
    for (let j = i + 1; j < heights.length; j++){
      const height = Math.min(heights[i], heights[j]);
      const width = (j - i);
      const area = height * width;
      maxArea = Math.max (maxArea, area);
    }
  }
  return maxArea;
}

console.log(findMaxArea(arr));