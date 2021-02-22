/*
  Given two strings S and T return if they equal when both are typed out.
  Any '#' that appears in the string counts as a backspace.
*/

// Solution 1
const S = "###z", T = "az##z";

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
    for (let i = 0; i < resultS.length; i++) {
      if (resultS[i] === resultT[i]) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  
}

console.log(typedOutString(S, T));