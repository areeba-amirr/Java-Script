class person{   //parent class /base class /super class
  constructor(name){
    this.name = name;
  }
  greet(){
    console.log(`Hello ${this.name}`)
  }
}
class student extends person{  //child class/deriverd class/sub class
  display(){
    console.log("Inherited Parent Class")
  }
}
let p1 = new student("Areeba")
p1.greet()
p1.display()

class company{
  constructor(){
    console.log("Welcome To Compnay")
  }
  empInfo(id,name,age){
    this.name = name;
    this.id = id;
    this.age = age;
  }
}
class user extends company{
  displayInfo(salary){
    this.salary = salary;
    console.log(`Name : ${this.name} id : ${this.id} Age : ${this.age} Salary : ${this.salary} `)
  }
}
class emp extends user{
  default(){
    console.log("Multiple Inheritance Done")
  }
}
let com1 = new company();
let u1 = new user();
let e1 = new emp();
u1.empInfo(101,"Areeba",19)
u1.displayInfo(50000)
e1.empInfo(102,"Tahreem",20)
e1.displayInfo(60000);
e1.default()
