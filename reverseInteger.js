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

// Solution 2
function reverseInteger2(x) {
  let revNum = 0, lastDigit = 0;
  while (x!==0) {
      lastDigit = x % 10; 
      x = parseInt(x/10); 
      revNum = revNum * 10 + lastDigit;
      if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) return 0
  }
  return revNum
}

console.log(reverseInteger2(123456));

// Solution 3
function reverseInteger3(x) {
  const reversedInt = Math.abs(x).toString().split('').reverse().join('');
  if (reversedInt > 2**31) return 0;
  return reversedInt * Math.sign(x);
}

console.log(reverseInteger3(123456));