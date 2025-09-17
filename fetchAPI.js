function getData() {
  let url = "data.json";
  console.log("get data started");

  fetch(url)
    .then((response) => {
      //fetch method work asynchronously
      console.log("In first .then");
      return response.text(); //return text of response
      //it will return as a promise so to check that response we use then
    })
    .then((data) => {
      console.log("In first .then");
      console.log(data);
    });
}
console.log("Before Running");
getData();
console.log("After Running");

function getFile() {
  fetch("intro.txt")
    .then((response) => response.text())
    .then((data) => console.log(data));
}
getFile();

//post method
function postFile() {
  url = "https://dummy.restapiexample.com/api/v1/create";
  data = '{"name":"test","salary":"123","age":"23"}';

  para = {
    method: "post",
    headers: {
      "Content-Type": "application/json,",
    },
    body: data,
  };
  fetch(url, para)
    .then((response) => response.text())
    .then((data) => console.log(data));
}

function postData(){
 url = "https://dummy.restapiexample.com/api/v1/create";
  data = '{"name":"test","salary":"123","age":"23"}';

  param = {
    method : "post", //method name
    headers :{
      "Content-Type" : "application/json"
    },
    body : data,
  }

  fetch(url,param).then((response) => response.text())
  .then((data) => console.log(data))
}
