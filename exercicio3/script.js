function numSoma (numUsuario,numUsuario2){
    return numUsuario + numUsuario2
}
function numSub (numUsuario,numUsuario2){
    return numUsuario - numUsuario2
}
function numMult (numUsuario,numUsuario2){
    return numUsuario * numUsuario2
}
function numDiv (numUsuario,numUsuario2){
    return numUsuario / numUsuario2
}

const numUsuario = Number(prompt("diga um numero"))
const numUsuario2 = Number(prompt("diga outro numero"))
console.log(numSoma(numUsuario, numUsuario2))
console.log(numSub(numUsuario, numUsuario2))
console.log(numMult(numUsuario, numUsuario2))
console.log(numDiv(numUsuario, numUsuario2))
