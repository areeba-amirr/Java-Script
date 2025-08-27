let element = document.getElementById("one")
console.log(element.innerHTML);
element.innerHTML = "Areeba Muhamma Aamir"
console.log(element.innerHTML)
let div = document.getElementsByClassName("first")
div[0].innerHTML = "Welcome";
div[1].innerHTML= "Back"
for(let i = 0; i <= div.length-1; i++){
  console.log(div[i].innerHTML)
}
let result = document.querySelectorAll("h3.you");
for(let i = 0;i <= result.length-1;i++){
  console.log(result[i].innerHTML)
}
for(let i = 0;i <= result.length-1;i++){
  result[i].innerHTML = "Website"
}
for(let i = 0;i <= result.length-1;i++){
  console.log(result[i].innerHTML)
}
