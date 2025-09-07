let promise = new Promise((resolve,reject) => {
  console.log("Pending Promise.....")
  // setTimeout(()=> {
  //   console.log("rejected")
  //   reject("error")
  // },2000)
  setTimeout(()=>{
    // console.log("Fullfilled Promise")
    resolve(true)
  },5000)
})
// console.log(promise)
promise.then((value)=>{
  console.log(value)
})
let p1 = new Promise((resolve,reject)=> {
  console.log("Pending Promise.....")
  setTimeout(()=>{
    // console.log("Reject Promise")
    reject("error")
  },5000)
})
console.log(promise,p1)
// p1.then((value)=>{
//   console.log(value)
// },(error)=>{
//   console.log("Error in Promise 2")
// })
//best practice for error
p1.catch((error)=>{
  console.log("error caught")
})


let promise2 = new Promise((resolve,reject) => {
  console.log("Promise is pending")
  setTimeout(()=>{
    // resolve("Succeed")
    reject("Error in resolving promise")
  },7000)
})
// promise2.then((value)=>{
//   console.log(value)
// })
promise2.catch((error)=>{
  console.log(error)
})
