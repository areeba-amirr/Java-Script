let list = document.getElementById("items");
let item = document.createElement("li");
item.textContent = "Appended by DOM";
let position = list.firstElementChild;
list.insertBefore(item,position); //(jisko appen krwana ha , jissy pehly append krwana ha)
let item1 = document.createElement("li");
item1.textContent = "yayyyyy"
let position2 = list.firstElementChild.nextElementSibling; //at second
// let position2 = list.firstElementChild.nextElementSibling.nextElementSibling; //at third
// let position2 = list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling; //at fourth
// let position2 = list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling; //at fifth
list.insertBefore(item1,position2)
let element = document.body;
let add = document.createElement("h1");
add.textContent = "Hello DOM"
element.insertBefore(add,list)
//add ul + li inside body befor h1
let unOrderedList = document.createElement("ul")
let  place = document.getElementById("heading");
element.insertBefore(unOrderedList,place)
unOrderedList.id = "me"
let listElement = document.createElement("li");
unOrderedList.appendChild(listElement);
let listElement1 = document.createElement("li");
let before = unOrderedList.firstElementChild;
unOrderedList.insertBefore(listElement1,before)
let listElement2 = document.createElement("li");
before = unOrderedList.firstElementChild;
unOrderedList.insertBefore(listElement2,before)
let listElement3 = document.createElement("li");
 before = unOrderedList.firstElementChild;
 //updating before brecause it is a variable otherwise it will always return laat li as a first child
unOrderedList.insertBefore(listElement3,before)
listElement.textContent = "last as by append method"
listElement1.textContent = "2nd last"
listElement2.textContent = "2nd"
listElement3.textContent = "first"

