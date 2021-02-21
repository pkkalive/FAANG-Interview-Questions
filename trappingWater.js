/*
  Given an array of integers representing am elevation map where the width of each bar is 1, return how much rainwater can be trapped 
*/

//Solution 1
const arr = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

function trappedWater(heights) {
  let totalWater = 0;
  for (let i = 0; i < heights.length; i++){
    let left = i, right = i, maxLeft = 0, maxRight = 0;
    while (left >= 0){
      maxLeft = Math.max(maxLeft, heights[left]);
      left --;
    }
    while (right < heights.length ){
      maxRight = Math.max(maxRight, heights[right]);
      right ++;
    }
    const currentWater = Math.min(maxLeft, maxRight) - heights[i];
    totalWater += currentWater;
  }
  return totalWater;
}

console.log(trappedWater(arr));

//Solution 2
function trappedWater2(heights) {
  let totalWater = 0, left = 0, right = heights.length - 1, maxLeft = 0, maxRight = 0;
  while (left < right){
    if (heights[left] <= heights[right]){
      if (heights[left] >= maxLeft){
        maxLeft = heights[left];
      } else {
        totalWater += maxLeft - heights[left];
      }
      left ++;
    } else {
      if(heights[right] >= maxRight){
        maxRight = heights[right];
      } else {
        totalWater += maxRight - heights[right];
      }
      right --;
    }
  }
  return totalWater;
}

console.log(trappedWater2(arr));