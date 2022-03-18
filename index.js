// Record for posterity- 
// Constant variable with name of myAge and a value of 25
const myAge= 25
// Moddable variable with the name of earlyYears and a value of 2, this value will change so is set to let variable
let earlyYears= 2

earlyYears= earlyYears * 10.5

// Modifiable variable
let laterYears= myAge - 2
laterYears*= 4
// Calculates the value of dog years accounted for by human later years and uses the multiplication assignment operator to multiply and assign in one step
let myAgeInDogYears= earlyYears + laterYears
console.log(myAgeInDogYears)
// This code for some reason, a variable that sets user input's name to all lowercase using the .toLowerCase() built-in method
const myName= 'Ester Stark'.toLowerCase()
// Forgot details, ${myName} uses tilde "``" around value to initiate, allows interpolation of variable into strings
console.log(`My name is ${myName}. ` + `I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)