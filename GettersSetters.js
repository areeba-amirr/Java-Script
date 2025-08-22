//Getter -> to acess properties of object after some change
//Setter -> to set values of properties of object
//Syntax to create setter
// set methodName(parameters){
//   block of code
// }
//synytax to create getter
// get methodName(){
//   block of code
// }
let student = {
  name: "       Areeba           ",
  get getName() {
    return this.name.toUpperCase();
  },
  get getTrim() {
    return this.name.trim();
  },
  set setName(name) {
    this.name = name.toUpperCase();
  },
};
console.log(student);
console.log(student.getName); //Dont use parathesis as method is getter
console.log(student.getTrim);
student.setName = "     Hania";
console.log(student);
console.log(student.getName);
console.log(student.getTrim);
let hospital = {
  name: "Agha Khan",
  staff: 300,
  rooms: 150,
  set setName(name) {
    this.name = name.toUpperCase();
  },
  get getName() {
    return this.name.toLowerCase();
  },
};
hospital.setName = "Liaquat National";
console.log(hospital);
console.log(hospital.getName)
let person = {
  firstName : " Areeba",
  lastName : "Amir",
  set name1(Name){
    this.firstName = this.firstName.trim().toUpperCase()
  },
  set name2(lastName){
    this.lastName = this.lastName.trim().toUpperCase()
  },
  get getfirstName(){
    return this.firstName.toLowerCase()
  },
  get getlastName(){
    return this.lastName.toLowerCase()
  }
}
self
person.name1 = "   AreeBa"
person.name2 = "aaMir  "
console.log(person)
console.log(person.getfirstName)
console.log(person.getlastName)
console.log(person)

