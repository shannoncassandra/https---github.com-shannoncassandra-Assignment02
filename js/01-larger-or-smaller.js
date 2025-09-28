let numOne = prompt('Enter a number between 1 and 100')
let numTwo = prompt('Enter another number between 1 and 100')
if (numOne > numTwo) {
    document.write(numOne)
} else if (numTwo > numOne) {
    document.write(numTwo)
}
else {
    document.write(`You picked the same number, ${numOne}, for both prompts!`)
}