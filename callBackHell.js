//Synchronous Programming (sequential programming)
console.log("First")
console.log("Second")
console.log("Third")

//Asynchronous Programming (independent programming)
console.log("First")
setTimeout(() => {
  console.log("Second")
 } , 3000)
console.log("Third")

//Callback Hell also known as pyramid of doom

