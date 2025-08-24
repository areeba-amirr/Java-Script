//Object placed inside another object
//Nested object structured your code
// let student = {} //null object
let student = {
  id : 1,
  personalinfo : { //nested object of student
    firstName : "Areeba",
    lastName : "Aamir",
    contactInfo : { //nested object of personal info
      gmail : "abcd@gmail.com",
      phone : 12345678990
    }
  },
  academicInfo : { //nested object of student
    grade : "A+",
    marks : 90
  }
}
console.log(student)
console.log(student.personalinfo)
console.log(student.personalinfo.contactInfo)
console.log(student.personalinfo.contactInfo.gmail)
console.log(student.personalinfo.lastName)
console.log(student.academicInfo)
console.log(student.academicInfo.marks)
for( let element in student.personalinfo){
  console.log(element + " "+ student.personalinfo[element])
}
for( let element in student.personalinfo.contactInfo){
  console.log(element + " "+ student.personalinfo.contactInfo[element])
}
for( let element in student){
  console.log(element + " "+ student[element])

}
