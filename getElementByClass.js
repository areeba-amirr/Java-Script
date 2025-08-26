let element = document.getElementsByClassName("programming"); //here elemnet is an array
// console.log(element);
for (let i = 0; i < element.length; i++) {
  element[i].innerHTML = "AREEBA";
}
let value = document.getElementsByClassName("maths");
for (let i = 0; i < value.length; i++) {
  value[i].innerHTML = "JAVASCRIPT";
}
let greetings = document.getElementsByClassName("greet")
console.log(greetings)
greetings[0].innerHTML = "Welcome BACK"
let heading = document.getElementsByClassName("languages")
for(let i = 0 ; i <= heading.length-1 ; i++){
  console.log(heading[i].innerHTML)
}
