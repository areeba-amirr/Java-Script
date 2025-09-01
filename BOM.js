var age = 18;
console.log(age)
console.log(window.age) //become property of window object

function message(){
  console.log("hello BOM");
}

window.message();
console.log(window);

 var student = {
  name : "Areeba",
  age : 19
 }
console.log(window.student)
