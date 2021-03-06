/*
  Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

The algorithm for myAtoi(string s) is as follows:

Read in and ignore any leading whitespace.
Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
Read in next the characters until the next non-digit charcter or the end of the input is reached. The rest of the string is ignored.
Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
Return the integer as the final result.
Note:

Only the space character ' ' is considered a whitespace character.
Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.
*/

//Solution 1
function stringToNumber (str) {
  //Helper function to conver the number string to int. Equivalent to Javascript's Number() function
  function toNumber (str) {
      var sign, result, base = 1, strArr = str.split("");
      if (strArr[0] && strArr[0].match(/(\-|\+)/)) sign = strArr.shift();
      result = strArr.reduceRight(function(lastVal, val, idx, arr){
          var ret = (val * base) + lastVal;
          base *= 10;
          return ret;
      }, 0);
      return sign === "-" ? -result : result;
  }

  //use regular expression to extract the number portion of str
  var matchArr = /^\s*((\-|\+)?[0-9]+)\s*/.exec(str);
  if (!matchArr) {
      return 0; //not a number
  }
  return toNumber(matchArr[1]);
}

console.log(stringToNumber("42"))


//Solution 2
function stringToNumber2(str) {
  const MIN = Math.pow(-2, 31)
  const MAX = Math.pow(2, 31)-1
  const isSign = new RegExp(/\-|\+/)
  const isNumber = new RegExp(/[0-9]/)
  
  const trimmedStr = str.trim()
  
  const validate = numberStr => {
    const number = parseInt(numberStr, 10)
    if (!Number.isNaN(number)) {
      if (number > MAX) return MAX
      if (number < MIN) return MIN
      return number
    }
    return 0
  }
  
  const getLeadingNumbers = (string) => {
    let numbers = ''
    for (let i = 0; i < string.length; i++) {
      let c = string[i]
      if (c.match(isNumber)) {
        numbers += c
      } else {
        return numbers
      }
    }
    return numbers
  }
  
//  simple
  if (!trimmedStr.length) {
    return 0
  }
  
  const easyInt = parseInt(trimmedStr, 10)
  if (!Number.isNaN(easyInt)) {
    return validate(trimmedStr)
  }
//   has sign
  if (trimmedStr[0].match(isSign)){
//     only a sign is present
    if (trimmedStr.length <= 1) {
      return 0
    }
//     sign not followed by number
    if (!trimmedStr[1].match(isNumber)) {
      return 0
    }
    return validate(trimmedStr[0] + getLeadingNumbers(trimmedStr.substring(1)))
//     no sign
  } else if (trimmedStr[0].match(isNumber)) {
    return validate(getLeadingNumbers(trimmedStr))
  }
  return 0;
};

console.log(stringToNumber2("42"))