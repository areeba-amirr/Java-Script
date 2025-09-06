let arr = [1,2,3,4,5,6,7,8];
let result = arr.reduce((val1,val2) => val1+val2)
console.log(result)
// 1+2 = 3
// 3+3 = 6
// 6+4 = 10
// 10+5 = 15
// 15+6 = 21
// 21+7 = 28
// 28+8 = 36
let multi = arr.reduce(function(val1,val2){
  return val1*val2
})
console.log(multi)

function sum(val1,val2){
  return val1+val2;
}
let add = arr.reduce(sum);
console.log(add)

let array = [4,44,444,4444,44444];
function addition (val1,val2){
  return val1+val2
}
let totalSum = array.reduce(addition)
console.log(totalSum)
