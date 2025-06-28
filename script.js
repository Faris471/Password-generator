let passwordOne = document.getElementById("output-one")
let passwordTwo = document.getElementById("output-two")
let passwordSl = document.getElementById("password-strength")
let sliderValue = document.getElementById("slider")
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let randOne = Math.floor(Math.random()*characters.length)
let randTwo = Math.floor(Math.random()*characters.length)

function generate() {
    let passwordLength = parseInt(sliderValue.value)
    passwordOne.textContent = ""
    passwordTwo.textContent = ""

    for(let i = 0 ; i < passwordLength ; i++) {
        randOne = Math.floor(Math.random()*characters.length)
        randTwo = Math.floor(Math.random()*characters.length)

        passwordOne.textContent += characters[randOne]
        passwordTwo.textContent += characters[randTwo]
    }
    checkStrength(passwordOne.textContent)
}

function checkStrength(password) {
    let haveCapitalLetters = false
    let haveSmallLetters = false
    let haveSign = false
    let result = ""
    let modi = Array.from(password)
    for(let i = 0 ; i < modi.length ; i++) {
        for(let j = 0 ; j < characters.length ; j++) {
            if((modi[i] == characters[j]) && j < 26) {
                haveCapitalLetters = true
                break
            }
            if((modi[i] == characters[j]) && (j < 52 && j >= 26)) {
                haveSmallLetters = true
                break
            }
            if((modi[i]==characters[j]) && j >= 52) {
                haveSign = true
                break
            }
        }
    }
    if (haveCapitalLetters && haveSmallLetters && haveSign) {
    result = "Very Strong Password"
    } else if (haveCapitalLetters && haveSmallLetters && !haveSign) {
        result = "Strong Password"
    } else if (haveCapitalLetters && !haveSmallLetters && haveSign) {
        result = "Strong but missing lowercase letters"
    } else if (!haveCapitalLetters && haveSmallLetters && haveSign) {
        result = "Strong but missing capital letters"
    } else if (haveCapitalLetters && !haveSmallLetters && !haveSign) {
        result = "Weak – only capital letters"
    } else if (!haveCapitalLetters && haveSmallLetters && !haveSign) {
        result = "Weak – only small letters"
    } else if (!haveCapitalLetters && !haveSmallLetters && haveSign) {
        result = "Weak – only symbols"
    } else {
        result = "Very Weak – needs capital, small letters, and symbols"
    }
    passwordSl.textContent = result
}