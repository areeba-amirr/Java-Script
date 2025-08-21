//this keyword->use to refer the properties of current object
let hospital = {
  totalRooms : 100,
  totalDep : 10,
  totalStaf : 500,
  display(){
    console.log("Total Rooms : "+ this.totalRooms + "\n")
    console.log("Total Department : "+ this.totalDep+"\n")
    console.log("Total Staff : "+ this.totalStaf)
    console.log("Total machines in factory : "+ factory.totalMachines) //cannot use this as this is off another object
    console.log(this) //print full object
  }
}
console.log(this)// Q k ye koi object k ander nhi ha isliya window object ayga which represent current browser object
let factory = {
  totalStaf : 100,
  totalMachines : 50
}
hospital.display();
let myInfo = {
  name : "Areeba",
  age : 18,
  nationality : "Pakistani",
  displayInfo(){
    console.log("I am "+this.name+" ," +this.age + " years old and I have "+phone.company + "phone")
  }
}
let phone = {
  company : "Tecno",
}
myInfo.displayInfo();
