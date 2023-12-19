/*Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method. */
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArray = []
    for(let counter = 0; counter < arr.length; counter++){
      let element = arr[counter]
      let result = fn(element, counter)
  
      newArray.push(result)
    }
    return newArray
  };

const arr = [1,2,3]
const fn = function plusone(n) { return n + 1; }
const newArray = map(arr, fn); // [2,3,4]
console.log(map(arr, fn))

const arr2 = [1,2,3]
const fn2 = function plusI(n, i) { return n + i; }
const newArray2 = map(arr2, fn2) // Output: [1,3,5]
console.log(newArray2)

const arr3 = [10,20,30]
const fn3 = function constant() { return 42; }
const newArray3 = map(arr3, fn3) // Output: [42,42,42]
console.log(newArray3)
