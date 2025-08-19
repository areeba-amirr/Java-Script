//Global Variable -> variable declared outside the function (can be use everywhere in the program) (can't be redeclared)
//Local Variable -> variable declared inside the function (can be use only in that function)(can be redeclared)
let name = "Areeba"
function display(){
  let msg = "Good Morning!!!"
  console.log(msg+ name)
}
display()
// console.log(msg) //error
console.log(name)
let age = 18
function info (){
  console.log("I am "+ name + " and I am "+age)
}
info()
let msg = "Hello Guys" //redeclring as local variable
console.log(msg)
