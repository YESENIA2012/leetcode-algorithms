/*Given two promises promise1 and promise2, return a new promise. 
promise1 and promise2 will both resolve with a number. 
The returned promise should resolve with the sum of the two numbers. */

var addTwoPromises = async function(promise1, promise2) {
  try{
    const num1 = await promise1
    const num2 = await promise2
    const sum = num1 + num2
    return sum
  } catch(error){
    console.log(error.message)
  }
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
.then(console.log); // 4