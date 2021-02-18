/*
  Given an array of integers, return the indices of the two numbers that add up to a given target.
*/

// Solution 1
const arr = [1, 3, 7, 9, 2];
const target = 11;

function twoSum(array, key) {
  if (array.length < 2) {
    return "Given Array is empty or it less than two entries";
  } else {
    for (let i = 0; i < array.length; i++){
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === key){
          return [i , j];
        }
      }
    }
    return 
  }
  
}

console.log(twoSum(arr, target));

// Solution 2
const arr1 = [1, 3, 7, 9, 2];
const target1 = 11;

function twoSum2(array, key) {
  let result = [];
  if (array.length < 2) {
    return "Given Array is empty or it less than two entries";
  } else {
    for (let i = 0; i < array.length; i++){
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] === key - array[i]){
          result.push(i);
          result.push(j);
        }
      }
    }
    if (result.length === 2){
      return result
    } else if(result.length > 2 ){
      return "Given array has more than one possible solutions"
    } else {
      return "No Match Found";
    }
  }
  
}

console.log(twoSum2(arr1, target1));