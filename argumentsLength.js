/*Write a function argumentsLength that returns the count of arguments passed to it. */

const argumentsLength = function(...args) {
  return args.length
};

const args = [5]
console.log(argumentsLength(5)); // 1

const args2 = [{}, null, "3"]
console.log(argumentsLength({}, null, "3")); // 3
