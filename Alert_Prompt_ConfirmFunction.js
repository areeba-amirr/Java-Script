//alert() -> to display popup message
//promp() -> to take input from user .if press ok then it will return given value other wise on clicking cancel or ESC it will retur null
//confirm() -> show message and return true if ok is clickefd and return false if ESC or cancel is clicked
//ALERT
alert("Welcome To JAVA SCRIPT"); //you cannot interact with webpage before responding these popup
alert("GOOD MORNING");
//PROMPT
let name = prompt("Enter Your Full Name");
document.writeln(name);
//Giving Default Value
// let age = prompt("Enter Your Age",18)
// document.writeln(age) //you can also add your value or use default value
let age = prompt("Enter Your Age", 18);
if (age >= 18 && age <= 60) {
  document.writeln("You Can Vote");
} else {
  document.writeln("You Can't Vote");
}
//Confirm
let num = confirm("Are you sure you want to delete this number?");
if (num) {
  //if true(ok)
  document.writeln("Number Deleted");
} else {
  //if false(ESc / cancel)
  document.writeln("Not Deleted");
}
