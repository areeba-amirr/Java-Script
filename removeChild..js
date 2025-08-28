let parent = document.getElementById("item");
let removeElement = parent.firstElementChild;
// parent.removeChild(removeElement)
// console.log(removeElement)
removeElement = parent.firstElementChild.nextElementSibling;
parent.removeChild(removeElement)

let add = document.createElement("ul")
let insert = document.body.appendChild(add)
let list = document.createElement("li");
add.appendChild(list)
 list = document.createElement("li");
 add.insertBefore(list,add.firstElementChild)
 list = document.createElement("li");
 add.insertBefore(list,add.firstElementChild)
list = document.createElement("li");
 add.insertBefore(list,add.firstElementChild)
 list = document.createElement("li");
 add.insertBefore(list,add.firstElementChild)
add.id = "you"
 //remove ul
 let body = document.body;
 let vanish = document.getElementById("you")
body.removeChild(vanish)

document.body.removeChild(parent);
