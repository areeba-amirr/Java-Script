//Object Constructor Function
//Pascal Case Convention is best practice to create constructor
function Employee(name,id,salaray,dep){ //Constructor function
  this.name = name;
  this.id = id;
  this.salaray = salaray;
  this.dep = dep;
  this.greet = function(){
    return " Welcom on board"
  }
}
 let emp1 = new Employee("Areeba",101,50000,"CS")
 let emp2 = new Employee("Uzma",102,60000,"IT")
 let emp3 = new Employee("Tahreem",103,50000,"A&F")
console.log(emp1)
console.log(emp2)
console.log(emp3)
//By creating a consrtuctor you just need to pass values and oject name for multiple objects

//If you want add some other property oiinto any function
emp1.bonus = "10%" //only add in emp1 object
console.log(emp1)
//to add this in every object you have to add it in consyructor function
//you cannot add any value into constructor function from outside

//to add method into object
emp1.fullInfo = function(){
  return  this.id+" "+this.name+" "+this.salaray+" "+this.dep
}
console.log(emp1)
console.log(emp1.fullInfo())
//only add in emp1 object
console.log(emp2.greet())

function Student(rollNo,fullName,age,subject,grade){
  this.rollNo = rollNo;
  this.fullName = fullName;
  this.age = age;
  this.subject = subject;
  this.grade = grade;
}
let std1 = new Student(1,"Hasnain Amir",13,"Maths","A")
console.log(std1)
let std2 = new Student(2,"Areeba Amir",18,"Computer","A")
console.log(std2)
std2.marks = 89;
console.log(std2)
