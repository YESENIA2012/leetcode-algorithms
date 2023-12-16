/*Given an integer n, return a counter function. 
This counter function initially returns n and then returns 1 more than the previous value every subsequent 
time it is called (n, n + 1, n + 2, etc). */

/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = function(n) {  
  let number = n 
  let counter = 0
  
  return function addN () {
    number = number + counter
    counter = 1
    return number
  };
};

const counter = createCounter(10)
console.log(counter())
console.log(counter())
console.log(counter())
/* counter() // 10
counter() // 11
counter() // 12 */