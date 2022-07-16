'use strict';
// add whatever parameters you deem necessary & write docstring

/** takes 2 strings and checks if first string is part of second string,
 * while maintaining same order of letters
 */

//pointer for s1
//looping through s2
//if letters of both are same, increment s1 pointer
//if s1 point is s1 length -1 , return true

function isSubsequence(s1, s2) {
  if (s2.length < s1.length) return false;

  let s1Pointer = 0;
  let isSubstring = false;
  for (let letter of s2) {
    debugger;

    if (letter === s1[s1Pointer]) s1Pointer++;
    if (s1Pointer === s1.length) return true;
  }

  return false;
}
