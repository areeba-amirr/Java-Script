// let p1 = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve("Promise 1 Resolved")
//   }, 3000);
// })
// p1.then((value)=>{
//   console.log(value)
//   let p2 = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//       resolve("Promise 2 resolved")
//     },3000)
//   });
//   return p2
// }).then((value) =>{
//   console.log(value)
// })
// console.log(p1)

let asynFun1 = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("1st Promise")
      resolve("Resolved Successfully")
  },4000);
  })
}
let asynFun2 = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("2nd Promise")
      resolve("Resolved Successfully")
  },4000);
  })
}
let asynFun3 = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("3rd Promise")
      resolve("Resolved Successfully")
  },4000);
  })
}
let asynFun4 = () => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("4th Promise")
      resolve("Resolved Successfully")
  },4000);
  })
}
// promise chaining
// let pr1 = asynFun1();
// pr1.then((val)=>{
//   console.log(val)
//   let pr2 = asynFun2();
//   pr2.then((val)=>{
//     console.log(val)
//     let pr3 = asynFun3();
//     pr3.then((val) =>{
//       console.log(val)
//       let pr4 = asynFun4();
//     pr4.then((val) =>{
//       console.log(val)
//     })
//     })
//   })
// })
//better approch for parallel execution
function getData(id){
  return new Promise((resolve,reject )=> {
    console.log("Promise Pending")
    setTimeout(()=>{
      resolve(id)
    },3000)
  })
}
// let p1 = getData();
// p1.then((val)=>{
//   console.log(val)
//   return val*2
// }).then((val)=>{
//   console.log(val);
//   return val*2;
// }).then((val) =>{
//   console.log(val);
//   return val*2;
// }).then((val) => {
//   console.log(val)
// })

//To apply timeout to every id
getData(2).then((val) =>{
  console.log(val)
  return getData(3);
}).then((val)=>{
  console.log(val)
  return getData(4)
}).then((val)=>{
  console.log(val)
})
// console.log(getData())
