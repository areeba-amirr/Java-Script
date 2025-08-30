//All the actions perform on the webpage are events
//Event handler is a code to handle java script events
// function btnClick(){
//   alert("Ready");
// }
let myBtn = document.getElementById("my-btn");
myBtn.onclick = function(){
  console.log("Event added externally")
}
myBtn.ondblclick = function(){
  console.log("Clicked 2x ")
}
myBtn.onmousedown = function(){
  console.log("Mouse Down")
}
myBtn.onmouseover= function(){
  console.log("Mouse Over")
}
myBtn.onmouseup= function(){
  console.log("Mouse UP")
}
let myDiv = document.querySelector("div");
myDiv.onclick = function(){
  myDiv.style.backgroundColor = "pink"
}
myDiv.onmouseover = function(){
  myDiv.style.border = "solid 3px purple"
}
myDiv.onmouseover = function(){
  myDiv.style.border = "solid 3px aqua" //will overwrite last same one
}

//event handling by event listener

// myBtn.addEventListener("click",btnClick)
// //By anonymous Function
// myBtn.addEventListener("click",function(){
//   myBtn.style.backgroundColor = "pink"
// })
// //MouseOver Event
// myBtn.addEventListener("mouseover",function(){
//   console.log("Mouse Over")
// });
// myBtn.addEventListener("mouseout",function(){
//   console.log("Mouse Out");
// })
