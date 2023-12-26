/*Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
The function composition of an empty list of functions is the identity function f(x) = x.
You may assume each function in the array accepts one integer as input and returns one integer as output. */

let compose = function(functions) {

  return function(x) {
    for(let counter = 1; counter <= functions.length; counter++){
      let fn = functions[functions.length - counter]
      x = fn(x)
    }
    return x
  }
};

const functions = [x => x + 1, x => x * x, x => 2 * x]
let x = 4
const fn = compose(functions)
fn(x) // 65
console.log(fn(x))

const functions2 = [x => 10 * x, x => 10 * x, x => 10 * x]
let x2 = 1
const fn2 = compose(functions2)
fn2(x2) // 1000
console.log(fn2(x2))


const functions3 = []
let x3 = 42
const fn3 = compose(functions3)
fn3(x3) // 42
console.log(fn3(x3))
