let div = document.getElementById("my-div");
let btn = document.getElementById("btn");

function btnClick(){
  console.log("Button Clicked")
}
function divClick(event){
  console.log("Div Clicked")
  // event.stopPropagation(); //to stop further propagation works as break
}
function bodyClick(){
  console.log("Body Clicked")
}
function div2clicked(event){
  console.log("Div 2 clicked")
  // event.stopPropagation();
}
//default -> false (bubbling) child first
// btn.addEventListener("click",btnClick);
// div.addEventListener("click",divClick);
// document.body.addEventListener("click",bodyClick);

//true (Capturing) Parent first
// btn.addEventListener("click",btnClick,true);
// div.addEventListener("click",divClick,true);
document.body.addEventListener("click",bodyClick,true);

let div1 = document.getElementById("div");
let div2 = document.getElementById("div2");
let btn2 = document.getElementById("btn2");
//bubbling
// div1.addEventListener("click",divClick);
// div2.addEventListener("click",div2clicked);
// btn2.addEventListener("click",btnClick)
//Capturing
div1.addEventListener("click",divClick,true);
div2.addEventListener("click",div2clicked,true);
btn2.addEventListener("click",btnClick,true)
