function keyCheck(event){
  console.log(event.key)
}
 window.addEventListener("keydown",keyCheck) //when key is pressed
 window.addEventListener("keyup",keyCheck)//after preesing key
window.addEventListener("keypress",keyCheck) //only work for printable keys
