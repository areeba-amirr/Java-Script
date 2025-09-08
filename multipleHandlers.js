// let p1 = new Promise((resolve,reject) =>{
//   console.log("Proomise is pending")
//   setTimeout(()=>{
//     resolve("resolved")
//   },3000)
// })
// p1.then((value)=>{
//   console.log(value)
// })
// p1.then(()=>{
//   console.log("handler 2")
// })
// p1.then(()=>{
//   console.log("handler 3")
// })

let Promise1 = new Promise((resolve,reject) =>{
  console.log("promis is not resolved yet.......")
  setTimeout(()=>{
    resolve(1);
  },5000)
})
Promise1.then((value)=>{
  console.log(value*2)
})
Promise1.then((value)=>{
  console.log(value*3)
})
Promise1.then((value)=>{
  console.log(value*4)
})
Promise1.then((value)=>{
  console.log(value*5)
})
