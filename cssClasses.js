let element = document.getElementById("box");
//find class name
console.log(element.className); //retirns names of classes applied on element

//add class using className
element.className += " space "

//class name list
console.log(element.classList)//return list of class in an array
for(let style of element.classList){ // to access one by one
  console.log(style)
}
//Methods to manipulate class list
//add a class name
element.classList.add("color");
//remove a class name
element.classList.remove("space");
//replace a class name
element.classList.replace("color","wow")
//check existance of a class
console.log(element.classList.contains("wow")) //returns boolean  value
console.log(element.classList.contains("space"));
//toggle class add/remove
element.classList.toggle("space") //add
// element.classList.toggle("wow")//remove

let myElement = document.getElementById("my-id");
console.log(myElement.className);
myElement.className += " my-class"
myElement.className += " wow"
console.log(myElement.className)
console.log(myElement.classList)
console.log(myElement.classList[0]);
console.log(myElement.classList[1]);
//By class list
myElement.classList.add("color")
myElement.classList.remove("wow");
myElement.classList.toggle("space");
console.log(myElement.classList);

let para = document.getElementById("my-para");
para.classList.add("my-class1");
para.classList.add("wow")
para.classList.toggle("color")
console.log(para.classList)
