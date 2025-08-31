let btn = document.querySelector("button");
btn.addEventListener("contextmenu",function(){
  console.log("Right Clicked")
})
btn.addEventListener("dblclick",function(){
  console.log("Double Clicked")
})
btn.addEventListener("mouseover",function(){
  btn.style.background = "aqua"
})
btn.addEventListener("mouseout",function(){
  btn.style.border = " 5px solid purple"
})
