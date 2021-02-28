/*
  Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
*/

// Solution 1
const arr = [0, 1, 0, 3, 12];

function moveZeros(nums) {
  if(nums === null || nums.length === 0) {
    return;
  }
  let index = 0;
  for(const num of nums) {
    if(num !== 0) {
      nums[index] = num;
      index++;
    }
  }
  while(index < nums.length) {
    nums[index] = 0;
    index++;
  }
  return nums;
};

console.log(moveZeros(arr))