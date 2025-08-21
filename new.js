//Object creation using new keyword
//Syntax
//let Object = new Object()
let employee = new Object(); //here Object() is constructor
employee.name = "Areeba Amir";
employee.age = 18;
console.log(employee.name);
console.log(employee.age);

let student = new Object();
student.name = "Areeba";
student.age = 18;
student.marks = 89;
for (let element in student){
  console.log(element +":"+ student[element])
}

let laptop = new Object();
laptop.brand = "Hp";
laptop.gen = "8th";
laptop.ram = "16gb";
laptop.model = "EliteBook"
for (let element in laptop){
  console.log(element +" : "+ laptop[element])
}
