// Conditional Statements
//if
// let a=90;
// if(a == 90){
//     console.log("A = 90");
// }
//if else
// let a=80;
// if(a == 90){
// console.log("A = 90");
// }
// else{
//     console.log("A is not equal to 90");
// }
//if else if else
// let a=80;
// if(a == 90){
// console.log("A = 90");
// }
// else if(a == 80){
//     console.log("A is 80");
// }
// else{
//     console.log("A is not equal to 90");
// }
//Check No is even or odd
// let a=57;
// if(a%2 == 0){
//     console.log("Even Number");
// }
// else{
//     console.log("Odd Number");
// }
//Colour assignment
// let a = 10;
// let colour;
// if(a == 2){
//     colour = "Yellow";
// }
// else if(a == 8){
//     colour = "Blue";
// }
// else if(a == 10){
//     colour = "Lilac";
// }
// else{
//     colour = "Grey";
// }
// console.log("Colour",colour);
//Grade Calculation
let no = 64;
if(no <= 100 && no >= 90) document.writeln("A+ Grade");
else if(no < 90 && no >= 80) document.writeln("A- Grade");
else if(no < 80 && no >= 70) document.writeln("A Grade");
else if(no < 70 && no >= 60) document.writeln("B Grade");
else if(no < 60 && no >= 50) document.writeln("C Grade");
else document.writeln("Fail!");
// Ternary Operator  //simpler or compact if else
let age = 18;
let result = age >= 16 ? "Adult" : "Kid";
console.log(result);
// age ==18 ? console.log("adult") : console.log("not adult");
let color = "Pink"
color == "Green" ? document.writeln("True") : document.writeln("False")
//Nullish Operator
let firstName //undefined
//or
// firstName = null;
let defaultName = "Areeba Aamir"
let finalName = firstName ??  defaultName //if firstName is undefined then use value preceeded to nullish opearator
document.writeln(finalName)
