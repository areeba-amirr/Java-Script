let element = document.querySelectorAll("h3.heading3")
for(let i = 0; i <= element.length-1 ;i++){
  // console.log(element[i].innerHTML)
  element[i].innerHTML = "JAVA"
}
let result = document.querySelector("h3.heading3") //pick the first one
result.innerHTML = "TailWind CSS"
let lorem = document.querySelectorAll("p.lorem")
for(let i = 0 ; i <= lorem.length-1 ; i ++){
  lorem[i].innerHTML = "Text changed successfully"
}
let value = document.querySelector("p.lorem") //pick the first one
value.innerHTML = "Picked First One"
