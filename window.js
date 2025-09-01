//inner width
console.log(window.innerWidth);
// inner Height
console.log(window.innerHeight);
//outer width
console.log(window.outerWidth);
//outer height
console.log(window.outerHeight);

//open new window
// let btn = document.getElementById("btn");
let url = "https://www.facebook.com/";
let features = "height=500,width=500";
let openWindow;
btn.addEventListener("click", function () {
  //(url,name,features)
  openWindow = window.open(url, "web", features);
  console.log("openWindow:", openWindow);
});
// same popup different url
let btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function () {
  //(url,name,features)
  window.open("https://www.w3schools.com/js/default.asp", "web", features);
});

// //close opened window
let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function () {
  openWindow.close();
});
