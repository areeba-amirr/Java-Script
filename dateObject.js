//Builtin object of js to manage date
//Works on current date
let myDate = new Date(); //created a date object
console.log(myDate.toDateString()) //prints current date (on system)
console.log(myDate.getDate()) //only print date
console.log(myDate.getFullYear())//only print year
console.log(myDate.getMonth()) //only print month number (starts from 0)
console.log(myDate.getDay())//only print day number (starts from 0)
console.log(myDate.getHours())//only print hour number
console.log(myDate.getMinutes()) //only print minutes number
console.log(myDate.getSeconds()) //only print second number
console.log(myDate.getMilliseconds()) //only print milisec number
//Date of my choice
let date = new Date("20 Aug 2025");
console.log(date.toDateString()) //prints current date (on system)
console.log(date.getDate()) //only print date
console.log(date.getFullYear())//only print year
console.log(date.getMonth()) //only print month number (starts from 0)
console.log(date.getDay())//only print day number (starts from 0)
console.log(date.getHours())//only print hour number
console.log(date.getMinutes()) //only print minutes number
console.log(date.getSeconds()) //only print second number
console.log(date.getMilliseconds()) //only print milisec number
//Set date methods
myDate.setDate(9)
myDate.setMonth(10)//as starts from 0
myDate.setHours(0)
myDate.setMinutes(4)
myDate.setFullYear(2006)
myDate.setMilliseconds(200)
myDate.setSeconds(20)
console.log(myDate)
//Daily life date
console.log(myDate.getDate() + "/"+ myDate.getMonth() + "/" + myDate.getFullYear())
console.log(myDate.getDate() + "-"+ myDate.getMonth() + "-" + myDate.getFullYear())
console.log(myDate.getMonth() + "/"+ myDate.getDate() + "/" + myDate.getFullYear())
