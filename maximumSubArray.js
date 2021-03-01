/*
  Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
*/

// Solution 1

function findMaxSubArrayBruteForce(arr) { 
  let maxSum = -Infinity;
  let currSum;  
  for (var i = 0; i < len; i++) {  
    currSum = 0;   
    for (var j = i; j < len; j++) {   
      currSum += arr[j];    
      if (maxSum < currSum) {   
        maxSum = currSum;      
      }   
    } 
  } 
  return maxSum;
}