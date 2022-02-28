const reactContentTitel = document.getElementById("projekt-titel")
const reactContentRoot = document.getElementById("root")
const gitUrl = "https://api.github.com/users/mabl0200/repos";

ReactDOM.render("Laddar projekt från Git...", reactContentRoot)
const timeout = setTimeout(GetProjectsFromGit, 3000)

function GetProjectsFromGit(){
    fetch(gitUrl)
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.length; i++){
            ReactDOM.render(data[i].name, reactContentTitel)
            ReactDOM.render(data[i].description, reactContentRoot)
        }
    })
}

