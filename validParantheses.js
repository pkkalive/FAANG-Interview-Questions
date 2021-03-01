/*
  Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
*/

// Solution 1

function validParantheses(s) {
  const obj = {
  "(": ")",
  "{": "}",
  "[": "]",
}

const stack = [];

for (const paran of s) {
  if (obj.hasOwnProperty(paran)) {
    stack.push(paran)
  } else {
    const closeParan = stack.pop();
    if (paran !== obj[closeParan]) {
      return false;
    }
  }
}

return stack.length === 0;
};