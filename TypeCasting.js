// let num = "4"
// document.writeln(typeof num)
// let no = 4
// document.writeln(typeof no)
// let sum = 4 + "4"
// document.writeln(sum + typeof sum)
// let sum = 4 - "4"
// document.writeln(sum + typeof sum)
// let sum = "yes" * "4"
// document.writeln(sum + typeof sum)
// *******Type Casting******
//1) String()
//2) Number()
//3) Boolean()
//---String()----
// let oldType = 33
// document.writeln(oldType + typeof oldType) //number
// let newType = String(oldType)
// document.writeln(newType + typeof newType) //string
//boolean to string
// let oldType = true
// document.writeln(oldType + typeof oldType) //boolean
// let newType = String(oldType)
// document.writeln(newType + typeof newType) //String
//---Number()----
//string to number
// let oldType = "33"
// document.writeln(oldType + typeof oldType) //string
// let newType = Number(oldType)
// document.writeln(newType + typeof newType) //number
//boolean to number
// let oldType = false
// document.writeln(oldType + typeof oldType) //boolean
// let newType = Number(oldType)
// document.writeln(newType + typeof newType) //number (0 or 1)
//String to nUmber
// let oldType = ""
// document.writeln(oldType + typeof oldType) //STring
// let newType = Number(oldType)
// document.writeln(newType + typeof newType) //number
//---Boolean()----
// string to boolean
// let oldType = "33"
// document.writeln(oldType + typeof oldType) //string
// let newType = Boolean(oldType)
// document.writeln(newType + typeof newType) //boolean
// number to boolean
// let oldType = 0
// document.writeln(oldType + typeof oldType) //number
// let newType = Boolean(oldType)
// document.writeln(newType + typeof newType) //boolean
//Type Castig On inputted value
let value1 = prompt("Enter value1:");
document.writeln(value1 + typeof value1);
let newType1 = Number(value1);
document.writeln(newType1 + typeof newType1 + "<br>");
let value2 = prompt("Enter value2:");
document.writeln(value2 + typeof value2);
let newType2 = Number(value2);
document.writeln(newType2 + typeof newType2+ "<br>");
let sum = newType1 + newType2
document.writeln(sum + typeof sum) //ans number
