class Parent{
  constructor(age){
    console.log(`I am ${age}`)
  }
  myName(name){
    console.log(`My name is ${name}`)
  }
}
class child extends Parent{
  myName(name){
    super.myName("Alishba")
    console.log(`${name} here`)
  }
  constructor(name ,age){
    super(age)
    console.log(`I am ${name} and ${age} years old`)
  }
}
let c1 = new child('tahreem',19)
c1.myName("Areeba")

class Car{
  constructor(color,brand){
    this.brand = brand
    console.log(`Color : ${color} , Brand : ${brand}`)
  }
  owner(name){
    console.log(`Owner of ${this.brand} is ${name}`)
  }
}
class child1 extends Car{
  myname(name){
    super.owner(name)
    console.log("I am " + name)
  }
  constructor(color,brand,price,name){
    super(color,brand)
    console.log(`Price : ${price}`)
  }
}
let first = new child1("White","Fortuner",20000000)
first.myname("Areeba")
