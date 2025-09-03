//Scope
let age = 19;
console.log(age);
var no = 20 ;
console.log(window.no)
//re-declaration
let a = 10;
// let a; error
var b = 9;
var b;
console.log(b)
//updation
b = 18;
a = 19;
console.log(a +" "+b)
//const keyword
const num = 20;
// console.log(window.num) undefined
console.log(num)
// num = 70; //error -> cant be update

