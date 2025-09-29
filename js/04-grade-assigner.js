let pickNum = prompt('Pick a  number between 1 and 100')

if (pickNum >=90) {
    document.write('You received an A')
} else if (pickNum >=80 && pickNum <90) {
    document.write('You received a B')
} else if (pickNum >=70 && pickNum <80) {
    document.write('You received a C')
} else if (pickNum >=60 && pickNum <70) {
    document.write('You received a D')
}
else {
    document.write('You received an F')
}