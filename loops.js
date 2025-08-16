//FOR LOOP
//syntax
//for(initialization;condition;updation){
//statement
// }
for (let count = 1; count <= 5; count++) {
  //repeat 5 times
  console.log("Areeba Aamir");
}
for (let no = 0; no <= 10; no++) {
  document.writeln(no);
}
//WHILE LOOP
//syntax
//initialization
//while(condition){
//statement
//updation
// }
// let count = 1;
// while (count <= 5) {
//   document.writeln("Areeba Aamir");
//   count++;
// }
//Multiplication Table
let no = 5;
let counter = 1;
while (counter <= 10) {
  console.log(no + "x" + counter + "=" + no * counter);
  counter++
}
//Do While Loop
//syntax
//initialization
//do{
//statement
//updation
// }
//while(condition);
let count = 1;
do{
    console.log("Areeba Aamir");
    count ++;
}
//Print Even & Odd Number from 0 to 100
while(count <= 5);
let num = 0
do{
    if(num % 2 == 0){
         console.log("Even :"+ num)
    }
    else{
        console.log("Odd :"+num)
    }
    num++;
}while(num <= 100);
//Sum of 1-100 numbers
let sum = 0;
for(let number = 1;number <= 100;number++ ){
    sum += number;
}
console.log("Sum : "+ sum);
//Factorial of a Number
let value = 8, i = 1
let fact = 1
// let i = 1
while(i <= value){
    fact *= i;
    i++;
}
console.log("Factorial of "+value+" is "+fact)
