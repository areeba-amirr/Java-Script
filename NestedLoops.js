//Loop inside loop ->Nested Loop
//terminates the loop ->break
//terminatyes the iteration -> continue
//BREAK
for(let i = 0;i <= 10; i++){
  if(i == 6){
    break;
  }
  console.log(i)
}
//CONTINUE
for(let i = 0;i <= 10; i++){
  if(i == 6){
    continue;
  }
  console.log(i)
}
//NESTED LOOP
// for (let i = 0; i <= 3; i++) {
//   for (let j = 0; j <= 5; j++) {
//     document.writeln("i ="+ i + " "+"j = " + j+"<br>" );
//   }
// }
//Break in Nested Loop
// for (let i = 0; i <= 3; i++) {
//   for (let j = 0; j <= 5; j++) {
//     if(i == 2){
//       break;
//     }
//     document.writeln("i ="+ i + " "+"j = " + j+"<br>" );
//   }
// }
// for (let i = 0; i <= 3; i++) {
//   for (let j = 0; j <= 5; j++) {
//     if(i == 2 || j==2){
//       break;
//     }
//     document.writeln("i ="+ i + " "+"j = " + j+"<br>" );
//   }
// }
// for (let i = 0; i <= 3; i++) {
//   for (let j = 0; j <= 5; j++) {
//     if(i == 0 && j == 3){
//       break;
//     }
//     document.writeln("i ="+ i + " "+"j = " + j+"<br>" );
//   }
// }
//Continue in Nested Loop
// for (let i = 0; i <= 3; i++) {
//   for (let j = 0; j <= 5; j++) {
//     if(i == 0 && j == 3){
//       continue;
//     }
//     document.writeln("i ="+ i + " "+"j = " + j+"<br>" );
//   }
// }
// for (let i = 0; i <= 3; i++) {
//   for (let j = 0; j <= 5; j++) {
//     if(i == 2 || j==2){
//       continue;
//     }
//     document.writeln("i ="+ i + " "+"j = " + j+"<br>" );
//   }
// }
//break by label
//  outer: for (let i = 0; i <= 3; i++) {
//   for (let j = 0; j <= 5; j++) {
//     if(i == 2){
//       break outer; //now this will break outer loop
//     }
//     document.writeln("i = "+ i + " "+"j = " + j + "<br>" );
//   }
// }
//Countinue by label
// outer: for (let i = 0; i <= 3; i++) {
//   for (let j = 0; j <= 5; j++) {
//     if(i == 2){
//       continue outer; //now this will break outer loop
//     }
//     document.writeln("i = "+ i + " "+"j = " + j + "<br>" );
//   }
// }
//Patterns by nested loop
for(let i = 1; i <= 5;i++){
  for(let j = 1;j <= i; j++){
    document.writeln("*")
  }
  document.writeln("<br>")
}
for(let i = 5; i >= 1;i--){
  for(let j = 1;j <= i; j++){
    document.writeln("*")
  }
  document.writeln("<br>")
}
