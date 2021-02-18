/*
  Given an array of integers, return the indices of the two numbers that add up to a given target.
*/

// Solution 1
const arr = [1, 3, 7, 9, 2];
const target = 11;

function twoSum(array, key) {
  let result;
  if (array.length < 2) {
    return "Given Array is empty or it less than two entries";
  } else {
    for (let i = 0; i < array.length; i++){
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] + array[j] === key){
          return [i , j];
        } else {
          result = "No Match Found";
        }
      }
    }
    return result;
  }
  
}

console.log(twoSum(arr, target));