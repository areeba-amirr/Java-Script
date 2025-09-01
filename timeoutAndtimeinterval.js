//TimeOut Functiion
let id = setTimeout(show, 3000); //time in miliseconds
// console.log(id)
function show() {
  console.log("hello");
}
let btn = document.querySelector('button');
btn.addEventListener("click",function(){
  clearTimeout(id)
})
//TimeInterval Function
let id2 = setInterval(greet,3000);
function greet(){
  console.log("Welcome")
}
let btn2 = document.getElementById("btn");
btn2.addEventListener("click",function(){
  clearInterval(id2);
})


let div = document.querySelector("div");
let time = setTimeout(color,2000);
function color(){
  div.style.backgroundColor = "aqua"
}
btn.addEventListener("click",function(){
  clearTimeout(time)
})
