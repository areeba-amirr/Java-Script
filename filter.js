let arr = [2,3,4,1,5,6,7,8,9,0,4,3,2];
let even = arr.filter(no => no%2==0)
console.log(even)
let odd = arr.filter(no => no%2!=0)
console.log(odd)

let array = [1,44,33,6,7,48,21,90,2,31,11,6,4,21]
let greaterthan10 = array.filter(function(no){
  return no>10
})
console.log(greaterthan10)

let students = [
  {
    name : "Areeba",
    age : 19
  },
  {
    name : "Tahreem",
    age : 19
  },
  {
    name : "Rumaisa",
    age : 20
  },
  {
    name : "Alishba",
    age : 19
  },
  {
    name : "Uzma",
    age : 20
  }
]
let age = students.filter(value => value.age == 19)
console.log(age)

let employee = [
  {
    id : 101,
    salary : 50000
  },
  {
    id : 102,
    salary : 60000
  },
  {
    id : 103,
    salary : 40000
  },
  {
    id : 104,
    salary : 80000
  },
  {
    id : 105,
    salary : 30000
  },
  {
    id : 106,
    salary : 70000
  },
  {
    id : 108,
    salary : 50000
  },
]
let sal = employee.filter(function(val){
  return val.salary >= 50000
})
console.log(sal)
