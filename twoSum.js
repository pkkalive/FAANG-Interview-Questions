/*
  Given an array of integers, return the indices of the two numbers that add up to a given target.
*/

// Solution 1
const arr = [1, 3, 7, 9, 2];
const target = 11;

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++){
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target){
        return [i , j];
      }
    }
  }
  return "No Match Found";
}

console.log(twoSum(arr, target));

// Solution 2
function twoSum2(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++){
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === (target - nums[i])){
        result.push(i);
        result.push(j);
      }
    }
  }
  if (result.length === 2){
    return result
  } else if(result.length > 2 ){
    return "Given nums has more than one possible solutions"
  } else {
    return "No Match Found";
  }
}

console.log(twoSum2(arr, target));

// Solution 3
function twoSum3(nums, target) {
  let result = {};
  if (nums.length < 2) {
    return "Given array is empty or it less than two entries";
  } else {
    for (let i = 0; i < nums.length; i++){
      if (!result[target - nums[i]]){
        result[target - nums[i]] = i
      }
    }
    for (let i = 0; i < nums.length; i++){
      if (result[nums[i]]){
        return [i, result[nums[i]]]
      }
    }
  }
  return null;
}

console.log(twoSum3(arr, target));

//Solution 4
function twoSum4(nums, target) {
  let numsMap = {};
  for (let i = 0; i < nums.length; i++){
    const currentMapVal = numsMap[nums[i]];
    if (currentMapVal >= 0){
      return [currentMapVal, i]
    } else {
      numsMap[target - nums[i]] = i;
    }
  }
  return null;
}
console.log(twoSum4(arr, target));