// x=4;
// y=2;
// a=x+y;
// console.log(a)
// a=x-y;
// a=x*y;
// a=x/y;
// a=x%y;
// console.log(a)
//last wali value final value hogi % wali
// a=x+y;
// b=x-y;
// c=x*y;
// d=x/y;
// e=x%y;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// x+=y;
//at first x was 2 now it is 6
// x++;
//now it is 7 as incremented by one
// console.log(x);
// --x;
// console.log(x);
// console.log(--x);
//Comparision Operators (always return a boolean value)
// let a=8;
// let b=9;
// console.log("Is a equal to b?",a==b); //false
// console.log("Is a not equal to b?",a!=b); //true
// console.log("Is a greater than or equal to b?",a>=b); //false
// console.log("Is a less than or equal to b?",a<=b);//true
// let a=8;
// let b="9";
// console.log("Is a equal to b?",a==b); //false
// console.log("Is a not equal to b?",a!=b); //true
// console.log("Is a equal to b?",a===b); //false
// console.log("Is a not equal to b?",a!==b); //true
//Logical Operators
// let x=9;
// let y=9;
// console.log("Is x equal to 9 and less than 12",x==9 && x<12); //true
// console.log("Is y not equal to 10 or equal to  20?",y!=1 || y==20); //true
// console.log("Is x eqals to 9?",!x==9); //false
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
//Ternary Operator  //simpler or compact if else
// let age = 18;
// // let result = age >= 16 ? "Adult" : "Kid";
// // console.log(result);
// age ==18 ? console.log("adult") : console.log("not adult");
 //-------------------DATA TYPES--------------------
//****************Primitive****************
//-------Number-------
// x=4;
// console.log(x)
//-------boolean------- -> returns true or false .use for conditions 
// let x=8;
// let y=9;
// console.log(x>y); //false
// console.log(x<y); //true
//--------Undefined-------- (when variable is not initialized)
// let a; //jab variable initialize nhi ha toh undefined hoga result
// console.log(a);
// let x= typeof 4; //typeof is used to check type of the variable 
// console.log(x);
//--------Strings----------- "" or ''or ``(tild operator)
// let x="Hello";
// let y='Guys';
// let o=`Areeba`;
// console.log(o); 
//concatenation
// x=4; //integer
// y="5"; //string
// console.log(x+" "+y); //it wont be add it will concatenate(means combine krna) bcz one is string and one is integer
//here + is use to concatenate
//ab agr mujeh string k beech be inverted comma print krwnana ha toh usky liya we have two appraoches
// x="hel\"lo"; //yahn back slash compiler ko btay k agy waly comma ko string ka part smjo na k stng opening ya closing
// x='hel"lo'; //double inveted commas print krwnay hain toh single commas sy enclosed kro and vice versa
// x='hel\'lo';
// x="hel'lo";
// console.log(x);
//Template Literal ${z}
// let z=x+y; //concatenate
// console.log(z); 
//but agr mujeh aik hardcodede string k sath ye x+y print krwana ha phir kesy krongi
//` tild operator use kraingy phir
// console.log(`Areeba ${z}`);
//---------null-----------
// let n=null; //means empty value
// console.log(n);
//-------symbol-----------
// let a= typeof Symbol("hello!");
// console.log(a);
//--------Big int----------
// let a= BigInt("124");
// console.log(a);
//********************Non Primitive***************
//-------Object-------
// const student = { //generally declares by const ,can also be by let
//     fullName : "Areeba Aamir",
//     age : 18,
//     gpa : 3.9,
//     isPass : true
// }
// console.log(student);
// console.log(typeof student); //object
// console.log(student.age); //18
//or
// console.log(student["age"]); //18
// let student1 = { 
//     fullName : "Areeba Aamir",
//     age : 18,
//     gpa : 3.9,
//     isPass : true
// }
// console.log(student);
// console.log(typeof student); //object
// console.log(student.age); //18
// //or
// console.log(student["age"]); //18
//to assign new value in objects
// student.age= student.age+1; //19
// student["age"]= student["age"]+1; //19
// console.log(student.age);
// student.fullName= "Areeba Muhammad Aamir";
// console.log(student.fullName);
//-------------------INPUt in JS-------------------
// let name = prompt("Enter your name");
// console.log(name);