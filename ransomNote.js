/*
  Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

  Each letter in the magazine string can only be used once in your ransom note   
*/

// Solution 1
const rn = "a", mz = "b"
function canConstruct(ransomNote, magazine) {
  const map = new Map();

for (let i = 0; i < magazine.length; i++) {
  if (map.has(magazine[i])) {
    map.set(magazine[i], map.get(magazine[i]) + 1)
  } else {
    map.set(magazine[i], 1)
  }
}

for (let i = 0; i < ransomNote.length; i++) {
  if (!map.has(ransomNote[i]) || map.get(ransomNote[i]) === 0) {
    return false;
  }
  map.set(ransomNote[i], map.get(ransomNote[i]) - 1)
}

return true;
};

console.log(canConstruct(rn, mz));