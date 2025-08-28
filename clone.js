//clone means copy
let parent = document.getElementById("items");
let clone = parent.cloneNode(true); //true means parent and child dono clone hongy
// console.log(clone)
document.body.appendChild(clone)
clone.id = "me";

let ul = document.getElementById("one")
let cloneElement = ul.cloneNode(false)
// console.log(cloneElement)
document.body.appendChild(cloneElement) //child element not appended

 let h1 = document.getElementsByTagName("h1");
 let copy = h1[0].cloneNode(false); //false taky h1 ka text nhi ly
 //use index because it returns array
//  console.log(h1.length) array
 document.body.appendChild(copy);
h1[0].textContent = "Welcome";



