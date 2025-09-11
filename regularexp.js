let str = "I am very very very very good girl"
console.log(str.replace("very","VERY")) //replace first occurance
let regX = /very/g;
console.log(str.replace(regX,"VERY"))  //chnage golbally
let str1 = "Hello elo hello hi I am areeba hello"
let regX1 = /(ello)/g
console.log(str1.replace(regX1,"ELLO"))
