document.cookie = "item=phone"; //create cookie
document.cookie = "item=phone,headphones" //update cookie
let cook = document.cookie;
console.log(cook) //read a cookie
document.cookie = "item=phone,headphones; expires= Fri,5 Sep 2025 12:00:00 UTC" //delete a cookie

document.cookie = "item=bags"; //create cookie
document.cookie = "item=charger" //update cookie
console.log(document.cookie) //read cookie
document.cookie = "item=charger;  expires= Wed, 3 Sep 2025 11:00:00 UTC" //delete cookie

