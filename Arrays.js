let colors = ["Lilac","Black","White","Pink","Blue","Lavender","Red","Grey"];
let marks = [ 22,45,8,66,34,12,90,83,55,33,2,11]
//or
// let colors = new Array("Lilac","Black","White","Pink","Blue","Lavender")
// console.log(colors[3])
// let info = [1,"Areeba",19]
// console.log(info) //to print full array
// //display by loop
// for(let i = 0; i <= 2; i++){
//   console.log(info[i]+"\n")
// }
console.log(colors)
//Operations of ARRAY
//.sort() -> sort array alphasbetically
console.log(colors.sort())
//.length -> to find length
console.log(colors.length)
//.push(item)-> to push any value to the array
console.log(colors.push("SkyBlue")) //add at the end by default
console.log(colors)
//.unshift(item)-> to add element at the start
console.log(colors.unshift("Magenta"))
console.log(colors)
//.pop()->remove the end value from the array
console.log(colors.pop())
console.log(colors)
//.shift() remove first value by default
console.log(colors.shift())
console.log(colors)
//.splice(starting index,number of values) remove values from the given index
console.log(colors.splice(6,2))
console.log(colors)
//To make array empty
//1st Method
// colors = []
//2nd Method
// colors.length = 0
// console.log(colors)
//indexOf(element)-> find index of specific element
console.log(colors.indexOf("Pink")) //returnds index if found else returns -1
//Array.isArray(element)->to check whether give element is array oe not ,returns true if yes else return false
console.log(Array.isArray(colors)) //true
let name = "Haris"
console.log(Array.isArray(name))//false
//.split(element that cause splitting)->to split string into an array
let msg = "Hello This is Areeba Aamir and I am doing BSCS"
console.log(msg.split(" "))
console.log(msg.split(''))//split every character into array element
console.log(msg.split("i"))
let arr = msg.split() //convert whole message into single array element
console.log(Array.isArray(arr))
console.log(arr)
//.concat(element)->to conacatenate
let arr1  = ["Areeba",99,"Aamir"]
let arr2 = ["Haris",44,"Aamir"]
console.log(arr1.concat(arr2))
console.log(arr2.concat(arr1))














