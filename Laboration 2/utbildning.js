const cvUrl = "cv.json"; //Hämtar json.fil
let tempText = "";
let skola = value[0];
let utbildning = "";
let datum = "";
let utbInfo = "";
async function getJson () {
    const data = await fetch(cvUrl); //Text format
    const portfolio = await data.json(); //Objekt format
    for(let i = 0; i < portfolio.length; i++){
        let obj = portfolio[i];
        for(let key in obj){
            let value = obj[key];
            tempText += "<br/>" + value;
            if(key === "skolNamn"){
                
            } 
        }
        document.getElementById("skola1").innerHTML = skola;
    }
}
getJson();