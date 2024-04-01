const resultEl = document.getElementById('result')
const lenghtEl = document.getElementById('lenght')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateEl.addEventListener('click', () => {
    const lenght = +lenghtEl.value   //+ for convert string to number
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked


})

function generatePassword(lower, upper, number, symbol, lenght) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    console.log(typesArr);

}

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

