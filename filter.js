/*Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  const newArray = []
  for(let counter = 0; counter < arr.length; counter++){
    let element = arr[counter]
    let result = fn(element, counter)
    
    if(result){
      newArray.push(element)
    }
  }
  return newArray
};

const arr = [0,10,20,30]
const fn = function greaterThan10(n) { return n > 10; }
const newArray = filter(arr, fn); // [20, 30]
console.log("newArray", newArray)


const arr2 = [1,2,3]
const fn2 = function firstIndex(n, i) { return i === 0; }
const newArray2 = filter(arr2, fn2); //[1]
console.log("newArray2", newArray2)

const arr3 = [-2,-1,0,1,2]
const fn3 = function plusOne(n) { return n + 1 }
const newArray3 = filter(arr3, fn3); //[-2,0,1,2]
console.log("newArray3", newArray3)
