/*
  Given an array of integers, return the indices of the two numbers that add up to a given target.
*/

// Solution 1
const arr = [1, 3, 7, 9, 2];
const target = 11;

function twoSum(array, key) {
  for (let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === key){
        return [i , j];
      }
    }
  }
  return "No Match Found";
}

console.log(twoSum(arr, target));

// Solution 2
function twoSum2(array, key) {
  let result = [];
  for (let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === (key - array[i])){
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

console.log(twoSum2(arr, target));

// Solution 3
function twoSum3(array, key) {
  let result = {}, j = 1
  if (array.length < 2) {
    return "Given Array is empty or it less than two entries";
  } else {
    for (let i = 0; i < array.length; i++){
      if (!result[key - array[i]]){
        result[key - array[i]] = i
      }
    }
    for (let i = 0; i < array.length; i++){
      if (result[array[i]]){
        return [i, result[array[i]]]
      }
    }
  }
  
}

console.log(twoSum3(arr, target));