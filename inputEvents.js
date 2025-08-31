let form = document.getElementById("me");
function myfocus(){
  form.style.background= "aqua"
}
function myblur(){
  form.style.background= "pink"
}
function myChange(){
  console.log(this.value)
}
function myInput(){
  console.log(this.value)
}
form.addEventListener("focus",myfocus);
form.addEventListener("blur",myblur);
form.addEventListener("change",myChange)
form.addEventListener("input",myInput)
