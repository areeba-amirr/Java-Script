//Array inside array
let subject = [
  ["Maths","Algebra","Trigonometry"], //subject[0][1]
  ["Computer","Java","JavaScript"],
  ["Biology","Zoology","Botany"]
]
console.log(subject)
for(let i = 0;i <= subject.length-1;i++){
  for(let j = 0;j <= subject[i].length-1;j++){
    console.log("["+i+"]"+"["+j+"]"+subject[i][j])
  }
  console.log("\n")
}
console.log(subject[0][1])
console.log(subject[2][1])
console.log(subject[1][0])
//User Input
let arr = []
// for(let i = 0;i <= 5;i++){
//   arr[i]=[]
//   for(let j = 0 ;j <= 5;j++){
//     arr[i][j]= prompt("Enter Value at"+"["+i+"]"+"["+j+"]")
//   }
// }
// for(let i = 0;i <=arr.length-1;i++){
//   for(let j = 0;j <= arr[i].length-1;j++){
//     console.log("["+i+"]"+"["+j+"]"+arr[i][j])
//   }
//   console.log("\n")
// }
//User input 1D array
for(let i = 0;i <= 5;i++){
   arr[i]= prompt("Enter Value at"+"["+i+"]")
}
for(let i = 0;i <= 5;i++){
   console.log("["+i+"]"+arr[i])
}
