//Question 1
let str = "Areeba"
let no = 9
console.log(str +" "+ no)
//Question 2
console.log(typeof str)
//Question 3
const student = {
  name : "Areeba",
  class : "1st year"
}
console.log(student)
// student = 88  //error
//Question 4
student.age = 19;
console.log(student)
//Question 5
const dictionary = {
  Serendipity : "Luck",
  Tenacity : "Persistence",
  Ephemeral : "Temporary",
  Meticulous : "Precise",
  Resilient : "Strong"
}
console.log("*************DICTIONARY************")
console.log("Serendipity : "+dictionary.Serendipity)
console.log("Tenacity : "+dictionary.Tenacity)
console.log("Ephemeral : "+dictionary.Ephemeral)
console.log("Meticulous : "+dictionary.Meticulous)
console.log("Resilient : "+dictionary.Resilient)
//Question 6
// let age = prompt("Enter your age")
// if(age >= 10 && age <= 20) console.log("Person lies between 10-20")
// else console.log("Person does not lie between 10-20")
//Question 7
// console.log("*****************CALCULATOR***********")
// let num1 = prompt("Enter Number1")
// let num2 = prompt("Enter Number2")
// let operator = prompt("Enter any opeartor (+,-,*,/,%)")
// switch(operator){
//   case '+': console.log(num1 +" + "+num2 +" = "+num1+num2); break;
//   case '-': console.log(num1 +" - "+num2 +" = "+num1-num2); break;
//   case '*': console.log(num1 +" * "+num2 +" = "+num1*num2); break;
//   case '/': console.log(num1 +" / "+num2 +" = "+num1/num2); break;
//   case '%': console.log(num1 +" % "+num2 +" = "+num1%num2); break;
//   default : console.log("Invalid Choice of Operator");
// }
//Question 8
let num = 6;
if(num % 2 == 0 && num % 3 == 0) console.log("Number id divisible by both")
else if(num % 2 == 0 || num % 3 == 0) console.log("Number is divisible by either")
else console.log("Number is divisible by none")
//Question 9
let marks = {
  //key : value
  Areeba : 98,
  Haris : 99,
  Hania : 88,
  Hasnain : 89,
  Alishba : 77
}
for(let element in marks){
  console.log(element + " : " + marks[element])
}
// console.log(Object.keys(marks))
// for(let i = 0; i < Object.keys(marks).length ; i++){
//   console.log(Object.keys(marks)[i]+ " : "+ marks[Object.keys(marks)[i]])
// }
//Question 10
// let number = 10;
// while(true){
// let userEntered = prompt("Enter any numbrt to guess the correct one")
// if(number == userEntered){
//   console.log("Correct!!!!!!!")
//   break;
// }
// else console.log("Try Again!!!");
// }
//querstion 11
function mean(no1,no2,no3,no4,no5){
  let avg = (no1+no2+no3+no4+no5)/5;
  return avg;
}
console.log("The Arithmetic Mean is "+ mean(4,7,8,3,9))
