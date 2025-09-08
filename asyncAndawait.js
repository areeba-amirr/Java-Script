async function say(){
  let p1 = new Promise((res,rej) => {
    setTimeout(() => {
      res("Resolved")
    }, 3000);
  })
  console.log(p1)
  // p1.then((value)=>{
  //   console.log(value)
  // })

  let a = await p1;
  console.log(a)
}
say()

async function asyncfun(){
  let p2 = new Promise((res,rej)=>{
    setTimeout(() => {
      res(4)
    }, 5000);
  })
  let val = await p2
  console.log("I am resolved")
  console.log(val*4)
}
asyncfun()
