//Random method is also a part of Math
//It genderates any random numbder btw (0 inclusive,1 exclusive)
console.log(Math.random())
//if I want to generate random no btw 1 till 10
console.log(Math.random()* 10 ) //1 inclusive 10 exclusive
let no = Math.random()* 10
console.log(Math.trunc(no))
//if I want to generate random no btw 1 till 100
console.log(Math.random() * 100)
//if I want lat limit to be inclusive for suppose 1-10 where 10  be inclusive
console.log((Math.random() * 10)+1)
//If I want to add starting and ending limit by my own for suppose 10 - 25
console.log(Math.random() * (25 - 10)+10)
//Create function that generrate random values and last value to be inclusive
function randomNumber(min,max){
  let result = (Math.random() )* (max - min)+min +1
  console.log(Math.trunc(result))
}
randomNumber(4,10)

