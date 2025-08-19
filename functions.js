//Syntax
//function nameoffunction (){
//body of function
//}
//Definition of function
// function greet(){
//   console.log("Hello , Areeba here")
// }
// greet() //function call
// function greet(){
//   console.log("Hello , Areeba here")
// }
// greet() //function call
// function add(a,b){ //here a and b are parameters
//   let sum = a+b
//   console.log("Sum : "+ sum)
// }
// add(7,8) //7,8 are arguments
// add(9,8)
// add(70,8)
// function square(a){
//   console.log("Square : "+a*a)
// }
// let no = prompt("Enter any value:")
// square(no)
// let name = prompt("Enter your nmae")
// function message(name){
//   console.log("Hello "+ name)
// }
// message(name)
//*****ArgumentsObject****
// function sum(){
// console.log(arguments.length)
// console.log(arguments[2])
// console.log(arguments) //By default array
// if(arguments.length == 0){
//   console.log("Sum is 0")
// }
// else{
//   let sum = 0
//   for( let i = 0 ; i <= arguments.length-1 ; i++){
//     sum += arguments[i]
//   }
//   console.log("Sum is "+sum)
// }
// }
// // sum() //sum is zero
// sum(2,9,8,7,6,5,4,0) //calculate sum
// //assigning funactio to varaible
// let addition = sum; //now function can be called by sum or addition
// addition(5,3,5,6,7,4,2)
function multiply(){
  if(arguments.length == 0){
  console.log("Miltiplt is 0")
}
else{
  let mul = 1
  for( let i = 0 ; i <= arguments.length-1 ; i++){
    mul *= arguments[i]
  }
  console.log("Multiply is "+mul)
}}
let arg1 = prompt("Enter no 1")
let arg2 = prompt("Enter no 2")
let arg3 = prompt("Enter no 3")
let arg4 = prompt("Enter no 4")
let arg5 = prompt("Enter no 5")
let arg6 = prompt("Enter no 6")
let arg7 = prompt("Enter no 7")
let arg8 = prompt("Enter no 8")
let arg9 = prompt("Enter no 9")
let multi = multiply;
// multi(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9)
multiply(arg1,arg2,arg3,arg4,arg5,arg6,arg7,arg8,arg9)

