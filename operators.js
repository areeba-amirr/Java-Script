//Assignment Operators
// let x = 4;
// let y = 2;
//Arithmetic Operators
// let a=x+y;
// console.log(a)
// a = x-y;
// a = x*y;
// a = x/y;
// a = x%y;
// console.log(a)
//last wali value final value hogi % wali
// a = x+y;
// let b = x-y;
// let c = x*y;
// let d = x/y;
// let e = x%y;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
//Short-Hand Properties
// x += y; //x = x+y
// at first x was 2 now it is 6
//increment & decrement operators
// x++;
// now it is 7 as incremented by one
// console.log(x); //7
// console.log(x--);//7
// console.log(--x);//5
//For Exponent / Power
// x = x**2;
// console.log(x);
//Concatenation (to combine)
// let m = "2"; //string
// let n = 2;//number
// console.log(m+n); //22
//+ is use to concatenate
// console.log(m+" "+n)//2 2
// x="hel\"lo"; //yahn back slash compiler ko btay k agy waly comma ko string ka part smjo na k string opening ya closing
// x='hel"lo'; //double inverted commas print krwnay hain toh single commas sy enclosed kro and vice versa
// x='hel\'lo';
// x="hel'lo";
// console.log(x);
//Template Literal ${z}
// let x = "Hello Hi"
// let y = "World"
// let z=x+y; //concatenate
// console.log(z);//Hello HiWorld
// //To concatenate hardcoded value with value
// //` tild operator use kraingy phir
// console.log(`Areeba${z}`)

//= Assignment Operator
//== Check number
//=== check number + data type

//Comparision Operators (always return a boolean value either true or false)
// let a=8;
// let b=9;
// console.log("Is a equal to b?", a==b); //false
// console.log("Is a not equal to b?",a!=b); //true
// console.log("Is a greater than or equal to b?",a>=b); //false
// console.log("Is a less than or equal to b?",a<=b);//true
let a="9";
let b="9";
console.log("Is a equal to b?",a==b); //true
console.log("Is a not equal to b?",a!=b); //false
console.log("Is a equal to b?",a===b); //true
console.log("Is a not equal to b?",a!==b); //false
//Logical Operators
let x=9;
let y=9;
console.log("Is x equal to 9 and less than 12",x==9 && x<12); //true
console.log("Is y not equal to 10 or equal to  20?",y!=1 || y==20); //true
console.log("Is x eqals to 9?",!x==9); //false
//-------------------DATA TYPES--------------------
//*************** Primitive****************
//-------Number-------
// x=4;
// console.log(x)
//-------boolean------- -> returns true or false .use for conditions
// let x=8;
// let y=9;
// console.log(x>y); //false
// console.log(x<y); //true
//--------Undefined-------- (By default every variable is undefined)
// let a; //jab variable initialize nhi ha toh undefined hoga result
// console.log(a); //undefined
// ----------TypeOf----------
// let x= typeof 4; //typeof is used to check type of the variable
// console.log(x);
//--------Strings----------- "" or ''or ``(tild operator)
// let x="Hello";
// let y='Guys';
// let o=`Areeba`;
// console.log(x);
// console.log(y);
// console.log(o);
//---------null-----------
// let n=null; //means empty value
// console.log(n);
//-------symbol-----------
// let a = typeof Symbol("hello!");
// console.log(a);
//--------Big int----------
// let a= BigInt("124");
// console.log(a);
