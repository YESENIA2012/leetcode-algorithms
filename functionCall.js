/*Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined. */

let once = function(fn) {
  let call = 0

  if(call > 1){
    return
  }
  return function(...args){
    let obj
    let result
    while(call < 1){
      result = fn.apply(null, args )
      call++
      obj = [{"calls": call,"value": result}]
    }

    return obj
  }
};

const fn = (a,b,c) => (a + b + c)
const onceFn = once(fn);
console.log(onceFn(1, 2, 3)); // [{"calls":1,"value":6}]
console.log(onceFn(2, 3, 6)); // undefined, fn was not called

const fn2 = (a,b,c) => (a * b * c)
const onceFn2 = once(fn2);
console.log(onceFn2(5, 7, 4)); // [{"calls":1,"value":140}]
console.log(onceFn2(2, 3, 6)); // undefined, fn was not called
console.log(onceFn2(4, 6, 8)); // undefined, fn was not called 

//Other way
/* let once = function(fn) {
  let call = 0

  if(call > 1){
    return
  }
  return function(...args){
    let obj
    let result
    while(call < 1){
      result = fn( ...args )
      call++
      obj = [{"calls": call,"value": result}]
    }

    return obj
  }
}; */