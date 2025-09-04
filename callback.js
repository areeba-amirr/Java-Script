function greet(){
  return "welcome"
}
function hello(){
  return "Hello";
}
function add(no1,no2,call){ //call is a call back function
  return no1+no2 +" "+call();
}
console.log(add(5,8,greet))//greet is a function
console.log(add(4,6,hello))
function greetings(){
  console.log("Helloooww")
}
function power(no, call){
  console.log(no*no);
  call();
}
power(3,greetings)

//for anonymous function
power(5,function(){
  console.log("Anonymous Function")
})
