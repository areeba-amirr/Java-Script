//By prototype object you can inherit features of one object to another
//Every object has prototype function
let teacher = {
  name : "Areeba",
  subject : "Maths"
}
let student = {
  marks : "88"
}
teacher.__proto__ = student; //.__proto__ is use for inheritance
 console.log(teacher.marks)
console.log(teacher)
let displayInfo = {
  fullDetails : function(){
    return this.brand+" "+this.color
  }
}
let laptop = {
  brand : "Hp",
  color : "Silver"
}
let mobilePhone = {
  brand : "Samsung",
  color : "White"
}
console.log(mobilePhone.toString())//this method is inside object prototype
laptop.__proto__ = displayInfo;
mobilePhone.__proto__ = displayInfo;
console.log(laptop.fullDetails())
console.log(mobilePhone.fullDetails())
//constructor Function
function Employee(id,name,salary){
  this.id = id;
  this.name = name;
  this.salary = salary;
}
let emp1 = new Employee(101,"Areeba",50000)
let emp2 = new Employee(102,"Haris",60000)
//to add any property in constructor function
Employee.prototype.bonus = "10%"; //.prototype is used to add property in constructor
console.log(emp1)
console.log(emp2.bonus)
//By using prototype you can also add your custom property into builtin function
String.prototype.myProperty = "Created by Areeba";
console.log(mobilePhone.brand.myProperty)
console.log(teacher.subject.myProperty)
console.log(student.marks.myProperty)
console.log(teacher.marks.myProperty)

let bank = {
  bankName : "Meezan Bank",
  totalBranches : 15
}
let Employe = {
  totalEmployee : 800,
  bonus : "20%"
}
bank.__proto__ = Employe;
console.log(bank.bonus)
console.log(bank.totalBranches)
String.prototype.custom = "Welcome to MEEZAN BANK";
console.log(bank.bonus.custom)
console.log(bank.bankName.custom)

//Constructor
function shapes(name,qty,color){
  this.name = name;
  this.qty = qty;
  this.color = color;
}
shapes.prototype.price = 500;
let square = new shapes("Square",6,"Yellow")
let rectangle = new shapes("Rectangle",3,"Green")
console.log(square)
console.log(rectangle)
console.log(rectangle.price)
console.log(square.name.custom)
console.log(rectangle.color.custom)
