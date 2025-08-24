//Hoisting move all the declaration at the top of the scope (means scope remains same whether it is local or global) (default behaviour)
// console.log(b)
// console.log(a)
"use strict"
greeting();  //No error
function greeting(){
  console.log("Welcome!")
}
greeting();
//BVariable using var
//no error
// b = 10; //default behaviour of hoist as declaration will move upward
// console.log(b)
// var b;
//undefined
// console.log(b) //here hoisting initilaize it by undefined
// var b;
// b = 10;
//undefined
console.log(b) //here undefine too because only declaration will hoist not initialization
var b = 10;
//variable using let
//no error
// let a = 10;
// console.log(a)
//Error
// a = 2 ;
// console.log(a)
let a; //here hoist dont work
//variable using const
//No error
// const c = 3;
// console.log(c)
//error
// console.log(c)
// const c = 3;//hoist dont work
//Hoisting dont work fot function expression wheterit with let , var or const
//ERROR
// greet();
// let greet = function(){
//   console.log("Hello World!")
// }();
// greeting();
// let greeting = function(){
//   console.log("Hello World!")
// }();

function show(){
   a = 9;
  console.log(a)
   var a;
}
show();
//No erroe before strict keyword
// age = 18 //hoisting declare it by its own
// console.log(age)

