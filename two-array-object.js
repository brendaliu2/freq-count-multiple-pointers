"use strict";
// add whatever parameters you deem necessary & write docstring
/** creates an object with the keys and values parameters as key-value pairs */
function twoArrayObject(keys, values) {

  // create empty object that takes the first array as keys and the second array as values
  const obj = {};
  // loop over the first array and assigns the element in the first array as the
  // key in the object
  for (let i = 0; i < keys.length; i++) {
    // and the element in second array as the key
    // if the element in second array does not exist, the value becomes null
    values[i] === undefined ? obj[keys[i]] = null : obj[keys[i]] = values[i];
  }
  return obj;
}
