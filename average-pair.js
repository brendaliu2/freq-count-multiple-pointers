"use strict";
// add whatever parameters you deem necessary & write docstring

/** determines if there are a pair of numbers whose avg is the target value */


function averagePair(nums, targetAvg) {
  //make left pointer
  let left = 0;
  //make right pointer
  let right = nums.length - 1;

  //make while left is less than right loop
  while (left < right) {
    let average = (nums[left] + nums[right]) / 2;
    if (average === targetAvg) {
      return true;
    } else if (average > targetAvg) {
      //move right pointer left
      right--;
    } else {
      //move left pointer right
      left++;
    }
  }

  return false;
}

