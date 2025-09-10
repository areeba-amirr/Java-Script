class Employee{
  constructor(name){
    this.name = Employee.capitalized(name)
  }
  me(){
    console.log(this.name)
    // console.log(`I am ${Employee.capitalized(this.name)}`)

  }
  static capitalized(name){
    return name.charAt(0).toUpperCase() + name.substr(1,name.length)
  }
}
let e1 = new Employee("areeba")
e1.me();
console.log(Employee.capitalized('hina'))

class user{
  static sum(a,b){
    return a+b;
  }
}
console.log(user.sum(4,8))

class Person{
  constructor(name){
    this.name =  name;
  }
  static Length(name){
    return name.length;
  }
}
let p1 = new Person("Areeba Amir")
console.log(Person.Length(p1.name))

