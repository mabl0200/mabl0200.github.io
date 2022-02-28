//Hämtar cv från json
const cvLink = "cv.json";

async function getJson() {
    const response = await fetch(cvLink)
    const data = await response.json()
    for(let i = 0; i < data.length; i++){
        
        document.getElementById("namn"+ i).innerHTML = data[i].namn;
        document.getElementById("sysselsättning" + i).innerHTML = data[i].sysselsättning;
        document.getElementById("datum" + i).innerHTML = data[i].datum;
        document.getElementById("info" + i).innerHTML = data[i].info;
    }
}
getJson();

