//Promises is a best approach to handla parallel execution of code(asynchronous programming)
let promise = new Promise(function(resolve,reject){
  console.log("I am a Promise");
  // resolve(12);
  // reject("error occured")
  resolve("Succeed")

})
console.log(promise)
let create = new Promise((resolve,reject) => {console.log("hello promise")
  // reject("Sorry") //state : rejected
  // resolve("Successfully resolved") //state : resolved
})
console.log(create) //pendind state
