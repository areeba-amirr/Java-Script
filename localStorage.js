let key = prompt("Enter Key")
let val = prompt("Enter Value")
//set items
localStorage.setItem(key,val)
//get items
// console.log(`The key is ${key} and value is ${localStorage.getItem(key)}`)

//remove item
if(key == "password"){
  localStorage.removeItem(key);
}

//clear data
if(key == "delete"){
  localStorage.clear();
}

//length
console.log(localStorage.length)

//to show key of my choice on console
console.log(localStorage.key(2))
