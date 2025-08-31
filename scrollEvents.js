window.addEventListener("scroll",function(){
  console.log("Scroll Event Listened!!!")
})
window.addEventListener("wheel",function(event){  //mouse wheel
  if(event.deltaY > 0){   //delat means change
    //event as a parameter is object
    console.log("Scrolling Down")
  }
  else if(event.deltaX > 0){
    console.log("Scrolling Right")
  }
  else if(event.deltaY < 0){
    console.log("Scrolling Up")
  }
  else if(event.deltaX < 0){
    console.log("Scrolling Left")
  }
})
window.addEventListener("scroll",function(){
  if(this.window.pageYOffset > 250){  //scroll vertically
    //returns in pixels
    this.document.body.style.background = " pink"
  }
  else if(this.window.pageYOffset == 0){
    this.document.body.style.background = "purple"
  }
  else {
    this.document.body.style.background = "white"
  }
})
// window.addEventListener("scroll",function(){
//   if(this.window.pageXOffset > 250){  //scroll horizontally
//     //returns in pixels
//     this.document.body.style.background = "aqua"
//   }
//   else if(this.window.pageXOffset == 0){
//     this.document.body.style.background = "yello"
//   }
//   else {
//     this.document.body.style.background = "red"
//   }
// })
