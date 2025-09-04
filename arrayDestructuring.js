let info = ["Areeba",19,"js"];
console.log(info)
let one = info[0];
let two = info[1];
let three = info[2];

//Array Destructuring
let [name,age,lang] = info;
console.log(`${name}\n${age}\n${lang}`)

let arr =[
        ["Computer","Maths","Science"],
        [90,89,90],
        ["A+",'A',"A+"]
      ]
console.log(arr)
let [[sub1,sub2,sub3],[marks1,marks2,marks3],[grade1,grade2,grade3]] = arr
console.log(`${sub1} ${marks1} ${grade1}\n${sub2} ${marks2} ${grade2}\n${sub3} ${marks3} ${grade3}`)

function details(){
  return["Areeba","CS",100]
}
let [std,dep,marks] = details();
console.log(std)
console.log(dep)
console.log(marks)

let [student,department,division,exta="Extra Varaible"] = details();
console.log(std)
console.log(dep)
console.log(marks)
console.log(exta) //default value will assigned not undefined
