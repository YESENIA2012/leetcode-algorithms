/*Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init) {
  let value = init
  return {
    increment: function(){
      value += 1
      return value
    },
    decrement: function(){
      value -= 1
      return value
    },
    reset: function(){
      value = init
      return value
    }
  }
};


const counter = createCounter(0)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
