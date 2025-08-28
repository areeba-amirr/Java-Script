let selectedElement = document.getElementById("mydiv");
let newElement = "<h1>insertAdjacentHTML via DOM</h1>" //this will insert text as well as tag
                                //  (position  ,  element)
selectedElement.insertAdjacentHTML("beforebegin",newElement)
 newElement = "<p>insertAdjacentHTML via DOM</p>"
selectedElement.insertAdjacentHTML("afterbegin",newElement)
 newElement = "<h4>insertAdjacentHTML via DOM</h4>"
selectedElement.insertAdjacentHTML("beforeend",newElement)
 newElement = "<h3>insertAdjacentHTML via DOM</h3>"
selectedElement.insertAdjacentHTML("afterend",newElement)

let mainElement = document.getElementById("para");
let newOne = "<h1>After Begin</h1>"
mainElement.insertAdjacentHTML("afterbegin",newOne)
newOne = "<h1>After End</h1>"
mainElement.insertAdjacentHTML("afterend",newOne)
newOne = "<h1>Before End</h1>"
mainElement.insertAdjacentHTML("beforeend",newOne)
newOne = "<h1>Before Begin</h1>"
mainElement.insertAdjacentHTML("beforebegin",newOne)


