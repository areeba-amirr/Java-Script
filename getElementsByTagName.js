let values = document.getElementsByTagName("h1")
console.log(values)
for(let i = 0 ; i <= values.length-1 ;i++){
  values[i].innerHTML = "PYTHON";
}
for(let i = 0 ; i <= values.length-1 ;i++){
  console.log(values[i].innerHTML)
}
//For div
let divValues = document.getElementById("mydiv") //divValues is also an array
let result = divValues.getElementsByTagName("h1")
for(let i = 0;i <= result.length-1 ; i++){
  result[i].innerHTML = "HTML"
}
let paragraph = document.getElementsByTagName("p")
for(let i = 0 ; i <= paragraph.length-1 ; i++){
  paragraph[i].innerHTML = "Islambad is capital of Pakistan"
}
console.log(paragraph.length)
