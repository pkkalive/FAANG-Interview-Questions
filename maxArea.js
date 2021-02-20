/*
  You are given an array of positve integers where each integer represents the height og the vertical line on a chart.
  Find two lines which together with the x-axis forms a container that would hold the greatest ammount of water.
  Return the are of water it would hold.
*/

// Solution 1
const arr = [7, 1, 2, 3, 9];

function findMaxArea(nums) {
  let maxArea = 0, result = 0;
  for (let i = 0; i < nums.length; i++){
    for (let j = i + 1; j < nums.length; j++){
      maxArea = (Math.min(nums[i], nums[j]) * (j - i));
      if (maxArea > result){
        result = maxArea;
      }
    }
  }
  return result;
}

console.log(findMaxArea(arr));
