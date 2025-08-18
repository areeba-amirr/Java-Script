// let message = "Good Morning Areeba"
// let message = "Good Morning\n Areeba"
// let message = "Good Morning \t Areeba"
// let message = "Good Morning \\ Areeba"
// let message = '"Good Morning" Areeba'
// let message = "Good Morning \"Areeba"
// let message = "Good Morning Areeba"
// console.log(message.length) //.length to find length of string
// let message = "Good Morning Areeba"
// console.log(message[0]) //[index] to find letter on specific index
// let firstName = "Areeba"
// let lastName = "Aamir"
// console.log(firstName +" "+ lastName) //String Concatenation (directly)
//Concatenation by method (.concat)
// let firstName = "Areeba"
// let lastName = "Aamir"
// console.log(firstName.concat(lastName)) //concatenaste single value
// console.log(firstName.concat(" ",lastName," "))//concatenate multiple strings(seperated by comma)
//Substring
//1).substr
// let message = "Good Morning Areeba"
// console.log(message.substr(0,3)) //starting index , how many values to pick
// let message1 = "Welcome to JAVA SCRIPT"
// console.log(message1.substr(4,2)) //starting index , how many values to pick
//2).substring
// let message1 = "Welcome to JAVA SCRIPT"
// console.log(message1.substring(0,7)) //starting index , enging index
// let firstName = "Areeba"
// if(firstName == "Areeba"){
//   console.log("Equal")
// }
// else{
//   console.log("Not Equal")
// }
//.indexOf() ->Check string starts from index (return index if found and return -1 if not found)
// let message1 = "Welcome to JAVA SCRIPT"
// console.log(message1.indexOf("JAVA")) //11
// console.log(message1.indexOf("Js")) //-1
// let message1 = "Welcome JAVA to JAVA SCRIPT"
// console.log(message1.indexOf("JAVA",10)) //given specific index from which it will find the string
//.lastIndexOf() -> start finding index from last
// let message1 = "Welcome JAVA to JAVA SCRIPT"
// console.log(message1.lastIndexOf("JAVA"))
//.trim()
// let message1 = "Welcome       JAVA to JAVA SCRIPT        "
// console.log(message1.trim()) //remove end spacves or trimEnd()
// console.log(message1.trimStart()) //remove starting spaces
// let message1 = "Welcome JAVA to JAVA SCRIPT"
// console.log(message1.toUpperCase()) //Convert into uppercase
// console.log(message1.toLowerCase()) //convert into lower case
//.replace(this,from)
// console.log(message1.replace("JAVA SCRIPT","JS"))
//replace java script from js
//.includes()-> return true if given string is present and returns false if not present
// console.log(message1.includes("JAVA"))

let msg = prompt("Enter Message","JS is scripting languagae")
console.log("UpperCase:"+ msg.toUpperCase())
console.log("LowerCase:"+ msg.toLowerCase())
console.log("Substring:"+ msg.substring(4,10))
console.log("Replace:"+ msg.replace("scripting","powerful"))
console.log("Includes:"+ msg.includes("is"))
console.log("Length:"+ msg.length)
