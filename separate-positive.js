"use strict";

// add whatever parameters you deem necessary & write docstring
/** accepts an array of integers and separates the positive integers
 * from the left by moving the positive integers to the left and negative
 * to the left
 */

// create pointer for left and right of array
// if left number is less than 0 && right number is greater than 0, swap left
// and right numbers, then move left right 1, and move right left 1
// else if left number is greater than 0, move left pointer right,
// if false then move right pointer left
function separatePositive(nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    if (nums[start] < 0 && nums[end] > 0) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
    } else if (nums[start] > 0) {
      start++;
    } else {
      end--;
    }
  }

  return nums;
}
