/*
  Given two strings S and T return if they equal when both are typed out.
  Any '#' that appears in the string counts as a backspace.
*/

// Solution 1
const S = "ab##", T = "c#d#";

function typedOutString(S, T) {
  let str1Array = [...S], str2Array = [...T], resultS = [], resultT = [];
  for (let i = 0; i < str1Array.length; i++) {
    if(str1Array[i] !== '#'){
      resultS.push(str1Array[i])
    } else {
      resultS.pop()
    }
  }

  for (let j = 0; j < str2Array.length; j++) {
    if (str2Array[j] !== '#') {
      resultT.push(str2Array[j])
    } else {
      resultT.pop()
    }
  }

  if (resultS.length === resultT.length) {
    if (resultS.length === 0 && resultT.length === 0) {
      return true;
    } else {
      for (let i = 0; i < resultS.length; i++) {
        if (resultS[i] === resultT[i]) {
          return true;
        } else {
          return false;
        }
      }
    }
  } else {
    return false;
  }
}

console.log(typedOutString(S, T));

//Solution 2

function typedOutString2(S, T) {
  const buildString = function(string) {
    const builtString = [];
    for(let p = 0; p < string.length; p++) {
      if(string[p] !== '#') {
        builtString.push(string[p]);
      } else {
        builtString.pop();
      }
    }  
    return builtString;
  }

  const finalS = buildString(S);
  const finalT = buildString(T);
  
  if(finalS.length !== finalT.length) {
    return false;
  } else {
    for(let p = 0; p < finalS.length; p++) {
      if(finalS[p] !== finalT[p]) {
        return false;
      }
    }
  }
  return true;
}

console.log(typedOutString2(S, T));