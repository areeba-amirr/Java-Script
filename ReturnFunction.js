function fullName(first , second){
  return first+" "+second
  //you cannot use multiple return into single function except conditions
}
let result = fullName("Areeba","Aamir")
console.log(result)
function checkNumber (no){
  if(no % 2 == 0){
    return "Even"
  }
  else{
    return "Odd"
  }
}
let num = prompt("Enter any number")
console.log(checkNumber(num))
function numberChecking (no){
  if(no >= 0){
    return "Positive"
  }
  else{
    return "Negative"
  }
}
console.log(numberChecking(num))
function factorial (no){
 let fact = 1
 for(let i = 1 ; i <= no ; i++){
  fact *= i
 }
 return fact
}
console.log(factorial(num))
