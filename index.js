const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()"; 

let passGen = document.getElementById("passGen")
let PasswordEl = document.getElementById("password")
let PasswordEltwo = document.getElementById("password-two")
let userInput = document.getElementById("userInput")
let warrning = document.getElementById("warrning")
let toggleEl = document.getElementById("toggle")

let showWarrning = false
let pass = []
let passtwo = []

function ToggleHander(){
    let ischecked = event.target.checked

    if (ischecked){
        console.log("true")
    }else if(!ischecked){
        console.log("false")
    }
}

function CopyClipboard() {
    navigator.clipboard.writeText(PasswordEl.textContent)
}

function warningShower() {
    if (showWarrning === true) {
        warrning.style.display = "block"
    } else {
        warrning.style.display = "none"
    }
}

function passwordLengthWarning() {
    let passwordLength = parseInt(userInput.value, 10)

    if (passwordLength <= 0) {
        warrning.textContent = "Really bro you will add 0??"
        showWarrning = true
        warningShower()
        return
    } else if (passwordLength > 16) {
        warrning.textContent = "Bigger is Better? not here!"
        showWarrning = true
        warningShower()
        return
    } 
    else {
        showWarrning = false
        warningShower()
    }
}

function passwordGen() {
    passwordLengthWarning()
    if (showWarrning === true) {
        return
    }
    pass.length = 0
    passtwo.length = 0

    let passwordLength = parseInt(userInput.value, 10)

    for (let i = 0; i < passwordLength; i++) {

        let randomIndex = Math.floor(Math.random() * characters.length)
        let randomIndexTwo = Math.floor(Math.random() * characters.length)

        let indexs = characters[randomIndex]
        let indexsTwo = characters[randomIndexTwo]

        pass.push(indexs)
        passtwo.push(indexsTwo)

    }

    PasswordEl.textContent = pass.join("")
    PasswordEltwo.textContent = passtwo.join("")
}


// event Listeners
passGen.addEventListener("click", function () {
    passwordGen()
})
// toggleEl.addEventListener("change", function(){
//     ToggleHander()
// })

PasswordEl.addEventListener("click", function () {
    CopyClipboard()
    PasswordEl.textContent = "Copied!"
    console.log("copied")
})
PasswordEltwo.addEventListener("click", function () {
    CopyClipboard()
    PasswordEltwo.textContent = "Copied!"
})