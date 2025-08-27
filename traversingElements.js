//To access parent element
// let element = document.getElementById("one")
// let parentElement = element.parentElement;
// console.log(parentElement)
//or
let element = document.getElementById("one").parentElement;
console.log(element) //ul
// element.innerHTML = "AREEBA"

//To access first & last child
// let value = document.getElementById("two")
// let firstChild = value.firstElementChild;
// console.log(firstChild)
// let lastChild = value.lastElementChild;
// console.log(lastChild)
//or
let value = document.getElementById("two").firstElementChild;
console.log(value)
let value1 = document.getElementById("two").lastElementChild;
console.log(value1)
value1.innerHTML= "Changed Successfully"

//To access children
let children = element.children; //children is an array
console.log(children)
for(let i = 0; i <= children.length-1 ; i++){
  console.log(children[i].innerHTML)
}
//To access siblings
let siblings = document.getElementById("one")
let previousSiblings = siblings.previousElementSibling;
console.log(previousSiblings.innerHTML)
let nextSibling = siblings.nextElementSibling;
console.log(nextSibling.innerHTML)
//By query selector
let accessSibling = document.querySelector("li#one").nextElementSibling;
console.log(accessSibling.innerHTML)
let accessSibling1 = document.querySelector("li#one").previousElementSibling;
console.log(accessSibling1.innerHTML)
//by class name
let parent = document.querySelector("li.hi").parentElement;
console.log(parent.innerHTML)

//These properties only word on single element not an array thats why we cant access these by tagname,classname, queryselectorAll properties
