//Anonymous Function -> function without name
//syntax
//(function(){
// block of code
//});
// (function(){
//   console.log("Good Morning")
// })
//***Methods to call Anonymous Function*****
//1) Assign function to variable
// let msg = (function(){
//   console.log("Good Morning")
// })
// msg()
// msg()
//2)Pass function as an argument to another function
// setTimeout(FunctionName , Timeinmilisecond) 1 sec = 1000 milisec
//settimeout is a predefined function use to displat function for one time after given time
// setTimeout((function(){
//   console.log("Good Morning")
// }),5000) //after 5 sec
// 3)Imediately invoke(call) method
// (function(){
//   console.log("Good Morning")
// }) (); //these paranthesis execute anonymous function imedialtely
//Anonymous function also help us preventing Third File Conflict means jo global variable kisi aik file me bna hua ho phir wo dusri file me use nhi hosakta toh isliya wo variable anonymous function k ander bnaingy
(function(){
  let message = "Hi Areeba Aamir";
  console.log(message)
})();
(function() {
  let no1 = 5;
  let no2 = 10;
  console.log(no1 * no2);
})();
let result = (function() {
  let no1 = 2;
  let no2 = 10;
  return no1*no2;
})
console.log(result())
