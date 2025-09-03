function add(...no){
  let sum = 0;
  for(let i = 0 ; i <= no.length-1; i++){
    sum+= no[i]
  }
  console.log(no)// Array
  return sum;
}
console.log(add(2,3))

function info(name,...marks){
  let total = 0;
  for(let i = 0; i <= marks.length-1; i++){
    total += marks[i]
  }
  return name +":"+total
}
console.log(info("Sana",80,80,90,50,70,89))
console.log(info("Areeba",90,80,88,90,78,89))
