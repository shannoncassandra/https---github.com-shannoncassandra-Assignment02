let coinFlip = Math.round(Math.random())

let choice = prompt('Do you want heads or tails?')

let resOne


if (coinFlip === 1) {
    resOne = 'heads'
}
else if (coinFlip === 0) {
    resOne = 'tails'
}


if (resOne === choice) {
    document.write(`The flip was ${resOne} and you chose ${choice} ...you win!`)
}
else {
    document.write(`The flip was ${resOne} and you chose ${choice} ...you lose!`)
}