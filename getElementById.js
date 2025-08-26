let element = document.getElementById("greet");
console.log(element);
//returns null if id not found
console.log(element.innerHTML) //prints text of that id
element.innerHTML = "Welcome"; //chnage/manipulate the text in dom
console.log(element)
let lastName = document.getElementById("last")
lastName.innerHTML = "Muhammad Aamir"
let firstName = document.getElementById("first")
firstName.innerHTML = "Areeba Aamir"
console.log(firstName.innerHTML + lastName.innerHTML)
