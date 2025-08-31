let anchor = document.getElementById("anchor")
anchor.addEventListener("click",function(event){
  console.log("link clicked")
  event.preventDefault();
})
let form = document.getElementById("myForm");
form.addEventListener("submit",function(event){
  event.preventDefault();
})
