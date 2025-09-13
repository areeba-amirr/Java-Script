let student  = {
  name : "Areeba",
  age : 18,
  id : 101
}

let jobj = JSON.stringify(student);
console.log(jobj)

let employee = {
  id : 111,
  name : "Tahreem",
  contact : {
    phone : 123343224343,
    mail : "tahreem@gmail.con",
  },
  language : ["html","css","js"]
}
console.log(JSON.stringify(employee))
