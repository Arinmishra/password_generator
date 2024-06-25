const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let leftEl = document.getElementById("lefttext")
let rightEl = document.getElementById("righttext")


let passlimit = 15

function randompass(){
    let password = ""
    for(let i = 0; i < passlimit; i++){
        let randompass = Math.floor(Math.random() * characters.length)
        password += characters[randompass]
    }
    return password
}

function generate(){
    leftEl.textContent = randompass()
    rightEl.textContent = randompass()
}

const tocopy = document.querySelector(".textgenerator");

tocopy.addEventListener("click", function () {
    document.execCommand("copy");
});
tocopy.addEventListener("copy", function (event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", tocopy.textContent);
    }
});