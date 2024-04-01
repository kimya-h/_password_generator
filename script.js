//for random lower case letter a-z and 97 is a charcode
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

//for random upper case letter A_z and 65 is A charcode
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

//for random number 10-0 and 48 is 0 charcode
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

