function loadData(){
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      console.log(this.response)
    }
  }
  xhttp.open("GET","text.txt",true)
  xhttp.send();
}

function data(){
  let http = new XMLHttpRequest();
  http.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      // console.log(this.response)
      document.getElementById("heading").innerHTML=this.response;
    }
   else if(this.readyState == 4 && this.status == 404){
      // console.log(this.response)
      document.getElementById("heading").innerHTML=this.response;
    }
  }
  // http.open("GET","intro.txt",true); //to initialize request
  http.open("GET","data.json",true); //to load json data
  http.send(); //send request

}

function load(){
  let xhttps = new XMLHttpRequest();
  xhttps.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      document.getElementsByTagName("p")[0].innerHTML = this.response;
    }
    if(this.readyState == 4 && this.status == 404){
      document.getElementsByTagName("p")[0].innerHTML ="File Not Found";
    }
  }
  // xhttps.open("GET","lorem.txt",false);
  xhttps.open("GET","lorem.txt",true);

  xhttps.send();
}
