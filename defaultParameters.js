function greet(name = "No Parameter"){
  console.log(name)
}
greet("Welcome");
greet();
let fun = function(no1 = 3 ,no2 = 4 ){
  return no1+no2
}
console.log(fun(8,9));
console.log(fun());
console.log(fun(7));
console.log(fun(0,8));
