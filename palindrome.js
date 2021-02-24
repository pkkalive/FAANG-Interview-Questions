/*
  Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring case sensitivity
*/

//Solution 1
const str = "A man, a plan, a canal: Panama";

function isPalindrome(s) {
  const newS = s.toLowerCase().replace(/[\W_]/g, "");
  let left = 0; right = newS.length - 1, result = false;
  if (newS.length === 0 || newS.length === 1){
    return true;
  } else {
    while (left <= right){
      if (newS[left] === newS[right]){
        left ++;
        right --;
        result = true;
      } else {
        return false;
      }
    }
  }
  return result;
}

console.log(isPalindrome(str));

//Solution 2
function isPalindrome2(s) {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let rev = "";  
  // generate a reverse string using a reverse for loop.
  for(let i = s.length - 1; i >= 0; i--) {
    rev += s[i];
  }
  return rev === s;
}

console.log(isPalindrome2(str));