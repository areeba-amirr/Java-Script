let info = {
  name : "Areeba",
  dep : "CS",
  age : 19
}
console.log(info)
console.log(info.name)
console.log(info.age)
console.log(info.dep)

//Object Destructuring
//same name as keys
// let {name,dep,age} = info
// console.log(name)
// console.log(dep)
// console.log(age)
//diff name
// let {name:firstName , dep : department , age: years} = info
// console.log(firstName);
// console.log(department);
// console.log(age)
//for default values
let {name:first , dep : depart , age: year ,extra = "extra" } = info
console.log(extra)

//nested object
let std1 = {
  name : "Areeba",
  dep : "CS",
  age : 19,
  contact : {
    phone : 123456789,
    mail : "abcvd@gmail.com"
  }
}
let {name , dep, age, contact : {phone , mail} } = std1
console.log(name +" "+ dep +" "+ age +" "+ phone +" "+ mail)

let employee = {
  empId : 101,
  empName : "Tahreem",
  empSalary : 60000,
  contact :{
    empPhone : 1223445556,
    empmail : "ta@gmail.com",},
  address : {
    empCity : "Karachi",
    empCountry : "Pakistan"
  }
}
let {empId:id ,empName: firstName , empSalary: salary , contact:{empPhone: phoneNo ,empmail: gmail }, address: { empCity: city , empCountry :country}} = employee;
console.log(id)
console.log(firstName)
console.log(salary)
console.log(phoneNo)
console.log(gmail)
console.log(city)
console.log(country)

