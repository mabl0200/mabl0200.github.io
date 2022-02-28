//Funktion som ändrar bakgrundsfärgen
function changeBackgroundColor(color){
    document.body.style.background = color;
}

//Funktion som sparar tangentsbordstryck i en string-variabel(data) och ser om det stämmer med valt ord 
var data = ""
function checkKeyPress(keyPress){
    console.log(keyPress.key)
    data += keyPress.key
    if(data === "what"){
        alert("\“I have not failed. I've just found 10,000 ways that won't work.\” - Thomas A. Edison")
    }
}
