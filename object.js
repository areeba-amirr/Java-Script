//Js is object oriented programming language
//Object->having entity(attributes) and methods(behavoiur like how namy ways to use)
//***Example***
// Noun->Object->Employee
// Adjective->Attributes->Employee name ,Employee id
// Verb->Methods(Action)->calculate payroll()
//Methods are a function connected to objects
//Syntax
//let nameofObject = {};
let employee = {
  //key : value
  empId : 101,
  'emp Name' : "Areeba Aamir",
  empSalary : 60000
};
console.log(employee) //object
//Property can be accessed by Dot Notation (only work with properties without space)
console.log(employee.empId) //object
//Property can be accessed by Array notation
console.log(employee['empId']) //object
console.log(employee["emp Name"])
//Add new property into existing object
employee.empPost = "Manager" //add at the end of the object
console.log(employee)
//To update existing property
employee.empId = 102;
console.log(employee)
//Delete existing property
delete employee.empSalary;
console.log(employee)
//Check whether a property exists or not
console.log('empPost'in employee) //returns true if exixts else returns false
console.log('empSalary' in employee)
//Traverse Objects
// *******For In Loop********\
for(let key in employee){
  console.log(key) //only display keys
  console.log(key+" "+employee[key])//display key + values
}
// **************Object Methods****************
//Create Anonymous Function
employee.greet = function(){
  console.log("Hello")
};
employee.greet();
//Assign method to variable
function hello(){
  console.log("Heyyyy")
};
employee.greet = hello;
employee.greet()
//Defin method inside object
// let studehnt = {
//   rollNo : 1,
//   name : "Areeba",
//   fun : function message(){
//     console.log("Good Night")
//   }
// // }
// console.log(studehnt)
// studehnt.fun();
//by direct method
let studehnt = {
  rollNo : 1,
  name : "Areeba",
  fun  (){
    console.log("Good Night")
  }
}
studehnt.fun()
