let heading = document.getElementById("heading");
//set attribute
heading.setAttribute("class","heading-class");
//get attribute
console.log(heading.getAttribute("class"))
//remove attribute
heading.removeAttribute("class")

//Check whether attribute is prsent or not
let result = heading.hasAttribute("class")
console.log(result) //true
 result =heading.hasAttribute("name")
 console.log(result)

 let unOrdered = document.getElementById("my-ul");
 unOrdered.setAttribute("class","my class");
 console.log(unOrdered.hasAttribute("id"))
 unOrdered.removeAttribute("id")
console.log(unOrdered.getAttribute("class"))

console.log(heading.childElementCount)
console.log(unOrdered.childElementCount) //to count child element
console.log(document.body.childElementCount)
