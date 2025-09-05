let sum = (a,b) => {
  console.log(a+b);
}
sum(6,8)

//more shorter
//no need to add curly braces whren code is off one line
let add = (a,b) => console.log(a+b)
add(7,6)

let multiply = (a,b) =>  a*b;   //no need to write return
console.log(multiply(7,4))

//when there is only one parameter so no need to add paranthesis
let square = no => no*no;
console.log(square(4))

//when no parameter
let greet = () => console.log("Hello")
greet();

//Anonymous Function
let Anonymous = () => console.log("Welcome")
Anonymous();
//when anonymous function is inside a function
document.addEventListener("click",() => {  console.log("Areeba")})

let evenChecker = no =>  {
  if(no % 2 == 0) return "Even";
  else return "odd"
}
console.log(evenChecker(6))
console.log(evenChecker(7))

let fun = () => console.log("Hello Anonymous Function");
fun();

let divsion = (no1,no2) => no1/no2;
console.log(divsion(9,3))
