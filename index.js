const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const generatePw = document.getElementById("generate-pw")
const numOfCharacters = characters.length
const password_1 = document.getElementById("pw-1")
const password_2 = document.getElementById("pw-2")

function randomPassword() {
    let string = ""
    for (let i = 0; i < 15; i++) {
        string += characters[Math.floor(Math.random() * numOfCharacters)]
    }
    return string
}

generatePw.addEventListener("click", function() {
    password_1.innerHTML = randomPassword()
    password_2.innerHTML = randomPassword()
})
