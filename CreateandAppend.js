let element = document.getElementById("me");
//to add/append attribute
let heading = document.createElement("h1");
element.appendChild(heading);
//to add/apend text inside h1 tag by methods
let text = document.createTextNode("Successfully Appended")
heading.appendChild(text);
//to give class to h1
// heading.className = "myclass" //className is a property to assign class
//To add multiple classes
heading.className = "myclass one"
//To give id
heading.id = "heading"; //id is a property to assign id
//to add/apend text inside h1 tag by property
heading.textContent = "Appended By Property" //.textContent is a property

//Append on body code
// document.body.appendChild(heading) //appended in body become child of body tag

//Read text from attribute
let read = document.getElementById("para");
console.log(read.textContent) //read html by this property

//Add li into ul
let ulList = document.getElementById("items");
let add = document.createElement("li");
ulList.appendChild(add)
add.textContent = "Five"

//Add paragarph into an empty div
let addDiv = document.getElementById("myBody")
let div = document.createElement("div")
addDiv.appendChild(div)
div.id = "hello"
let headingTag = document.getElementById("hello")
let h1 = document.createElement("h1");
headingTag.appendChild(h1);
h1.textContent = "Appended Div and H1 in Body tag by DOM Manipulation"
//Add paragraph inside body
let para = document.createElement("p")
addDiv.appendChild(para);
para.id = "java script";
para.textContent = "I am Areeba Aamir, a Computer Science student passionate about software development, programming, and technology innovation.";

