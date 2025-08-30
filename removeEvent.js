let button = document.getElementById('btn');
function firstClick(){
  console.log("Clicked 1st Time")
}
function SecondClick(){
  console.log("Clicked 2nd Time");
}
function hello(){
  console.log("hello")
}
button.addEventListener("click",firstClick);
button.addEventListener("click",SecondClick);
//remove
button.removeEventListener("click",firstClick)
// button.removeEventListener("click",hello) //not removed as applied inline

let div = document.getElementById("my-div")
function color(){
  div.style.backgroundColor = "pink"
}
function width(){
  div.style.width = "40px"
}
function mouseover(){
  div.style.color = " red"
}
div.onclick = function(){
  div.style.border = "5px solid purple"
}
div.addEventListener("click",color)
div.addEventListener("dblclick",width)
div.addEventListener("mouseover",mouseover)
div.removeEventListener("dblclick",width)
//not removed as function is anonymous
div.removeEventListener("click",function(){
  div.style.border = "5px solid purple"
})
