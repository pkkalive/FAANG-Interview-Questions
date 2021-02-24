/*
  Given a string, find the length of the longest substring without repeating characters.
*/

// Solution 1
const str = "abcabcbb";
function longestSubString(s) {
  if(s.length <= 1) return s.length;
  let longest = 0;
  for(let left = 0; left < s.length; left++) {
    let seenChars = {}, currentLength = 0;
    for(let right = left; right < s.length; right++) {
      const currentChar = s[right];
      if(!seenChars[currentChar]) {
        currentLength++;
        seenChars[currentChar] = true;
        longest = Math.max(longest, currentLength);
      } else {
        break;
      }
    }
  }
  return longest;
}

console.log(longestSubString(str));

// Solution 2
function longestSubString2(s) {
  if(s.length <= 1) return s.length;
  const seen = {};
  let left = 0, longest = 0;
  for(let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const previouslySeenChar = seen[currentChar];
    if(previouslySeenChar >= left) {
      left = previouslySeenChar + 1;
    }
    seen[currentChar] = right;
    longest = Math.max(longest, right - left + 1);
  }  
  return longest;
}

console.log(longestSubString2(str));

// Solution 3
function longestSubString3(s) {
  if(s.length <= 1) return s.length;
  const seen = new Map();
  let left = 0, longest = 0;
  for(let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    const previouslySeenChar = seen.get(currentChar);
    if(previouslySeenChar >= left) {
      left = previouslySeenChar + 1;
    }
    seen.set(currentChar, right);
    longest = Math.max(longest, right - left + 1);
  }  
  return longest;
}

console.log(longestSubString3(str));