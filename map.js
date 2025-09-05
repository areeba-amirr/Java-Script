//Without Map Function
let arr = [2,3,4,5,6]
let result = [];
for(let i = 0; i <= arr.length-1; i++){
  result[i] = arr[i]*2+10
}
for(let value of result){
  console.log(value)
}
//With Map function
let result1 = arr.map(function(num){
  return num*2+10;
})
console.log(result1)
let array = [1,2,3,4,5,6,7,8,9,10,11,12]
//using map with array
let even = array.map((num) => num%2==0) //returns boolean value on the basis of condition
console.log(even)

let numbres = [3,4,3,4,3,4,3,4,3,4,3];
let double = numbres.map((no) => no*no)
console.log(double)
