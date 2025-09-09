// class Form{
//   submit(){
//     alert(this.name +" Form Submitted")
//   }
//   cancel(){
//     alert(this.name+"Form Cancel")
//   }
//   fillInfo(name,age){
//     this.name = name;
//     this.age = age;
//   }
// }
// let std1 = new Form();
// let std2 = new Form();
// std1.fillInfo("Areeba",19)
// std1.submit()
// std2.fillInfo("Hairs",21)
// std2.submit()

class Employee {
  addInfo(name,id,city){
    this.name = name;
    this.id = id;
    this.city = city;
  }
  displayInfo(){
    console.log(`Employee Name : ${this.name} \n Employee id : ${this.id} \n Employee City : ${this.city}`)
  }
}
let emp1 = new Employee();
let emp2 = new Employee();
let emp3 = new Employee();
let emp4 = new Employee();
emp1.addInfo("Alishba Asif " , 101, "Karachi")
emp2.addInfo("Rumaisa",102,"Islamabad")
emp3.addInfo("Tahreem",103,"Lahore")
emp1.displayInfo();
emp2.displayInfo();
emp3.displayInfo();
