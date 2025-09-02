console.log(location.href)
console.log(location.pathname)
console.log(location.protocol)


//redirtect
function go(){
  // window.location = "https://www.google.com"
  // //or
  // location.href = "https://www.google.com"
  // //or
  location.assign("https://www.google.com")
  // //or
  // location.replace("https://www.google.com")
}

//reload webpage
function reload(){
  location.reload();
}
function show(){
  location.assign("https://www.youtube.com")
}
