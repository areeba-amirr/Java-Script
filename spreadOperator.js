let arr1 = [1,2,3,4];
let arr2 = [6,7,8,9,...arr1];
for (let element of arr2){
  console.log(element)
}
console.log(arr2)
let ar1 = ["Areeba",18,2006];
let ar2 = ["Haris",20,2004];
let ar3 = ["Hasnain",13,2011,...ar1,...ar2];
console.log(ar3)

let no = [1,2,3,4,5,6,7,8,9,...arr2,...arr1];
let sum = 0;
for(let i = 0;i <= no.length-1 ; i++){
  sum += no[i];
}
console.log(no);
console.log(sum)
