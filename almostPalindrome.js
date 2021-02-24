/*
  Given a string, determine if it is almost a palindrome. A string is almost a palindrome if it becomes a palindrome by removing 1 letter.
  Consider only aplhanumeric characters and ignore case sensitivity.
*/

// Solution 1
const str = "abccdba";
function validPalindrome (s) {
  function validSubPalindrome (s, start, end) {
    while (start < end) {
      if (s[start] !== s[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  };

  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    if (s[start] !== s[end]) {
      return validSubPalindrome(s, start + 1, end) || validSubPalindrome(s, start, end - 1);
    }
    start++;
    end--;
  }
  return true;
};

console.log(validPalindrome(str));