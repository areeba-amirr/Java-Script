//FOR LOOP
//syntax 
//for(initialization;condition;updation){
//statement
// }
// for(let count = 1; count <= 5; count++){ //repeat 5 times
//     console.log("Areeba Aamir") 
// }
//WHILE LOOP
//syntax 
//initialization
//while(condition){
//statement
//updation
// }
// let count = 1;
// while(count <= 5){
//     console.log("Areeba Aamir");
//     count ++;
// }
//Do While Loop
//syntax 
//initialization
//do{
//statement
//updation
// }
//while(condition);
// let count = 1;
// do{
//     console.log("Areeba Aamir");
//     count ++;
// }
// while(count <= 5);
//For-Of LOOP //use for strings and arrays
//get value directly and incremented directly
//syntax
//for(let val of string)
// let str = "Areeba Aamir";
// for(let count of str){
//     console.log(count)
// }
//For in Loop
//syntax
//for (let key in obj)
let student = {
    fullName : "Areeba Aamir",
    age : 19,
    height : 5.5,
    isAdult : true
}
for(let count in student){
    console.log(count); //return keys
    console.log(count,student[count]);
    
}
