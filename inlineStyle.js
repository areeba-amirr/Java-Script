let selectedElement = document.getElementById("main");
//1st Method
// selectedElement.style.cssText = "background-color : aqua ; color : pink";
selectedElement.style.cssText += "background-color : aqua ; border : solid 3px black" //to concatenate it with html style ,this wont overwite
//2nd Method
selectedElement.setAttribute("style","background-color :purple ; color : green")
//3td Method
// selectedElement.style.backgroundColor = "blue";


 document.body.style.cssText = "background-color : pink "

 let me = document.getElementById("me");
 me.style.cssText = "list-style : none; background-color : blue ; color : orange; border : solid 4px green";
