let data = `{
  "name" : "Areeba",
  "age" : 18,
  "CNIC" : true,
  "passport" : null,
  "language" : ["C","Java","html","JS"],
  "contact" : {
    "phone" : 1234567788,
    "mail" : "areeba@gmail.com"
  },
  "students" : [
    {
      "name" : "Tahreem",
      "age" : 20,
      "isAdult" : true
    },
    {
      "name" : "Rumaisa",
      "age" : 21,
      "isAdult" : true
    },
    {
      "name" : "Uzma",
      "age" : 18,
      "isAdult" : false
    }
  ],
  "employee" : {
    "empId" : 101,
    "empSalaray" : 70000,
    "empJob" : "Permenant"
  },
  "subjects" : [
    ["Science","Botany","Zoology"],
    ["Maths","Calculus","Linear Algebra"],
    ["Computer","Ict","Pf"]
  ]
}`;
let dObj = JSON.parse(data);
console.log(dObj)
console.log(dObj['CNIC'])
console.log(dObj['name'])
console.log(dObj['passport'])
console.log(dObj['language'])
console.log(dObj['language'][0])
console.log(dObj['language'][2])
console.log(dObj['contact'])
console.log(dObj['contact']['mail'])
console.log(dObj['students'])
console.log(dObj['students'][0])
console.log(dObj['students'][1])
console.log(dObj['students'][0]['name'])
console.log(dObj['students'][2]['age'])
console.log(dObj['students'][2]['isAdult'])
console.log(dObj['subjects'][0][0])
console.log(dObj['subjects'][0][1])
console.log(dObj['subjects'][2][0])
console.log(dObj['subjects'][1][1])
console.log(dObj['employee'])
console.log(dObj['employee']['empSalaray'])









