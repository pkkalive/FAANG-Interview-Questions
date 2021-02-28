/*
  Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
*/

// Solution 1

function reverseInteger(x) {
  let revNum = 0, lastDigit = 0;
    while (x!==0) {
        lastDigit = x % 10; 
        x = parseInt(x/10);
        revNum = revNum * 10 + lastDigit; // building up the reverse number
   }
   return revNum;
}

console.log(reverseInteger(123456));