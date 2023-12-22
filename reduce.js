/*Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.
A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.
If the length of the array is 0, it should return init.
Please solve it without using the built-in Array.reduce method.
*/

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
  let result = init

  for(let counter = 0; counter < nums.length; counter++){
    let num = nums[counter]
    result = fn(result, num) 
  }
  
  return result
};

const nums = [1,2,3,4]
const fn = function sum(accum, curr) { return accum + curr; }
const init = 0
console.log(reduce(nums, fn, init)) //10

const nums2 = [1,2,3,4]
const fn2 = function sum(accum, curr) { return accum + curr * curr; }
const init2 = 100
console.log(reduce(nums2, fn2, init2)) //130

const nums3 = []
const fn3 = function sum(accum, curr) { return 0; }
const init3 = 25
console.log(reduce(nums3, fn3, init3)) //25

