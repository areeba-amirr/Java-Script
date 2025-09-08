let p1 = new Promise((resolve,reject) =>{
  setTimeout(() => {
    resolve(1)
  }, 3000);
})
let p2 = new Promise((resolve,reject) =>{
  setTimeout(() => {
    resolve(2)
    // reject("Error in p2")
  }, 1000);
})
let p3 = new Promise((resolve,reject) =>{
  setTimeout(() => {
    resolve(3)
  }, 5000);
})
// p1.then((value)=>{
// console.log(value)
// })
// p2.then((value)=>{
// console.log(value)
// })
// p3.then((value)=>{
// console.log(value)
// })
//promise.all
let pAPI = Promise.all([p1,p2,p3]) //returns an array
pAPI.then((value)=>{
  console.log(value)
  // console.log(value.length)
})
//promise.allSettled
let pAPIS = Promise.allSettled([p1,p2,p3]) //returns an array
pAPIS.then((value)=>{
  console.log(value)
  // console.log(value.length)
})
// promise.race
let pAPIR = Promise.race([p1,p2,p3]) //returns an array
pAPIR.then((value)=>{
  console.log(value)
  // console.log(value.length)
})
// promise.any
let pAPIA = Promise.any([p1,p2,p3]) //returns an array
pAPIA.then((value)=>{
  console.log(value)
  // console.log(value.length)
})
// promise.resolve
let pAPIRes = Promise.resolve(12) //returns an array
pAPIRes.then((value)=>{
  console.log(value)
  // console.log(value.length)
})
// promise.reject
let pAPIRej = Promise.reject("errorrrrr") //returns an array
pAPIRej.then((value)=>{
  console.log(value)
  // console.log(value.length)
})
