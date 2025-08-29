// getComputedStyle to check style proerties
let selectedElement = document.getElementById("main");
let styling = getComputedStyle(selectedElement);
console.log(styling.color)
console.log(styling.backgroundColor)
console.log(styling.border)
//every element has some by default property

let para = document.getElementById("para");
let check = getComputedStyle(para);
console.log(check.paddingBottom)
console.log(check.fontSize)
console.log(check.fontFamily)
console.log(check.background)
console.log(check.margin)
console.log(check.height)
