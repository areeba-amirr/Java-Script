let element = document.getElementById("box");

//Border Included
let width = element.offsetWidth;
console.log(width)
let height = element.offsetHeight;
console.log(height)
//Border Excluded
let width1 = element.clientWidth;
console.log(width1)
let height1 = element.clientHeight;
console.log(height1)

let selectedElement = document.getElementsByTagName("p")[0];
let offset = selectedElement.offsetHeight;
console.log(offset)
let client = selectedElement.clientHeight;
console.log(client)
let offsetw = selectedElement.offsetWidth;
console.log(offsetw)
let clientw = selectedElement.clientWidth;
console.log(clientw)
