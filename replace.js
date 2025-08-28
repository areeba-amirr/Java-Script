let parent = document.getElementById("items")
let newItem = document.createElement("li");
newItem.textContent = "Replaced"
let replace = parent.firstElementChild;
parent.replaceChild(newItem,replace); //(to be replaced, replaced from)
newItem = document.createElement("li");
replace =   parent.firstElementChild.nextElementSibling;
parent.replaceChild(newItem,replace);
newItem.textContent = "Replaced 2"
newItem = document.createElement("li");
replace =   parent.firstElementChild.nextElementSibling.nextElementSibling;
parent.replaceChild(newItem,replace);
newItem.textContent = "Replaced 3"
 //replace h1 to h3
 let div = document.getElementById("heading")
 let change = document.createElement("h3");
 let replaceWith = div.firstElementChild.nextElementSibling.nextElementSibling;
 div.replaceChild(change,replaceWith)
 change.textContent = "Replaced via DOM Manipulation -h3"
change = document.createElement("h6");
replaceWith = div.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;
div.replaceChild(change,replaceWith);
change.textContent = "Replaced via DOM Manipulation -h6"
replaceWith = div.firstElementChild;
change = document.createElement("h5");
div.replaceChild(change,replaceWith);
change.textContent = "Replaced via DOM Manipulation -h5"
