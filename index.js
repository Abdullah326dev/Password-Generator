const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passGen = document.getElementById("passGen")
let PasswordEl = document.getElementById("password")
let PasswordEltwo = document.getElementById("password-two")
let pass = []

passGen.addEventListener("click", function() {
    pass.length = 0
    for (let i =0; i < 15; i++){
        let randomIndex = Math.floor( Math.random() * characters.length )
        let indexs = characters[randomIndex]
        pass.push(indexs)
    }
    PasswordEl.textContent = pass.join("")
    PasswordEltwo.textContent = pass.join("")
})