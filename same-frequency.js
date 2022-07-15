"use strict";

// add whatever parameters you deem necessary & write docstring

/** Accepts two positive integers and compares the frequency of digits between the
integers and returns true or false. */

// create frequency object for each integer for the digits
// loop over keys object of first integer and compare with value of key in second object
function sameFrequency(num1, num2) {

  let num1Str = num1.toString();
  let num2Str = num2.toString();
  if (num1Str.length !== num2Str.length) return false;

  let num1Freq = frequencyCounter(num1Str);
  let num2Freq = frequencyCounter(num2Str);

  for (let digit in num1Freq) {
    if (num1Freq[digit] !== num2Freq[digit]) {
      return false;
    }
  }
  return true;
}

/** Accepts an item and returns the frequency of elements in the item */
function frequencyCounter(item) {
  let frequency = {};

  for(let elem of item) {
    frequency[elem] = (frequency[elem] || 0) + 1;
  }

  return frequency;
}