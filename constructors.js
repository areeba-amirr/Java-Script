class user {
  // userDetails(age,name){
  //   this.age = age;
  //   this.name = name
  //   console.log(`Name : ${this.name}  Age : ${this.age}`)
  // }
  // constructor(){
  //   console.log("Constuctor Called")
  // }
  constructor(name,age,id){
    this.id = id;
    this.name = name;
    this.age = age
    console.log(`Id : ${this.id} Name : ${this.name}  Age : ${this.age}`)
  }
}
let u1 = new user("Areeba",19,101);
let u2 = new user("Tahreem",20,102);
let u3 = new user("Rumaisa",21,103);
// u1.userDetails(19,"Areeba")
// u2.userDetails(20,"Rumaisa")
// u3.userDetails(20,"Tahreem")
